import "../styles/ChangePass.css";
import logoYardSale from "../assets/logos/logo_yard_sale.svg";
const ChangePass = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logoYardSale} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new passwrd for yue account</p>
        <form action="/recovery" className="flex flex-col">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <label htmlFor="new-password" className="label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            defaultValue="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
