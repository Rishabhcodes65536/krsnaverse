import mongoose from "mongoose";
import validator from "mongoose-validator"

const musicSchema=new mongoose.Schema({
    musicname:{type:String , trim:true , required:true},
    description:{type:String},
    link:{type:String},
})

const musicModel=mongoose.model('music',musicSchema)

export default musicModel