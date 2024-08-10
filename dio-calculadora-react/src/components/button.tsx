interface buttonProps {
  label: string;
  onClick: (label: string) => void;
  className?: string; // Add className as an optional prop
}

export function Button({ label, onClick, className }: buttonProps) {
  return (
    <button
      onClick={() => onClick(label)}
      className={`bg-lime-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center justify-center text-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500 ${className}`}
    >
      {label}
    </button>
  );
}
