import "./App.css";
import Table from "./components/Table.js";
import { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [riders, setRider] = useState([
    {
      id: 1,
      name: "Frans",
      indoor: false,
      outdoor: false,
      wood: false,
    },
    {
      id: 2,
      name: "Ida",
      indoor: false,
      outdoor: false,
      wood: false,
    },
    {
      id: 3,
      name: "Jens Peter",
      indoor: false,
      outdoor: false,
      wood: false,
    },
  ]);

  // const buttonClicked = (id) => {
  //   console.log("clicked", id);
  // };

  return (
    <div className="App">
      <h1>RytterApp</h1>
      <Table className="table" riders={riders} />
    </div>
  );
};

export default App;
