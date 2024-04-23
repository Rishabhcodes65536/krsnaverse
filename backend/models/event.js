import mongoose from "mongoose";
import validator from "mongoose-validator"

const eventSchema=new mongoose.Schema({
    fees:{type:Integer, validate : (v)=>{$and(v>=0,v<=10000)}},
    date:{type:Date,deafult:Date.now()},
    description:{type:String,trim:true},
    location:{type:String}
})

const eventModel=mongoose.model('event',eventSchema)

export default eventModel