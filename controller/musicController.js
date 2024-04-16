// backend/controllers/musicController.js

import musicModel from "../models/music.js";
import userModel from './../models/user.js';

class musicController {
    static async getAllMusic(req, res) {
        try {
            const music = await musicModel.find();
            res.json(music);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static async getMusicById(req, res) {
        try {
            const music = await musicModel.findById(req.params.id);
            if (!music) {
                return res.status(404).json({ message: 'Music not found' });
            }
            res.json(music);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static async createMusic(req, res) {
        try {
            const newMusic = new musicModel(req.body);
            await newMusic.save();
            res.status(201).json(newMusic);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static async updateMusic(req, res) {
        try {
            const { id } = req.params;
            const updatedMusic = await musicModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedMusic) {
                return res.status(404).json({ message: 'Music not found' });
            }
            res.json(updatedMusic);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static async deleteMusic(req, res) {
        try {
            const { id } = req.params;
            const deletedMusic = await musicModel.findByIdAndDelete(id);
            if (!deletedMusic) {
                return res.status(404).json({ message: 'Music not found' });
            }
            res.json({ message: 'Music deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }
}

export default musicController;
