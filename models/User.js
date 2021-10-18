import mongoose from "mongoose";
const { model, Schema } = mongoose;

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    createdAt: String
});

const User = model('User', UserSchema);

export default User;