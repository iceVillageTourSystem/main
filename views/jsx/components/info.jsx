import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {Table, Button } from 'antd';
import DocumentTitle from 'react-document-title';

const columns = [{title: 'Name', dataIndex: 'name', key: 'name'}];
  
class Info extends Component {
  constructor(props) {
    super(props)
   
  }

  state = {
    epName: 'a',
    address: 'a',
    phone: 'a',
    leader: 'a',
    epNum: 'a',
  }
  

  render() {
    return (
        <div>
        <Table 
            columns={[{title: 'epName', dataIndex: 'epName', key: '1'}]}
            dataSource={[{epName: this.state.epName, key: "1" }]}
            pagination={false} 
            />
        <Table 
            columns={[{title: 'address', dataIndex: 'address', key: '1'}]}
            dataSource={[{address: this.state.address, key: "1" }]}
            pagination={false} 
            />
        <Table 
            columns={[{title: 'phone', dataIndex: 'phone', key: '1'}]}
            dataSource={[{phone: this.state.phone, key: "1" }]}
            pagination={false} 
            />
        <Table 
            columns={[{title: 'leader', dataIndex: 'leader', key: '1'}]}
            dataSource={[{leader: this.state.leader, key: "1" }]}
            pagination={false} 
            />
        <Table 
            columns={[{title: 'epNum', dataIndex: 'epNum', key: '1'}]}
            dataSource={[{epNum: this.state.epNum, key: "1" }]}
            pagination={false} 
            />
        </div>
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