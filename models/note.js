const { Schema } = require('mongoose')

const noteSchema = new Schema(
  {
    task_id: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
    description: { type: String },
    created_at: { type: Date, default: Date.now }
  },
  {
    timestamp: true
  }
)

module.exports = noteSchema