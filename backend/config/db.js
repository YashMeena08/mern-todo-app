import mongoose from "mongoose";

export const connectDB =async() => {
    try{
            const conn = await mongoose.connect(process.env.MONGO_URI) 
            console.log(`mongoDB connected : ${conn.connection.host}`)
    }catch(error){
        console.log(error);
        process.exit(1);//incase of any error we want to terminate the process
    }
}