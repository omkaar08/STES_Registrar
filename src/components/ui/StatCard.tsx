import React from "react";
import { StatCardProps } from "@/types";

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, iconColor = 'blue' }) => {
  const getVariantStyles = (variant?: string) => {
    switch (variant) {
      case 'positive':
        return 'text-emerald-600';
      case 'negative':
        return 'text-red-600';
      case 'warning':
        return 'text-orange-600';
      default:
        return 'text-gray-500';
    }
  };

  const getIconBgColor = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string }> = {
      blue: { bg: 'bg-[#026892]/10', text: 'text-[#026892]' },
      green: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
      red: { bg: 'bg-red-100', text: 'text-red-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    };
    return colorMap[color] || colorMap['blue'];
  };

  const iconStyle = getIconBgColor(iconColor);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Header with title and icon aligned on same line */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3 className="text-xs sm:text-sm font-medium text-gray-600 tracking-tight">
          {title}
        </h3>
        <div className={`flex-shrink-0 h-7 w-7 sm:h-8 sm:w-8 rounded-lg ${iconStyle.bg} ${iconStyle.text} flex items-center justify-center`}>
          <span className="[&>svg]:h-3.5 [&>svg]:w-3.5 sm:[&>svg]:h-4 sm:[&>svg]:w-4">{icon}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">
          {value}
        </p>
        {change?.text && (
          <p className={`text-[11px] font-medium ${getVariantStyles(change.variant)}`}>
            {change.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
