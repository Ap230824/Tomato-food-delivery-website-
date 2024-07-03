
import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://aakashpodar234:ap23082004@cluster0.jzshbmu.mongodb.net/food-delivery')
    .then(() => console.log("DB Connected"));
}
