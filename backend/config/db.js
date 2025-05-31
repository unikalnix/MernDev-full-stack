import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(`${process.env.MONGO_URI}/mern-dev-archives`);
    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    throw new Error(error.message);
  }
};

export default connectDB;
