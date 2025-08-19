import { useState } from "react";

const SimpleCalculate = () => {
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
    <div className="calculator">
      <div className="calculator-display">{display || "0"}</div>
      <div className="calculator-buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>÷</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>×</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button className="delete" onClick={() => handleDelete()}>Backspace</button>
        <button className="equal" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default SimpleCalculate;
