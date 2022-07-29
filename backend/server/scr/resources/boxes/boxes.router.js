const boxesControllers = require('./boxes.controllers');
const {Router} = require('express');
const router = Router();

router.post("/",boxesControllers.createOne);

module.exports= router;
