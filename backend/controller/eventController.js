// backend/controllers/eventController.js

import eventModel from "../models/event";

class EventController {
    async getAllEvents(req, res) {
        try {
            const events = await Event.find();
            res.json(events);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    async getEventById(req, res) {
        try {
            const event = await Event.findById(req.params.id);
            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.json(event);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    async createEvent(req, res) {
        try {
            const newEvent = new Event(req.body);
            await newEvent.save();
            res.status(201).json(newEvent);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    async updateEvent(req, res) {
        try {
            const { id } = req.params;
            const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedEvent) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.json(updatedEvent);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    async deleteEvent(req, res) {
        try {
            const { id } = req.params;
            const deletedEvent = await Event.findByIdAndDelete(id);
            if (!deletedEvent) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.json({ message: 'Event deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    async getPastEvents(req, res) {
        try {
            const pastEvents = await Event.find({ date: { $lt: new Date() } });
            res.json(pastEvents);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

    async getUpcomingEvents(req, res) {
        try {
            const upcomingEvents = await Event.find({ date: { $gte: new Date() } });
            res.json(upcomingEvents);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }
}

module.exports = new EventController();
