import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Discount from "./discount";
import RatingDisplay from "./rating";
import ToggleButton from "./practice";
import RatingDisplay2 from "./rating2";
import Grid from "./grid";
import { NavLink, Routes, Route } from "react-router-dom";
import Grid2 from "./grid2";
import Form from "./question-answer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Assignment1 />} />
        <Route path="/assignment2" element={<Assignment2 />} />
        {/* <Route path="/discountapp" element={<Discountapp />} />
        <Route path="/form" element={<Form2 />} /> */}
        <Route path="*" element={
      <>
        <h1>404: Page Not Found</h1>
      <button><a href="/">Go to Home page</a></button>
      </>
      } />
      </Routes>
    </>
  );
}

function Assignment1() {
  return (
    <section>
      <div>
        <RatingDisplay
          reviews={[
            { title: "Winter's Orbit", rating: "5" },
            { title: "Dial D for Deadman", rating: "4" },
          ]}
        />
        <RatingDisplay2 />
      </div>
    </section>
  );
}

function Assignment2() {
  return (
    <section>
      <div>
        <Grid />
        <Grid2 numRows={2} numCols={4} />
      </div>
    </section>
  );
}

function Discountapp() {
  return (
    <section>
      <div>
        <ToggleButton />
        <Discount />
      </div>
    </section>
  );
}

function Form2() {
  return (
    <section>
      <div>
        <Form />
      </div>
    </section>
  );
}

function Navigation() {
  return (
    <section className="nav-container">
      <NavLink
        to="/"
        className="nav-link"
        style={({ isActive }) =>
          isActive
            ? {
                color: "aqua",
                backgroundColor: "black",
                border: "0.5px solid white",
                borderRadius: "5px",
              }
            : {
                color: "white",
                backgroundColor: "rgb(55,55,105)",
                border: "none",
                borderRadius: "5px",
              }
        }
      >
        <h4>Rating</h4>
      </NavLink>
      <NavLink
        className="nav-link"
        style={({ isActive }) =>
          isActive
            ? {
                color: "aqua",
                backgroundColor: "black",
                border: "0.5px solid white",
                borderRadius: "5px",
              }
            : {
                color: "white",
                backgroundColor: "rgb(55,55,105)",
                border: "none",
                borderRadius: "5px",
              }
        }
        to="/assignment2"
      >
        <h4>Grids</h4>
      </NavLink>
      <NavLink
        className="nav-link"
        style={({ isActive }) =>
          isActive
            ? {
                color: "aqua",
                backgroundColor: "black",
                border: "0.5px solid white",
                borderRadius: "5px",
              }
            : {
                color: "white",
                backgroundColor: "rgb(55,55,105)",
                border: "none",
                borderRadius: "5px",
              }
        }
        to="/discountapp"
      >
        <h4>Discount</h4>
      </NavLink>
      <NavLink
        className="nav-link"
        style={({ isActive }) =>
          isActive
            ? {
                color: "aqua",
                backgroundColor: "black",
                border: "0.5px solid white",
                borderRadius: "5px",
              }
            : {
                color: "white",
                backgroundColor: "rgb(55,55,105)",
                border: "none",
                borderRadius: "5px",
              }
        }
        to="/form"
      >
        <h4>Form</h4>
      </NavLink>
    </section>
  );
}

export default App;
