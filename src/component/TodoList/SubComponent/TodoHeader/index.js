import { useState } from "react";
import CreateTask from "../../../../modals/CreateTask";

export default function TodoHeader({ addTask }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handelAddTask = (obj) => {
    addTask(obj);
    setModal(false);
  };

  return (
    <>
      <div className="header-content">
        <h1>What's your plans tody?</h1>
        <button
          className="btn-add"
          onClick={() => {
            setModal(true);
          }}
        >
          Add Task
        </button>
      </div>
      <CreateTask modal={modal} toggle={toggle} handelAddTask={handelAddTask} />
    </>
  );
}
