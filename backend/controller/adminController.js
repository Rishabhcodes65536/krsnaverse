// backend/controllers/adminController.js

import userModel from '../models/user.js';

class adminController {
    static home = async (req, res) => {
        res.json({ message: "Welcome to the home page" });
    }

    static register = async (req, res) => {
        res.json({ title: "hello" });
    }

    static login = async (req, res) => {
        res.json({ message: "Render login form here" });
    }

    static createUserDoc = async (req, res) => {
        try {
            console.log(req.body);
            const doc = new userModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                gender: req.body.gender,
                age: req.body.age
            });
            const saved = await doc.save();
            console.log(saved);
            console.log("created");
            res.json({ message: "User created successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'An error occurred. Please try again later.' });
        }
    }

    static validateLogin = async (req, res) => {
        try {
            const result = await userModel.findOne({ email: req.body.email });
            if (result != null) {
                if (result.password == req.body.password) {
                    res.json({ redirect: "/user" }); // Send redirect URL to React.js
                } else {
                    res.status(400).json({ message: "Incorrect password" });
                }
            } else {
                res.status(404).json({ message: "User not yet registered" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'An error occurred. Please try again later.' });
        }
    }
}

export default adminController;
