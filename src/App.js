import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schemes from "./Pages/Schemes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index Component={<Schemes />} />
          {/* <Route path="/about" Component={<h1>This is about Page</h1>} /> */}
        </Routes>
      </BrowserRouter>
      <Schemes />
    </div>
  );
}

export default App;
