import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./usecontext"
import './App.css';
import { Alert, Card } from "react-bootstrap";
import { useState } from "react";
 
 
 


  export default function Dashboard(){
   const { currentUser, logout } = useAuth();

     const[error,seterror]=useState("");
    
     const navigate=useNavigate()
     const handlelogout=async ()=>{
      seterror("")
      try{
        await logout();
        navigate("/login")
      }
      catch{
           seterror("failed to log out")
      }
     }
    return(
        <>
       
      <Card className="p-4 border-success shadow d-flex justify-content-center align-items-center" style={{ maxWidth: "400px", width: "100%"  }}>
        <h4 className="text-center mb-4">
            profile
        </h4>
        {error && <Alert variant="danger" className="text-center">{error}</Alert>}
        <strong>Email: {currentUser && currentUser.email}</strong>  
         
          <Link to="/updateprofile" className="btn btn-primary w-100 mt-3">update profile</Link>
      </Card>
    <div>
      <button className="btn btn-primary" onClick={handlelogout}>logout</button>
    </div>
        </>
    )
}