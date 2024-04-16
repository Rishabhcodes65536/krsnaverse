import mongoose from "mongoose";
import validator from "mongoose-validator"

const bookSchema=new mongoose.Schema({
    price:{type:Number, validate : (v)=>{$and(v>=0,v<=10000)}},
    date:{type:Date,deafult:Date.now()},
    description:{type:String,trim:true},
    name:{type:String,trim:true},
    author:{type:String,trim:true},
    location:{type:String},
    startDate:{type:Date,default:Date.now()},
    endDate:{type:Date,default:Date.now()},
})

const bookModel=mongoose.model('book',bookSchema)

export default bookModel