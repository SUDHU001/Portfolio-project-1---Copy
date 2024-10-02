import express from 'express';
import Country from '../Models/country.js';

const router = express.Router();

router.post('/countries', async (req, res) => {
  const { name, touristPlaces } = req.body;

  if (!name) {
    return res.status(400).send({
      message: 'Name is a required field.',
    });
  }

  try {
    const country = new Country({
      name,
      touristPlaces,
    });
    await country.save();
    res.status(201).send(country);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/countries', async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).send(countries);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get('/countries/:id', async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);
    if (!country) return res.status(404).send('Country not found');
    res.status(200).send(country);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.put('/countries/:id', async (req, res) => {
  try {
    const country = await Country.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!country) return res.status(404).send('Country not found');
    res.status(200).send(country);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/countries/:id', async (req, res) => {
  try {
    const country = await Country.findByIdAndDelete(req.params.id);
    if (!country) return res.status(404).send('Country not found');
    res.status(200).send(country);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
