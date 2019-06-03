import React from "react";
import PropType from "prop-types"

const ShowProductCard = props => {

  const { onclick, imagealt, imageurl, name, price } = props

  return (
    <div className="show-product-card" onClick={onclick}>
      <img src={imageurl} alt={imagealt} />
      <h5>{name}</h5>
      <p>{price}</p>
    </div>
  );
};

export default ShowProductCard;

ShowProductCard.prototype = {
  onclick: PropType.func,
  imagealt: PropType.string,
  imageurl: PropType.string,
  name: PropType.string,
  price: PropType.number,

}