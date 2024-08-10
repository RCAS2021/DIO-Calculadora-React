interface buttonProps {
  label: string;
  onClick: (label: string) => void;
}

export function Button({ label, onClick }: buttonProps) {
  return (
    <button
      onClick={() => onClick(label)}
      className="bg-lime-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center justify-center text-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500"
    >
      {label}
    </button>
  );
}
