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
      {/* <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          style={{ display: "None" }}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
      </ButtonGroup> */}
      <br />
      {/* <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup> */}
      <br />
      <input type="checkbox" />
      {/* <br></br>
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        isIndoorChecked={isIndoorChecked}
        value="1"
        onChange={(e) => setIsIndoorChecked(e.currentTarget.isIndoorChecked)}
      > */}
        Checked
      </ToggleButton>
      <br />
      {/* <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Ride
        </ToggleButton>
      </ButtonGroup> */}
    </>
  );
}

export default Button;
