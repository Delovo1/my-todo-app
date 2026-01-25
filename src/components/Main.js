import React, { useState } from "react";

const Main = ({ tasks, setTasks }) => {
  const [text, setText] = useState("");
  const [red, setRed] = useState(false);
  const addTask = () => {
    if (!text.trim()) {
      setRed(true);
      return;
    }
    if (text.trim().length > 200) {
      return;
    }
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false,
        removing: false,
      },
    ]);
    setRed(false);
    setText("");
  };

  const removeTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, removing: true } : task))
    );

    setTimeout(() => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }, 300);
  };

  return (
    <div className="main">
      <div className="buttons">
        <p
          className={`counter ${
            text.trim().length > 200
              ? "counter--error"
              : text.trim().length > 180
              ? "counter--warn"
              : ""
          }`}
        >
          {text.trim().length} / 200
        </p>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your task"
          style={{ borderColor: red ? "red" : "black" }}
        />
        <button className="addTodo" onClick={addTask}>
          ДОБАВИТЬ ЗАДАЧУ
        </button>
      </div>

      <div className="todolist">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task ${task.removing ? "removing" : ""}`}
          >
            <input type="checkbox" />
            <label>{task.text}</label>

            <img
              src={`${process.env.PUBLIC_URL}/images/Union.png`}
              alt="delete"
              onClick={() => removeTask(task.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
