import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {Table, Button } from 'antd';
import DocumentTitle from 'react-document-title';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class InputInfoWrap extends Component {
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

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  getFields = () => {
    const { getFieldDecorator } = this.props.form;
    const inputValue = [
        {type: 'text', name: '公司全称', prefix: () => <Icon type="home" />}, 
        {type: 'text', name: '详细地址', prefix: () =>  <Icon type="environment" />},
        {type: 'number', name: '联系电话', prefix: () => <Icon type="phone" />},
        {type: 'email', name: 'E-mail', prefix: () => <Icon type="mail" />},
        {type: 'text', name: '法人代表', prefix: () => <Icon type="user" />},
        {type: 'text', name: '年度', prefix: () => <Icon type="clock-circle-o" />},
        {type: 'text', name: '营业额', prefix: () => <Icon type="pie-chart" /> },
        {type: 'text', name: '营业类型', prefix: () => <Icon type="appstore-o" />}];
    const cd = [];

    for(let i = 0; i<inputValue.length; i++) {
      cd.push(
        <Col key={i}>
          <FormItem label={inputValue[i].name}>
            {getFieldDecorator(inputValue[i].name, {
              rules: [{
                required: true,
                message: '请输入内容',
              }]
            })(
              <Input
                style={{fontSize: '14px'}}
                prefix={inputValue[i].prefix ? inputValue[i].prefix(): null}
                type={inputValue[i].type}
                placeholder={`请输入${inputValue[i].name}`} />
            )}
          </FormItem>
        </Col>
      )
    }
    return (cd)
  }

  render() {
    return (
        <Form  onSubmit={this.handleSearch}>
            <Row>
                {this.getFields()}
            </Row>
            <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                    <Button style={{ marginLeft: 8 }} htmlType="submit">提交</Button>
                </Col>
          </Row>
        </Form>
    );
  }
}


const InputInfoForm = Form.create()(InputInfoWrap);

class InputInfo extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <DocumentTitle title="输入数据">
          <InputInfoForm />
        </DocumentTitle>
      )
    }
  }

export default InputInfo;