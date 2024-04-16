import { mongoose } from 'mongoose';
import userModel from '../models/user.js';

class userController{
    static home =async (req,res)=>{
        res.render("index.ejs")
    }
    static register = async (req,res)=>{
        res.render("register.ejs")
    }
    static login =async (req,res)=>{
            res.render("login.ejs");
    }
    static createUserDoc = async (req,res) =>{
        try {
            
            const doc=new userModel({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            const saved=await doc.save();
            console.log(saved)
            console.log("created");
            res.redirect('/login')
        } catch (error) {
            console.log(error);
            res.render('/register.ejs', { error: 'An error occurred. Please try again later.' });
        }
    }
    static validateLogin=async(req,res)=>{
        try {
            const result=await userModel.findOne({email:req.body.email})
            
            if(result!=null){
                if(result.password==req.body.password){
                    res.redirect("/user/")
                }
                else{
                    res.send(`<h1>Incorrect password</h1>`)
                }
            }
            else{
                res.send(`<h1>User not yet resistered</h1>`)
            }
            res.redirect('/login')
        } catch (error) {
            console.log(error)
        }
    }
};
export default userController;