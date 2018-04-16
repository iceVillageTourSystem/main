import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Chart from './components/chart';
import Info from './components/info';
import Query from './components/query';
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
                <MenuItem>
                  <img src='../img/logo.svg'/>
                </MenuItem>
                <MenuItem>
                  <Link to="/">基本信息</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/query">查询数据</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/chart">绘制图表</Link>
                </MenuItem>
              </Menu>
            </Sider>
            <Layout>
              <Header>Header</Header>
              <Content>
                <Route path="/" component={Info} />
                <Route path="/query" component={Query} />
                <Route path="/chart" component={Chart} />
              </Content>
            </Layout>
          </Layout>
      </Router>
    );
  }
}

export default Index;