import FormCard from "./FormCard";
import styles from "../assets/slider.css";

function Form(props) {
  function submit(e) {
    e.preventDefault();

    const arr = Array.from(props.theForm.current.elements).filter((e) => e.type == "number");

    let totalMin = 0;
    arr.forEach((e) => {
      e.value > 0 ? (totalMin += parseInt(e.value)) : null;
    });
    if (totalMin > 1440) {
      console.log(totalMin);
      alert("Theres only 1440 minutes in a day!");
      return false;
    }

    props.setForm(arr);
    props.setPage("results");
  }
  return (
    <>
      <h1 className="center">How many minutes a day do you use on:</h1>
      <form ref={props.theForm} onSubmit={submit} className="form">
        <div className="cards">
          <FormCard name="Youtube">
            <svg className="youtube svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
            </svg>
          </FormCard>
          <FormCard name="Facebook">
            <svg className="facebook svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </FormCard>
          <FormCard name="Instagram">
            <svg className="instagram svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
            </svg>
          </FormCard>
          <FormCard name="Twitter">
            <svg className="twitter svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
            </svg>
          </FormCard>
          <FormCard name="Pinterest">
            <svg className="pinterest svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </FormCard>
          <FormCard name="Twitch">
            <svg className="twitch svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <path d="M10.224 17.806l1.776-1.776h3.343l2.09-2.09v-6.686h-10.03v8.776h2.821v1.776zm3.866-8.149h1.254v3.653h-1.254v-3.653zm-3.344 0h1.254v3.653h-1.254v-3.653zm1.254-9.657c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.687 14.567l-3.657 3.657h-2.716l-1.777 1.776h-1.88v-1.776h-3.344v-9.821l.941-2.403h12.433v8.567z" />
            </svg>
          </FormCard>
          <FormCard name="LinkedIn">
            <svg className="linkedin svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
          </FormCard>
          <FormCard name="Tiktok">
            <svg className="tiktok svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </FormCard>
          <FormCard name="Reddit">
            <svg className="reddit svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z" />
            </svg>
          </FormCard>
          <FormCard name="Snapchat">
            <svg className="snapchat svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.126 16.475c-.057.077-.103.4-.178.655-.086.295-.356.262-.656.203-.437-.085-.827-.109-1.281-.034-.785.131-1.601 1.292-2.969 1.292-1.472 0-2.238-1.156-3.054-1.292-.832-.138-1.31.084-1.597.084-.221 0-.307-.135-.34-.247-.074-.251-.12-.581-.178-.66-.565-.087-1.84-.309-1.873-.878-.008-.148.096-.279.243-.303 1.872-.308 3.063-2.419 2.869-2.877-.138-.325-.735-.442-.986-.541-.648-.256-.739-.55-.7-.752.053-.28.395-.468.68-.468.275 0 .76.367 1.138.158-.055-.982-.194-2.387.156-3.171.667-1.496 2.129-2.236 3.592-2.236 1.473 0 2.946.75 3.608 2.235.349.783.212 2.181.156 3.172.357.197.799-.167 1.107-.167.302 0 .712.204.719.545.005.267-.233.497-.708.684-.255.101-.848.217-.986.541-.198.468 1.03 2.573 2.869 2.876.146.024.251.154.243.303-.033.569-1.314.791-1.874.878z" />
            </svg>
          </FormCard>
        </div>
        <div className="btns">
          <button onClick={() => props.setPage("home")} type="button">
            Back to start
          </button>
          <button onClick={submit} type="submit">
            See the results
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
