import mongoose from "mongoose";
import validator from "mongoose-validator"

const bookSchema=new mongoose.Schema({
    price:{type:Number, validate : (v)=>{$and(v>=0,v<=10000)}},
    date:{type:Date,deafult:Date.now()},
    description:{type:String,trim:true},
    name:{type:String,trim:true},
    author:{type:String,trim:true},
    image:{type:String},
})

const bookModel=mongoose.model('book',bookSchema)

export {bookModel,bookSchema}