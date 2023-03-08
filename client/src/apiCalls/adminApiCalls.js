import axios from "../utility/axios";
const token=localStorage.getItem('Admintoken')

const adminLogin = async (userData) => {
    try {
       
        const  response = await axios.post("/admin", userData);
        return response.data
        
    } catch (error) {
        console.log(error.message);
    }
};
const getDoctorDeatails=async()=>{
    try {
        const response=await axios.get('/admin/get-doctor-details',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return response.data.message
    } catch (error) {
        
        return error.response.data
    }
}
const apiCalls = {
    getDoctorDeatails,
    adminLogin
    
};
export default apiCalls;