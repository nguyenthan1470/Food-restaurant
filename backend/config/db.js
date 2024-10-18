import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nguyenthan1470:20052003@cluster0.7l8ih.mongodb.net/Food_Del').then(() => console.log("DB Connected"));

}

