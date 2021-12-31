import React from "react";
import MethodButtonGroup from "./MethodButtonGroup";

function InputForm(props){

  function handleInputChange(event) {
    props.onParamChange(event.target.id, event.target.value);
  }

  function handleMethodChange(method){
    props.onMethodChange(method); 

  }

    return (
      <div className="card">
        <form className="params">
          <div>
            <label>Size of cup (mL)</label>
            <input
              type="number"
              id="size"
              placeholder="250"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>How many cups?</label>
            <input
              type="number"
              id="cups"
              placeholder="1"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Ratio to use</label>
            1 :
            <input
              type="number"
              id="ratio"
              placeholder="16"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <MethodButtonGroup methods={["Hoffman", "Kasuya", "Rao"]} onToggle={handleMethodChange}/>
          </div>
        </form>
      </div>
    );

}

export default InputForm;
