import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  }
  handleChange = event => {
    // console.log("name: " + event.currentTarget.name);
    // console.log("value: " + event.currentTarget.value);

    // update that fish
    // 1. take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // console.log("updated: " + updatedFish)
  this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />

        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={formatPrice(this.props.fish.price)}
        />

        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >

          <option
            // onChange={this.handleChange}
            value="available">Fresh!
          </option>

          <option
            // onChange={this.handleChange}
            value="unavailable">Sold Out!
          </option>

        </select>

        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />

        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />

        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
