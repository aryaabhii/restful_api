const mongoose = require("mongoose");
const validator = require("validator");


// user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already reused."],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email..!")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    }
});

// new collection...
const User = new mongoose.model("User", userSchema);
module.exports = User;