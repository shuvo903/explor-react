import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const [sixes,setSixes] = useState(0);

  const handelSingle = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };

  const handelFour = () => {
    const updateRuns = runs + 4;
    setRuns(updateRuns);
  };
  const handelSix = () => {
    const updateRuns = runs + 6;
    const updateSixes = sixes + 1;
    setSixes(updateSixes);
    setRuns(updateRuns);
  };
  return (
    <div>
      <h3>Player: Bangla Batsman</h3>
      <p><small>Six: {sixes}</small></p>
      {
        runs >= 50 && <p>You score: 50</p>
      }
      <h1>Score: {runs}</h1>
      <button onClick={handelSingle}>singles</button>
      <button onClick={handelFour}>Four</button>
      <button onClick={handelSix}>Six</button>
    </div>
  );
}
