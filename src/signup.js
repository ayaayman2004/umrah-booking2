import './App.css';
import { Alert, Card, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from './usecontext';
import { useRef, useState } from 'react';

export default function Signup() {
  const {signup}=useAuth();
  const[error,seterror]=useState("");
  const[loading,setloading]=useState(false);
  const emailref=useRef()
  const passref=useRef()
  const passconfirmref=useRef()
  const navigate=useNavigate();
  const handlesumbit=async(e)=>{
     e.preventDefault()
    if(passref.current.value !== passconfirmref.current.value){
      return seterror("password not match")
    }
      
      try{
          seterror("");
          setloading(true);
          await signup(emailref.current.value,passref.current.value);
        setTimeout(()=>{  navigate("/")},1000) 
      }
      catch(err){
                seterror("failed to create an account")
               seterror(err.message);
               console.log(err)
      }
      setloading(false)
  }
  return (
    <Container 
      className="d-flex justify-content-center align-items-center" 
      style={{ minHeight: "100vh" }}
    >
      <Card className="p-4 border-success shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h4 className="text-center mb-4">Sign Up
           
       
        </h4>
        {error && <Alert variant="danger" className="text-center">{error}</Alert>}

        <form onSubmit={handlesumbit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
              ref={emailref} 
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              ref={passref}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword2" 
              ref={passconfirmref}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            Sign Up
          </button>

          <div className="w-100 text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </Card>
    </Container>
  );
}
