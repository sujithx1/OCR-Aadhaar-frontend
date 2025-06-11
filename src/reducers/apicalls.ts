import { toast } from "react-toastify";
import { api } from "../api/axios";
import { isAxiosError } from "axios";
import type { AdharSendData } from "../types";

 


export const ocrPost=async({frontImage,backImage}:AdharSendData)=>{

    try {
         const formData = new FormData();
            formData.append("frontImage", frontImage);
            formData.append("backImage", backImage);

      const ocr= await api.post('/ocr',formData)
      
      return ocr.data

        
    } catch (error) {
         if (isAxiosError(error) ) {
                console.log(error);
                
                const message = error.response?.data?.error || "Upload failed. Try again.";
                toast.error(`❌ ${message}`);
                
                console.error(error);
        
              }
    }
   
}