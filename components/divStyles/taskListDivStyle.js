const taskListStyle = {
    position: "relative",
    margin: "auto",
    width: "300px",
    top: "15px",
}
function taskListItemStyle(taskStatus) {
    if (taskStatus) {
        return { textSize: "16px", textDecoration: 'line-through' };
    }
    return { textSize: "16px", textDecoration: 'none' };
}
const taskListHeaderStyle = {
    position: "relative",
    textAlign: "center",

    textSize: "13px"
}

export { taskListStyle, taskListItemStyle, taskListHeaderStyle }