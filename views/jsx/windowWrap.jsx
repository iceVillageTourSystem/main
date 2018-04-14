import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './app.jsx';
import loginAndRegister from './loginAndRegister.jsx';

export class windowWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUserLogin: false
    }
  }

  compontWillMount() {
    // 检查是否已经登陆
  }

  render() {
    let {isUserLogin} = this.state;
    let result;

    result = isUserLogin ?
      <App /> : <loginAndRegister />
    

    return result;
  }
}