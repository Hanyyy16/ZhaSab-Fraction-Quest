'use client';

interface FractionDisplayProps {
  numerator: number | string;
  denominator: number | string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export default function FractionDisplay({ 
  numerator, 
  denominator, 
  className = '',
  size = 'md',
  color = 'currentColor'
}: FractionDisplayProps) {
  const sizeClasses = {
    sm: {
      text: 'text-lg',
      line: 'w-6 h-0.5',
      gap: 'gap-0'
    },
    md: {
      text: 'text-2xl',
      line: 'w-10 h-0.5',
      gap: 'gap-0'
    },
    lg: {
      text: 'text-3xl',
      line: 'w-12 h-1',
      gap: 'gap-0.5'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <span className={`inline-flex flex-col items-center justify-center ${currentSize.gap} leading-none ${className}`}>
      <span className={`${currentSize.text} font-bold`} style={{ color }}>{numerator}</span>
      <span className={`${currentSize.line} bg-current`} style={{ backgroundColor: color === 'currentColor' ? undefined : color }}></span>
      <span className={`${currentSize.text} font-bold`} style={{ color }}>{denominator}</span>
    </span>
  );
}
