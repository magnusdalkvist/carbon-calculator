function Home(props) {
  return (
    <>
      <h1>What’s your social media carbon footprint?</h1>
      <div>Home</div>
      <button onClick={() => props.setPage("form")}>Take the test!</button>
    </>
  );
}

export default Home;
