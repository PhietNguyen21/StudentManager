import { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default function UpdateTask({ modal, toggle, handelEdit, todo }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTaskName(todo.taskName);
    setDescription(todo.description);
  }, []);
  const handelClickSave = () => {
    const object = {
      id: Math.floor(Math.random() * 1000),
      taskName: taskName,
      description: description,
    };
    if (Object.keys(object.taskName).length === 0) {
      return;
    }
    handelEdit(object);
    setTaskName("");
    setDescription("");
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>
              <b>Task Name</b>
            </label>
            <input
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group des">
            <label>
              <b>Description</b>
            </label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              className="form-control"
            ></textarea>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handelClickSave}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
