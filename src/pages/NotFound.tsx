import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="center">
        <div className="error">
          <div className="number">4</div>
          <div className="illustration">
            <div className="circle" />
            <div className="clip">
              <div className="paper">
                <div className="face">
                  <div className="eyes">
                    <div className="eye eye-left" />
                    <div className="eye eye-right" />
                  </div>
                  <div className="rosyCheeks rosyCheeks-left" />
                  <div className="rosyCheeks rosyCheeks-right" />
                  <div className="mouth" />
                </div>
              </div>
            </div>
          </div>
          <div className="number">4</div>
        </div>
        <div className="text">Lo siento hay un error, no se que paso :(</div>
        <Link className="button" to="/login">
          Regresar al Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
