const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const parcelSchema = new Schema ({
    fullName: {
        type:String,
        required:true
    },
    area:{
        type:Number,
        required:true
    },
    currentCity: {
        type:String,
        required:true
    },
    subCity: {
        type:String,
        required:true
    },
    kebele: {
        type:Number,
        required:true
    },
    martialStatus: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
    registrationDate: {
        type:Date,
        required:true
    },
    parcelCode: {
        type:String,
        required:true
    },
    landLevel: {
        type:String,
        required:true
    },
    serviceType: {
        type:String,
        required:true
    },
    northBoundary: {
        type:String,
        required:true
    },
    southBoundary: {
        type:String,
        required:true
    },
    eastBoundary: {
        type:String,
        required:true
    },
    westBoundary: {
        type:String,
        required:true
    },
    tenureType: {
        type:String,
        required:true
    },
    encumbrance: {
        type:String,
        required:true
    },
    occupation: {
        type:String,
        required:true
    },
})

module.exports = mongoose.model("parcel",parcelSchema)