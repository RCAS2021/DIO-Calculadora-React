import { useState } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";

export function Calculator() {
  const [currentNumber, setCurrentNumber] = useState("0");

  const handleAddNumberText = (number: string) => {
    setCurrentNumber((prev) => (prev === "0" ? number : prev + number));
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
  };

  const handleCalculate = () => {
    const result = eval(currentNumber.replace("^", "**"));
    setCurrentNumber(result.toString());
  };

  return (
    <div className="h-screen mx-auto bg-orange-200 flex items-center justify-center flex-col px-3 gap-6 py-6">
      <div className="bg-slate-400 items-center flex flex-col gap-3 py-4 px-2">
        <Input currentNumber={currentNumber}></Input>
        <div className="grid grid-rows-4 grid-cols-4 gap-3">
          <Button onClick={handleAddNumberText} label="*" />
          <Button onClick={handleAddNumberText} label="/" />
          <Button onClick={handleOnClear} label="C" />
          <Button onClick={handleAddNumberText} label="^" />
          <Button onClick={handleAddNumberText} label="7" />
          <Button onClick={handleAddNumberText} label="8" />
          <Button onClick={handleAddNumberText} label="9" />
          <Button onClick={handleAddNumberText} label="-" />
          <Button onClick={handleAddNumberText} label="4" />
          <Button onClick={handleAddNumberText} label="5" />
          <Button onClick={handleAddNumberText} label="6" />
          <Button onClick={handleAddNumberText} label="+" />
          <Button onClick={handleAddNumberText} label="1" />
          <Button onClick={handleAddNumberText} label="2" />
          <Button onClick={handleAddNumberText} label="3" />
          <Button onClick={handleCalculate} label="=" />
        </div>
      </div>
    </div>
  );
}
