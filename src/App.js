import React, {useState} from "react";
import Card from "./components/ui/Card";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Brew from "./components/Brew";


function App(){
  const [brew, setBrew] = useState({size: 0, cups: 0, ratio: 0}); 
  const [method, setMethod] = useState("Hoffman"); 

  function setParams(name, value){
    setBrew(prevBrew => {
      return {...prevBrew, [name] : value}
    })
  }

  function onMethodChange(method){
    setMethod(method); 
  }

    return (
      <div className="App">
        <Header />
        <Card>
          <InputForm onParamChange={setParams} onMethodChange={onMethodChange} />
        </Card>
        {brew.size > 0 &&
        brew.cups > 0 &&
        brew.ratio > 0 ? (
          <Card>
            <Brew brew={brew} method={method}/>
          </Card>
        ) : (
          ""
        )}
      </div>
    );
  }


export default App;
