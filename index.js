const dotenv = require('dotenv')
dotenv.config()
const server = require('./api/server')
const port = process.env.PORT
server.listen(port, () => {
	console.log(`🤣 I'm Alive and well:${port} 🤪`)
})


//? sever will always be in the api folder ?//