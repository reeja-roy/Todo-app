import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/' element={<Todo/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
