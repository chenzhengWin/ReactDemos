import React from "react";
import { TodoItemType } from "./index";
import "./index.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    const { todos, onClearHasDone, onCheckAll } = this.props;
    const { checked } = this.state;
    const total = todos.length;
    // 已完成
    const doneCount = todos.reduce((pre, currentItem: TodoItemType) => {
      return pre + currentItem.done;
    }, 0);

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={total === doneCount && total !== 0 ? true : false}
            onChange={(e) => {
              onCheckAll(e.target.checked);
            }}
          />
        </label>
        <span>
          <span>已完成 {doneCount}</span> / 全部 {total}
        </span>
        <button
          className="btn btn-danger"
          onClick={() => {
            onClearHasDone();
          }}
        >
          清除已完成任务
        </button>
      </div>
    );
  }
}

export default Footer;
