import Joi from 'joi'
import Film from './film.model.js'

export default {
	async create(req, res) {
		try {
			const schema = Joi.object().keys( {
				title: Joi.string().required(),
				url: Joi.string().required(),
				rating: Joi.number().integer().min(0).max(10).optional(),
			})
			const { value, error } = Joi.validate(req.body, schema)
			if (error && error.details) 
				return res.status(404).json(error)	
		const film =  await Film.create(value)
		return res.json(film)
		}
		catch (err) {
			console.log(err)
			return res.status(500).send(err)
		}
		//return res.json( { msg: 'todo: create film' } );
	},

	async findAll(req, res) {
		try {
			const films = await Film.find()
			return res.json(films)
		}
		catch (err) {
			console.error(err)
			return res.status(500).send(err)
		}
	},

}