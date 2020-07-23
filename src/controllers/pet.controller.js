const axios = require('axios');
const config = require('../config/config.js');

const createNewPet = async (req, res) => {
	const { name, age, gender, owner } = req.body;

	try {
		const { data } = await axios.post(`${config.pet_service}/create`, {
			name,
			age,
			gender,
			owner,
		});

		return res.status(200).json({
			pet: data.pet,
		});
	} catch (error) {
		return res.status(error.response.status).json({
			message: error.response.data.message,
		});
	}
};

const getPet = async (req, res) => {
	const { owner } = req.query;
	try {
		const pet = await axios.get(`${config.pet_service}/get?owner=${owner}`);
		const log = await axios.get(
			`${config.log_service}/get?pet_id=${pet.data.pet._id}`
		);

		const pet_populated = { ...pet.data.pet, information: log.data.logs };

		return res.status(200).json({
			pet: pet_populated,
		});
	} catch (error) {
		return res.status(error.response.status).json({
			message: error.response.data.message,
		});
	}
};

const getAllPet = async (req, res) => {
	const { owner } = req.query;
	try {
		const pet = await axios.get(`${config.pet_service}/get?owner=${owner}`);
		const log = await axios.get(
			`${config.log_service}/get?pet_id=${pet.data.pet._id}`
		);

		const pet_populated = { ...pet.data.pet, information: log.data.logs };

		return res.status(200).json({
			pet: pet_populated,
		});
	} catch (error) {
		return res.status(error.response.status).json({
			message: error.response.data.message,
		});
	}
};

module.exports = {
	createNewPet,
	getAllPet,
	getPet,
};
