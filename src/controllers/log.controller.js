const axios = require('axios');
const config = require('../config/config.js');

const createNewLog = async (req, res) => {
	const { action_type, description, pet_id, owner_id, executor_id } = req.body;

	try {
		await axios.post(`${config.log_service}/create`, {
			action_type,
			description,
			pet_id,
			owner_id,
			executor_id,
		});

		const pet = await axios.get(`${config.pet_service}/get?owner=${owner_id}`);
		const log = await axios.get(`${config.log_service}/get?pet_id=${pet_id}`);

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
	createNewLog,
};
