import Card from "./components/ui/Card";
import Header from "./components/Header";
import Params from "./components/Params";
import Brew from "./components/Brew";
import { useState } from "react";

function App() {
  const [cups, setCups] = useState(0);
  const [ratio, setRatio] = useState(0);

  {
    /* Updates the brew states so that it can be passed to the Brew component. */
  }
  function createBrew(props) {
    setCups(props.cups);
    setRatio(props.ratio);
  }

  return (
    <div className="App">
      <Header />
      <Card>
        <Params createBrew={createBrew} />
      </Card>
      <Card>
        <Brew cups={cups} ratio={ratio} />
      </Card>
    </div>
  );
}

export default App;
