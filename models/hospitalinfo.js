const mongoose=require('mongoose');


const hospitalinfoschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    specialization:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    contact:
    {
        type:Number,
        required:true
    },
    rating:
    {
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('User',hospitalinfoschema);