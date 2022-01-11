import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inventory from './stores/Inventory'
import Item from './stores/Item'
import { Provider } from 'mobx-react';


let item=new Item()
let market=new Inventory()
market.addItem("aakob",0,0)
market.addItem("bandora",0,0)
let stores={
  market,
  item
}

ReactDOM.render(
  <Provider {...stores}>
  <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
