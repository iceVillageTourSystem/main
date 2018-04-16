import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Chart from './components/chart';
// import Info from './components/info';
// import Query from './components/query';
// import InputInfo from './components/input';
import styles from './index.less';

import {Layout, Menu} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const MenuItem = Menu.Item;

class Index extends Component {
  constructor(props) {
    super(props)
   
  }

  render() {
    return (
    <Router>
        <Layout>
            <Sider>
              <Menu theme={"dark"}>
                <p className={styles.logoWrap}>
                  <img className={styles.logo} src='../img/logo.svg'/>
                  <span>黑龙江省冰雪旅游产业信息系统</span>
                </p>
                <MenuItem>
                  <Link to="/info">基本信息</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/query">查询数据</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/chart">绘制图表</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/input">提交数据</Link>
                </MenuItem>
              </Menu>
            </Sider>
            <Layout>
              <Header>Header</Header>
              <Content>
               
              </Content>
            </Layout>
          </Layout>
      </Router>
    );
  }
}

export default Index;

// <Route path="/info" component={Info} />
// <Route path="/query" component={Query} />
// <Route path="/chart" component={Chart} />
// <Route path="/input" component={InputInfo} />