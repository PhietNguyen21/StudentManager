import UpdateTask from "../../../../modals/UpdateTask";
import Card from "../Card";

export default function TodoBody({ listTodo, deleteTask, editTask }) {
  return (
    <div className="ListToDo">
      {listTodo.map((todo, index) => {
        return (
          <>
            <Card
              todo={todo}
              index={index}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          </>
        );
      })}
    </div>
  );
}
