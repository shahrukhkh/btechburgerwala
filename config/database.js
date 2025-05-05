import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true); // or false, depending on your needs

    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ Database connected with ${connection.host}`);
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};
