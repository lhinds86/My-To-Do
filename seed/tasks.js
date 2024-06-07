const db = require('../db')
const { Task } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB Connection Error'))

// const resetCollections = async () => {
//   try {
//       await Task.deleteMany({})
//       console.log('All collection reset');
//   } catch (error) {
//       console.error('Error resetting collections:', error);
//   }
// }

const main = async () => {
  // await resetCollections()

  const tasks = [
    {
      name: "Wake UP",
      isComplete: false,
      isActive: false,
      due_date: Date(),
      created_at: Date.now()
    }
  ]

  await Task.insertMany(tasks)
  console.log('Created Task')
}

const run = async () => {
  await main()
  db.close()
}

run()