const Ad = require('../models/Ad')

class AdController{
	async index(req, res){
		const ads = await Ad.find()

		return res.status(200).json(ads);
	}

	async show(req, res){
		const ad = await ad.findById(req.params.id)

		return res.status(200).json(ad)
	}

	async store (req, res){
		const ad = await Ad.create({... req.body, author: req.idUser})

		return res.status(201).json(ad)
	}

	async update(req, res){
		const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		})
		return res.status(200).json(ad)
	}

	async destroy(req, res){
		await Ad.findByIdAndDelete(req.params.id)

		return res.status(200).json({status:"Ad deletado com sucesso"})
	}
}

module.exports = new AdController()
