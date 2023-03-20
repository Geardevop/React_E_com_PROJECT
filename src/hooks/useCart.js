

import { useContext } from "react";
import { CartContext } from "../contexts/cart";
export const UseCart = () =>{
  const cartContext = useContext(CartContext)
  return cartContext 
}
export default UseCart;