const config = {
	production: {
		secret: process.env.secret,
		MONGO_URI: process.env.MONGO_URI,
		port:process.env.PORT,
	},
	development: {
		secret: "A_EE_DEEE",
		MONGO_URI: 'mongodb://localhost/film_api2',
		port: 3000,
	}
}

export const getConfig = env => config[env] || config.development

