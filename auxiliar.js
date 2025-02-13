import Task from './Task'
/** arquivo com funções diversas */
export function validateTitle(title) {
    if (title === "" || title.length > 30) {
        return false;
    }
    return true;
}

export function formatCurrentDate() {
    const currentDate = new Date();

    let utcMonth = currentDate.getUTCMonth() + 1;
    let utcDay = currentDate.getUTCDate();

    if (utcMonth < 10) {
        utcMonth = "0" + utcMonth;
    }

    if (utcDay < 10) {
        utcDay = "0" + utcDay;
    }

    const formattedDate = currentDate.getFullYear() + "-" + utcMonth + "-" + utcDay;

    return formattedDate;
}

export function createTask(title, end) {
    const taskId = crypto.randomUUID();

    const task = new Task();
    task.setTaskDetails(taskId, title, formatCurrentDate(), end);

    return task;
}

export function stringConstructor(arg) {
    let strConcat;
    if (arg.end === "") {
        strConcat = "Task: " + arg.title + " | Inicio: " + arg.start;
    }

    strConcat = "Task: " + arg.title + " | Inicio: " + arg.start + "| Fim: " + arg.end;

    return strConcat;
}