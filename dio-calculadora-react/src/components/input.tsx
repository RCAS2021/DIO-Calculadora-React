interface inputProps {
  currentNumber: string;
}

export function Input({ currentNumber }: inputProps) {
  return (
    <input
      type="text"
      name="visor"
      value={currentNumber}
      autoComplete="off"
      disabled
      className="w-full
      flex-1
      text-sm
      bg-transparent
      mx-2
      outline-none
      text-slate-950
      bg-zinc-300
      placeholder:text-zinc-500
      rounded-xl
      border
      p-2
      border-lime-800"
    ></input>
  );
}
