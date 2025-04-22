import mongoose from "mongoose";
import { Post } from "../models/post";
import { Request, Response } from "express";

export const addPost = (req:Request,res:Response) => {
    const data = req.body;
    const creator = new mongoose.Types.ObjectId('68075c10b96251b11bdaaaab');
    const newPost = new Post(data);
    newPost.save({creator} as any);
}

export const deletePost = (req:Request,res:Response) => {
    const id = req.body;
    const creator = new mongoose.Types.ObjectId('68075c10b96251b11bdaaaab');
    
}