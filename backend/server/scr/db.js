const mongoose = require('mongoose');
const {MONGO_URL}= require('./config')
const connect = async () => {
	try{
		await mongoose.connect(MONGO_URL);
		console.log("Conectados");
	}catch(e){
		console.log(`No hemos podido conectarnos ${e}`)
		
   }
}

module.exports={
	connect,
}
