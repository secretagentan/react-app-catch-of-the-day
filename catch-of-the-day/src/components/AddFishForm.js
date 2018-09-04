import React from "react";

class AddFishForm extends React.Component {
  // Create refs:
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  // Define createFish property:
  createFish = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();

    // 2. Create fish object
    const fish = {
      name: this.nameRef.value.value,
      price: this.priceRef.value.value,
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    }

    // 3. Push fish into state (App => Inventory => AddFishForm)
    this.props.addFish(fish);

    // 4. Reset the form
    event.currentTarget.reset();
  }

  // Render form to page:
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />

        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />

        <select name="status" ref={this.statusRef} type="text" placeholder="Status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="Desc" />

        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />

        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm;
