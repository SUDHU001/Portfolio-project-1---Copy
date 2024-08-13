import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
    roomType: { type: String, required: true },
    numberOfRooms: { type: Number, required: true },
    pricePerNight: { type: Number, required: true },
    amenities: [{ type: String }]
}, { _id: false });

const AvailabilitySchema = new mongoose.Schema({
    date: { type: Date, required: true },
    roomsAvailable: { 
        type: Map, 
        of: Number, 
        required: true 
    }
}, { _id: false });

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        zipCode: { type: String, required: true },
    },
    imageUrl: { type: String, required: false }, 
    rooms: [RoomSchema],
    availability: [AvailabilitySchema]
});

const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;
