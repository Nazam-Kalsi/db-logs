import mongoose, {  Schema } from "mongoose";
import { reportLogger } from "../utils/reportLogger";

export const PostSchema = new Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    content:{
        type:String,
    },
});

reportLogger(PostSchema,"Post")

export const Post = mongoose.model("Post", PostSchema);