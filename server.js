const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')

const {Task} = require('./models')
const {Note} = require('./models')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.get('/task', async (req, res) => {
  const task = await Task.find({})
  res.send(task)
})

app.post('/task', async (req, res) => {


  try {
    const newTask = await Task.create(req.body.ul.li);
    res.status(201).json({ message: 'Task created successfully', newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})