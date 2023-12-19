import Data from "../Data.json";
import "./Schemes.css";
import YouTube from "react-youtube";
const opts = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const onReady = (event) => {
  event.target.pauseVideo();
};

const Schemes = () => {
  return (
    <div className="schemes-home">
      {Data.schemes.map((scheme) => {
        return (
          <div className="scheme">
            <h3>
              योजना  {scheme.id}: {scheme.heading}
            </h3 >
            
            <p>👉खालीलप्रमाणे अर्ज करा.. </p>
            {scheme.steps.map((step) => {
              return <p>{step}</p>;
            })}
            <p>Apply Before : {scheme.lastdate}</p>
            <YouTube videoId={scheme.yLink} opts={opts} onReady={onReady} />
            Apply Link : <a href={scheme.link}>येथे क्लिक करा </a>
          </div>
        );
      })}
      <h3>टीप : वेळेनुसार अजून योजना येथे पोस्ट केल्या जातील !!</h3>
    </div>
  );
};

export default Schemes;
