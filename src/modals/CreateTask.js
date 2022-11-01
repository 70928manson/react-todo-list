import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, toggle, saveTask }) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        //const {name, value} = e.target
        const name = e.target.name;
        const value = e.target.value;

        if (name === "taskTitle") {
            setTaskTitle(value);
        }else if(name === "description") {
            setDescription(value);
        }
    }

    const handleSave = () => {
        let taskObj = {};
        taskObj.taskTitle = taskTitle;
        taskObj.description = description;
        saveTask(taskObj);
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Title</label>
                        <input type="text" className="form-control" name="taskTitle" 
                            value={taskTitle} onChange={handleChange}></input>
                    </div>
                    <div className="form-group mt-3">
                        <label>Description</label>
                        <textarea rows="5" className="form-control" name="description" 
                            value={description} onChange={handleChange}></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;