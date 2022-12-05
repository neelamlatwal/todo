// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import TodosContainer from "./features/todo/TodosContainer";
import TodoDetailContainer from "./features/todo/TodoDetailContainer";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="row m-5">
          <div className="col-12 col-md-6">
            <TodosContainer></TodosContainer>
          </div>

          <div className="col-12 col-md-6">
            <Routes>
              <Route
                exact
                path="/todos"
                element={<TodoDetailContainer showDefault={true} />}
              />
              <Route exact path="/todos/:id" element={<TodoDetailContainer />} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
