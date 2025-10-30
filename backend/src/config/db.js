import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.log("Error connecting to MongoDB Atlas", error);
    process.exit(1);
  }
};

export default connectDB;
