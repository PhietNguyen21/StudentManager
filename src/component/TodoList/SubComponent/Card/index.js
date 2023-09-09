import { useState } from "react";
import UpdateTask from "../../../../modals/UpdateTask";

export default function Card({ todo, index, deleteTask, editTask }) {
  const handelDelete = () => {
    deleteTask(index);
  };
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handelEdit = (value) => {
    editTask(index, value);
    setModal(false);
  };
  return (
    <>
      <div class="todo-card">
        <h2>{todo.taskName}</h2>
        <p>{todo.description}</p>

        <button className="delete-button" onClick={handelDelete}>
          Delete
        </button>
        <button
          className="edit-button"
          onClick={() => {
            setModal(true);
          }}
        >
          Edit
        </button>
        <UpdateTask
          className="c"
          handelEdit={handelEdit}
          todo={todo}
          modal={modal}
          toggle={toggle}
        />
      </div>
    </>
  );
}
