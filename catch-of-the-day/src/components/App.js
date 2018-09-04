import React from "react";
import Header from "./Header.js";
import Order from "./Order.js";
import Inventory from "./Inventory.js";
import sampleFishes from "../sample-fishes"

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  // Functions that update state:
  addFish = (fish) => {
    console.log('adding fish');

    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };

    // 2. Add our new fish to that fishes variable
    // Date.now() gives fish unique ID w/ timestamp
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new fishes object to state
    this.setState({
      fishes: fishes
    })
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App;
