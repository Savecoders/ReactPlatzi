import { useState } from "react";

const useInitialState = () => {
  const [state, setState] = useState({
    cart: [],
  });

  const addToCart = (payload: string) => {
    const item = [...state.cart, payload];

    setState({
      ...state,
      cart: item as [],
    });
  };

  const removeFromCart = (payload: {
    id: number;
    name: string;
    price: number;
    img: string;
  }) => {
    setState({
      ...state,
      cart: state.cart.filter(({ id }) => id !== payload.id),
    });
  };

  return {
    addToCart,
    state,
    removeFromCart,
  };
};

export default useInitialState;
