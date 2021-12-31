import { Component } from "react";
import Temperature from "../temperature";

class TemperatureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "0",
      type: "C",
    };
  }
  handle_C = (temp) => {
    this.setState({
      temperature: temp,
      type: "C",
    });
  };
  handle_F = (temp) => {
    this.setState({
      temperature: temp,
      type: "F",
    });
  };

  convertCtoF = (value) => (value - 32) * 5 / 9;
  convertFtoC = (value) => (value * 9/5) + 32;

  render() {
    const type = this.state.type;
    const tempValue = this.state.temperature;
    const c_value = type === "C" ? tempValue : this.convertCtoF(tempValue);
    const f_value = type === "F" ? tempValue : this.convertFtoC(tempValue);

    return (
      <div>
        <h1>Convert temperate C to F</h1>
        <Temperature type="C" value={c_value} onTempChange={this.handle_C} />
        <Temperature type="F" value={f_value} onTempChange={this.handle_F} />
      </div>
    );
  }
}

export default TemperatureContainer;
