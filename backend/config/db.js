import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/mern-dev-archives`);
    console.log("Database connected");
  } catch (error) {
    throw new Error(error.message);
  }
};

export default connectDB;
