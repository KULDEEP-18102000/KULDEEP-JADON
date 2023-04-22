const express=require('express')

const router=express.Router()
const adController=require('../controllers/ad')

//to get all ads 
router.get('/getallads',adController.getAllAds)

module.exports=router