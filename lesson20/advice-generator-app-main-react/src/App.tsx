import { useCallback, useEffect, useState } from "react";
import { fetchAdvice } from "./services";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  const newAdvice = useCallback(async () => {
    try {
      const fetchedAdvice = await fetchAdvice();
      setAdvice(fetchedAdvice);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  }, []);

  useEffect(() => {
    newAdvice();
  }, [newAdvice]);

  return (
    <article className="container">
      <h3>ADVICE #117</h3>
      <p>“{advice}”</p>
      <div className="break">
        <hr />
        <svg
          fill="none"
          height="16"
          viewBox="0 0 20 16"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="currentColor" height="16" rx="3" width="6" />
          <rect fill="currentColor" height="16" rx="3" width="6" x="14" />
        </svg>
        <hr />
      </div>
      <button type="button" onClick={newAdvice}>
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </article>
  );
}

export default App;
