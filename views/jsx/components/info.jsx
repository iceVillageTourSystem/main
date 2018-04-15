import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {Table, Button } from 'antd';
import DocumentTitle from 'react-document-title';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }];
  
class Info extends Component {
  constructor(props) {
    super(props)
   
  }

  state = {
      columns: ['a','b'],
      data: [{
        name: 'z',
        key: "1"
      }]
  }
  

  render() {
    return (
        <Table columns={columns} dataSource={this.state.data} />
        // <div>
        //     12
        // </div>
    );
  }
}
export default Info;

/*<ul>
            <li>
                <label class={styles.label}>组织名称：</label>
                <span class={styles.label}>{this.state.epName}</span>
            </li>
            <li>
                <label>组织地址：</label>
                <span>{this.state.address}</span>
            </li>
            <li>
                <label>联系电话：</label>
                <span>{this.state.phone}</span>
            </li>
            <li>
                <label>法人代表：</label>
                <span>{this.state.leader}</span>
            </li>
            <li>
                <label>员工人数：</label>
                <span>{this.state.epNum}</span>
            </li>
        </ul>*/