import React from "react";
import Hello from "./Hello";
import Message from "./Message"; /* the import created automatically */
import Welcome from "./Welcome";
import AlertClock from "./AlertClock";
import Counter from "./Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  function handleShowCurrentTime() {
    const time = new Date();

    alert(`Current time is:${time.toLocaleTimeString()}`);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
