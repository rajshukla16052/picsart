const mongoose =require('mongoose');
let schema =mongoose.Schema;
let imgSchema =new schema({
    ititle:{
    
        type:String
    },
    catgry:String,
    image:String,
    image2:String,
    image3:String,
    image4:String

})
module.exports=mongoose.model('images',imgSchema);//images that name who created in mongodb