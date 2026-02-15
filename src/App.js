import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
  import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup';
import Login from './login';
import Forgetpassword from './forgetpassword';
import Updateprofile from './updateprofile';
import Dashboard from './dashboard';
 import RequireAuth from "./requireauth"
 import {AuthProvider} from './usecontext'
function App() {
  return (
     <>
      <Router>
     <AuthProvider  >
          <Routes>
            <Route path="/signup" element={<Signup/>}></Route>
             <Route path="/login" element={<Login/>}></Route>
             <Route path="/forget-password" element={<Forgetpassword/>}></Route>
             <Route path="/updateprofile" element={<Updateprofile/>}></Route>
             <Route path="/" element={
              <RequireAuth> 
              <Dashboard/>
              </RequireAuth>
              }></Route>
          </Routes>
     </AuthProvider>
     </Router>
     
     </>
  );
}

export default App;
