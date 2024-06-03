const mongoose = require('mongoose')

const userSchema = require('./user')
const projectSchema = require('./project')
const taskSchema = require('/task')

const User = mongoose.model('User', userSchema)
const Project = mongoose.model('Project', projectSchema)
const Task = mongoose.model('Task', taskSchema)

module.exports = {
  User,
  Project,
  Task
}