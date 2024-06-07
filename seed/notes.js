const db = require('../db')
const { Note } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const resetCollections = async () => {
  try {
    await Note.deleteMany({})
    console.log('All collection reset')
  } catch (error) {
    console.error('Error resetting collections:', error)
  }
}

const main = async () => {
  await resetCollections()

  const notes = []

  await Note.insertMany(notes)
  console.log('Created Projects!')
}

const run = async () => {
  await main()
  db.close()
}

run()