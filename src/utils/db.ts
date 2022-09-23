import mongoose from "mongoose";

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI!);
};

const db = {
    connect,
};

export default db;
