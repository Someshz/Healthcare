const express=require('express');
const router=express.Router();
const hospitalinfoSchema=require('../models/hospitalinfo');

router.get('/', async(req,res) => {
    try{
           const aliens = await hospitalinfoSchema.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})
 
router.post('/',(req,res)=>
{
     const hospital=new hospitalinfoSchema({
         name:req.body.name,
         specialization:req.body.specialization,
         description:req.body.description,
         contact:req.body.contact,
         rating:req.body.rating
     })
     hospital.save();
     res.send(hospital);
})
module.exports=router;

