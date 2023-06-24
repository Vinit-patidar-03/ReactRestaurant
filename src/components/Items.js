import React from "react";

const Items = (props) => {
  return (
    <>
      <div class="card mx-2 my-2" style={{ width: "18rem" }}>
        <img src={props.image} class="card-img-top" style={{width: 'inherit'}} alt={props.name}/>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">
             {props.desc}
          </p>
          <h3>Price: {props.price}</h3>
          <a href="/" class="btn btn-primary">
            Order Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Items;
