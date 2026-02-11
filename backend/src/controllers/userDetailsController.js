import { Userdetail } from "../Models/Userdetail.models.js";

export const userDetails = async(req, res) => {
try {
    const {fullName, role, companyName, address, country, state, city, postcode, contactsize, industrytype} = req.body
    console.log(req.body)
    
    if(!fullName || !role || !companyName || !address || !state  || !city || !postcode || !contactsize || !industrytype)
    {
        return res.status(401).json({message: "Data is Incomplete, first compltete it"})
    }
    const Userdetails = await Userdetail.create({
    fullName,
    role,
    companyName,
    address,
    country,
    state,
    city,
    postcode,
    contactsize,
    industrytype,
    })
    return res.status(200).json({message:"User details saved Successfully"})
} catch (error) {
     return res.status(500).json({message: "Something went wrong while taking your details"})
}
}

