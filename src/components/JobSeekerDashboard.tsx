'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

interface Job {
  id: string
  title: string
  description: string
  location: string
  type: string
  salary?: string
  companyName?: string
}

interface Application {
  id: string
  status: string
  job: Job
  createdAt: string
}

export default function JobSeekerDashboard() {
  const { data: session } = useSession()
  const [jobs, setJobs] = useState<Job[]>([])
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchJobs()
    fetchApplications()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs')
      const data = await response.json()
      setJobs(data)
    } catch (error) {
      console.error('Error fetching jobs:', error)
    }
  }

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/applications')
      const data = await response.json()
      setApplications(data)
    } catch (error) {
      console.error('Error fetching applications:', error)
    } finally {
      setLoading(false)
    }
  }

  const applyToJob = async (jobId: string) => {
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobId }),
      })

      if (response.ok) {
        fetchApplications() // Refresh applications
        alert('Application submitted successfully!')
      } else {
        alert('Failed to apply')
      }
    } catch (error) {
      console.error('Error applying:', error)
      alert('Error applying to job')
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Available Jobs</h2>
        <div className="grid gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Location: {job.location}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Type: {job.type}</p>
              {job.salary && <p className="text-sm text-gray-500 dark:text-gray-400">Salary: {job.salary}</p>}
              <button
                onClick={() => applyToJob(job.id)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Applications</h2>
        <div className="grid gap-4">
          {applications.map((application) => (
            <div key={application.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{application.job.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">Status: {application.status}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Applied on: {new Date(application.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
