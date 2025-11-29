import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
function ListALL(){

      const navigate=useNavigate()

        const [user,setUsers]=useState([])
    
         let showUsr=async ()=>{

                try {
      const tkn = localStorage.getItem("token")

      const res = await axios.get("http://localhost:3001/show", {
        headers: { Authorization: `Bearer ${tkn}` }
      })

      setUsers(res.data)

    } catch (err) {
      setUsers([])
      alert("Invalid or unauthorized request")
       
      navigate("/")
      
    }
  }
              
              

         

    
    return(
        <>
        
          <button onClick={showUsr} id="btn">show</button>
        
             
            <h2>users details</h2>

            <ul>
                
                    {Array.isArray(user) && user.map((vl)=>(

                       <li>
                            {vl.name}---{vl.username}----{vl.rol}----{vl.password}
                       </li>


                    ))}
               


            </ul>



        </>
    )


}

export default ListALL;