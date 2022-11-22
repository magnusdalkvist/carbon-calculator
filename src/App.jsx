import { useRef, useState } from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import Results from "./components/Results";
import "./assets/wave.css";

function App() {
  const [page, setPage] = useState("home");
  const [form, setForm] = useState([]);

  const theForm = useRef(null);

  return (
    <>
      <div className="App">
        {page === "home" && <Home setPage={setPage} />}
        {page === "form" && <Form setPage={setPage} setForm={setForm} theForm={theForm} />}
        {page === "results" && <Results setPage={setPage} form={form} theForm={theForm} />}
      </div>
    </>
  );
}

export default App;
