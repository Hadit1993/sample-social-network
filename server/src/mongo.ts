import mongoose from "mongoose";

const connectToMongo = () => mongoose.connect(process.env.MONGO_URL!);

export default connectToMongo;
