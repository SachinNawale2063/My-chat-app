import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import MessageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js';
import {app, server} from'./socket/socket.js'


const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", MessageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res)=>{
//     res.send("Hello World!")
// })


server.listen(PORT, async ()=>{
    await connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});