import { useState, useContext } from "react";
import "../styles/Header.css";
import Menu from "./Menu";
import AppContext from "@/context/AppContext";
import MyOrder from "@/containers/MyOrder";
import ShoopingCart from "@/assets/icons/icon_shopping_cart.svg";
import IconMenu from "@/assets/icons/icon_menu.svg";
import logoYardSale from "@/assets/logos/logo_yard_sale.svg";
interface stateProps {
  state: {
    cart: string[];
  };
}

const Header = () => {
  const [toogle, setToogle] = useState(false);
  const [toogleOrders, setToogleOrders] = useState(false);
  const { state } = useContext(AppContext) as stateProps;

  function handleMenu() {
    setToogle(!toogle);
  }

  function handleOrders() {
    setToogleOrders(!toogleOrders);
  }

  return (
    <nav>
      <img src={IconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logoYardSale} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleMenu}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleOrders}>
            <img src={ShoopingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toogle && <Menu />}
      {toogleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
