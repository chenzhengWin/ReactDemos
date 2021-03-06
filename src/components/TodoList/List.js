import React from 'react'
export interface MyListProps {
  
}
 
export interface MyListState {
  
}
 
class MyList extends React.Component<MyListProps, MyListState> {
  constructor(props: MyListProps) {
    super(props);
    // this.state = { :  };
  }
  render() { 
  const n=this.props.name;
    return (
    <div><li>{n}</li></div>
    );
  }
}
 
export default MyList;