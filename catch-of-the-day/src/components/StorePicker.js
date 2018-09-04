import React from 'react';
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required placeholder="Store Name"
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
