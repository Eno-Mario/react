import React from "react";
import Hello from "./Hello";
import Message from "./Message"; /* the import created automatically */
import Welcome from "./Welcome";
import AlertClock from "./AlertClock";
import Counter from "./Counter";
import Clock from "./Clock";
import MouseClicker from "./MouseClicker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

function App() {
  function handleShowCurrentTime () {
    const time = new Date();

    alert(`Current time is:${time.toLocaleTimeString()}`)
  }

  return (
    <div>
      <Hello />
      <Message /> {/* we can render the Message component directly within the App component, if we do it we automatically import the Message component */}
      <Hello /> {/* yes we can use component Hello more than once! */}
      <Counter />
      <Clock/>
      <MouseClicker/>
      <InteractiveWelcome/>
      <Login/>
    </div>
  );
}

export default App;
