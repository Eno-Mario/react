import React from "react";
import Hello from "./Hello";
import Message from "./Message"; /* the import created automatically */
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Message /> {/* we can render the Message component directly within the App component, if we do it we automatically import the Message component */}
      <Hello /> {/* yes we can use component Hello more than once! */}
      <Welcome name="Luigi" /> {/* Render the component Welcome to App component, passing it a name prop of your choosing. */}
      <Welcome/> {/* if no name prop is passed to the Welcome component the default behavior is: undefined is displayed because the name prop is not provided. */}
    </div>
  );
}

export default App;
