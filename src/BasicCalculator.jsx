import { useState } from "react";

const BasicCalculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      if (Number.isInteger(result)) {
        setDisplay(result.toString());
      } else {
        setDisplay(result.toFixed(2));
      }
    } catch {
      setDisplay("Error");
    }
  };

  const handleClear = () => setDisplay("");
  const handleDelete = () => setDisplay((prev) => prev.slice(0, -1));

  return (
    <div className="w-[240px] mx-auto my-5 p-4 border-2 border-black bg-slate-200 rounded-lg flex flex-col items-center">
      <div className="bg-[#272626] text-white text-2xl p-3 rounded-md mb-3 text-right w-full min-h-[40px]">
        {display || "0"}
      </div>
      <div className="grid grid-cols-4 gap-3 w-full text-center">
        <button onClick={() => handleClick("7")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">7</button>
        <button onClick={() => handleClick("8")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">8</button>
        <button onClick={() => handleClick("9")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">9</button>
        <button onClick={() => handleClick("/")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">÷</button>

        <button onClick={() => handleClick("4")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">4</button>
        <button onClick={() => handleClick("5")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">5</button>
        <button onClick={() => handleClick("6")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">6</button>
        <button onClick={() => handleClick("*")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">x</button>

        <button onClick={() => handleClick("1")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">1</button>
        <button onClick={() => handleClick("2")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">2</button>
        <button onClick={() => handleClick("3")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">3</button>
        <button onClick={() => handleClick("-")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">-</button>

        <button onClick={handleClear} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">C</button>
        <button onClick={() => handleClick("0")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">0</button>
        <button onClick={() => handleClick(".")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">.</button>
        <button onClick={() => handleClick("+")} className="p-3 text-lg rounded-md bg-white hover:bg-gray-400">+</button>

        <button onClick={handleDelete} className="col-span-2 p-3 text-lg rounded-md bg-white hover:bg-gray-400">
          ←
        </button>
        <button onClick={handleCalculate} className="col-span-2 p-3 text-lg rounded-md font-bold bg-blue-600 text-white hover:bg-blue-800">
          =
        </button>
      </div>
    </div>
  );
};

export default BasicCalculator;
