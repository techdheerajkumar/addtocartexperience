import React from "react";
import Cards from "../../css/cards.module.css";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  const trimmedTitle = props.title.trim(" ").replaceAll(" ", "-");
  return (
    <div className={`card ${Cards.card} mx-3 mb-5`}>
      <figure className="mb-3 pt-3">
        <img src={props.imgUrl} className="card-img-top" />
      </figure>
      <div className="card-body d-flex flex-column h-100">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{`${
          props.description.length < 100
            ? props.description
            : props.description.substring(0, 100)
        }`}</p>
        <div className="card-footer  mt-auto d-flex justify-content-between align-items-center">
          <p className="card-text mb-0">$ {props.price}</p>
          <NavLink
            to={`/detail/${trimmedTitle}`}
            className="btn btn-primary d-inline-block"
          >
            Read more
          </NavLink>
        </div>
        <button className="btn btn-secondary mt-3" onClick={() => props.addCart(props.id)}>Add to cart</button>
      </div>
    </div>
  );
};
export default Card;
