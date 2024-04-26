import mongoose from "mongoose";
const otpSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    otpNumber: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default:Date.now,
        get:(timestamp) => timestamp.getTime(),
        set:(timestamp) => new Date(timestamp)
    }
});
const OTP = mongoose.model('OTP', otpSchema);

export default OTP;