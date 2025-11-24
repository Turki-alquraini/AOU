import React from 'react';
import { BadgeType } from '../../types';

interface BadgeProps {
  type: BadgeType | string;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ type, text }) => {
  const styles: Record<string, string> = {
    success: "bg-green-100 text-green-700 border-green-200",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
    danger: "bg-red-100 text-red-700 border-red-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
  };
  
  // Fallback to blue if type doesn't exist
  const selectedStyle = styles[type] || styles.blue;

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${selectedStyle}`}>
      {text}
    </span>
  );
};

export default Badge;