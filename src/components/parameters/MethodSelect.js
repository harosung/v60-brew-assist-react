import styles from "../Styles.css";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

{
  /* Creates the buttons for method selection and contains all method details*/
}
function MethodSelect({
  method,
  setMethod,
  params,
  setParams,
  useDefault,
  setUseDefault,
  // setDataRefresh,
}) {
  // State of the selected method
  const [isActive, setIsActive] = useState("");
  // List of method buttons to display
  const methodsList = ["Hario", "Hoffman", "Kasuya", "Rao"];
  // Default Hario method parameters
  const harioParams = { grounds: 12, water: 120, ratio: 12 };
  // Default Hoffman method parameters
  const hoffmanParams = { grounds: 30, water: 500, ratio: 16.7 };
  // Default Kasuya method parameters
  const kasuyaParams = { grounds: 20, water: 300, ratio: 15 };
  // Default Rao method parameters
  const raoParams = { grounds: 22, water: 360, ratio: 16.4 };
  // Hario method data to be shown in the method steps
  const harioRecipe = [
    "Fold filter paper and place on dripper, before rinsing and warming with boiling water.",
    `Pour in ${params.grounds}g of coffee, shaking the V60 lightly to level the grounds.`,
    "Pour boiling water from the centre of the grounds, spiralling outwards. Let it pre-wet for 30s",
    "Pour the rest of the brew with the same spiral motion, taking special care to avoid pouring on the filter paper itself.",
  ];
  // Hoffman method data to be shown in the method steps
  const hoffmanRecipe = [
    "Rinse filter and pre-heat V60",
    "Pour in grounds, create well in the middle",
    `Pre-wet with ~${params.grounds * 2}g water`,
    "Swirl brewer until the slurry is even",
    `At 45s, complete the first main pour till ${
      params.water * 0.6
    }g in the next 30s`,
    `At 1min 15s, gently complete second main pour till ${params.water}g in the next 30s`,
    "Stir gently clockwise and anticlockwise to kick grounds from the sides",
    "Gently swirl brewer to flatten coffee bed for even extraction",
    "Aim to finish drawdown by 3min 30s",
  ];

  // Kasuya method data to be shown in the method steps
  const kasuyaRecipe = [
    "Rinse filter & pre-heat V60",
    `Pour in ${params.grounds}g of coarse-ground coffee`,
    `Add ${
      params.water * 0.2
    }g of water per pour 5 times, waiting 45s between each pour. This results in a total brew of ${
      params.water
    }g.`,
    "Control the balance of the coffee by modifying the 1st and 2nd pours. For a sweeter brew, make a smaller first pour (e.g. 50g). For more acidity, a larger one will do the trick.",
    "Use either less or more water for the second pour to compensate for the difference (if any) in the first one.",
    "The 3rd, 4th and 5th pours can be tweaked to 2 larger 90g pours for a weaker brew, or into 4 smaller 45g pours for a stronger one.",
  ];

  // Rao method data to be shown in the method steps
  const raoRecipe = [
    "Rinse filter & pre-heat V60",
    `Pour in grounds, flatten, pre-wet with ${
      params.grounds * 3
    }g water (~3x weight of grounds)`,
    "Gently excavate to wet all the grounds within 10s",
    `At 45s, start main pour until ${params.grounds}}g.`,
    "Gently stir to stop grounds from clinging to sides",
    "At 1min 45s, swirl V60 to flatten coffee bed for even brew",
    "Drawdown should be complete within 3 minutes.",
  ];

  // Hario method data to be shown in the timer step
  const harioSteps = [
    [
      "-1",
      "Fold filter paper and place on dripper, before rinsing and warming with boiling water.",
    ],
    ["0", `Pour in ${params.grounds * 2}g of coffee.`],
    ["0.1", "Sshaking the V60 lightly to level the grounds"],
    [
      "30",
      `Pour remaining ${params.water}g of water with the same spiral motion, taking special care to avoid pouring on the filter paper itself`,
    ],
  ];

  // Hoffman method data to be shown in the timer step
  const hoffmanSteps = [
    ["-1", "Pour in grounds, create well in the middle"],
    ["0", `Pre-wet with ${params.grounds * 2}g water`],
    ["0.1", "Swirl brewer until the slurry is even"],
    [
      "45",
      `Complete the first main pour till ${
        params.water * 0.6
      }g in the next 30s`,
    ],
    [
      "75",
      `Gently complete second main pour till ${params.water}g in the next 30s`,
    ],
  ];

  // Kasuya method data to be shown in the timer step
  const kasuyaSteps = [
    ["-1", "Rinse filter & pre-heat V60"],
    ["0", `Pour in ${params.grounds}g of coarse-ground coffee`],
    ["45", `Add ${params.water * 0.2}g of water`],
    ["90", `Add ${params.water * 0.2}g of water for ${params.water * 0.4}g`],
    ["135", `Add ${params.water * 0.2}g of water for ${params.water * 0.6}g`],
    ["175", `Add ${params.water * 0.2}g of water for ${params.water * 0.8}g`],
    ["220", `Add ${params.water * 0.2}g of water for ${params.water * 1.0}g`],
  ];

  // Rao method data to be shown in the timer step
  const raoSteps = [
    [
      "-1",
      `Pour in grounds, flatten, pre-wet with ${
        params.grounds * 3
      }g water (~3x weight of grounds)`,
    ],
    ["0", "Gently excavate to wet all the grounds within 10s"],
    ["45", `At 45s, start main pour until ${params.grounds}g.`],
    ["45.1", "Gently stir to stop grounds from clinging to sides"],
    ["105", "At 1min 45s, swirl V60 to flatten coffee bed for even brew"],
    ["180", "Drawdown should be complete within 3 minutes."],
  ];

  // Method object to be sent to App
  const METHODS = {
    Hario: {
      name: "Hario",
      params: harioParams,
      recipe: harioRecipe,
      steps: harioSteps,
    },
    Hoffman: {
      name: "Hoffman",
      params: hoffmanParams,
      recipe: hoffmanRecipe,
      steps: hoffmanSteps,
    },
    Kasuya: {
      name: "Kasuya",
      params: kasuyaParams,
      recipe: kasuyaRecipe,
      steps: kasuyaSteps,
    },
    Rao: {
      name: "Rao",
      params: raoParams,
      recipe: raoRecipe,
      steps: raoSteps,
    },
  };

  // Returns the method instructions (recipe and steps)
  function getMethodData() {
    let newMethod = { ...method };
    newMethod.recipe = METHODS[isActive].recipe;
    newMethod.steps = METHODS[isActive].steps;
    return newMethod;
  }
  // Returns the default method parameters
  function getParamDefaults() {
    let newParams = {
      grounds: METHODS[isActive].params.grounds,
      water: METHODS[isActive].params.water,
      ratio: METHODS[isActive].params.ratio,
    };
    return newParams;
  }

  // On button click, the selected method will be set as the active method
  const toggleButton = (event) => {
    if (event.target.id !== isActive) {
      event.preventDefault();
      setIsActive(event.target.id);
      setParams(METHODS[event.target.id].params);
      setMethod(METHODS[event.target.id]);
    }
  };
  // On params state changes, update the method data
  useEffect(() => {
    if (useDefault) {
      setParams(getParamDefaults);
      setUseDefault(false);
    }
    if (isActive !== "") {
      setMethod(getMethodData);
    }
  }, [params]);

  // Creates the grouping of button elements
  const buttonGroup = methodsList.map((value, i) => (
    <button
      key={i}
      id={value}
      onClick={(event) => toggleButton(event)}
      className={[
        "button-method",
        value === isActive ? "button-method-active" : "button-method-inactive",
      ].join(" ")}
    >
      {value}
    </button>
  ));
  return <div>{buttonGroup}</div>;
}
export default MethodSelect;
