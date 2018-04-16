import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import { Table, Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;
import DocumentTitle from 'react-document-title';

import styles from "./query.less";

const dataSource = [{
  key: '1',
  epName: '胡彦斌',
  phone: '13166661111',
  address: '西湖区湖底公园1号',
  amount:'200000000000',
  product:'滑雪'
}];

const columns = [{
  title: '组织名称',
  dataIndex: 'epName',
  key: 'epName',
}, {
  title: '联系电话',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '详细地址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '营业金额',
  dataIndex: 'amount',
  key: 'amount',
}, {
  title: '主营产品',
  dataIndex: 'product',
  key: 'product',
}];


class QueryWrap extends Component {
  constructor(props) {
    super(props)
   
  }

  state = {
    expand: false,
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  render() {
    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>
          <Col span={8}>
            <FormItem label={`组织名称`}>
                <Input placeholder="请输入组织名称" />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label={`营业金额`}>
                <Input placeholder="请输入营业金额" />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label={`员工人数`}>
                <Input placeholder="请输入员工人数" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">搜索</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清空
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const QueryForm = Form.create()(QueryWrap);

class Query extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <QueryForm />
        <Table 
          columns={columns}
          dataSource={dataSource}
          />
      </div>
    )
  }
}

export default Query;