import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI not found");
    }
    await mongoose.connect(process.env.MONGODB_URI as string, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    if (mongoose.connection.readyState === 1) {
      console.log("Successfully connected to MongoDB");
    } else {
      console.log("Failed to establish a connection to MongoDB");
    }
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
