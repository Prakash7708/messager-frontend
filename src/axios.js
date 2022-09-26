import axios from "axios";

let instance=axios.create({
    //baseURL:"http://localhost:3001"
     baseURL:"https://messager-server.herokuapp.com/"
})

export default instance;