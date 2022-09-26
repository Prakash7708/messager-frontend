import axios from "axios";

let instance=axios.create({
    baseURL:"http://localhost:3001"
     //baseURL:"https://wattsapp-server.herokuapp.com/"
})

export default instance;