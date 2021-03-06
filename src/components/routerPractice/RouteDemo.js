import React from "react";
// eslint-disable-next-line
import ReactDOM from "react-dom";
import { Link, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";

class ReactRouterDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HashRouter>
      {/* HashRouter时地址栏多了一个/# 如：loaclhost:3000/#/home
      而Browser没有，是直接的 /home
      */}
        <div
          style={{
            float:"left",
            width: "100px",
            height: "500px",
            backgroundColor: "lightgreen",
          }}
        >
          <Link to="/home">首页</Link>
          <br />
          <Link to="/about">关于</Link>
        </div>
        <div
          style={{ flex: 1,marginLeft:'120px', backgroundColor: "pink", width: 500, height: 500 }}
        >
          <Route path="/home" component={Home} />

          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}

export default ReactRouterDemo;
