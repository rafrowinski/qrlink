import React, { Component } from 'react';
import data from './data'
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
const CryptoJS = require("crypto-js");

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/:id/:key" component={Decrypt} />
        </div>
      </Router>

    );
  }
}

function Decrypt({ match }) {
  let text = data[match.params.id];

  var bytes = CryptoJS.AES.decrypt(text, match.params.key);
  var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return (
    <div>
      <h3>{decryptedData}</h3>
    </div>
  );
}

export default App;
