import { useState } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";

export function Calculator() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [isResult, setIsResult] = useState(false);

  const handleAddNumberText = (number: string) => {
    const operators = ["+", "-", "*", "^", "/"];
    const lastChar = currentNumber.slice(-1);

    if (isResult && !isNaN(Number(number))) {
      setCurrentNumber(number);
    } else if (operators.includes(lastChar) && operators.includes(number)) {
      return;
    } else {
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
    let expression = currentNumber.replace(/(\d*)√(\d+)/g, (_, p1, p2) => {
      const prefix = p1 ? `${p1}*` : "";
      return `${prefix}Math.sqrt(${p2})`;
    });
    const result = eval(expression.replace("^", "**"));
    setCurrentNumber(
      result === Infinity ? "Can't divide a number by 0" : result.toString()
    );
    setIsResult(true);
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
            className="col-span-3"
          />
          <Button onClick={handleCalculate} label="=" />
        </div>
      </div>
    </div>
  );
}
