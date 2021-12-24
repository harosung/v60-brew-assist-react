import React from "react";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.onParamChange(event.target.id, event.target.value);
  }

  render() {
    return (
      <div className="card">
        <form className="params">
          <div>
            <label>Size of cup (mL)</label>
            <input
              type="number"
              id="size"
              placeholder="250"
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>How many cups?</label>
            <input
              type="number"
              id="cups"
              placeholder="1"
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Ratio to use</label>
            1 : 
            <input
              type="number"
              id="ratio"
              placeholder="16"
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default InputForm;
