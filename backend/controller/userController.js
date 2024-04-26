import { mongoose } from 'mongoose';
import {userModel} from '../models/user.js';
import validationResult from "express-validator";
import OTP from '../models/otp.js';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"

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
            const hashed_password=await bcrypt.hash(req.body.password,10)
        try {
            const doc=new userModel({
                name:req.body.name,
                email:req.body.email,
                password:hashed_password,
                gender:req.body.gender,
                age:req.body.age
            })
            const saved=await doc.save();
            console.log(saved)
            console.log("created");
             res.status(201).json({ message: "User created successfully" });
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
            await bcrypt.compare(req.body.password,result.password).then((resul)=>{
            if (resul) {
                // Send a success response with user validation status
                console.log("Password matched");
                req.session.user = result;
                const token = jwt.sign({ userId: result._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                console.log(token);
                res.status(200).json({ message: "User validated!", verified: true,token});
            } else {
                // Send a unauthorized response if password is incorrect
                console.log("Incorrect password");
                res.status(401).json({ message: "Incorrect password", verified: false });
            }
        });
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

static sendOtp= async (req,res)=>{
        const email=req.body.email;
        console.log(email);
        let digits = '0123456789'; 
        let otp = ''; 
        let len = digits.length 
        for (let i = 0; i < 4; i++) { 
        otp += digits[Math.floor(Math.random() * len)]; 
        } 
        if(!email){
            res.status(404).json({"message":"Complete email",verified:false});
        }
        const user=await userModel.findOne({email});
        console.log(user)
        if(!user){
            res.status(404).json({"message":"No such user",verified:false});
        }

        const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_APP_PASSWORD
        }
    });
     const emailSubject = `OTP Verification for krsnaverse`;
     const emailHtmlContent = `
        <p>Dear user,</p>
        <p>Use ${otp} for verification</p>
    `; 
    try {
        const info = await transporter.sendMail({
            from: {
                name: `Recruiter krsnaverse`,
                address: process.env.EMAIL
            },
            to: [`${email}`], // list of receivers
            subject: emailSubject, // Subject line
            html: emailHtmlContent, // html body
        });
        
        console.log("Message sent: %s", info.messageId);
        const saltRounds = 10;
        console.log(otp);
        const hashedOTP = await bcrypt.hash(otp.toString(), saltRounds);
        res.status(200).json({
            message: "Mail sent successfully",
            // info: info,
            success:true,
            hashedOTP
        });
    } catch (error) {
        console.error("Error sending email: ", error);
        res.status(500).json({
            message: "Mail sent successfully",
            // info: info,
            success:false
        });;
    }
}
static verifyOtp=async (req,res)=>{
    const { otp, hashedOTP } = req.body;
    const otpString = otp.join('');
    console.log(otp);
    console.log(hashedOTP);
     try {
        // Verify user-entered OTP by hashing and comparing with stored hashed OTP
        const match = await bcrypt.compare(otpString.toString(), hashedOTP);
        if (match) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ success: false, error: 'An error occurred. Please try again.' });
    }
}
};


export default userController;