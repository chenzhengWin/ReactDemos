import React from "react";
import "./index.css";
export interface ItemProps {
  id: number;
  name: string;
  done: boolean;
}

export interface ItemState {}

class Item extends React.Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);
    this.state = { mouse: false };
  }

  handleMouse = (mouseFlag) => {
    this.setState({
      mouse: mouseFlag,
    });
  };
  render() {
    const { id,name,done,delTodo,onCheckChange} = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "#fff" }}
        onMouseEnter={() => {
          this.handleMouse(true);
        }}
        onMouseLeave={() => {
          this.handleMouse(false);
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={() => {onCheckChange(id)}}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={()=>{delTodo(id)}}
        >
          删除
        </button>
      </li>
    );
  }
}

export default Item;
