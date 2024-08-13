import mongoose, { Schema } from "mongoose";

const scheme = new Schema({
    name:String,
    mail:String,
    password:String,
});

export const user=mongoose.model("user",scheme);