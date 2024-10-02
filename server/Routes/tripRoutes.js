import express from 'express';
import Trip from '../Models/trip.js';

const router = express.Router();


router.post('/trips', async (req, res) => {
  const { place, startdate, enddate } = req.body;

  if (!place || !startdate || !enddate) {
    return res.status(400).send({
      message: 'Place, start date, and end date are required fields.',
    });
  }

  try {
    const trip = new Trip({
      place,
      startdate,
      enddate,
    });
    await trip.save();
    res.status(201).send(trip);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/trips', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).send(trips);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get('/trips/:id', async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).send('Trip not found');
    res.status(200).send(trip);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.put('/trips/:id', async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!trip) return res.status(404).send('Trip not found');
    res.status(200).send(trip);
  } catch (error) {
    res.status(400).send(error);
  }
});


router.delete('/trips/:id', async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) return res.status(404).send('Trip not found');
    res.status(200).send(trip);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
