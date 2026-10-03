import React from 'react';
import { LecturerStatus } from '../../types/database';
import { cn } from '../../lib/utils';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: LecturerStatus;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  showIcon = true,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs sm:text-sm px-3 py-1 gap-1.5 font-medium',
    lg: 'text-sm sm:text-base px-4 py-1.5 gap-2 font-semibold',
  };

  const statusConfig = {
    Available: {
      bg: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
      dot: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]',
      icon: CheckCircle2,
      label: 'Available',
    },
    Busy: {
      bg: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
      dot: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.7)]',
      icon: Clock,
      label: 'Busy',
    },
    'Not Available': {
      bg: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800',
      dot: 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.7)]',
      icon: XCircle,
      label: 'Not Available',
    },
  };

  const config = statusConfig[status] || statusConfig.Available;
  const IconComponent = config.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border transition-all duration-200',
        sizeClasses[size],
        config.bg,
        className
      )}
    >
      <span className={cn('w-2 h-2 rounded-full shrink-0 animate-pulse', config.dot)} />
      {showIcon && <IconComponent className={size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5'} />}
      <span>{config.label}</span>
    </span>
  );
};
