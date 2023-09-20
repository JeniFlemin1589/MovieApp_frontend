import axios from 'axios';


export default axios.create({
    baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});

// const EMPLOYEE_API_BASE_URL ="http://localhost:8080/api/v1/movies";

// class axiosConfig {

//     getEmployees(){
//         return axios.get(EMPLOYEE_API_BASE_URL);
//     }
// }

// export default new axiosConfig()