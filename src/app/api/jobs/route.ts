import { authOptions } from '@/lib/auth'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

// GET /api/jobs - Get all active jobs
export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      where: { isActive: true },
      include: {
        user: {
          select: {
            name: true,
            companyName: true,
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    const formattedJobs = jobs.map(job => ({
      id: job.id,
      title: job.title,
      description: job.description,
      location: job.location,
      type: job.type,
      salary: job.salary,
      companyName: job.user.companyName || job.user.name,
    }))

    return NextResponse.json(formattedJobs)
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/jobs - Create a new job (employers only)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || (session.user.role !== 'COMPANY' && session.user.role !== 'INSTITUTION')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { title, description, location, type, salary } = await request.json()

    if (!title || !description || !location || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const job = await prisma.job.create({
      data: {
        title,
        description,
        location,
        type,
        salary,
        userId: session.user.id,
      }
    })

    return NextResponse.json(job)
  } catch (error) {
    console.error('Error creating job:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
