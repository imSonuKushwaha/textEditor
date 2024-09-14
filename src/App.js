import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("white");
  const [Dcolor, setDcolor] = useState("#6c757d");
  const [alert, setAlert] = useState(null);

  const changeColorBlue = () => {
    setColor("#437bcf");
    setDcolor("#0d6efd");
    document.body.style.backgroundColor = "#437bcf";
    showAlert("Blue mode has been enabled", "success");
  };
  const changeColorGreen = () => {
    setColor("#3ad18b");
    setDcolor("#198754");
    document.body.style.backgroundColor = "#3ad18b";
    showAlert("Green mode has been enabled", "success");
  };
  const changeColorYellow = () => {
    setColor("#dab956");
    setDcolor("#ffc107");
    document.body.style.backgroundColor = "#dab956";
    showAlert("Yellow mode has been enabled", "success");
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setColor("#2b2f32");
      setDcolor("#141516");
      document.body.style.backgroundColor = "#2b2f32";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setColor("white");
      setDcolor("#6c757d");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router basename="/textEditor">
        <Navbar
          title="textEditor"
          mode={mode}
          toggleMode={toggleMode}
          changeColorBlue={changeColorBlue}
          changeColorGreen={changeColorGreen}
          changeColorYellow={changeColorYellow}
        />
        <Alert alert={alert} Dcolor={Dcolor} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About color={color} mode={mode} />}
            />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse below"
                  mode={mode}
                  showAlert={showAlert}
                  color={color}
                  Dcolor={Dcolor}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
