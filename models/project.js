const { Schema } = require('mongoose')

const projectSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String },
    due_date: { type: Date, required: true},
    created_at: { type: Date, default: Date.now }
  },
  {
    timeStamp: true
  }
)

module.exports = taskSchema


