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
			const { page, perPage } = req.query
			const options = {
				page: parseInt(page, 10) || 1,
				limit: parseInt(perPage, 10) || 10,
			}
			const films = await Film.paginate()
			return res.json(films)
		}
		catch (err) {
			console.error(err)
			return res.status(500).send(err)
		}
	},
	async findOne(req, res) {
		try {
			const { id } = req.params
			const film = await Film.findById(id)
			if (!film) {
				return res.status(404).json({ err: 'could not find this film'})
			}
			return res.json(film)
		}
		catch (err) {
			console.error(err)
			return res.status(500).send(err)
		}
	},
	async delete(req, res) {
		try {
			const { id } = req.params
			const film = await Film.findOneAndRemove({ _id: id})
			const films = await Film.find()
			if (!film)
				return res.status(404).json({ err: 'could not find this film'})
			return res.json(films)
		}
		catch (err) {
			console.error(err)
			return res.status(500).send(err)
		}
	},
	async update(req, res) {
		try {
			const { id } = req.params
			const schema = Joi.object().keys( {
				title: Joi.string().optional(),
				url: Joi.string().optional(),
				rating: Joi.number().integer().min(0).max(10).optional(),
			})
			const { value, error } = Joi.validate(req.body, schema)
			if (error && error.details) 
				return res.status(404).json(error)	
			const film = await Film.findOneAndUpdate({ _id: id}, value)
			if (!film)
				return res.status(404).json({ err: 'could not find this film'})
			return res.json(film)
		}
		catch (err) {
			console.error(err)
			return res.status(500).send(err)
		}
	}
}