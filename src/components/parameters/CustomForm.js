import { React, useState } from "react";

{
  /* Custom parameters can be set/reset to default in this controlled form */
}
function CustomForm({ params, onFormSubmit }) {
  // State of the method in the controlled form
  const [newParams, setNewParams] = useState({
    grounds: params.grounds,
    water: params.water,
    ratio: params.grounds / params.water
  });

  // Updates the method for the controlled form
  const handleInputChange = (event) => {
    setNewParams((prevParams) => {
      return { ...prevParams, [event.target.id]: event.target.value };
    });
  };

  // Sends the form inputs or default parameters based on the button clicked
  const handleFormButton = (event) => {
     onFormSubmit(newParams, event.target.id);
    } 

  return (
    <>
      <form className="method">
        <div>
          <label>Grounds</label>
          <input
            type="number"
            id="grounds"
            value={newParams.grounds}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Water</label>
          <input
            type="number"
            id="water"
            value={newParams.water}
            onChange={handleInputChange}
          />
        </div>
        <div>Ratio 1 : {(newParams.water / newParams.grounds).toFixed(1)}</div>
      </form>
      <button id="save" onClick={handleFormButton}>
        Save
      </button>
      <button id="reset" onClick={handleFormButton}>
        Use Recommended
      </button>
    </>
  );
}

export default CustomForm;
