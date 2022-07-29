const boxesControllers = require('./boxes.controllers');
const {Router} = require('express');
const router = Router();

router.post("/",boxes.Controllers.createOne);

module.exports= router;
