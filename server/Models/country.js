import mongoose from 'mongoose';

const { Schema } = mongoose;

const countrySchema = new Schema({
  name: { type: String, required: true },
  touristPlaces: [{ type: String, required: true }], // Only store the names of tourist places
});

const Country = mongoose.model('Country', countrySchema);

export default Country;
