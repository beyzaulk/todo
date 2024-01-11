import React, { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitlr,
        isCompleted: false,
      },
    ]);
  }

  return (
    <>
      <Header onAddTask=(addTask) />
      <Tasks />
    </>
  );
}

export default App;
