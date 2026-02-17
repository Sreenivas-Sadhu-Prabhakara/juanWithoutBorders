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
  isActive: boolean
  applications: Application[]
}

interface Application {
  id: string
  status: string
  user: {
    name: string
    email: string
  }
  createdAt: string
}

export default function EmployerDashboard() {
  const { data: session } = useSession()
  const [jobs, setJobs] = useState<Job[]>([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: 'FULL_TIME',
    salary: '',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs/my-jobs')
      const data = await response.json()
      setJobs(data)
    } catch (error) {
      console.error('Error fetching jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  const createJob = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowCreateForm(false)
        setFormData({ title: '', description: '', location: '', type: 'FULL_TIME', salary: '' })
        fetchJobs()
      } else {
        alert('Failed to create job')
      }
    } catch (error) {
      console.error('Error creating job:', error)
      alert('Error creating job')
    }
  }

  const updateApplicationStatus = async (applicationId: string, status: string) => {
    try {
      const response = await fetch(`/api/applications/${applicationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        fetchJobs()
      } else {
        alert('Failed to update application')
      }
    } catch (error) {
      console.error('Error updating application:', error)
      alert('Error updating application')
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Job Postings</h2>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showCreateForm ? 'Cancel' : 'Create Job'}
        </button>
      </div>

      {showCreateForm && (
        <form onSubmit={createJob} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="FULL_TIME">Full Time</option>
              <option value="PART_TIME">Part Time</option>
              <option value="CONTRACT">Contract</option>
              <option value="INTERNSHIP">Internship</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Salary (optional)</label>
            <input
              type="text"
              value={formData.salary}
              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Create Job
          </button>
        </form>
      )}

      <div className="grid gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location: {job.location}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Type: {job.type}</p>
                {job.salary && <p className="text-sm text-gray-500 dark:text-gray-400">Salary: {job.salary}</p>}
              </div>
              <span className={`px-2 py-1 rounded text-sm ${job.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {job.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Applications ({job.applications.length})</h4>
              <div className="space-y-2">
                {job.applications.map((application) => (
                  <div key={application.id} className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{application.user.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{application.user.email}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Applied: {new Date(application.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="flex gap-2">
                      <select
                        value={application.status}
                        onChange={(e) => updateApplicationStatus(application.id, e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 text-sm dark:bg-gray-600 dark:border-gray-500"
                      >
                        <option value="PENDING">Pending</option>
                        <option value="REVIEWED">Reviewed</option>
                        <option value="ACCEPTED">Accepted</option>
                        <option value="REJECTED">Rejected</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
