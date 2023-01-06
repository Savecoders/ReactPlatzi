import { useState } from "react";

const initialState = {
  cart: [],
} as State;

interface State {
  cart: string[];
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: string) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  /*
  const removeFromCart = (payload: string) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items?.id !== payload?.id),
    });
  };
 */
  return {
    addToCart,
    state,
  };
};

export default useInitialState;
