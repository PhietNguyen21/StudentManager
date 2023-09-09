import "./App.css";
import Employee from "./component/Employee";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App-todo">
      {/* <TodoList /> */}
      <Employee />
    </div>
  );
}

export default App;
