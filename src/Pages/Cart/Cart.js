import React, { useState, useEffect } from "react";

const Cart = (props) => {
  const data = props.cartItems;

  return (
    <div>
      {data.length
        ? data.map((item, index) => {
            return (
              <div key={item.id} className="cart-item d-flex p-4 mb-5">
                <div className="cart-item__left">
                  <figure className="m-0">
                    <img src={item.image} alt={item.title} className="w-100" />
                  </figure>
                </div>
                <div className="cart-item__right d-flex flex-column align-items-start ps-5 w-50">
                  <h3>{item.title}</h3>
                  <p className="price text-danger">
                    $ <span className="">{item.price}</span>
                  </p>
                  <button
                    className="btn btn-danger mt-auto"
                    onClick={() => props.removeItems(item.id)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })
        : "no product has been added"}
    </div>
  );
};

export default Cart;
