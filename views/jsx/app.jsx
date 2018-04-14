import React from "react";
import ReactDOM from "react-dom";


ReactDOM.render(
    <div>
        <input type="text"/>
        <button>blabl</button>
    </div>,
	document.querySelector(".demo"),
	()=> console.log(">>>>>>　页面渲染已经完成　<<<<<<")
);