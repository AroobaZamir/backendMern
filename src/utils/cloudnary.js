import {v2 as cloudinary } from "cloudnary";
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET  // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
    
    const uploadOnCloudinary = async (localFilePath)=>{
        try {
            if(!localFilePath) return null;

            //uplaod the file on the cloudinary

            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: 'auto'
            })
            //file has been uplaoded successfully
            console.log("file is uploaded on cloudinary ", response.url);
            return response

        } catch (error) {
            fs.unlinkSync(localFilePath) //remove the  locally saved tempoaray file
            //as the upllaod operation got failed

            return null;

            
        }
    }

    export {uploadOnCloudinary}