import React from "react";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      count: "0",
      includesDecimal: false,
    };

    this.clear = this.clear.bind(this);
    this.display = this.display.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  calculate = () => {
    // eslint-disable-next-line
    let result = eval(this.state.input);
    this.setState({
      input: result,
    });
  };

  clear = () => {
    this.setState({
      input: "0",
      count: "0",
      includesDecimal: false,
    });
  };

  handleDecimal = (event) => {
    if (this.state.includesDecimal) {
      console.log("includes");
      this.setState((prevState) => ({
        input: prevState.input,
      }));
    } else {
      this.setState((prevState) => ({
        input: prevState.input + event.target.value,
        includesDecimal: true,
      }));
    }
  };

  display = (event) => {
    if (this.state.count === "0" && event.target.value === "0") {
      this.setState({
        input: 0,
      });
    } else if (this.state.count === "0") {
      this.setState({
        input: event.target.value,
        count: 1,
      });
    } else {
      switch (event.target.value) {
        case "+":
        case "*":
        case "/":
          this.setState({
            includesDecimal: false,
          });
          const inputArr = this.state.input.toString().split("");
          const index = inputArr.length;
          switch (inputArr[index - 1]) {
            case "+":
            case "/":
            case "*":
              inputArr.splice(index - 1, 1, event.target.value);
              this.setState({
                input: inputArr.join(""),
              });

              break;
            case "-":
              switch (inputArr[index - 2]) {
                case "+":
                case "/":
                case "*":
                case "-":
                  inputArr.splice(index - 2, 2, event.target.value);
                  this.setState({
                    input: inputArr.join(""),
                  });
                  break;
                default:
                  console.log("URAAA");
              }
              break;
            default:
              this.setState((prevState) => ({
                input: prevState.input + event.target.value,
              }));
          }
          break;

        case "-":
          this.setState((prevState) => ({
            input: prevState.input + event.target.value,
            includesDecimal: false,
          }));
          break;
        default:
          this.setState((prevState) => ({
            input: prevState.input + event.target.value,
          }));
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div id="display" className="screen">
          {this.state.input}
        </div>
        <input
          id="one"
          type="button"
          className="one"
          value="1"
          onClick={this.display}
        ></input>
        <input
          id="two"
          type="button"
          className="two"
          value="2"
          onClick={this.display}
        ></input>
        <input
          id="three"
          type="button"
          className="three"
          value="3"
          onClick={this.display}
        ></input>
        <input
          id="four"
          type="button"
          className="one"
          value="4"
          onClick={this.display}
        ></input>
        <input
          id="five"
          type="button"
          className="five"
          value="5"
          onClick={this.display}
        ></input>
        <input
          id="six"
          type="button"
          className="six"
          value="6"
          onClick={this.display}
        ></input>
        <input
          id="seven"
          type="button"
          className="seven"
          value="7"
          onClick={this.display}
        ></input>
        <input
          id="eight"
          type="button"
          className="eight"
          value="8"
          onClick={this.display}
        ></input>{" "}
        <input
          id="nine"
          type="button"
          className="nine"
          value="9"
          onClick={this.display}
        ></input>
        <input
          id="zero"
          type="button"
          className="zero"
          value="0"
          onClick={this.display}
        ></input>
        <input
          id="equals"
          type="button"
          className="equals"
          value="="
          onClick={this.calculate}
        ></input>
        <input
          id="add"
          type="button"
          className="add"
          value="+"
          onClick={this.display}
        ></input>
        <input
          id="subtract"
          type="button"
          className="subtract"
          value="-"
          onClick={this.display}
        ></input>
        <input
          id="multiply"
          type="button"
          className="multiply"
          value="*"
          onClick={this.display}
        ></input>
        <input
          id="divide"
          type="button"
          className="divide"
          value="/"
          onClick={this.display}
        ></input>
        <input
          id="decimal"
          type="button"
          className="decimal"
          value="."
          onClick={this.handleDecimal}
        ></input>
        <input
          id="clear"
          type="button"
          className="clear"
          value="clear"
          onClick={this.clear}
        ></input>
      </div>
    );
  }
}

export default App;
