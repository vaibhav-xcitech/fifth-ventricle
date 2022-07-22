import React, { useState } from "react";
import CartContext from "./Context";

const State = (props) => {
  const [cart, setCart] = useState([]);

  const AddToCart = (value) => {
    // console.log("++++++++++++++++++++++++++", value.counter);
    // console.log("//////////////////", cart);
    const findIndex = cart.findIndex(
      (item) => item.selectedOption.id === value.selectedOption.id
    );

    if (findIndex === -1) {
      cart.push(value);
      setCart(cart);
    } else {
      //   console.log("$$$$$$$$$$$$$$$$$$$44", cart[findIndex].counter);
      cart[findIndex].counter += value.counter;
      setCart(cart);
    }
  };

  const updateCart = (value) => {
    const findIndex = cart.findIndex(
      (item) => item.selectedOption.id === value.selectedOption.id
    );
    cart[findIndex] = value;
    console.log(value);
    console.log(findIndex);
    setCart([...cart]);
  };

  const removeCart = (index) => {
    cart.splice(index, 1);
    setCart([...cart]);
  };

  return (
    <div>
      <CartContext.Provider value={{ cart, AddToCart, updateCart, removeCart }}>
        {props.children}
      </CartContext.Provider>
    </div>
  );
};

export default State;
