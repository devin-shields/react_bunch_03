import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TempInput from "./TempInput";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      temperature: 20,
      scale: "Celsius"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, scale) {
    this.setState({
      temperature: event.target.value,
      scale: scale
    });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    let fTemp;
    let cTemp;
    if (scale === "Celsius") {
      fTemp = Math.round((temperature * 9) / 5 + 32);
      cTemp = temperature;
    } else if (scale === "Fahrenheit") {
      fTemp = temperature;
      cTemp = Math.round(((temperature - 32) * 5) / 9);
    }

    return (
      <fieldset>
        <TempInput
          temperature={fTemp}
          scale="Fahrenheit"
          handleChange={this.handleChange}
        />
        <TempInput
          temperature={cTemp}
          scale="Celsius"
          handleChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(cTemp)} />
      </fieldset>
    );
  }
}

export default Calculator;
