import logo from "../assets/logo.svg";

function Home(props) {
  return (
    <>
      <img src={logo} alt="Logo" className="Logo" />
      <div className="text">
        <h1>The carbon-emissions are rising!</h1>
        <p>And the internet is a huge part of the problem. ”Ultimately the energy used in our digital consumption collectively emits the equivalent amount of carbon as the entire airline industry”</p>
        <p>This is equivalent to about 3.7% of global greenhouse emissions. And is expected to double by 2025.</p>
        <p>One of the biggest sinners are Social Media. This CarbonCalculator reveals how big a impact Social Media have on the environment</p>
      </div>
      <div>
        <h2 className="center">Take the test to see your carbon footprint</h2>
        <div className="btns">
          <button onClick={() => props.setPage("form")}>Take the test</button>
          <button onClick={() => props.setPage("form")}>Documentation</button>
        </div>
      </div>
    </>
  );
}

export default Home;
