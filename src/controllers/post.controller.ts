import mongoose from "mongoose";
import { Post } from "../models/post";
import { Request, Response } from "express";

export const addPost = (req:Request,res:Response) => {
    const data = req.body;
    const editor = new mongoose.Types.ObjectId('6813133b5ddb5694632f2b46');
    const newPost = new Post(data);
    newPost.save({editor} as any);
    res.status(200).json({message:"Post created successfully",newPost});
}

export const deletePost = async(req:Request,res:Response) => {
    const {id} = req.params;
    const editor = new mongoose.Types.ObjectId('6813133b5ddb5694632f2b46');
    await Post.findByIdAndDelete(id,{editor} as any);
    res.status(200).json({message:"Post deleted successfully"});    
}