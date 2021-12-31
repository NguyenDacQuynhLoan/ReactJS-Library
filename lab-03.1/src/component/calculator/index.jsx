import { Component } from "react";
import Button from "../button";
import Screen from "../screen";
import "./style.css";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0",
      isFloat: false,
      memory: undefined,
      operator: undefined,
      isReset: false,
    };
  }
  onClick = (value) => {
    let strValue = "";
    let newValue = 0;

    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        strValue =
          this.state.isReset == true ? value : this.state.value + value;
        newValue = this.state.isFloat
          ? parseFloat(strValue)
          : parseInt(strValue);
        this.setState({ value: newValue, isReset: false });
        break;

      case "AC":
        this.setState({
          value: "0",
          isFloat: false,
          memory: undefined,
          operator: undefined,
          isReset: false,
        });
        break;

      case ".":
        if (this.state.value.toString().includes(".") == false) {
          strValue = this.state.value + ".";
          this.setState({
            value: strValue,
            isFloat: true,
          });
        }

        break;
      case "+/-":
        newValue = 0 - Number(this.state.value);
        this.setState({ value: newValue });
        break;
      case "%":
        newValue = (Number(this.state.value) * 100) / 10000;
        this.setState({ value: newValue, isReset: true });
        break;

      case "+":
        if (this.state.memory === undefined) {
          newValue = this.state.value;
        } else {
          newValue = this.cal();
        }
        this.setState({
          value: newValue,
          memory: newValue,
          operator: "+",
          isReset: true,
        });
        break;
      case "-":
        if (this.state.memory === undefined) {
          newValue = this.state.value;
        } else {
          newValue = this.cal();
        }
        this.setState({
          value: newValue,
          memory: newValue,
          operator: "-",
          isReset: true,
        });
        break;
      case "/":
        if (this.state.memory === undefined) {
          newValue = this.state.value;
        } else {
          newValue = this.cal();
        }
        this.setState({
          value: newValue,
          memory: newValue,
          operator: "/",
          isReset: true,
        });
        break;

      case "*":
        if (this.state.memory === undefined) {
          newValue = this.state.value;
        } else {
          newValue = this.cal();
        }
        console.log(newValue);
        this.setState({
          value: newValue,
          memory: newValue,
          operator: "*",
          isReset: true,
        });
        break;

      case "=":
        if (this.state.memory === undefined) {
          newValue = this.state.value;
        } else {
          newValue = this.cal();
        }
        this.setState({
          value: newValue,
          memory: undefined,
          operator: undefined,
          isReset: true,
        });
        break;
      default:
    }
  };

  cal() {
    switch (this.state.operator) {
      case "+":
        return Number(this.state.memory) + Number(this.state.value);
      case "-":
        return Number(this.state.memory) - Number(this.state.value);
      case "*":
        return Number(this.state.memory)*Number(this.state.value);
      case "/":
        if (this.state.value === 0) {
          return "N/A";
        } else {
          return Number(this.state.memory) / Number(this.state.value);
        }
      default:
    }
  }
  render() {
    const value = this.state.value;
    return (
      <div className="calculator">
        <div>
          <Screen value={value} />
        </div>
        <div className="group-btn">
          <Button value="AC" handle_click={this.onClick}  />
          <Button value="+/-" handle_click={this.onClick} />
          <Button value="%" handle_click={this.onClick} />
          <Button value="/" handle_click={this.onClick} />
          <Button value="7" handle_click={this.onClick} />
          <Button value="8" handle_click={this.onClick} />
          <Button value="9" handle_click={this.onClick} />
          <Button value="*" handle_click={this.onClick} />
          <Button value="4" handle_click={this.onClick} />
          <Button value="5" handle_click={this.onClick} />
          <Button value="6" handle_click={this.onClick} />
          <Button value="-" handle_click={this.onClick} />
          <Button value="1" handle_click={this.onClick} />
          <Button value="2" handle_click={this.onClick} />
          <Button value="3" handle_click={this.onClick} />
          <Button value="+" handle_click={this.onClick} />
          <Button value="0" style="zero" handle_click={this.onClick} />
          <Button value="." handle_click={this.onClick} />
          <Button value="=" handle_click={this.onClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
