// backend/controllers/travelController.js

import travelModel from "../models/travel.js";

class travelController {
    static async getAllTravels(req, res) {
        try {
            const travels = await travelModel.find();
            res.json(travels);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static async getTravelById(req, res) {
        try {
            const travel = await travelModel.findById(req.params.id);
            if (!travel) {
                return res.status(404).json({ message: 'Travel not found' });
            }
            res.json(travel);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static async createTravel(req, res) {
        try {
            const newTravel = new travelModel(req.body);
            await newTravel.save();
            res.status(201).json(newTravel);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static async updateTravel(req, res) {
        try {
            const { id } = req.params;
            const updatedTravel = await travelModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedTravel) {
                return res.status(404).json({ message: 'Travel not found' });
            }
            res.json(updatedTravel);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static async deleteTravel(req, res) {
        try {
            const { id } = req.params;
            const deletedTravel = await travelModel.findByIdAndDelete(id);
            if (!deletedTravel) {
                return res.status(404).json({ message: 'Travel not found' });
            }
            res.json({ message: 'Travel deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static async getPastTravels(req, res) {
        try {
            const pastTravels = await travelModel.find({ endDate: { $lt: new Date() } });
            res.json(pastTravels);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static async getUpcomingTravels(req, res) {
        try {
            const upcomingTravels = await travelModel.find({ startDate: { $gte: new Date() } });
            res.json(upcomingTravels);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }
}

export default travelController;
