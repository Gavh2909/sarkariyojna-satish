import { useState } from "react";
import "./App.css";
import Schemes from "./Pages/Schemes";
import "./Pages/Schemes.css";
import profile from "./profile.jpg";
import About from "./Pages/About";

const App = () => {
  const [click, setClick] = useState("home");
  return (
    <div className="App">
      <div className="head">
        <img src={profile} onClick={() => setClick("about")} />
        <h1 onClick={() => setClick("home")}>🌾शेतकरी योजना🌾 </h1>
      </div>
      {click === "home" && <Schemes />}
      {click === "about" && <About />}
      <div className="my-profile">
        <h1>
          This website is created by{" "}
          <a onClick={() => setClick("about")}>Satish Gavhane</a>
        </h1>
      </div>
    </div>
  );
};

export default App;
