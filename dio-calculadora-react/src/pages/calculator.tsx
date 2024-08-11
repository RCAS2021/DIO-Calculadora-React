import { useState } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { toast } from "sonner";

export function Calculator() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [isResult, setIsResult] = useState(false);

  const handleAddNumberText = (number: string) => {
    const operators = ["+", "-", "*", "^", "/"];
    const lastChar = currentNumber.slice(-1);

    if (isResult && !isNaN(Number(number))) {
      // If the result is displayed and the user clicks a number, start a new calculation
      setCurrentNumber(number);
      setIsResult(false);
    } else if (number === "." && !currentNumber.includes(".")) {
      // If the number is a decimal point and there is no decimal point in the current number
      if (operators.includes(lastChar) || currentNumber === "0") {
        // Handle decimal point after an operator or leading zero
        setCurrentNumber((prev) => prev + "0.");
      } else {
        // Add decimal point to the current number
        setCurrentNumber((prev) => prev + ".");
      }
    } else if (operators.includes(lastChar) && operators.includes(number)) {
      // Prevent multiple operators in a row
      return;
    } else {
      // Add number or operator to the current number
      setCurrentNumber((prev) =>
        prev === "0" && !operators.includes(number) ? number : prev + number
      );
    }
    setIsResult(false);
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setIsResult(false);
  };

  const handleCalculate = () => {
    try {
      let expression = currentNumber.replace(
        /(\d*\.?\d*)√(\d*\.?\d+)/g,
        (match, p1, p2) => {
          const prefix = p1 ? `${p1}*` : ""; // Add multiplication if there's a prefix number
          return `${prefix}Math.sqrt(${p2})`;
        }
      );
      const result = eval(expression.replace("^", "**"));
      setCurrentNumber(
        result === Infinity ? "Can't divide a number by 0" : result.toString()
      );
      setIsResult(true);
    } catch {
      toast.error("There was an error with the expression, try again!");
      setCurrentNumber("0");
    }
  };

  return (
    <div className="h-screen mx-auto bg-orange-200 flex items-center justify-center flex-col px-3 gap-6 py-6">
      <div className="bg-slate-400 items-center flex flex-col gap-3 py-4 px-2">
        <Input currentNumber={currentNumber}></Input>
        <div className="grid grid-rows-4 grid-cols-4 gap-3">
          <Button onClick={handleOnClear} label="C" />
          <Button onClick={handleAddNumberText} label="/" />
          <Button onClick={handleAddNumberText} label="*" />
          <Button onClick={handleAddNumberText} label="-" />
          <Button onClick={handleAddNumberText} label="7" />
          <Button onClick={handleAddNumberText} label="8" />
          <Button onClick={handleAddNumberText} label="9" />
          <Button onClick={handleAddNumberText} label="+" />
          <Button onClick={handleAddNumberText} label="4" />
          <Button onClick={handleAddNumberText} label="5" />
          <Button onClick={handleAddNumberText} label="6" />
          <Button onClick={handleAddNumberText} label="^" />
          <Button onClick={handleAddNumberText} label="1" />
          <Button onClick={handleAddNumberText} label="2" />
          <Button onClick={handleAddNumberText} label="3" />
          <Button onClick={handleAddNumberText} label="√" />
          <Button
            onClick={handleAddNumberText}
            label="0"
            className="col-span-2"
          />
          <Button onClick={handleAddNumberText} label="." />
          <Button onClick={handleCalculate} label="=" />
        </div>
      </div>
    </div>
  );
}
