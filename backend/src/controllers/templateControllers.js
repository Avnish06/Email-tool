
import uploadoncloudinary from "../config/cloudinary.js";
import { Temp } from "../Models/Template.model.js";
export const addTemplates = async (req, res) => {
   try {
     const {name, Category, fields} = req.body
     let Imagepath =""
     if(!name || !Category || !fields)
     {
         return res.status(400).json({message: "Please give the full Content here"})
     }
     Imagepath = req.files?.previewImage?.path;
     let previewImage = await uploadoncloudinary(Imagepath);
     let template =  await Temp.create({
            name,
            Category,
            fields,
            previewImage
        })
        return res.status(200).json({message:"Template saved successfully", template})
   } catch (error) {
         return res.status(500).json({message:"Something went wrong while saving the templates"})
   }
}




