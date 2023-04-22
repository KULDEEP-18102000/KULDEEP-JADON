const express=require('express')

const router=express.Router()

const companyController=require('../controllers/company')

//to post company and add
router.post('/add-data',companyController.addCompany)

module.exports=router