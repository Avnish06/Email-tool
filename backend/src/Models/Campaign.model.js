import mongoose from "mongoose";

const campaignschema = new mongoose.Schema([{
campaignname:{
   type:String,
   Unique:true
},
campaignMail:{
    type:String
}
}],{timestamps: true})
export const Campaign = mongoose.model("campaignschema", Campaign)