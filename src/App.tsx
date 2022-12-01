import React from "react";
import { Route, Routes } from "react-router-dom";
import "styles/App.css";

const App = (): JSX.Element => {
  return (
    <>
      <header>
        <h1>React App</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic
              culpa, harum ab modi totam eum maxime, commodi obcaecati sed
              dolore quasi voluptas quia! Voluptatibus aliquid molestiae
              ducimus. Sit, facilis.
            </p>
          }
        />
      </Routes>
    </>
  );
};

export default App;
