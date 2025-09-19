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
          ¡Gracias por el cupcake!
        </div>
        <p className="message">
          Fue un detalle muy lindo, me alegró bastante el día. <br />
          Se nota cuando las cosas se hacen con buena onda, y eso vale mucho. <br />
          Gracias por compartirlo ;)
        </p>
      </div>
    </div>
  );
}

export default App;
