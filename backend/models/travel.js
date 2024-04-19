import mongoose from "mongoose";
import validator from "mongoose-validator"

const travelSchema=new mongoose.Schema({
    fees:{type:Number, validate : (v)=>{$and(v>=0,v<=10000000)}},
    date:{type:Date,deafult:Date.now()},
    description:{type:String,trim:true},
    location:{type:String},
    startDate:{type:Date,default:Date.now()},
    endDate:{type:Date,default:Date.now()},
})

const travelModel=mongoose.model('travel',travelSchema)

export default travelModel