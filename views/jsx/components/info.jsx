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
    epName: '',
    address: '',
    phone: '',
    leader: '',
    product: '',
  }
  

  render() {
    return (
        <div>
        <Table 
            columns={[{title: '组织名称', dataIndex: 'epName', key: '1'}]}
            dataSource={[{epName: this.state.epName, key: "1" }]}
            pagination={false} 
            />
        <Table 
            columns={[{title: '组织地址', dataIndex: 'address', key: '1'}]}
            dataSource={[{address: this.state.address, key: "2" }]}
            pagination={false} 
            />
        <Table 
            columns={[{title: '联系电话', dataIndex: 'phone', key: '1'}]}
            dataSource={[{phone: this.state.phone, key: "3" }]}
            pagination={false} 
            />
        <Table 
            columns={[{title: '法人代表', dataIndex: 'leader', key: '1'}]}
            dataSource={[{leader: this.state.leader, key: "4" }]}
            pagination={false} 
            />
        <Table 
            columns={[{title: '主营产品', dataIndex: 'product', key: '1'}]}
            dataSource={[{product: this.state.product, key: "5" }]}
            pagination={false} 
            />
        </div>
    );
  }
}
export default Info;