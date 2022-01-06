import React, { useState } from "react";
import Card from "./components/ui/Card";
import Header from "./components/Header";
import Parameters from "./components/parameters/Parameters";
import Steps from "./components/Steps";
// import Timer from "./components/Timer";

{
  /* App that displays the brewing information for various V60 brewing methods. */
}
function App() {
  // State of selected brewing method
  const [method, setMethod] = useState({
    name: "",
    recipe: [],
    steps: [],
  });
  // State of brewing parameters
  const [params, setParams] = useState({
    grounds: 0,
    water: 0,
    ratio: 0,
  });
  // State of whether to use method default parameters
  const [useDefault, setUseDefault] = useState(false);

  return (
    <>
      <Header />
      <Card>
        <Parameters
          method={method}
          setMethod={setMethod}
          params={params}
          setParams={setParams}
          useDefault={useDefault}
          setUseDefault={setUseDefault}
        />
      </Card>
      {method.name !== "" ? (
        <Card>
          <Steps method={method} />
        </Card>
      ) : (
        ""
      )}
      {/* <Card>
        <Timer steps={method.details.steps} />
      </Card> */}
    </>
  );
}

export default App;
