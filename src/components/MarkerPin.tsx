import { MapPin } from 'lucide-react';

interface MarkerPinProps {
  x: number;
  y: number;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export function MarkerPin({ x, y, name, isActive, onClick }: MarkerPinProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group focus:outline-none ' +
        'transition-transform duration-200 hover:scale-110 focus:scale-110'
      }
      style={{ left: `${x}%`, top: `${y}%` }}
      aria-label={`Select location: ${name}`}
      aria-pressed={isActive}
    >
      <MapPin
        className={
          'w-8 h-8 drop-shadow-md transition-colors duration-200 ' +
          (isActive
            ? 'text-crimson-600 fill-crimson-600'
            : 'text-navy-700 fill-navy-700 group-hover:text-crimson-600 group-hover:fill-crimson-600')
        }
        aria-hidden="true"
      />
      <span
        className={
          'mt-1 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap shadow-sm transition-colors ' +
          (isActive
            ? 'bg-crimson-700 text-white'
            : 'bg-white/90 text-archival-800 group-hover:bg-crimson-700 group-hover:text-white')
        }
      >
        {name}
      </span>
    </button>
  );
}
