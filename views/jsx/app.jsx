import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {
  windowWrap
} from './windowWrap.jsx'

// class index extends Component{
//   render() {
//     return <h3>我是主页面</h3>
//   }
// }

// class sss extends Component{
//   render() {
//     return <h3>sssss</h3>
//   }
// }

// <Router>
//   <div>
//     <ul>
//       <li><Link to="/">登陆页面</Link></li>
//       <li><Link to="/sss">ssss</Link></li>
//     </ul>

//     <Route path="/" component={loginAndRegister} />
//     <Route path="/sss" component={sss} />

//   </div>
// </Router>

render(
  <windowWrap />,
	document.querySelector('.demo'),
	()=> console.log(">>>>>>　页面渲染已经完成　<<<<<<")
);