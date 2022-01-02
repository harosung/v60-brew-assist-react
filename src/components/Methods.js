import { React, useState, useEffect } from "react";

function Methods({ brew, method, getDetails }) {
  const [name, setMethodName] = useState(method);
  const water = Math.round(brew.cups * brew.size);
  const grounds = Math.round(water / brew.ratio);

  useEffect(() => {
    setMethodName(method);
    getDetails(methods[method]);
  }, [method]);

  const hoffmanRecipe = [
    "Rinse filter and pre-heat V60",
    "Pour in grounds, create well in the middle",
    `Pre-wet with ~${grounds * 2}g water`,
    "Swirl brewer until the slurry is even",
    `At 45s, complete the first main pour till ${water * 0.6}g in the next 30s`,
    `At 1min 15s, gently complete second main pour till ${water}g in the next 30s`,
    "Stir gently clockwise and anticlockwise to kick grounds from the sides",
    "Gently swirl brewer to flatten coffee bed for even extraction",
    "Aim to finish drawdown by 3min 30s",
  ];
  const kasuyaRecipe = [
    "Rinse filter & pre-heat V60",
    `Pour in ${grounds}g of coarse-ground coffee`,
    `Add ${
      water * 0.2
    }g of water per pour 5 times, waiting 45s between each pour. This results in a total brew of ${water}g.`,
    "Control the balance of the coffee by modifying the 1st and 2nd pours. For a sweeter brew, make a smaller first pour (e.g. 50g). For more acidity, a larger one will do the trick.",
    "Use either less or more water for the second pour to compensate for the difference (if any) in the first one.",
    "The 3rd, 4th and 5th pours can be tweaked to 2 larger 90g pours for a weaker brew, or into 4 smaller 45g pours for a stronger one.",
  ];

  const raoRecipe = [
    "Rinse filter & pre-heat V60",
    `Pour in grounds, flatten, pre-wet with ${
      grounds * 3
    }g water (~3x weight of grounds)`,
    "Gently excavate to wet all the grounds within 10s",
    `At 45s, start main pour until ${grounds}}g.`,
    "Gently stir to stop grounds from clinging to sides",
    "At 1min 45s, swirl V60 to flatten coffee bed for even brew",
    "Drawdown should be complete within 3 minutes.",
  ];

  const hoffmanSteps = [
    ["-1", "Pour in grounds, create well in the middle"],
    ["0", `Pre-wet with ${grounds * 2}g water`],
    ["0.1", "Swirl brewer until the slurry is even"],
    ["45", `Complete the first main pour till ${water * 0.6}g in the next 30s`],
    ["75", `Gently complete second main pour till ${water}g in the next 30s`],
  ];

  const kasuyaSteps = [
    ["-1", "Rinse filter & pre-heat V60"],
    ["0", `Pour in ${grounds}g of coarse-ground coffee`],
    ["45", `Add ${water * 0.2}g of water`],
    ["90", `Add ${water * 0.2}g of water for ${water * 0.4}g`],
    ["135", `Add ${water * 0.2}g of water for ${water * 0.6}g`],
    ["175", `Add ${water * 0.2}g of water for ${water * 0.8}g`],
    ["220", `Add ${water * 0.2}g of water for ${water * 1.0}g`],
  ];

  const raoSteps = [
    [
      "-1",
      `Pour in grounds, flatten, pre-wet with ${
        grounds * 3
      }g water (~3x weight of grounds)`,
    ],
    ["0", "Gently excavate to wet all the grounds within 10s"],
    ["45", `At 45s, start main pour until ${grounds}g.`],
    ["45.1", "Gently stir to stop grounds from clinging to sides"],
    ["105", "At 1min 45s, swirl V60 to flatten coffee bed for even brew"],
    ["180", "Drawdown should be complete within 3 minutes."],
  ];

  const methods = {
    Hoffman: {
      grounds: 30,
      water: 500,
      ratio: 16.7,
      recipe: hoffmanRecipe,
      steps: hoffmanSteps,
    },
    Kasuya: {
      grounds: 20,
      water: 300,
      ratio: 15,
      recipe: kasuyaRecipe,
      steps: kasuyaSteps,
    },
    Rao: {
      grounds: 22,
      water: 360,
      ratio: 16.4,
      recipe: raoRecipe,
      steps: raoSteps,
    },
  };

  // useEffect(() => {
  //   onStepChange(methodDetails);
  //   console.log("sent default method");
  // }, []);

  function getSteps() {
    var steps = [];
    var count = 0;
    for (let step of methods[method].recipe.entries()) {
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
      <h2>{name} Method</h2>
      <ol>{instructions}</ol>
    </>
  );
}

export default Methods;
