import { useEffect, useState } from "react";
import Pages from "./Pages/Pages";
import "./App.css";

function App() {
  //for loading:
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  useEffect(() => {
    if (spinner) {
      setTimeout(() => {
        // after 3seconds the loading is gone:
        spinner.style.display = "none";
        setLoading(false);
      }, 3000);
    }
  }, [spinner]);
  return (
    !loading && (
      <div className="App">
        <Pages></Pages>
      </div>
    )
  );
}

export default App;
