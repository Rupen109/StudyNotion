const mongoose = require("mongoose");
const mailSender = require("../Utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");


const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires : 5*60,
    }
});


//a function -> to send emails

async function sendVerificationEmail(email, otp) {
    
        try {
            const mailResponse = await mailSender(email, "verification Email from StudyNotion", emailTemplate(otp));
            console.log("Email send Successfully:", mailResponse);
        }
        catch (error) {
            console.log("error occurred while sending mail", error);
            throw error;
        }
}

OTPSchema.pre("save", async function (next) {
    await sendVerificationEmail(this.email, this.otp);
    next();
})
const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;

