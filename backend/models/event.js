import mongoose from "mongoose";
import validator from "mongoose-validator"

const eventSchema=new mongoose.Schema({
    title:{type:String,required:true},
    fees:{type:Number},
    date:{type:{Date},deafult:Date.now()},
    description:{type:String,trim:true},
    location:{type:String},
    image:{type:String},
})

const eventModel=mongoose.model('event',eventSchema)

export default eventModel;