const { Schema } = require('mongoose')

const taskSchema = new Schema(
  {
    project_id: { type: Schema.Types.ObjectId, ref: 'Project', required: true},
    name: { type: String, required: true},
    isCompleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false},
    due_date: { type: Date, required: true},
    created_at: { type: Date, default: Date.now}
  },
  {
    timeStamp: true
  }
)

module.exports = taskSchema
