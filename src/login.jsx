import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'



function Login(){


    const [username,setUname] = useState("");
    const [password,setPass] = useState("");


    const navigate=useNavigate();

    let subL=async (e)=>{

        e.preventDefault();

        const userdata={username,password};

        const res=await axios.post("http://localhost:3001/log",userdata);

        if(!res.data.message){
           return alert("error");
            setUname("");
            setPass("");
        }

        localStorage.setItem("token",res.data.message);
        
        alert(res.data.message);

        setUname("");
        setPass("");
        
        navigate("/show");
       

    }

    return (
        <>
        
           <form id="loginid" onSubmit={subL}>

            UserName:<input type="text" value={username} onChange={(e)=>{setUname(e.target.value)}} />

            Password:<input type='password' value={password} onChange={(e)=>{setPass(e.target.value)}} />

            <button type="submit">login</button>



           </form>
        
        </>
    )

}

export default Login;