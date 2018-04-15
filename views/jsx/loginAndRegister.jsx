import React, {Component, PureComponent} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import { Button, Menu, Icon } from 'antd';
const MenuItem = Menu.Item;

import styles from './loginAndRegister.less';


class LoginAndRegister extends PureComponent {
  getPageTitle() {
    const { routerData, location } = this.props;
    // const { pathname } = location;
    console.log(routerData, location);
    // let title = '';
    // if (routerData[pathname] && routerData[pathname].name) {
    //   title = `${routerData[pathname].name} - 黑龙江省冰雪旅游产业信息系统`;
    // }
    // return title;
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
          <Menu>
            <MenuItem>
              <Icon type="edit" /> 账号登陆
            </MenuItem>

            <MenuItem>
              <Icon type="book" /> 账号注册
            </MenuItem>
          </Menu>
        </div>
      </DocumentTitle>);
  }
}

export default LoginAndRegister;