import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

export default Feedback;
