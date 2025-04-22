    import express from "express";
    import { connectDB } from "./db";
    import dotenv from "dotenv";
    dotenv.config();
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.get("/", (req, res) => {
        res.json("Hello world");
    });

    
    connectDB().then(() => {
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }).catch((err)=>{
        console.log(err);
    });
    
    import userRoutes from './routes/user.route';
    app.use('/u',userRoutes);
