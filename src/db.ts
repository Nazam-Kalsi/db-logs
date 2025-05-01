import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.DOCKER_DB_URI as string);
        console.log("MongoDB connected successfully", connection.connection.host, connection.connection.name);
    }catch(err){
        console.log(err);
    }
}