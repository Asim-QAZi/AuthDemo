import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Register(){

    const [name,setName]=useState('')
    const [username,setUname]=useState('')
    const [role,setRole]=useState('')
    const [password,setPass]=useState('')

    const navigate=useNavigate();

    let handelReq=async (e)=>{

        e.preventDefault();

   

        const userdata={name,username,role,password};

        try{
          const res= await axios.post("http://localhost:3001/reg",userdata)
              alert(res.data.message);
              setName("")
              setPass("")
              setRole("")
              setUname("")
              
              navigate("/")
        }
        catch(err){
            console.log(err);
        }


    }

    return(

        <>
            

             <form id="formid"  onSubmit={handelReq} >

                Name:<input type="text" value={name}onChange={(e)=>{
                    setName(e.target.value); 
                }} /> <br/>
                Username:<input type="text" value={username} onChange={(e)=>{
                    setUname(e.target.value);
                }}/>   <br/>
                Role:<input type="text" value={role} onChange={(e)=>{
                    setRole(e.target.value);
                }} />    <br/>
                Password:<input type="password" value={password} onChange={(e)=>{
                    setPass(e.target.value);
                }} />   <br/><br/>

                <button type="submit">register</button>
            
             </form>
        
        </>
    )
}

export default Register;