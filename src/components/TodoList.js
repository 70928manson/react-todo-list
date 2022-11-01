import React, {useState} from "react";
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }

    const [taskList, setTaskList] = useState([]);

    const saveTask = (taskObj) => {
      let tempList = taskList;
      tempList.push(taskObj);
      setTaskList(tempList);
      setModal(!modal);
    }

    return (
    <>
      <div className="header text-center">
          <h3>Todo List</h3>
          <button className="btn btn-primary mt-2" onClick={() => { setModal(true); }}>Create Task</button>
      </div>
      <div className="task-container">
          {taskList.map((obj) => <li>{obj.taskTitle}</li>)}
      </div>
      <CreateTask modal={modal} toggle={toggle} saveTask={saveTask} />
    </>
  );
}

export default TodoList;
