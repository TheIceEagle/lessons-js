import { ChangeEvent, MouseEvent, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [type, setType] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  function handleTypeClick(event: MouseEvent<HTMLInputElement>) {
    const { currentTarget } = event;

    setType(currentTarget.value);
  }

  function handleHeightChange(event: ChangeEvent<HTMLInputElement>) {
    const { currentTarget } = event;

    setHeight(currentTarget.valueAsNumber);
  }

  function handleWeightChange(event: ChangeEvent<HTMLInputElement>) {
    const { currentTarget } = event;

    setWeight(currentTarget.valueAsNumber);
  }

  const bmi = useMemo(() => {
    if (type === "imperial") {
      return (weight / (height * height)) * 703;
    } else {
      return weight / (height * height);
    }
  }, [type, weight, height]);

  return (
    <main>
      <form className="form">
        <label>
          <input
            type="radio"
            name="type"
            value="metric"
            onClick={handleTypeClick}
          />
          <span>Metric</span>
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="imperial"
            onClick={handleTypeClick}
          />
          <span>Imperial</span>
        </label>
        <label>
          <span>Height</span>
          <input
            type="number"
            name="height"
            value={height}
            onChange={handleHeightChange}
          />
          {type === "imperial" ? <span>ft</span> : <span>m</span>}
        </label>
        <label>
          <span>Weight</span>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={handleWeightChange}
          />
          {type === "imperial" ? <span>lb</span> : <span>kg</span>}
        </label>
        <label>
          <output>{bmi}</output>
        </label>
      </form>
    </main>
  );
}

export default App;
