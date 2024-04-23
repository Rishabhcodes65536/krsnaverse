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
                password:req.body.password,
                gender:req.body.gender,
                age:req.body.age
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
    static validateLogin = async (req, res) => {
    try {
        const result = await userModel.findOne({ email: req.body.email });
        console.log(result);
        if (result != null) {
            if (result.password == req.body.password) {
                // Send a success response with user validation status
                console.log("Password matched");
                res.status(200).json({ message: "User validated!", verified: true });
            } else {
                // Send a unauthorized response if password is incorrect
                console.log("Incorrect password");
                res.status(401).json({ message: "Incorrect password", verified: false });
            }
        } else {
            // Send a not found response if user doesn't exist
            console.log("User not found");
            res.status(404).json({ message: "User not found", verified: false });
        }
    } catch (error) {
        console.log(error);
        // Send a server error response if an error occurs
        res.status(500).json({ message: "An error occurred. Please try again later.", verified: false });
    }
};

};
export default userController;