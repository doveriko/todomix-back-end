const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  lists: [{type: Schema.Types.ObjectId, ref: "List"}]
},
{ timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;