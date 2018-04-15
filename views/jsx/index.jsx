import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

class Index extends Component {
  constructor(props) {
    super(props)
   
  }


  render() {
    return (<h3>主页面</h3>);
  }
}

export default Index;