import React, {Component, PureComponent} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import { Button, Menu, Icon, Input } from 'antd';
const MenuItem = Menu.Item;

import styles from './loginAndRegister.less';


class LoginAndRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBox : 'login',
      loginUserName: '',
      loginPassWord: ''
    }
  }

  handleClick = (e) => {
    console.log(e.key)
    this.setState({
      displayBox : e.key
    });
  }

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

  // 登陆逻辑
  inputOnChange = (e, stateName) => {
    this.setState({[stateName]: e.target.value});
  }

  // 清空某个输入框
  emitEmpty = (e, xnput, stateName) => {
    xnput.focus();
    this.setState({ [stateName]: '' });
  }

  render() {
    let {displayBox, loginUserName, loginPassWord} = this.state;

    let displayBoxJsx;

    switch (displayBox) {
      case 'login':
        let loginUserNameSuffix = loginUserName
            ? <Icon type="close-circle" onClick={(e) => {
                this.emitEmpty(e, this.userNameInput, 'loginUserName');
              }} />
            : null;

        let loginPassWordSuffix = loginPassWord
            ? <Icon type="close-circle" onClick={(e) => {
                this.emitEmpty(e, this.loginPassWordInput, 'loginPassWord');
              }} />
            : null;

        displayBoxJsx = (<div>
             <Input
              placeholder="请输入用户名"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={loginUserNameSuffix}
              value={loginUserName}
              onChange={e => {this.inputOnChange(e, 'loginUserName')}}
              ref={node => this.userNameInput = node}
            />

            <Input
              type="password"
              placeholder="请输入密码"
              prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={loginPassWordSuffix}
              value={loginPassWord}
              onChange={e => {this.inputOnChange(e, 'loginPassWord')}}
              ref={node => this.loginPassWordInput = node}
            />

            <Button type="primary" style={{width: '100%'}}>登陆</Button>        
          </div>)
      break;

      case 'register':
        displayBoxJsx = (<div>
            我是注册
          </div>)
      break;
    }

    return (<DocumentTitle title={'登陆&注册'}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.headerWrap}>
              <img className={styles.logo} src="/img/logo.svg" alt="logo" />
              <span className={styles.title}>黑龙江省冰雪旅游产业信息系统</span>
            </p>
            <div className={styles.desc}>用于管理和展示雪乡旅游企业数据</div>
          </div>
          <section className={styles.opBox}>
            <Menu
              mode="horizontal"
              onClick={this.handleClick}
              defaultSelectedKeys={['login']}
              inlineIndent={35}
              style={{
                background: 'rgba(0,0,0,0)'
              }}
            >
              <MenuItem key="login">
                <Icon type="edit" /> 账号登陆
              </MenuItem>

              <MenuItem key="register">
                <Icon type="book" /> 账号注册
              </MenuItem>
            </Menu>
          </section>
          
          <section className={styles.inputBox}>
            {displayBoxJsx}
          </section>
        </div>
      </DocumentTitle>);
  }
}

export default LoginAndRegister;