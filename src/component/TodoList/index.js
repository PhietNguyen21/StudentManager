import { useEffect, useState } from "react";
import TodoHeader from "./SubComponent/TodoHeader";
import TodoBody from "./SubComponent/TodoBody";

export default function TodoList() {
  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem("taskList");
    const arr = JSON.parse(list);
    if (arr) {
      setListTodo(arr);
    }
  }, []);
  const addTask = (task) => {
    let emtyObj = Object.keys(task).length === 0;
    if (emtyObj) {
      return;
    }
    setListTodo([...listTodo, task]);

    localStorage.setItem("taskList", JSON.stringify([...listTodo, task]));
  };

  const deleteTask = (index) => {
    let arrNew = [...listTodo];
    arrNew.splice(index, 1);
    setListTodo(arrNew);
    localStorage.setItem("taskList", JSON.stringify(arrNew));
  };

  const editTask = (index, value) => {
    let arrNew = [...listTodo];
    arrNew[index] = value;
    setListTodo(arrNew);
    localStorage.setItem("taskList", JSON.stringify(arrNew));
  };
  return (
    <div className="todo-container">
      <header className="header">
        <TodoHeader addTask={addTask} />
      </header>
      <div className="todo-container">
        <TodoBody
          listTodo={listTodo}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}
