import express from 'express';
import Feedback from '../Models/Feedback.js';

const routerF = express.Router();


routerF.post('/feedback', async (req, res) => {
    try {
        const { name, feedback, ratings } = req.body;

        const newFeedback = new Feedback({
            name,
            feedback,
            ratings
        });

        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ message: 'Error saving feedback', error });
    }
});


routerF.get('/feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving feedback', error });
    }
});


export default routerF;
