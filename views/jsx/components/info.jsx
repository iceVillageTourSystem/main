import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {Table, Button, Collapse  } from 'antd';
import DocumentTitle from 'react-document-title';

const Panel = Collapse.Panel;

class Info extends Component {
  constructor(props) {
    super(props)
   
  }

  state = {
    epName: 'sss',
    address: 'sss',
    phoneNumber: 'sssss',
    leader: 'sss',
    product: 'sssssasd',
  }

  callback = (e) => {

  }

  render() {
    let {epName, address, phoneNumber, leader, product} = this.state;

    return (
        <DocumentTitle title="企业基本信息">
            <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                <Panel header="组织名称" key="1">
                    <p>{epName}</p>
                </Panel>
                <Panel header="组织地址" key="2">
                    <p>{address}</p>
                </Panel>
                <Panel header="联系电话" key="3">
                    <p>{phoneNumber}</p>
                </Panel>
                <Panel header="法人代表" key="4">
                    <p>{leader}</p>
                </Panel>
                <Panel header="主营产品" key="5">
                    <p>{product}</p>
                </Panel>
            </Collapse>
        </DocumentTitle>
    );
  }
}
export default Info;