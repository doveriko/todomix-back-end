const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {type: String, required: true},
    tasks: [
      {
        text: String,
        isDone: {type: Boolean, default: false} 
      }
    ],
    status: { type: String, enum: ["To-do","Doing","Done"], default: "To-do" },
    private: {type: Boolean, required: true, default: true},
    creator: {type: Schema.Types.ObjectId,ref:'User'},
    contributors: [ {type: Schema.Types.ObjectId,ref:'User'} ]
  },
  { timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
    }
  });

const List = mongoose.model('List', listSchema);

module.exports = List;