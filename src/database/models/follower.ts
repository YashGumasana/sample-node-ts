import mongoose from "mongoose";

const followerSchema = new mongoose.Schema({
    isActive: { type: Boolean, default: true },
    isBlock: { type: Boolean, default: false },
    requestStatus: { type: Number, default: 0, enum: [0, 1, 2] },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    followerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
}, { timestamps: true })

followerSchema.index({ followerId: 1, createdAt: -1 })

export const followerModel: any = mongoose.model('follwer', followerSchema)
