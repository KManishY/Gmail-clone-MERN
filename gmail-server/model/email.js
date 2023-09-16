import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  subject: {
    type: String
  },
  body: String,
  date: {
    type: Date,
    required: true
  },
  image: String,
  name: {
    type: String,
    required: true
  },
  starred: {
    type: Boolean,
    required: true,
    default: false
  },
  bin: {
    required: true,
    default: false,
    type: Boolean
  },
  type:{
    type: String,
    required: true
  }
});

const email = mongoose.model('emails',EmailSchema)

export default email