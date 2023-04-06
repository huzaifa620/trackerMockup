import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import NotFound from "./404"
import { useState } from "react";

function App() {
  const [navBar, setNavBar] = useState([1, 0]);

  return (
    <div className="App">
      <Header navBar={navBar} setNavBar={setNavBar} />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Home navBar={navBar} setNavBar={setNavBar} />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <About navBar={navBar} setNavBar={setNavBar} />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <NotFound setNavBar={setNavBar} />
            </>
          }
        />

      </Routes>

    </div>
  );
}

export default App;