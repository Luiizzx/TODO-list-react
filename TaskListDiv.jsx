import React from 'react'
import { TaskListItem } from './TaskListItem'
import { taskListStyle, taskListHeaderStyle } from './components/divStyles/taskListDivStyle'

export function TaskListDiv({ taskList, setter }) {

    function handleBoxChange(e, task) {
        task.status = e.target.checked;
        setter([...taskList]);
    }

    function handleDelete(task) {
        let index;
        for (let j = 0; j < taskList.length; j++) {
            if (taskList[j].id === task.id) {
                index = j;
                break;
            }
        }

        if (!task.status) {
            const bool = window.confirm("Deseja remover a tarefa nao marcada?");

            if (!bool) {
                return;
            }
        }

        taskList.splice(index, 1);
        setter([...taskList]);
    }

    return (
        <div className='TaskListDiv' id="list-div" style={taskListStyle}>
            <h1 id="list-header" style={taskListHeaderStyle}>Tarefas:</h1>
            <ol id="task-list">
                {taskList.map((task) =>
                    <TaskListItem onChangeFn={handleBoxChange} onClickFn={handleDelete} key={task.id} task={task}></TaskListItem>
                )}
            </ol>
        </div>
    )
}
