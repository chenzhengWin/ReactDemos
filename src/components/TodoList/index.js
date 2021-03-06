import React from 'react';
import MyList from "./List";
import Header from "./Header";
import Footer from "./Footer";

export interface TodoItem{
  id?:number;
  name?:string;
  done?:boolean;
}

export interface TodoListProps {
  
}

export interface TodoListState {
  todos:TodoItem[];
}
 
class TodoList extends React.Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props);
    this.state = { todos:[]  };
  }
  render() { 
    return (
      <div style={{border:'1px solid #666', width:'500px',height:'300px',padding:'5px'}}>
        <Header/>
        <MyList name='lili'/>
        <Footer/>
      </div>
    );
  }
}
 
export default TodoList;