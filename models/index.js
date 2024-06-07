const mongoose = require('mongoose')
const userSchema = require('./user')
const noteSchema = require('./note')
const taskSchema = require('./task')

const User = mongoose.model('User', userSchema)
const Note = mongoose.model('Note', noteSchema)
const Task = mongoose.model('Task', taskSchema)

module.exports = {
  User,
  Note,
  Task
}