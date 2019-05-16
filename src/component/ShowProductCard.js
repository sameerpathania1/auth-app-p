import React from 'react';

const ShowProductCard = (props) => {
   return (
      <div className="show-product-card">
         <img src={props.imageurl} alt={props.imagealt} />
         <h5>{props.name}</h5>
         <p>{props.price}</p>
      </div>
   )
}

export default ShowProductCard