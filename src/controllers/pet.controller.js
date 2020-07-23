const axios = require('axios');
const config = require('../config/config.js');

const createNewPet = async (req, res) => {
	const { name, age, sex, owner } = req.body;

	try {
		const { data } = await axios.post(`${config.pet_service}/create`, {
			name,
			age,
			sex,
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
		const { data } = await axios.get(
			`${config.pet_service}/get?owner=${owner}`
		);

		return res.status(200).json({
			pet: data.pet,
		});
	} catch (error) {
		return res.status(error.response.status).json({
			message: error.response.data.message,
		});
	}
};

module.exports = {
	createNewPet,
	getPet,
};
