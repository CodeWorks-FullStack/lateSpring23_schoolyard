import mongoose from 'mongoose'
const Schema = mongoose.Schema


export const CourseSchema = new Schema(
    {
        type: { type: String, required: true },
        name: { type: String, required: true },
        prerequisites: [{ type: String, required: true }],
        schoolId: { type: Schema.Types.ObjectId, required: true, ref: 'School' }
    },
    { timestamps: true, toJSON: { virtuals: true } })

CourseSchema.virtual('school', {
    localField: 'schoolId',
    ref: 'School',
    foreignField: '_id',
    justOne: true
}) 