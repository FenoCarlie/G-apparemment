const mongoose = require("mongoose");
require("dotenv").config();

const Url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const UserRole = {
    USER: { code: 9783, name: "User" },
    MODERATOR: { code: 7920, name: "Moderator" },
    ADMIN: { code: 9019, name: "Admin" },
};

mongoose
    .connect(Url)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.log("Database connection failed:", error);
    });

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        role: {
            type: Number,
            enum: Object.values(UserRole).map((role) => role.code),
            default: UserRole.USER.code,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
