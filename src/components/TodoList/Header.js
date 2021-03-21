import React from "react";
import './index.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render() {
    const {addTodo}=this.props;
    return (
      <div>
        <div className="todo-header">
          <input
            type="text"
            placeholder="请输入你的任务名称，按回车键确认"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            onKeyUp={(e)=>{
              if(e.keyCode===13){
                addTodo(this.state.name)
              }
            }}
          />
        <button className='btn btn-primary' onClick={() => {
          addTodo(this.state.name)
        }}>添加</button>
        </div>
      </div>            
    );
  }
}

export default Header;
