import React, { useState } from 'react'
import './login.css'
import { Link,useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import axios from "../../axios";

const Login = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: async (values) => {
        setName(values.username)
        
       
          if(localStorage.getItem("react_app_token")){
              localStorage.removeItem("react_app_token");
              alert("logout")
          }else{
          try{
            const login =await axios.post("/login", values);
            if(login.data.token){
               
            // localStorage.setItem("react_app_token", login.data.token);
            if(name){
            navigate(`/chat?name=${name}&room=${room}`);}else{
                navigate("/")
            }
            
         }
            else{
              alert(login.data.message)
            }
          }
         catch (error) {
          console.log(error);
        }}
      },
    });
 return (
    
   <>
   <div className="body">
     <div className="login">
       <h3>Messager</h3>
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
       alt="img" className="loginimg"/>
       <div>
         <div className="container1">
           <form onSubmit={formik.handleSubmit}>
             <div className="row">
               <div className="col-lg-12">
                 <label>Username</label>
                 <input
                   type={"text"}
                   placeholder={"Username"}
                   className={"form-control"}
                   name={"username"}
                   value={formik.values.username}
                   onChange={formik.handleChange}
                 />
               </div>
               <div className="col-lg-12">
                 <label>Password</label>
                 <input
                   type={"text"}
                   placeholder={"Password"}
                   className={"form-control"}
                   name={"password"}
                   value={formik.values.password}
                   onChange={formik.handleChange}
                 />
               </div>
               <div className="col-lg-12">
                <label>Room ID</label>
                <input
                onChange={(e) => setRoom(e.target.value)}
               type="text" placeholder="Room" required className={"form-control"} />
               </div>
               <div className="col-lg-12 mt-2">
                 <input
                   type={"submit"}
                   className={"btn btn-success form-control"}
                 />
               </div>
               <p>
                 Dont have account? <Link to={"/register"}>Sign-in</Link>
               </p>
             </div>
           </form>
         </div>
       </div>
     </div>
     </div>
 
     </>
    )
}

export default Login;