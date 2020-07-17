import React, { useState, useEffect } from "react";

const Pla = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async  function fetchData() {
    const res = await fetch("api.openweathermap.org/data/2.5/weather?q=London");
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);

  return(<div>
      <h1>{JSON.stringify(planets)}</h1>

      <div>Has error: {JSON.stringify(hasError)}</div>
      </div>
  );
};
export default Pla;

// API is not working