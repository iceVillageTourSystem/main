import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Button } from 'antd';
import styles from './loginAndRegister.less';
import DocumentTitle from 'react-document-title';
class LoginAndRegister extends Component {
  constructor(props) {
    super(props)
   
  }


  render() {
    return (<DocumentTitle title={'登陆&注册'}>
        <div className={styles.container}></div>
      </DocumentTitle>);
  }
}

export default LoginAndRegister