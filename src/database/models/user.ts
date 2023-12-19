import mongoose from 'mongoose'

const userSchema: any = new mongoose.Schema({
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    userName: { type: String, default: null },
    bio: { type: String, default: null },
    email: { type: String, default: null },
    password: { type: String, default: null },
    description: { type: String, default: null },
    location: { type: String, default: null },
    DOB: { type: String, default: null },
    facebookId: { type: String, default: null },
    image: { type: String, default: null },
    gender: { type: String, default: 0, enum: [0, 1, 2] },//0-Female || 1-Male || 2-other
    followers: { type: Number, default: 0, min: 0 },
    following: { type: Number, default: 0, min: 0 },
    promotes: { type: Number, default: 0, min: 0 },
    likedObs: { type: Number, default: 0, min: 0 },
    latitude: { type: Number, default: 0 },
    longitude: { type: Number, default: 0 },
    authToken: { type: Number, default: 0 },
    otp: { type: Number, default: 0 },
    totalRating: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    jobProvided: { type: Number, default: 0 },
    jobCompleted: { type: Number, default: 0 },
    otpExpireTime: { type: Date, default: null },
    deviceToken: { type: [{ type: String }], default: [] },
    loginType: { type: Number, default: 0, enum: [0, 1, 2, 3] },// 0-custom || 1-google || 2-facebook 
    userType: { type: Number, default: 0, enum: [0, 1] },//0-user||1-owner
    accountType: { type: Number, default: 0, enum: [0, 1] }, // 0-public || 1 -private 
    isEmailVerified: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isBlock: { type: Boolean, default: true },
    notification: {
        type: {
            all: { type: Boolean },
            video: { type: Boolean },
            follow: { type: Boolean },
            message: { type: Boolean },
        },
        default: {
            all: true,
            video: true,
            follow: true,
            message: true
        }
    }
}, { timestamps: true })

userSchema.index({ username: 1, userType: 1 })
export const userModel: any = mongoose.model('user', userSchema)