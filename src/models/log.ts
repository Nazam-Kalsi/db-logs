import mongoose, { Schema, model } from "mongoose";

const logSchema = new Schema(
  {
    action: {
      type: String,
    },
    model: {
      type: String,
    },
    doc: {
      type: mongoose.Schema.Types.Mixed,
    },
    documentId:{
        type: mongoose.Schema.Types.ObjectId,
        default:null
    },
    editor:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      default:null
    }
  },
  { timestamps: true }
);

export const Log = model("Log", logSchema)