import React, {useState} from "react";
import Form from "./components/Form";
import Header from "./components/Header.jsx";
import TODOHero from "./components/ToDoHero.jsx";
import TODOList from "./components/ToDoList.jsx";
import "./index.css";

function Home() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={0} total_todos={0} />
      <Form />
      <TODOList todos={todos} />
    </div>
  );
}
export default Home;
