import React from "react";
import "./App.css";
import Header from "./components/Header";
import AllEntries from "./components/AllEntries";

export default function App() {
  return (
    <>
      <Header />
      <AllEntries />
      {/* {[
        { name: "Turtle A", age: 75 },
        { name: "Turtle B", age: 57 },
        { name: "Turtle C", age: 55 },
        { name: "Turtle D", age: 58 },
      ].map((turtle) => (
        <div style={{ textAlign: "center" }}>
          <h2>{turtle.name}</h2>
          <h2>{turtle.age}</h2>
        </div>
      ))} */}
    </>
  );
}
