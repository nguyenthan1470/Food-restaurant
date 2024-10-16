import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://nguyenty:20052003@cluster0.x7doa0x.mongodb.net/food-del2')).isObjectIdOrHexString(() =>console.log("DB Connected"));

}