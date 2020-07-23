module.exports = {
	port: process.env.PORT || 3000,
	login_service: 'http://localhost:5000/node/user-service',
	pet_service: 'http://localhost:5001/node/pet-service',
};
