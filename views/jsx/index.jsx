import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Chart from './components/chart';
// import Info from './components/info';
// import Query from './components/query';
// import InputInfo from './components/input';
import styles from './index.less';

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

  render() {
    return (
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
                  defaultSelectedKeys={['1']}
                >
                  
                  <MenuItem key="1">
                    <Link to="/info">
                      <Icon type="book" />
                      <span>基本信息</span>
                    </Link>
                  </MenuItem>
                  <MenuItem key="2">
                    <Link to="/query">
                      <Icon type="pie-chart" />
                      <span>查询数据</span>
                    </Link>
                  </MenuItem>
                  <MenuItem key="3">
                    <Link to="/chart">
                      <Icon type="area-chart" />
                      <span>绘制图表</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
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