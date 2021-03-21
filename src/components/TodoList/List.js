import React from "react";
import Item from "./Item.js";
import PropTypes from "prop-types";
import "./index.css";
export interface MyListProps {}

export interface MyListState {}

class MyList extends React.Component<MyListProps, MyListState> {
  constructor(props: MyListProps) {
    super(props);
  }
  static propTypes = {
    todos: PropTypes.array.isRequired,
    delTodo:PropTypes.func.isRequired,
    onCheckChange:PropTypes.func.isRequired
  };
  render() {
    const { todos, delTodo, onCheckChange } = this.props;
    return (
      <ul className="todo-main">
        {Array.isArray(todos) && todos.length > 0 ? (
          todos.map((item, i) => {
            return (
              <Item
                key={item.id}
                delTodo={delTodo}
                onCheckChange={onCheckChange}
                id={item.id}
                done={item.done}
                name={item.name}
              />
            );
          })
        ) : (
          <div style={{ height: "80px" }}>
            <span style={{ color: "#999" }}>暂无待办事项</span>
          </div>
        )}
      </ul>
    );
  }
}

export default MyList;
