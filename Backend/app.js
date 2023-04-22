const express=require('express')
const app=express()

const cors=require('cors')

const BodyParser=require('body-parser')

const mongoose=require('mongoose')

const Company=require('./models/companies')
const Ad=require('./models/ads')


const companyRoutes=require('./routes/company')
const adRoutes=require('./routes/ad')


app.use(cors())

app.use(BodyParser.json({extended:false}))

app.use('/company',companyRoutes)

app.use('/ad',adRoutes)





mongoose.connect('mongodb://0.0.0.0:27017/mern_search_backend_db')
.then(result=>{
  console.log("connected")
  app.listen(5000)
})
.catch(err=>{
  console.log(err)
})