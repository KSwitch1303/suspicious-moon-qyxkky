import { Routes, Route } from "react-router-dom";
//jfj
import App from "./App.js";
function Link() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default Link;
