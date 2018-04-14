import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class windowWrap extends Component {
  constructor(props) {
    super(props)
   
  }


  render() {
    return (<h3>登陆页面</h3>);
  }
}