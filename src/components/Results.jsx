import data from "../assets/data.json";

function Results(props) {
  const arr = props.form.map((e) => {
    return { name: e.name, value: e.value };
  });

  console.log();

  const youtube = arr[0].value * data.co2.youtube;
  const facebook = arr[1].value * data.co2.facebook;
  const instagram = arr[2].value * data.co2.instagram;
  const twitter = arr[3].value * data.co2.twitter;
  const pinterest = arr[4].value * data.co2.pinterest;
  const twitch = arr[5].value * data.co2.twitch;
  const linkedin = arr[6].value * data.co2.linkedin;
  const tiktok = arr[7].value * data.co2.tiktok;
  const reddit = arr[8].value * data.co2.reddit;
  const snapchat = arr[9].value * data.co2.snapchat;

  const total = (youtube + facebook + instagram + twitter + pinterest + twitch + linkedin + tiktok + reddit + snapchat).toFixed(2);
  const year = ((total * 365) / 1000).toFixed(2);
  const driving = ((total / 1000) * 0.196974607).toFixed(2);

  //   console.log(all.toFixed(2) + "g CO2");
  //   console.log(((all * 365) / 1000).toFixed(2) + "Kg CO2 per year");
  //   console.log((allKm * 0.196974607).toFixed(2) + "km driven in a Toyota Corolla");
  return (
    <div>
      <h1>Total: {total}g CO2 pr. day</h1>
      <h1>Total: {year}kg CO2 pr. year</h1>
      <h2>That is the equivelent of driving {driving}km in a Toyota Corolla</h2>
      <div className="btns">
        <button onClick={() => props.setPage("home")}>Back to start</button>
        <button onClick={() => props.setPage("form")}>Take the test again</button>
      </div>
    </div>
  );
}

export default Results;
