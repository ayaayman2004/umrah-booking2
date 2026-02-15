import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

export default function Forgetpassword() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Reset Password</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">
              Reset Password
            </button>
          </div>

          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>

          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </Card>
    </Container>
  );
}
