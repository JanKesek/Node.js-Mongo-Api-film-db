import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;
const filmSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Film must have a title'],
  },
  url: {
    type: String,
    required: [true, 'Film must have a url'],
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
});
filmSchema.plugin(mongoosePaginate);
export default mongoose.model('Film', filmSchema);
