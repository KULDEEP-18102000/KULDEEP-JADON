const mongoose=require('mongoose')

const Schema=mongoose.Schema

const companySchema= new Schema({
    name:{
        type:String
    },
    url:{
        type:String
    }
})

module.exports=mongoose.model('Company',companySchema)