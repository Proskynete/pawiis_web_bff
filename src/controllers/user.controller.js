const axios = require('axios');
const config = require('../config/config.js');

const signIn = async (req, res) => {
	const { email, password } = req.body;
	try {
		const { data } = await axios.post(
			`${config.login_service}/signin?email=${email}&password=${password}`
		);

		return res.status(200).json({
			user: data.user,
		});
	} catch (error) {
		return res.status(error.response.status).json({
			message: error.response.data.message,
		});
	}
};

const getUserById = (req, res) => {};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = {
	signIn,
	getUserById,
	updateUser,
	deleteUser,
};
