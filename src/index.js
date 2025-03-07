import connectDB from "./DB/dbConnection.js";
import dotenv from 'dotenv'

dotenv.config({
    path: "./.env"
})
connectDB();










// this code is stay here . this is describe that how to connect with db.

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import express from "express";
import dotenv from 'dotenv'
dotenv.config()

const app = express();

( async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(connectionInstance.connection.host)
        app.on("error", (error) => {
            console.log("error,", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log('error', error)
        throw error
    }
})()
    */