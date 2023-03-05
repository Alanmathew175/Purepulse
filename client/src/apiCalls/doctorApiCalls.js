import axios from "../utility/axios";
const doDoctorRegisteration =async(data)=>{
    try {
        const response=await axios.post('/doctor/registeration',data)
        return response.data
    } catch (error) {
        return error.response.data
    }
 
}
const apiCalls = {
    doDoctorRegisteration
    
};
export default apiCalls;