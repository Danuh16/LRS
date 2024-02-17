const mongoose = require('mongoose')
const Schema = mongoose.Schema;




const appointmentSchema = new Schema({
    customerName:{
      type:String
    },
    appointmentTime: {
      type:Number
    }
  });

module.exports = mongoose.model("Appointment",appointmentSchema)