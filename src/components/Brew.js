function Brew(props) {
  const grounds = props.ratio * props.cups;
  const water = grounds * props.ratio;

  return (
    <div>
      <p>
        For {props.cups}
        {props.cups > 1 ? " cups" : " cup"}, you'll need {grounds}g of coffee
        and {water}g of water.
      </p>
    </div>
  );
}

export default Brew;
