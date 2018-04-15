import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SideBar from './components/sideBar';
import Content from './components/content';
import styles from './index.less';

class Index extends Component {
  constructor(props) {
    super(props)
   
  }


  render() {
    return (
      <Router>
        <div className={styles.container}>
          <ul className={styles.sidebar}>
            <li ></li>
            <li><Link to="/">登陆页面</Link></li>
            <li><Link to="/sss">ssss</Link></li>
          </ul>
          <div className={styles.Content}>
            <Route path="/" component={SideBar} />
            <Route path="/sss" component={Content} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Index;