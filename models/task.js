const { Schema } = require('mongoose')

const taskSchema = new Schema(
  {
    // user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    name: { type: String, required: true},
    isCompleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false},
    due_date: { type: Date, required: true},
    created_at: { type: Date, default: Date.now}
  },
  {
    timestamp: true
  }
)

module.exports = taskSchema
