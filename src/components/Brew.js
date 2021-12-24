function Brew(props) {
  const water = props.state.cups * props.state.size;
  const grounds = water / props.state.ratio;

  return (
    <div>
      <p>
        For {props.state.cups}
        {props.state.cups > 1 ? " cups" : " cup"}, you'll need {grounds}g of
        coffee and {water}g of water.
      </p>
    </div>
  );
}

export default Brew;
