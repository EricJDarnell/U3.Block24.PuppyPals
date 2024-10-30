import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppies: ", puppies);

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
      { featPupId && <p>{featPupId}</p>}
    </div>
  );
}

export default App;
