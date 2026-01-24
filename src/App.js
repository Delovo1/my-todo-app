import "./style.css";
import React, { useState } from "react";
import Documentation from "./components/Documentation";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
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
