import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const locationSchema = new Schema({
  name: { type: String, required: true },
  comments_list: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  rating: { type: Number }
});

const commentSchema = new Schema({
  location_id: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 10 },
  date: { type: Date, default: Date.now }
});

commentSchema.statics.getAverageGrade = async function (location_id) {
  console.log('Calculating average rating...');
  const ratingAggregation = await this.aggregate([
    {
      $match: { location_id }
    },
    {
      $group: {
        _id: '$location_id',
        rating: { $avg: '$rating' }
      }
    }
  ]);
  try {
    await this.model('Location').findByIdAndUpdate(location_id, {
      rating: Math.ceil(ratingAggregation[0].rating)
    });
  } catch (error) {}
};

commentSchema.post('save', function () {
  console.log(this);
  Comment.getAverageGrade(this.location_id);
});

commentSchema.pre('remove', function () {
  Comment.getAverageGrade(this._id);
});

export const Location = model('Location', locationSchema);
export const Comment = model('Comment', commentSchema);
