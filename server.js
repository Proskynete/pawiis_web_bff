const app = require('./src/config/app.js');
const config = require('./src/config/config.js');

app.listen(config.port, () => {
	console.log(`Api running on port: ${config.port}`);
});
