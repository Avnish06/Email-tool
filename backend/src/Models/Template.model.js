import mongoose from "mongoose";

 const  templateSchema = await new mongoose.Schema({
name:{
    type: String,
},
Category:{
   type: String
},
previewImage:{
    type: String,
},
fields:[{
     name:{
       type: text,
       label:String
     },
}]
},{timestamps: true})

export const Temp = mongoose.model("Temp", templateSchema)



