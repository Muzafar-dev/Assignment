import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskService from './Tasks/TaskService';
import TaskList from './Tasks/TaskList';
import TaskForm from './Tasks/TaskForm';
import ChartComponent from './Charts/Charts';
import Navigation from './Navigation';
const App = () => {
  const taskService = new TaskService();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    taskService.getTasks().then((response) => {
      setTasks(response);
      setIsLoading(false);
    });
  }, []);

  const addTask = (task) => {
    taskService.addTask(task);
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const editTask = (index, updatedTask) => {
    taskService.editTask(index, updatedTask);
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index] = updatedTask;
      return newTasks;
    });
  };

  const deleteTask = (index) => {
    taskService.deleteTask(index);
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/tasks"
          element={
            <>
              <TaskForm onSubmit={addTask} />
              <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} isLoading={isLoading} />
            </>
          }
        />
        <Route path="/chart" element={<ChartComponent data={[1, 2, 3, 4, 5, 6, 7, 8]} />} />
      </Routes>
    </Router>
  );
};

export default App;
