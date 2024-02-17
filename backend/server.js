const express = require('express')
const mongoose = require ('mongoose')
const cors = require('cors')
const bodyParser = require ('body-parser')
const router = require ('../backend/routes/router')

require('dotenv/config')


const app =express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin:'*',
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use('/user',router)

const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.set("strictQuery",true)
mongoose.connect(process.env.LOCAL_MONGO_DB, dbOptions)
.then(()=> console.log('DB Connected'))
.catch(err=> console.log(err))


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})