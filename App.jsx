import React, { useState, useEffect } from 'react'
import Task from './Task.js'
import { TitleInput } from './components/divInput/TitleInput.jsx'
import { DateInput } from './components/divInput/DateInput.jsx'
import { TaskListDiv } from './TaskListDiv.jsx'
import { formatCurrentDate, validateTitle } from './auxiliar.js'
import { appDivStyle, appDivHeaderStyle, appDivButtonStyle } from './components/divStyles/appMainDivStyle.js'

document.title = "TODO list";

export function App() {

  const [title, setTitle] = useState("teste");
  const [dateLimit, setDateLimit] = useState(formatCurrentDate());
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDateChange(e) {
    setDateLimit(e.target.value);
  }

  function createTask() {
    let titleValid = validateTitle(title);

    if (!titleValid) {
      alert("Titulo invalido.");
      titleValid = validateTitle(title);

      return;
    }

    const taskId = crypto.randomUUID();
    const newTask = new Task(taskId, title, formatCurrentDate(), dateLimit, false);

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App" id="main-div" style={appDivStyle}>
      <h1 id="first-header" style={appDivHeaderStyle}>Criar tarefa</h1>

      <TitleInput title={title} onChangeFn={handleTitleChange}></TitleInput>
      <DateInput minDate={dateLimit} onChangeFn={handleDateChange}></DateInput>

      <button type="button" id="confirm-button" onClick={createTask} style={appDivButtonStyle}>Confirmar</button>

      <TaskListDiv taskList={tasks} setter={setTasks}></TaskListDiv>

    </div>

  )
}