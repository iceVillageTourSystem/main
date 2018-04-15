import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Table, Form, Row, Col, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;
import DocumentTitle from 'react-document-title';

import "./query.less";


class Query extends Component {
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
      <div>
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
          <Row gutter={24}>
            <Col span={8}>
              <FormItem label={`Field 1`}>
                  <Input placeholder="placeholder" />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label={`Field 1`}>
                  <Input placeholder="placeholder" />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label={`Field 1`}>
                  <Input placeholder="placeholder" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">Search</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
        <Table 
            columns={[{title: 'epName', dataIndex: 'epName', key: '1'}]}
            dataSource={[{epName: '1', key: "1" }]}
            />
      </div>
    );
  }
}
export default Query;