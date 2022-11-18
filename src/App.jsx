import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>What’s your social media carbon footprint?</h1>
      <Form />
    </div>
  );
}

export default App;
