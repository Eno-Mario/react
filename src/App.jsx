import React, { useState } from "react";
import Hello from "./Hello";
import Message from "./Message"; /* the import created automatically */
import Welcome from "./Welcome";
import AlertClock from "./AlertClock";
import Counter from "./Counter";
import Clock from "./Clock";
import MouseClicker from "./MouseClicker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";
import FocusableInput from "./FocusableInput";
import FirstMount from "./FirstMount";
import Colors from "./Colors";
import TodoList from "./TodoList";
import Container from "./Container";
import GithubUser from "./GithubUser";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export const LanguageContext = React.createContext();

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  function handleLanguage(event) {
    setSelectedLanguage(event.target.value);
  }

  return (
    <BrowserRouter>
      <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |
      <Link to="/users/Eno-Mario">Github User!</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Mario" />} />
        <Route path="counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
        <Route path="*" element={<div>Not Found!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
