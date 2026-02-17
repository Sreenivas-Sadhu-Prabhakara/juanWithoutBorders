import { authOptions } from '@/lib/auth'
import EmployerDashboard from '@/components/EmployerDashboard'
import JobSeekerDashboard from '@/components/JobSeekerDashboard'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  const role = session.user.role

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Welcome back, {session.user.name}!
        </h1>

        {role === 'JOBSEEKER' && <JobSeekerDashboard />}
        {(role === 'COMPANY' || role === 'INSTITUTION') && <EmployerDashboard />}
      </div>
    </div>
  )
}
