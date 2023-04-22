const Ad=require('../models/ads')
const Company=require('../models/companies')


exports.getAllAds=async(req,res)=>{
    try {
        const input=req.query.input
        // console.log(input)
        const ads=await Ad.find({}).populate('companyId')
        const filtered_ads=ads.filter((ad)=>{
            if(ad.companyId.name.toLowerCase().includes(input)){
                return ad
            }else if(ad.primaryText.toLowerCase().includes(input)){
                return ad
            }else if(ad.headline.toLowerCase().includes(input)){
                return ad
            }else if(ad.description.toLowerCase().includes(input)){
                return ad
            }
        })
        // console.log(ads)
        res.status(200).json(filtered_ads)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}