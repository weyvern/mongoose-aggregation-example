import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const locationSchema = new Schema({
  name: { type: String, required: true },
  comments_list: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  rating: { type: Number }
});

locationSchema.statics.getAverageGrade = async function () {};

const commentSchema = new Schema({
  location_id: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

commentSchema.post('save', function () {});

commentSchema.pre('remove', function () {});

export const Location = model('Location', locationSchema);
export const Comment = model('Comment', commentSchema);
