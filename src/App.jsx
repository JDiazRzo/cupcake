import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const cupcakeDate = new Date("2025-09-19"); 
    const today = new Date();
    const diffTime = today - cupcakeDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDays(diffDays);
  }, []);

  return (
    <div className="frame">
      <div className="container">
        <div className="pirata-text">
          Gracias por el cupcake<br />
           se te aprecia mucho ;)
        </div>
      </div>
    </div>
  );
}

export default App;
