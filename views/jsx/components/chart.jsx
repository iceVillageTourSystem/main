import React, {Component} from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Button } from 'antd';
import DocumentTitle from 'react-document-title';
import * as echarts from "echarts";
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
console.log(echarts)
// var myChart = echarts.init(document.getElementById('main'));
// // 绘制图表



class Chart extends Component {
  constructor(props) {
    super(props)
   
  }

  componentDidMount() {
    console.log(this.refs.ssss)
    var myChart = echarts.init(this.refs.ssss)
    myChart.setOption({
      title: {
          text: '营业额变化情况'
      },
      tooltip: {},
      xAxis: {
          data: ['2012', '2013', '2014', '2015', '2016']
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [2000, 2900, 4200, 5300, 6000]
      }]
  });
  }


  render() {
    return (
        <div ref="ssss" style={{height:'500px'}}>3333</div>
      );
  }
}
export default Chart;