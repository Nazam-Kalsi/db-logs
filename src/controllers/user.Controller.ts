import { Request, Response } from "express";
import { User } from "../models/user";
import mongoose from "mongoose";

export const addUser = async(req:Request,res:Response)  => {    
    const data = req.body;
    const editor = new mongoose.Types.ObjectId("68075c10b96251b11bdaaaab");
    const newUser = new User(data);
    await newUser.save({editor} as any)

    res.status(200).json({
        message:"User created successfully",
        data:newUser
    });       
}
export const deleteUser = async(req:Request,res:Response)  => {    
    const {id} = req.params;
    const editor = new mongoose.Types.ObjectId("68075c10b96251b11bdaaaab");
    await User.findByIdAndDelete(id, { editor } as any);   

    res.status(200).json({
        message:"User deleted successfully"
    });       
}