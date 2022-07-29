const mongoose = require('mongoose');

const { Schema } = mongoose;

const boxesSchema = new Schema ({

    n_pedido : {type : String, unique: true, required: true,maxlength:50},
    item: {
         _id: String, 
         desc: String, 
         tipo: String, 
         fecha_en: Date, 
         fecha_sal: Date}, 
    fecha_entrada: { type: Date, default: Date.now },
    fecha_salida: { type: Date, default: Date.now },
    usuario: { type: String, required: true,unique: true},
});

const Boxes = mongoose.model('boxes',boxesSchema);

module.exports = Boxes;