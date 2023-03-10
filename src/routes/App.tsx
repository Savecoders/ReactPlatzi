//import { useState } from "react";
import ChangePass from "../pages/ChangePass";
import Layaout from "../containers/Layaout";
import RecoveryPass from "../pages/RecoveryPass";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import OrdenShop from "../pages/OrdenShop";
import SendEmail from "../pages/SendEmail";
import AppContext from "@/context/AppContext";
import useInitialState from "@/hooks/useInitialState";
function App() {
  //const [count, setCount] = useState(0);
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <Layaout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/changepass" element={<ChangePass />} />
            <Route path="/recovery" element={<RecoveryPass />} />
            <Route path="/OrdenShop" element={<OrdenShop />} />
            <Route path="/SendEmail" element={<SendEmail />} />
            {/*error 404*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layaout>
      </AppContext.Provider>
    </>
  );
}

export default App;
