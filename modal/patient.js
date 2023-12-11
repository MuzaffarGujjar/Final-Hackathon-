import mongoose from "mongoose";
const {schema} = moongoose;

const UserSchema = new Schema({
    firstName: { type: string, required: true},
    lastName: String,
    email: {type: string, required: true},
    phone: string,
})

export const userModel = mongoose.models?.profiles