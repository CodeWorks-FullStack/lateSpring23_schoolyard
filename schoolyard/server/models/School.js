import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SchoolSchema = new Schema({
    name: { type: String, required: true, maxLength: 25 },
    location: { type: String, required: true },
    isPrivate: { type: Boolean, default: false },
    mascot: { type: String, required: true },
    type: { type: String, enum: ['elementary', 'highschool', 'middle school', 'alternative', 'clown'] }
},
    { timestamps: true })

