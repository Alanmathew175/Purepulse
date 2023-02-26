import axios from "../utility/axios";

const register = async (userData) => {
    try {
        const response = await axios.post("/register", userData);
        return response;
    } catch (error) {
        console.log(error.message);
    }
};
const login = async (userData) => {
    try {
       
        const  response = await axios.post("/login", userData);
        return response.data
        
    } catch (error) {
        console.log(error.message);
    }
};
const adminLogin = async (userData) => {
    try {
       
        const  response = await axios.post("/admin", userData);
        return response.data
        
    } catch (error) {
        console.log(error.message);
    }
};

const apiCalls = {
    register,
    login,
    adminLogin
};
export default apiCalls;
