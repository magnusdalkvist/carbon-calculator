import React from "react";

function documentation(props) {
  return (
    <div>
      <h2>Thank you for exploring our calculator</h2>
      <div className="btns">
        <button onClick={() => props.setPage("home")}>Back to start</button>
        <button onClick={() => props.setPage("form")}>Take the test</button>
      </div>
    </div>
  );
}

export default documentation;
