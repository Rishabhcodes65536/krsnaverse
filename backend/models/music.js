import mongoose from "mongoose";
import validator from "mongoose-validator"

const musicSchema=new mongoose.Schema({
    musicname:{type:String , trim:true , required:true},
    description:{type:String,trim:true},
    link:{type:String,validate: { 
    validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
    message: 'Must be a Valid URL' 
    }}
})

const musicModel=mongoose.model('music',musicSchema)

export default musicModel