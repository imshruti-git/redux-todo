
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TotalItems from './components/TotalItems';


function App() {
  return (
    <div className="container bg-blue p-5 mt-3">
      <h1>hello</h1>
      <AddTodo />
      <TodoList />
      <TotalItems />
    </div>
  );
}

export default App;
