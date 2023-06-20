const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const Courses = new Schema({
    name: { type: String, default: 'Xây đựng web' },
    discription: { type: String,default:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' , maxLength: 255 },
    image: { type: String,  maxLength: 255 },
    create_at: { type: Date,  default: Date.now },
    update_at: { type: Date,  default: Date.now },
  });

  module.exports = mongoose.model('Course', Courses)