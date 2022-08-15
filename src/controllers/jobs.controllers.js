import { v4 } from 'uuid'
import { getConnection } from '../db.js'

export const getJobs = (req, res) => {
  const jobs = getConnection().data.jobs
  res.json(jobs)
};

export const createJobs = async (req, res) => {
  const newJob = {
    id: v4(),
    name: req.body.name,
    description: req.body.description
  }
  try {
    const db = getConnection()
    db.data.jobs.push(newJob)
    await db.write()
    res.json(newJob)
  } catch (error) {
    return res.status(500).send({message: error.message})
  }
};

export const getJob = (req, res) => {
  const jobFound = getConnection().data.jobs.find(job => job.id === req.params.id)
  if (!jobFound) return res.sendStatus(404)
  res.json(jobFound)
};

export const updateJobs = async (req, res) => {
  const db = getConnection()
  const jobFound = db.data.jobs.find((j) => j.id === req.params.id) 
  if (!jobFound) return res.sendStatus(404)

  jobFound.name = req.body.name
  jobFound.description = req.body.description

  db.data.jobs.map(j => j.id === req.params.id ? jobFound : j)

  await db.write()

  res.json(jobFound)
};

export const deleteJobs = async (req, res) => {
  
  const db = getConnection()
  const jobFound = db.data.jobs.find((j) => j.id === req.params.id) 
  if (!jobFound) return res.sendStatus(404)

  const newJob = db.data.jobs.filter(j => j.id !== req.params.id)
  db.data.jobs = newJob 

  await db.write()

  res.json(jobFound)
};

export const countJobs = (req, res) => {
  const totalJobs = getConnection().data.jobs.length
  res.json(totalJobs)
};
