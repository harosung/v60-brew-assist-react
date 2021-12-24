import React from "react";
import Card from "./components/ui/Card";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Brew from "./components/Brew";

class App extends React.Component {
  state = {
    size: 0,
    cups: 0,
    ratio: 0,
  };

  setParams = (name, value) => {
    this.setState({ [name]: value }, () => {});
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Card>
          <InputForm onParamChange={this.setParams} />
        </Card>
        {this.state.size > 0 && this.state.cups > 0 && this.state.ratio > 0 ? (
          <Card>
            <Brew state={this.state} />
          </Card>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
