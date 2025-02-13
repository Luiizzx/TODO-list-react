import React from 'react'
import { taskListItemStyle } from './components/divStyles/taskListDivStyle'
import { stringConstructor } from './auxiliar';

export function TaskListItem({ task, onChangeFn, onClickFn }) {
    const itemContent = stringConstructor(task);
    const stringStyle1 = taskListItemStyle(task.status);

    return (
        <>
            <li id={task.id} style={stringStyle1}>{itemContent}</li>
            <input id={"box" + task.id} type="checkbox" onChange={(e) => onChangeFn(e, task)}></input>

            <button id={"button" + task.id} type="button" onClick={() => onClickFn(task)}>Deletar</button>
        </>
    )
}