import { React, useEffect, useState } from "react";
import MethodSelect from "./MethodSelect";
import CustomForm from "./CustomForm";

{
  /* Brewing method is selected using the button group in MethodSelect. Optional customization of default brewing parameters.*/
}

function Parameters({
  method,
  setMethod,
  params,
  setParams,
  useDefault,
  setUseDefault,
  dataRefresh,
}) {
  // State for conditional display for Customize button
  const [showCustom, setShowCustom] = useState(false);

  // Passes the form inputs back to App
  function onFormSubmit(formParams, action) {
    let newParams = { ...params };
    if (action === "save") {
      newParams.grounds = formParams.grounds;
      newParams.water = formParams.water;
      newParams.ratio = formParams.ratio;
    } else {
      setUseDefault(true);
    }
    // setDataRefresh(true);
    setParams(newParams);
    setShowCustom(false);
  }

  // Sets state of Customize button
  function handleCustomButton() {
    setShowCustom(!showCustom);
  }

  // useEffect(() => {
  //   setDataRefresh(true);
  // }, [method]);

  return (
    <>
      <h2>Choose a brewing method:</h2>
      <MethodSelect
        method={method}
        setMethod={setMethod}
        params={params}
        setParams={setParams}
        useDefault={useDefault}
        setUseDefault={setUseDefault}
      />
      {method.name !== "" ? (
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
        <CustomForm params={params} onFormSubmit={onFormSubmit} />
      ) : (
        ""
      )}
    </>
  );
}

export default Parameters;
