// let's go!

// import React package:
import React from 'react';

// import 'render' method:
import { render } from 'react-dom';

// import components
import StorePicker from './components/StorePicker';

// import css
import "./css/style.css";

// use render() method to render html to page
render(<StorePicker />, document.querySelector('#main'));
