import { Link } from "react-router-dom";
import { useRef } from "react";
import "../styles/Login.css";
const Login = () => {
  // HTMLInputElement es el tipo de dato que retorna el useRef
  const form = useRef(null);
  const handleSubmit = () => {
    // @ts-ignore
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            defaultValue="Log in"
            className="primary-button login-button"
          />
          <Link to="/changepass">Forgot my password</Link>
        </form>
        <button
          onClick={handleSubmit}
          className="secondary-button signup-button"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
