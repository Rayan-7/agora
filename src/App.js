
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import './App.css';
import Inventory from './components/Inventory';


const App = observer((props) => {
  return (
    <div>
      <Inventory/>
    </div>
  );
})

export default App;
