import { React, useState, useEffect } from "react";

function Steps({method}) {
  // const [name, setMethodName] = useState(method);
  // const water = Math.round(brew.cups * brew.size);
  // const grounds = Math.round(water / brew.ratio);

  // useEffect(() => {
  //   setMethodName(method);
  //   getDetails(methods[method]);
  // }, [method]);


  // useEffect(() => {
  //   onStepChange(methodDetails);
  //   console.log("Get Steps");
  // }, []);

  function getSteps() {
    var steps = [];
    var count = 0;
    for (let step of method.recipe.entries()) {
      steps.push(<li key={count}>{step[1]}</li>);
      count++;
    }
    return steps;
  }

  //   function getSteps() {
  //     var steps = [];
  //     var count = 0;
  //     for (let step of methods[name].entries()) {
  //       steps.push(<li key={count}>{step[1]}</li>);
  //       count++;
  //     }
  //     onInstructions(steps);
  //     return steps;
  //   }

  const instructions = getSteps();

  return (
    <>
      <h2>{method.name} Method</h2>
      <ol>{instructions}</ol>
    </>
  );
}

export default Steps;
