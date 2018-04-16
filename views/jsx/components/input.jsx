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

const columns = [{title: 'Name', dataIndex: 'name', key: 'name'}];
  
class InputInfo extends Component {
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
        <Form>
            <FormItem label="公司全称">
                <Input/>
            </FormItem>
            <FormItem label="详细地址">
                <Input/>
            </FormItem>
            <FormItem label="联系电话">
                <Input/>
            </FormItem>
            <FormItem label="E-mail">
                <Input/>
            </FormItem>
            <FormItem label="法人代表">
                <Input/>
            </FormItem>
            <FormItem label="年度">
                <Input/>
            </FormItem>
            <FormItem label="营业额">
                <Input/>
            </FormItem>
            <FormItem label="产品类型">
                <Input/>
            </FormItem>
            <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button style={{ marginLeft: 8 }} onClick={this.handleSubmit}>提交</Button>
            </Col>
          </Row>
        </Form>
    );
  }
}
export default InputInfo;