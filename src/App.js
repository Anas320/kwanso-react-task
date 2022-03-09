import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import TaskState from './context/tasks/TaskState';
import CreateTasks from './pages/createTask';
import DeleteTasks from './pages/deleteTask';
import TasksList from './pages/tasksList';
import './App.css';

function App() {
  return (
    <>
      <TaskState>
        <Router>

          <Link to="/" > List Tasks </Link>
          <Link to="/create-tasks" > Create Task </Link>
          <Link to="/delete-tasks" > Delete Tasks </Link>

          <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/delete-tasks" element={<DeleteTasks />} />
            <Route path="/create-tasks" element={<CreateTasks />} />
          </Routes>
        </Router>
      </TaskState>
    </>
  );
}

export default App;
