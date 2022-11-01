import React, { useState, useEffect } from "react";
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
      let arr = localStorage.getItem("taskList");

      if(arr) {
        let obj = JSON.parse(arr); //string -> obj
        setTaskList(obj)
      }
    }, [])

    const saveTask = (taskObj) => {
      let tempList = taskList;
      tempList.push(taskObj);
      localStorage.setItem("taskList", JSON.stringify(tempList));
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
