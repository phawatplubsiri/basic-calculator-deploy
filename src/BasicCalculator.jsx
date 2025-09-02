import { useState } from "react";

const BasicCalculator = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      const calResult = eval(display);
      if (Number.isInteger(calResult)) {
        setResult(calResult.toString());
      } else {
        setResult(calResult.toFixed(2));
      }
    } catch {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setDisplay("");
    setResult("");
  };

  const handleDelete = () => {
    setDisplay((prev) => prev.slice(0, -1));
    setResult((prev) => prev.slice(0, -1));
  }
    

  return (
    <div className="w-[260px] mx-auto my-5 p-4 border-2 border-black rounded-lg">
      {/* Display */}
      <div className="bg-[#272626] text-white rounded-md mb-3 p-3 w-full">
        <div className="text-right text-lg text-gray-300">
          {display || "0"}
        </div>
        <div className="text-right text-lg font-bold">
          {result || ""}
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-3 w-full">
        <button onClick={() => handleClick("7")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">7</button>
        <button onClick={() => handleClick("8")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">8</button>
        <button onClick={() => handleClick("9")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">9</button>
        <button onClick={() => handleClick("/")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">÷</button>

        <button onClick={() => handleClick("4")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">4</button>
        <button onClick={() => handleClick("5")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">5</button>
        <button onClick={() => handleClick("6")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">6</button>
        <button onClick={() => handleClick("*")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">x</button>

        <button onClick={() => handleClick("1")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">1</button>
        <button onClick={() => handleClick("2")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">2</button>
        <button onClick={() => handleClick("3")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">3</button>
        <button onClick={() => handleClick("-")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">-</button>

        <button onClick={handleClear} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">C</button>
        <button onClick={() => handleClick("0")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">0</button>
        <button onClick={() => handleClick(".")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">.</button>
        <button onClick={() => handleClick("+")} className="p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">+</button>

        <button onClick={handleDelete} className="col-span-2 p-3 text-lg rounded-md bg-gray-200 hover:bg-gray-400">
          Backspace
        </button>
        <button onClick={handleCalculate} className="col-span-2 p-3 text-lg rounded-md font-bold bg-[#272626] text-white hover:bg-[#414141]">
          =
        </button>
      </div>
    </div>
  );
};

export default BasicCalculator;
