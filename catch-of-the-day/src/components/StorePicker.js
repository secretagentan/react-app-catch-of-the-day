import React from 'react';
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  static propTypes ={
    history: PropTypes.object
  }

  // How to bind "this" to the component:
  // (however, will get messy if you have too many methods)
  // constructor() {
  //   // super() runs the component
  //   super();
  //
  //   // binds "this" in the goToStore method to the instance
  //   // of the StorePicker component, or else will be undefined
  //   this.goToStore = this.goToStore.bind(this);
  // }

  // Create ref for input element in render():
  myInput = React.createRef();

  // If using constructor, define the method:
  // goToStore(event) {

  // If not using constructor, define a property instead:
  // (properties w/ arrow function bind "this" to the component)
  goToStore = (event) => {

    // 1. Stop the form from submitting and refreshing page:
    event.preventDefault();

    // 2. Get the text from that input:
    // (Don't touch the DOM in React, use refs)
    const storeName = this.myInput.value.value;

    // 3. Route the page to /store/whatever-they-entered:
    this.props.history.push(`/store/${storeName}`);

  }

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>

        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />

        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;

// When rendering multiple elements:
// class StorePicker extends React.Component {
//   render() {
//     return (
//       { /* Use React.Fragment for multiple elements*/}
//       <React.Fragment>
//         <p>Fish!</p>
//         <form action="" className="store-selector">
//           <h2>Please Enter a Store</h2>
//         </form>
//       </React.Fragment>
//     )
//   }
// }
