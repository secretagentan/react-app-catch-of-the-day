// let's go!

// import React package:
import React from 'react';

// import 'render' method:
import { render } from 'react-dom';

// import components
// import StorePicker from './components/StorePicker';
// import App from './components/App';

// Don't need to import other components when
// importing and rendering Router component:
import Router from "./components/Router";

// import css
import "./css/style.css";


// use render() method to render html to page
render(<Router />, document.querySelector('#main'));
