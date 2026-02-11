import { Campaign } from "../Models/Campaign.model.js";


export const campaignSchema = async() => {

const campaign = req.body;

if(!campaign)
{
return res.status(400).json({message:"The campaign is Empty"})
}
await Campaign.create
}