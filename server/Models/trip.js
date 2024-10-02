import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  place: { type: String, required: true },
  startdate: { type: Date, required: true },
  enddate: { type: Date, required: true },
});

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;
