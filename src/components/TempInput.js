import React, { Component } from "react";

class TempInput extends Component {
  render() {
    const temperature = this.props.temperature;
    let style;
    if (temperature >= 100) {
      style = {
        fontWeight: "bold",
        color: "red",
        backgroundColor: "smoke"
      };
    }
    return (
      <div>
        <legend style={style}>Enter temperature in {this.props.scale}:</legend>
        <input
          value={this.props.temperature}
          onChange={event => {
            this.props.handleChange(event, this.props.scale);
          }}
        />
      </div>
    );
  }
}

export default TempInput;
