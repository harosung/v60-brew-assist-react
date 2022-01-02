import React, { useState } from "react";
import Card from "./components/ui/Card";
import Header from "./components/Header";
import Parameters from "./components/parameters/Parameters";
// import Methods from "./components/Methods";
// import Timer from "./components/Timer";

{
  /* App that displays the brewing information for various V60 brewing methods. */
}
function App() {
  // State of selected brewing method
  const [method, setMethod] = useState({
    name: "",
    details: {
      grounds: 0,
      water: 0,
      ratio: 0,
      recipe: [],
      steps: [],
    },
  });

  // Base parameters to be passed into child components
  var params = {
    grounds: method.details.grounds,
    water: method.details.water,
  };

  // Sets new params for the method using information from CustomForm
  function onParamUpdate(theParams) {
    let newDetails = { ...method.details };
    newDetails.grounds = theParams.grounds;
    newDetails.water = theParams.water;
    newDetails.ratio =
      Math.round((theParams.water / theParams.grounds) * 10) / 10;
    setMethod((prevMethod) => {
      return { ...prevMethod, details: newDetails };
    });
  }

  // Sets new method using the MethodSelect buttons
  function onMethodSelect(theName, theDetails) {
    setMethod((prevMethod) => {
      return { ...prevMethod, name: theName, details: theDetails };
    });
  }

  console.log(method);
  return (
    <>
      <Header />
      <Card>
        <Parameters
          params={params}
          onMethodSelect={onMethodSelect}
          onParamUpdate={onParamUpdate}
        />
      </Card>
      {/* {method.name !== "" ? (
        <Card>
          <Methods
            method={method}
          />
        </Card>
      ) : (
        ""
      )} */}
      {/* <Card>
        <Timer steps={method.details.steps} />
      </Card> */}
    </>
  );
}

export default App;
