import React, { useState, useEffect } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

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

    const deleteTask = (index) => {
      let tempList = taskList;
      tempList.splice(index, 1);
      localStorage.setItem("taskList", JSON.stringify(tempList));
      setTaskList(tempList);
      window.location.reload();
    }

    const saveTask = (taskObj) => {
      let tempList = taskList;
      tempList.push(taskObj);
      localStorage.setItem("taskList", JSON.stringify(tempList));
      setTaskList(tempList);
      setModal(!modal);
    }

    const updateListArray = (obj, index) => {
      let tempList = taskList
      tempList[index] = obj
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
    }

    return (
    <>
      <div className="header text-center">
          <h3>Todo List</h3>
          <button className="btn btn-primary mt-2" onClick={() => { setModal(true); }}>Create Task</button>
      </div>
      <div className="task-container">
          {taskList && taskList.map((obj, index) => 
              <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} key={index}/>)}
      </div>
      <CreateTask modal={modal} toggle={toggle} saveTask={saveTask} />
    </>
  );
}

export default TodoList;
