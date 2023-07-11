import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
// import Adopt from "./Components/Category/Category";
import Adopt from "./Components/Adopt/Adopt";
import Category from "./Components/Category/Category";
import Details from "./Components/Details/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route>
          <Route path="/category" element={<Category />} />
          <Route path="/adopt/:animalType" element={<Adopt />} />
          <Route path="/adopt/:animalType/:animalID" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
