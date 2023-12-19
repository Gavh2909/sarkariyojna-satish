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
      <h1>All Schemes</h1>
      {Data.schemes.map((scheme) => {
        return (
          <div className="scheme">
            <h2>
              Yojna {scheme.id}: {scheme.heading}
            </h2>
            <p>How To Apply?</p>
            <p>{scheme.steps}</p>
            <p>Apply Before : {scheme.lastdate}</p>
            <YouTube videoId={scheme.yLink} opts={opts} onReady={onReady} />
            Apply Link : <a href={scheme.link}>{scheme.link}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Schemes;
