import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Info from './components/info';
import Query from './components/query';
import Chart from './components/chart';
import InputInfo from './components/input';

import styles from './index.less';
import DocumentTitle from 'react-document-title';

import {Layout, Menu, Icon} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const MenuItem = Menu.Item;

class Index extends Component {
  constructor(props) {
    super(props)
    
  }

  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  getNowHashRouter = () => {
    return [window.location.hash.replace(/\#(.+)/, (s, r) => r)];
  }

  render() {
    return (
      <DocumentTitle title="首页">
      <Router>
        <Layout>
            <Sider
              width="256"
              collapsible
              trigger={null}
              collapsed={this.state.collapsed}
            >
              <div className={styles.logoWrap}>
                <img className={styles.logo} src='../img/logo.svg'/>
                <h1 className={styles.logoDesc}>冰雪旅游信息系统</h1>
              </div>
              <div>
                <Menu
                  theme={"dark"}
                  mode="inline"
                  defaultSelectedKeys={this.getNowHashRouter()}
                >
                  
                  <MenuItem key="/">
                    <Link to="/">
                      <Icon type="book" />
                      <span>基本信息</span>
                    </Link>
                  </MenuItem>
                  <MenuItem key="/query">
                    <Link to="/query">
                      <Icon type="pie-chart" />
                      <span>查询数据</span>
                    </Link>
                  </MenuItem>
                  <MenuItem key="/chart">
                    <Link to="/chart">
                      <Icon type="area-chart" />
                      <span>绘制图表</span>
                    </Link>
                  </MenuItem>
                  <MenuItem key="/input">
                    <Link to="/input">
                      <Icon type="edit" />
                      <span>提交数据</span>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  style={{padding: '0 24px', cursor: 'pointer'}}
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                <Route exact path="/" component={Info} />
                <Route path="/query" component={Query} />
                <Route path="/chart" component={Chart} />
                <Route path="/input" component={InputInfo} />
                
              </Content>
            </Layout>
          </Layout>
      </Router>
      </DocumentTitle>
    );
  }
}

export default Index;
