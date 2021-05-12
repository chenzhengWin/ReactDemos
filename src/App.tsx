import TodoList from './components/TodoList/index';
import HooksDemoFirst from './components/ReactHooksDemo/HooksDemoFirst'
import ReactRouterDemo from './components/routerPractice/RouteDemo'
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList/>
      {/* <ReactRouterDemo/> */}
      <HooksDemoFirst/>
    </div>
  );
}

export default App;
