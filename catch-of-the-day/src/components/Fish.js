import React from "react";
import { formatPrice } from "../helpers";

// How does data get anywhere? Props!

class Fish extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;
    // Makes shorthand:
     // { image } = { this.props.details.image }
     // { name } = { this.props.details.name }
     // etc.

    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={ image } alt={ name } />

        <h3 className="fish-name">
          { name }
          <span className="price">{ formatPrice(price) }</span>
        </h3>

        <p>{ desc }</p>

        <button disabled={ !isAvailable }> { isAvailable ? "Add to Order" : "Sold Out!" }</button>
      </li>
    )
  }
}

export default Fish;
