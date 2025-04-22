import { Schema } from "mongoose"
import { Log } from "../models/log"

export const reportLogger = (schema:Schema,model:string) =>{
    schema.post("save",async function(doc){
        const editor = (this as any).$__.saveOptions?.editor;
        await Log.create({
            model,
            action:"Insert",
            doc,
            documentId:doc._id,
            editor
        })
    });

    schema.post("deleteOne", async function(doc){
        const editor = (this as any).options?.editor;
        await Log.create({
            model,
            action:"Delete",
            doc,
            documentId:doc._id,
            editor
        })
    })

    schema.post("findOneAndDelete",async function(doc){
        console.log((this as any).options);
        console.log(doc);
        const editor = (this as any).options?.editor;
        await Log.create({
            model,
            action:"delete",
            doc,
            documentId:doc._id,
            editor
        })
    })

    schema.post("findOneAndUpdate", async function(doc){
        const editor = (this as any).options?.editor;
        const data = this.getUpdate();
        await Log.create({
            model,
            action:"update",
            doc:data,
            editor,
            documentId:doc._id,
        })
    })

    schema.post("updateOne", async function(doc){
        const editor = (this as any).options?.editor;
        const data = this.getUpdate();
        await Log.create({
            model,
            action:"update",
            doc:data,        
            editor,
            documentId:doc._id,
        })
    })
}