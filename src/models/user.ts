import mongoose, {  Schema } from "mongoose";
import bcrypt from "bcryptjs"
import { reportLogger } from "../utils/reportLogger";
export const UserSchema = new Schema({
    userName:{
        type: String,
        required: true,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    }
})

UserSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        next();
    }
})
reportLogger(UserSchema,"User");

export const User = mongoose.model("User", UserSchema);