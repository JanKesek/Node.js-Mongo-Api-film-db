import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const { Schema } = mongoose;
const filmSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Film must have title'],
	},
	url: {
		type: String,
		required: [true, 'Please provide the url' ],
	},
	rating: {
		type:Number,
		default: 0.0,
		min: 0.0,
		max: 10,
	},
});
filmSchema.plugin(mongoosePaginate)
export default mongoose.model('Film', filmSchema)