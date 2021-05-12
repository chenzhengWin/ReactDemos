import React from "react";
import MyList from "./List";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";
import Item from "antd/lib/list/Item";

export interface TodoItemType {
  id?: number;
  name?: string;
  done?: boolean;
}

export interface TodoListProps {}

export interface TodoListState {
  todos: TodoItemType[];
}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props);  
  }
  state = {
      todos: [
        { id: 1, name: "逛街", done: true },
        { id: 2, name: "喝水", done: false },
        { id: 3, name: "做饭", done: false },
      ],
    };

  // 添加
  addTodo = (name: string) => {
    const { todos } = this.state;
    const id = todos.length + 1;
    todos.push({ id, name, done: false });
    this.setState({
      todos,
    });
  };
  // 删除
  delTodo = (id: number) => {
    const { todos } = this.state;
    const newTodos = todos.filter((item: TodoItemType) => {
      return item.id !== id;
    });
    this.setState({
      todos: newTodos,
    });
  };

  // 是否完成
  onCheckChange = (id: number) => {
    const { todos } = this.state;
    const newTodos = todos.map((item: TodoItemType, index) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState({ todos: newTodos });
  };

  // 清除全部已完成
  onClearHasDone = () => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((item: TodoItemType) => {
        // return item.done != true;
        // 优化
        return !item.done;
      }),
    });
  };

  // 全选、全不选
  onCheckAll = (checkFlag: boolean) => {
    const { todos } = this.state;
    const newTodos=todos.map((item: TodoItemType) => {
      // item.done = checkFlag;
      // return item;
      // 优化 done重写
      return {...item,done:checkFlag};
    });
    this.setState({
      todos:newTodos 
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <MyList
            todos={todos}
            delTodo={this.delTodo}
            onCheckChange={this.onCheckChange}
          />
          <Footer
            todos={todos}
            onClearHasDone={this.onClearHasDone}
            onCheckAll={this.onCheckAll}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
