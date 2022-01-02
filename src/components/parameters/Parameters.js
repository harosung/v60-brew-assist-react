import { React, useState } from "react";
import MethodSelect from "./MethodSelect";
import CustomForm from "./CustomForm";

{
  /* Brewing method is selected using the button group in MethodSelect. Optional customization of default brewing parameters.*/
}

function Parameters({ params, onMethodSelect, onParamUpdate }) {
  // State for conditional display for CustomForm
  const [methodSelected, setMethodSelected] = useState(false);
  // State for conditional display for Customize button
  const [showCustom, setShowCustom] = useState(false);
  // Stores a copy of default paramaters for selected method
  const [defaultParams, setDefaultParams] = useState(null);

  // Passes the method's name back to App
  function handleMethodSelect(name, details) {
    let defaultParams = {
      grounds: details.grounds,
      water: details.water,
      ratio: details.ratio,
    };
    setDefaultParams(defaultParams);
    setShowCustom(false);
    setMethodSelected(true);
    onMethodSelect(name, details);
  }

  // Passes the form inputs back to App
  function onFormSubmit(theParams) {
    onParamUpdate(theParams);
    setShowCustom(false);
  }

  // Sets state of Customize button
  function handleCustomButton() {
    setShowCustom(!showCustom);
  }
  return (
    <>
      <h2>Choose a brewing method:</h2>
      <MethodSelect
        params={params}
        methodsList={["Hoffman", "Kasuya", "Rao"]}
        onMethodSelect={handleMethodSelect}
      />
      {methodSelected ? (
        <>
          <span>
            Brew information {params.grounds}g grounds and {params.water}g water
          </span>
          {!showCustom ? (
            <button onClick={handleCustomButton}>Customize</button>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      <br></br>
      {showCustom ? (
        <CustomForm
          params={params}
          defaultParams={defaultParams}
          onFormSubmit={onFormSubmit}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Parameters;
