import { authOptions } from '@/lib/auth'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

// GET /api/jobs/my-jobs - Get jobs posted by the current user
export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session || (session.user.role !== 'COMPANY' && session.user.role !== 'INSTITUTION')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const jobs = await prisma.job.findMany({
      where: { userId: session.user.id },
      include: {
        applications: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              }
            }
          },
          orderBy: { createdAt: 'desc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(jobs)
  } catch (error) {
    console.error('Error fetching user jobs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
