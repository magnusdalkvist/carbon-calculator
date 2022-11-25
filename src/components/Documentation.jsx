function documentation(props) {
  return (
    <div>
      <div>
        <h2>Thank you for exploring our calculator</h2>
        <h3>Here are our sources we used to produce this</h3>
        <ul>
          <li>
            <a href="https://greenspector.com/en/social-media-2021/">https://greenspector.com/en/social-media-2021/</a>
            <p>
              Title: What is the environmental footprint for social media applications <br />
              By: Kimberley DERUDDER <br />
              Published: October 26, 2021
            </p>
          </li>
          <li>
            {" "}
            <a href="https://www.co2everything.com/">https://www.co2everything.com/</a>
            <p>Title: CO2 Everything</p>
          </li>
          <li>
            {" "}
            <a href="https://www.climatecare.org/resources/news/infographic-carbon-footprint-internet/">https://www.climatecare.org/resources/news/infographic-carbon-footprint-internet/</a>
            <p>
              Title: What is the environmental footprint for social media applications <br />
              By: Vaughan Lindsay, Climate Impact Partners CEO <br />
              Published: 22nd April 2021
            </p>
          </li>
          <li>
            {" "}
            <a href="https://github.com/magnusdalkvist/carbon-calculator">https://github.com/magnusdalkvist/carbon-calculator</a>
            <p>
              Title: Sourcecode <br />
              By: Lasse & Magnus
            </p>
          </li>
        </ul>
      </div>
      <div className="btns">
        <button onClick={() => props.setPage("home")}>Back to start</button>
        <button onClick={() => props.setPage("form")}>Take the test</button>
      </div>
    </div>
  );
}

export default documentation;
