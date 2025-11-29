import Login from './login'
import {Link,BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Register'
import ListALL from './list_all'

function App() {
  
  return (
    <>

   <BrowserRouter>
         <div className="lnk">
          <nav id="ll">
            <Link to="/">Login</Link>{"_*_*_*_*_*_*_*_"}
            
            <Link to="/register">Register</Link>
        
         </nav>

         </div>

    <Routes>
      <Route path="/" element={<Login/>}  />      

      <Route path="/register" element={<Register/>} />
      
      <Route path="/show" element={<ListALL/>}  />


    </Routes> 

   
   
   </BrowserRouter>
   
            
    </>
  )
}

export default App
