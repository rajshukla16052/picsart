const mongoose =require('mongoose');
let schema =mongoose.Schema;
let ConInfoSchema =new schema({

    firstname:String,
    lastname:String,
    Email:String,
    description:String
})
module.exports=mongoose.model('ContactInfo',ConInfoSchema);
