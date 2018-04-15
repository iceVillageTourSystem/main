import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Button } from 'antd';


class LoginAndRegister extends Component {
  constructor(props) {
    super(props)
   
  }


  render() {
    return (<div>
        <Button>123</Button>
      </div>);
  }
}

export default LoginAndRegister