import mongoose from 'mongoose';
import {db_name} from '../constant.js';


const connectDB = async ()=>{
    try {

       const connectionInstance =  await mongoose.connect(`${process.env.MongoDB_URI}/${process.env.db_name}`)
        console.log(`MongoDB connected, DB HOST: ${connectionInstance.host}`)
    } catch (error) {
        //handle error first
        console.log("MongoDB connection error", error);
        process.exit(1);
        
    }
}

export default connectDB;