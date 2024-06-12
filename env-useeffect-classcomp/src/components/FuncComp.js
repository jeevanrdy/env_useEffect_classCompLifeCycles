import React, { useEffect, useState } from "react";

function FuncComp() {
  let [score, setScore] = useState(0);
  let [age, setAge] = useState(0);

  useEffect(() => {
    console.log("FCcounter-Loaded");
  }, []);

  useEffect(() => {
    return () => {
      console.log("FCcounter-Unloaded");
    };
  }, []);

  useEffect(() => {
    console.log("score stateV changed");
  }, [score]);

  useEffect(() => {
    console.log("age stateV changed");
  }, [age]);

  useEffect(() => {
    console.log("score or age stateV changed");
  }, [score, age]);

  useEffect(() => {
    console.log("any stateV changed");
  });



  return (
    <div className="counterstyle">
      <h3>FuncComponent</h3>
      <h2>Score: {score}</h2>
      <button
        type="button"
        onClick={() => {
          setScore(score + 1);
        }}
      >
        Increase
      </button>
      <button
        type="button"
        onClick={() => {
          setScore(score - 1);
        }}
      >
        Decrease
      </button>

      <h2>Age: {age}</h2>
      <button
        type="button"
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Increase
      </button>
      <button
        type="button"
        onClick={() => {
          setAge(age - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default FuncComp;
