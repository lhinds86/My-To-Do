const db = require('../db')
const { Project } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const resetCollections = async () => {
  try {
    await Project.deleteMany({})
    console.log('All collection reset')
  } catch (error) {
    console.error('Error resetting collections:', error)
  }
}

const main = async () => {
  await resetCollections()

  const projects = []

  await Project.insertMany(projects)
  console.log('Created Projects!')
}

const run = async () => {
  await main()
  db.close()
}

run()