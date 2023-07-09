import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
// import Adopt from "./Components/Category/Category";
import Category from "./Components/Category/Category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
