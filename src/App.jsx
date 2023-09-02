import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseHandle = () => {
    setCounter(counter + 1);
  };

  const decreaseHandle = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const resetHandle = () => {
    setCounter(0);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-600 justify-center items-center">
      <h1 className="text-[100px] font-bold text-white">Halo Bar.</h1>
      <p className="text-[40px] font-semibold text-white underline">
        This is react app.
      </p>

      <p className="mt-3 text-white">Value : {counter}</p>
      <Button
        color="warning"
        variant="contained"
        onClick={resetHandle}
        sx={{ mt: 2 }}
      >
        Reset
      </Button>
      <div className="flex-row">
        <button
          onClick={decreaseHandle}
          className="px-5 mx-2 py-3 mt-5 font-semibold bg-white rounded text-black shadow hover:bg-slate-200 hover:text-slate-300"
        >
          Decrease
        </button>

        <button
          onClick={increaseHandle}
          className="px-5  py-3 mt-5 font-semibold bg-white rounded text-black shadow hover:bg-slate-200 hover:text-slate-300"
        >
          Increase
        </button>

        <button className="btn">Hello daisyUI</button>
      </div>
      <ul className="steps mt-5">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step step-primary">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>
    </div>
  );
}

export default App;
