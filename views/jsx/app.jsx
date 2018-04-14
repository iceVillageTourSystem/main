import React from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';

render(
  <div>
      <input type="text"/>
      <button>blabl</button>
  </div>,
	document.querySelector(".demo"),
	()=> console.log(">>>>>>　页面渲染已经完成　<<<<<<")
);