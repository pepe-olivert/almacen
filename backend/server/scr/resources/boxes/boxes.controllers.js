const Boxes = require('./boxes.model');

const createOne = async(req,res) => {
    try{
        const newBox = req.body;
        const doc= await Boxes.create(newBox);
        res.status(200).send({results:[doc]});
    } catch (e) {
        console.log(e);
        res.status(500).send({error:"Creation failed"})
    };
};
    
    module.exports = {
        createOne,
};