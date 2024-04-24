// backend/controllers/eventController.js

import eventModel from "../models/event.js";

class EventController {
    static getAllEvents= async (req, res)=>{
        try {
            const events = await eventModel.find();
            res.json(events);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static getEventById= async (req, res)=>{
        try {
            console.log(req.params.id);
            const event = await eventModel.findById(req.params.id);
            if (!event) {
            return res.status(400).json({ message: 'Event ID is required' });
            }
            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.json(event);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static createEvent= async (req, res)=>{
        try {
            const newEvent = new eventModel(req.body);
            await newEvent.save();
            res.status(201).json(newEvent);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static updateEvent= async (req, res)=> {
        try {
            const { id } = req.params;
            const updatedEvent = await eventModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedEvent) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.json(updatedEvent);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static deleteEvent= async (req, res)=> {
        try {
            const { id } = req.params;
            const deletedEvent = await eventModel.findByIdAndDelete(id);
            if (!deletedEvent) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.json({ message: 'Event deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static getPastEvents= async (req, res)=> {
        try {
            const pastEvents = await eventModel.find({ date: { $lt: new Date() } });
            res.json(pastEvents);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    static getUpcomingEvents= async (req, res)=>{
        try {
            const upcomingEvents = await eventModel.find({ date: { $gte: new Date() } });
            res.json(upcomingEvents);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }
}

export default EventController;
