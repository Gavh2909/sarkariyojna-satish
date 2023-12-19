import "./App.css";
import Schemes from "./Pages/Schemes";
import "./Pages/Schemes.css";
import profile from "./profile.png";

const App = () => {
  return (
    <div className="App">
      <div className="head">
        <img src={profile} />
        <h1>All Schemes</h1>
      </div>
      <Schemes />
      <div className="my-profile">
        <h1>
          This website is created by <a href="/about">Satish Gavhane</a>
        </h1>
      </div>
    </div>
  );
};

export default App;
