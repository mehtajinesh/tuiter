// import logo from "./logo.svg";
import "./App.css";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import HelloWorld from "./components/hello-world";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/Labs/todo";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/hello" element={<HelloWorld />} />
          <Route exact path="/" element={<Labs />} />
            <Route exact path="/tuiter" element={<Tuiter />} />
            <Route exact path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
