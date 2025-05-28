

import axios from "axios";


 const api=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true,
     headers: {
    // 'Content-Type': 'application/json',
    'Content-Type': 'multipart/form-data'

  },
})

export{api}


