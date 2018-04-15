import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LoginAndRegister from './loginAndRegister.jsx';
import Index from './index.jsx';
import '../reset.css';
// import 'antd/dist/antd.css';

class WindowWrap extends Component {
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

    // result = isUserLogin ?
    //   <Index /> : <LoginAndRegister />
    

    return (<LoginAndRegister />);
  }
}

render(
  <WindowWrap />,
	document.querySelector('.demo'),
	()=> console.log(">>>>>>　页面渲染已经完成　<<<<<<")
);