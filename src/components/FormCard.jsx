import { useState } from "react";

function FormCard(props) {
  const [state, setState] = useState(0);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="form_card">
      {props.children}
      <h3>{props.name}</h3>
      <input type="range" value={state} min="0" max="1440" step="1" onInput={handleChange} />
      <input type="number" name={props.name} value={state} onInput={handleChange} />
    </div>
  );
}

export default FormCard;
