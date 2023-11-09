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
import UncontrolledLogin from "./UncontrolledLogin";

function App() {
  function handleShowCurrentTime () {
    const time = new Date();

    alert(`Current time is:${time.toLocaleTimeString()}`)
  }

  function onLogin(data) {
    console.log('Login data:', data)
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
      <UncontrolledLogin/>
    </div>
  );
}

export default App;
