import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }


  componentDidMount() {
    console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
  }
  componentDidUpdate() {
    console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
  }
  addCount=()=> {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        {/* <button onClick={this.addCount.bind(this)}>Chlick me</button> */}
        <button onClick={this.addCount}>Chlick me</button>
      </div >
    );
  }

}

export default Example;
