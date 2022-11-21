import logo from "../assets/logo.svg";

function Home(props) {
  return (
    <>
      <img src={logo} alt="Logo" className="Logo" />
      <h1>What’s your social media carbon footprint?</h1>
      <div>Home</div>
      <div className="btns">
        <button onClick={() => props.setPage("form")}>Take the test!</button>
        <button onClick={() => props.setPage("form")}>Documentation</button>
      </div>
    </>
  );
}

export default Home;
