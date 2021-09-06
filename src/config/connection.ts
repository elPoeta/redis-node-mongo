import mongoose, { ConnectOptions } from "mongoose";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(JSON.stringify(process.env.MONGO_URI), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(`MongoDB Error Connection: ${error.message}`);
    process.exit(1);
  }
};

connectDB();