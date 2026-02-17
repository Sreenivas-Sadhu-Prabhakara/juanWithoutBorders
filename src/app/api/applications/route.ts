import { authOptions } from '@/lib/auth'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

// GET /api/applications - Get applications for the current user
export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const applications = await prisma.application.findMany({
      where: { userId: session.user.id },
      include: {
        job: {
          select: {
            title: true,
            description: true,
            location: true,
            type: true,
            salary: true,
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(applications)
  } catch (error) {
    console.error('Error fetching applications:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/applications - Create a new application
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'JOBSEEKER') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { jobId, coverLetter, resumeUrl } = await request.json()

    if (!jobId) {
      return NextResponse.json({ error: 'Job ID is required' }, { status: 400 })
    }

    // Check if user already applied
    const existingApplication = await prisma.application.findUnique({
      where: {
        jobId_userId: {
          jobId,
          userId: session.user.id,
        }
      }
    })

    if (existingApplication) {
      return NextResponse.json({ error: 'Already applied to this job' }, { status: 400 })
    }

    const application = await prisma.application.create({
      data: {
        jobId,
        userId: session.user.id,
        coverLetter,
        resumeUrl,
      }
    })

    return NextResponse.json(application)
  } catch (error) {
    console.error('Error creating application:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
