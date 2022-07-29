const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {PORT}=require('./config');

const db = require('./db');

const app= express();

app.disable('x-powered-by');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const boxesRouter = require('./resources/boxes/boxes.router');
app.use('/boxes', boxesRouter);


const startServer=async() =>{
	await db.connect();
	app.listen(PORT,() => {
		console.log(`Api del almacen escuchando en: ${PORT}`);
    });
};

startServer();
console.log("server.js finished")

