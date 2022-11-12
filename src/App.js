import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TaskPage from './pages/TaskPage';
import CreateTask from './pages/CreateTask';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/createTask' element={<CreateTask />}></Route>
          <Route path='/tasks' element={<TaskPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
