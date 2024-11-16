import React from "react";

function Form({ setTodos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = e.target.elements.todo.value;
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    e.target.reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Add another task"
        />
      </label>
      <button>
        <span className="visually-hidden">Submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </form>
  );
}
export default Form;
