import { useRef } from "react";

{
  /* Params component gets the inputs needed to calculate the brew quantity amounts. */
}
function Params(props) {
  const cupsInputRef = useRef();
  const ratioInputRef = useRef();

  {
    /* Passes the number of cups and 'coffee:water' ratio back to App.*/
  }
  function submitHandler(event) {
    event.preventDefault();
    const enteredCups = cupsInputRef.current.value;
    const enteredRatio = ratioInputRef.current.value;

    const brew = {
      cups: enteredCups,
      ratio: enteredRatio,
    };
    props.createBrew(brew);
  }

  return (
    <div className="card" onSubmit={submitHandler}>
      <form className="params">
        <div>
          <label>How many cups?</label>
          <input type="number" id="cups" placeholder="1" ref={cupsInputRef} />
        </div>
        <div>
          <label>Ratio to use</label>
          1 :
          <input
            type="number"
            id="ratio"
            placeholder="16"
            ref={ratioInputRef}
          />
        </div>
        <div>
          <button>Get brew</button>
        </div>
      </form>
    </div>
  );
}

export default Params;
