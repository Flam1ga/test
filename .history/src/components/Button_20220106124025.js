import "./Button.css";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";

function Button() {
  const [checked, setChecked] = useState(false);
  const [isIndoorChecked, setIsIndoorChecked] = useState(false);
  const [isOutdoorChecked, setIsOutdoorChecked] = useState(false);
  const [isWoodChecked, setIsWoodChecked] = useState(false);

  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
  ];

  // const indoorCol = ({ riders }) => {
  //   const list = riders.map((rider) => <Col>{rider}</Col>);
  // };

  return (
    <>
      <input type="checkbox" />
    </>
  );
}

export default Button;
