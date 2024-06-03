const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB Connection Error'))

const resetCollections = async () => {
  try {
      await User.deleteMany({})
      console.log('All collection reset');
  } catch (error) {
      console.error('Error resetting collections:', error);
  }
}

const main = async () => {
  await resetCollections()

  const users = [

  ]

  await User.insertMany(users)
  console.log('Created User')
}

const run = async () => {
  await main()
  db.close()
}

run()