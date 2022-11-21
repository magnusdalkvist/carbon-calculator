import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import Form from "./components/Form";
import Home from "./components/Home";
import Results from "./components/Results";

function App() {
  const [page, setPage] = useState("form");
  const [form, setForm] = useState([]);

  const theForm = useRef(null);

  return (
    <div className="App">
      {page === "home" && <Home />}
      {page === "form" && <Form setPage={setPage} setForm={setForm} theForm={theForm} />}
      {page === "results" && <Results form={form} theForm={theForm} />}
    </div>
  );
}

export default App;
