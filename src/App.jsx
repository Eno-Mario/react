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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export const LanguageContext = React.createContext();

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  function handleLanguage(event) {
    setSelectedLanguage(event.target.value);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
