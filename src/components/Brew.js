function Brew(props) {
  const water = props.brew.cups * props.brew.size;
  const grounds = water / props.brew.ratio;

  const methods = {
    "Hoffman":[
      "Rinse filter and pre-heat V60",
      "Pour in grounds, create well in the middle",
      `Pre-wet with ~${grounds * 2}g water`,
      "Swirl brewer until the slurry is even",
      `At 45s, complete the first main pour till ${water * 0.6}g in the next 30s`,
      `At 1min 15s, gently complete second main pour till ${water}g in the next 30s`,
      "Stir gently clockwise and anticlockwise to kick grounds from the sides",
      "Gently swirl brewer to flatten coffee bed for even extraction",
      "Aim to finish drawdown by 3min 30s"
    ], 
    "Kasuya":[
      "Rinse filter & pre-heat V60",
      `Pour in ${grounds}g of coarse-ground coffee`,
      `Add ${water * 0.2}g of water per pour 5 times, waiting 45s between each pour. This results in a total brew of ${water}g.`,
      "Control the balance of the coffee by modifying the 1st and 2nd pours. For a sweeter brew, make a smaller first pour (e.g. 50g). For more acidity, a larger one will do the trick.",
      "Use either less or more water for the second pour to compensate for the difference (if any) in the first one.",
      "The 3rd, 4th and 5th pours can be tweaked to 2 larger 90g pours for a weaker brew, or into 4 smaller 45g pours for a stronger one.",
    ],
    "Rao": [
      "Rinse filter & pre-heat V60",
      `Pour in grounds, flatten, pre-wet with ${grounds * 3}g water (~3x weight of grounds)`,
      "Gently excavate to wet all the grounds within 10s",
      `At 45s, start main pour until ${grounds}}g.`,
      "Gently stir to stop grounds from clinging to sides",
      "At 1min 45s, swirl V60 to flatten coffee bed for even brew",
      "Drawdown should be complete within 3 minutes."
    ]}; 

  const listSteps = methods[props.method].map((step, i) => <li key={i}>{step}</li>);
  // const listSteps = hoffman.map((step, i) => <li key={i}>{step}</li>)};


  return (
    <div>
      <p>
        For {props.brew.cups}
        {props.brew.cups > 1 ? " cups" : " cup"}, you'll need {grounds}g
        of coffee and {water}g of water.
      </p>
      <h2>{props.method} Method</h2>
      <ol>{listSteps}</ol>
    </div>
  );
}

export default Brew;
