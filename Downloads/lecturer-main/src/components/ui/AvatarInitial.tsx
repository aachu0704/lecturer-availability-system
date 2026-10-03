import React from 'react';
import { cn } from '../../lib/utils';

interface AvatarInitialProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const GRADIENTS = [
  'from-blue-600 to-indigo-600',
  'from-violet-600 to-purple-600',
  'from-emerald-600 to-teal-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-cyan-600 to-blue-600',
  'from-fuchsia-600 to-pink-600',
];

export const AvatarInitial: React.FC<AvatarInitialProps> = ({
  name,
  size = 'md',
  className = '',
}) => {
  // Deterministic gradient selection based on name string
  const hash = (name || '').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const gradient = GRADIENTS[hash % GRADIENTS.length];

  // Extract initials (e.g. Dr. Ravi Kumar -> RK or DR)
  const cleanName = (name || '')
    .replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s+/i, '')
    .trim();
  const parts = cleanName.split(/\s+/).filter(Boolean);
  let initials = '';
  if (parts.length >= 2) {
    initials = `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  } else if (parts.length === 1 && parts[0].length > 0) {
    initials = parts[0].substring(0, 2).toUpperCase();
  } else {
    initials = 'LE';
  }

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm font-semibold',
    lg: 'w-14 h-14 text-lg font-bold',
    xl: 'w-20 h-20 text-2xl font-bold',
  };

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center text-white bg-gradient-to-br shadow-sm select-none shrink-0 ring-2 ring-white/80 dark:ring-slate-800',
        gradient,
        sizeClasses[size],
        className
      )}
    >
      {initials}
    </div>
  );
};
