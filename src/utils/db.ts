import mongoose from "mongoose";

let isConnected = false;

const connect = async () => {
    if (isConnected) return;

    const mongodb = await mongoose.connect(process.env.MONGODB_URI!);

    isConnected = Boolean(mongodb.connection.readyState);
};

const db = { connect };

export default db;
