import { mongoose } from 'mongoose';
import userModel from '../models/user.js';

class userController{
    static home=async (req,res)=>{
         res.json({ message: "Welcome to the home page" });
    }
    static register = async (req,res)=>{
        res.json({ message: "Render register form here" });
    }
    static login =async (req,res)=>{
        res.json({ message: "Render login form here" });
    }
    static createUserDoc = async (req,res)=>{
            console.log(req.body);
        try {
            const doc=new userModel({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            const saved=await doc.save();
            console.log(saved)
            console.log("created");
             res.json({ message: "User created successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'An error occurred. Please try again later.'});
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