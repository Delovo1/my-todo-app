import "./style.css";
import React, { useState, useEffect } from "react";
import Documentation from "./components/Documentation";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Documentation />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Main tasks={tasks} setTasks={setTasks} />
      <Footer />
    </>
  );
};

export default App;
