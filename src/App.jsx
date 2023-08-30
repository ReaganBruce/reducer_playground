import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Beers from "./views/Beers";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Beers />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
