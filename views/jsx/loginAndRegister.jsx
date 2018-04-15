import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Button } from 'antd';
import styles from './loginAndRegister.less';
import DocumentTitle from 'react-document-title';


class LoginAndRegister extends Component {
  constructor(props) {
    super(props);
   
  }


  render() {
    return (<DocumentTitle title={'登陆&注册'}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.headerWrap}>
              <img className={styles.logo} src="/img/logo.svg" alt="logo" />
              <span className={styles.title}>黑龙江省冰雪旅游产业信息系统</span>
            </p>
            <div className={styles.desc}>用于管理和展示雪乡旅游企业数据</div>
          </div>
        </div>
      </DocumentTitle>);
  }
}

export default LoginAndRegister;