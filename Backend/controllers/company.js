const Company=require('../models/companies')
const Ad=require('../models/ads')

exports.addCompany=async(req,res)=>{
    try {
        // console.log(req.body)
        const {companyName,companyURL,PrimaryText,headline,description,CTA,ImageURL}=req.body
        // console.log(companyName)
        const company=await Company.create({name:companyName,url:companyURL})
        // console.log(company)
        const ad=await Ad.create({companyId:company._id,primaryText:PrimaryText,headline:headline,description:description,CTA:CTA,imageURL:ImageURL})
        // console.log(ad)
        res.status(200).json({success:true})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}