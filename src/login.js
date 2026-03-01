import { Link , useNavigate } from "react-router-dom";
import { Container, Card ,Alert} from "react-bootstrap";
import { useAuth } from "./usecontext";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Login() {
 const {login}=useAuth();
 const[error,seterror]=useState("");
  const[loading,setloading]=useState(false);
  const emailref=useRef()
  const passref=useRef()
  const location=useLocation()
   const redirect=location.state?.path || "/";
  const navigate=useNavigate();
  const handlesumbit=async(e)=>{
     e.preventDefault()
    
      try{
          seterror("");
          setloading(true);
          await login(emailref.current.value,passref.current.value);
       navigate(redirect, { replace: true });
       console.log("User after login:" );


      }
      catch(err){
                seterror("failed to login")
               seterror(err.message);
               console.log(err)
      }
      setloading(false)
  }
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
         {error && <Alert variant="danger" className="text-center">{error}</Alert>}

        <form onSubmit={handlesumbit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
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
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              ref={passref}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            Login
          </button>

          <div className="w-100 text-center mt-3">
            Need an account? <Link to="/signup">Sign up</Link>
          </div>

          <div className="w-100 text-center mt-2">
            <Link to="/forget-password">Forgot Password?</Link>
          </div>
        </form>
      </Card>
    </Container>
  );
}
