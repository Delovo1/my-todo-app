import React, { useState } from "react";

const Main = ({ tasks, setTasks }) => {
  const [text, setText] = useState("");
  const [red, setRed] = useState(false);
  const [where, setWhere] = useState(true);
  const toggleTodo = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (!text.trim()) {
      setRed(true);
      return;
    }

    if (text.trim().length > 200) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false,
        removing: false,
      },
    ]);

    setText("");
    setRed(false);
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
          style={{ borderColor: red ? "red" : "#8c8273" }}
        />

        <button className="addTodo" onClick={addTask}>
          ДОБАВИТЬ ЗАДАЧУ
        </button>
      </div>

      <div className="todolist">
        <img
          className={`sorted ${tasks.length === 0 ? "off" : "on"}`}
          src={`${process.env.PUBLIC_URL}/images/${
            where ? "sortdown" : "sortup"
          }.png`}
          alt="sorted button"
          title="sort your tasks!"
          onClick={() => {
            const countcompl = tasks.filter((task) => task.completed).length;
            if (
              countcompl === 0 ||
              countcompl === tasks.length ||
              tasks.length === 1
            ) {
              return;
            }
            if (where) {
              setTasks((prev) =>
                [...prev].sort((a, b) => a.completed - b.completed)
              );
              setWhere(false);
              return;
            }
            setTasks((prev) =>
              [...prev].sort((a, b) => b.completed - a.completed)
            );
            setWhere(true);
          }}
        />
        {[...tasks].map((task) => (
          <div
            key={task.id}
            className={`task 
                ${task.removing ? "removing" : ""} 
                ${task.completed ? "completed" : ""}
              `}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTodo(task.id)}
            />

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
