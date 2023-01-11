import "@/styles/RecoveryPass.css";
import emailIcon from "@/assets/icons/email.svg";
import logoYardSale from "@/assets/logos/logo_yard_sale.svg";
import { Link } from "react-router-dom";
const RecoveryPass = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logoYardSale} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={emailIcon} alt="email" />
        </div>
        <Link to="/" className="primary-button login-button">
          <button className="primary-button ">Login</button>
        </Link>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <Link to="/SendEmail">Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPass;
