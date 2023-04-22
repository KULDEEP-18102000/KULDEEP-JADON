// const { Schema } = require('mongoose')
const mongoose=require('mongoose')

const Schema=mongoose.Schema

const adSchema=new Schema({
    companyId:{
        type:Schema.Types.ObjectId,
        ref:'Company'
    },
    primaryText:{
        type:String
    },
    headline:{
        type:String
    },
    description:{
        type:String
    },
    CTA:{
        type:String
    },
    imageURL:{
        type:String
    }
})

module.exports=mongoose.model('Ad',adSchema)