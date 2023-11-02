import React from "react";
import Hello from "./Hello";
import Message from "./Message"; /* the import created automatically */

function App() {
  return (
    <div>
      <Hello />
      <Message /> {/* we can render the Message component directly within the App component, if we do it we automatically import the Message component */}
      <Hello /> {/* yes we can use component Hello more than once! */}
    </div>
  );
}

export default App;
