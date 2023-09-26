import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/" style={{marginRight: 20}}>Go to HomePage</Link>
            <Link to="/about">Go to About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
