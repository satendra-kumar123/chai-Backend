import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"
// import dotenv from 'dotenv'
// dotenv.config()

const connectDB = async function fun() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Your db connection is successfully connected")
    } catch (error) {
        console.log("DB connection failed", error)
        process.exit(1)
        // throw error
    }
}
export default connectDB