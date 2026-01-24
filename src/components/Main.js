import React, { useState } from "react";

const Main = ({ tasks, setTasks }) => {
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text.trim()) return;

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
  };

  const removeTask = (id) => {
    // 1. запускаем анимацию
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, removing: true } : task))
    );

    // 2. реально удаляем после анимации
    setTimeout(() => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }, 300);
  };

  return (
    <div className="main">
      <div className="buttons">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your task"
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
              src="images/Union.png"
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
