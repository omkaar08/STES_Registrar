'use client';

import React, { useState } from 'react';

interface EnrollmentData {
  label: string;
  fullName: string;
  value: number;
  color: string;
}

const EnrollmentAnalytics: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data: EnrollmentData[] = [
    { label: 'Engineering', fullName: 'School of Engineering', value: 3245, color: '#026892' },
    { label: 'Science', fullName: 'School of Science', value: 2890, color: '#10b981' },
    { label: 'Commerce', fullName: 'School of Commerce', value: 2456, color: '#f59e0b' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Calculate cumulative angles for SVG
  let cumulativeAngle = -90; // Start from top
  const segments = data.map((item) => {
    const angle = (item.value / total) * 360;
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + angle;
    cumulativeAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const radius = 80;
    const innerRadius = 55;

    const x1 = Math.round((100 + radius * Math.cos(startRad)) * 100) / 100;
    const y1 = Math.round((100 + radius * Math.sin(startRad)) * 100) / 100;
    const x2 = Math.round((100 + radius * Math.cos(endRad)) * 100) / 100;
    const y2 = Math.round((100 + radius * Math.sin(endRad)) * 100) / 100;

    const ix1 = Math.round((100 + innerRadius * Math.cos(startRad)) * 100) / 100;
    const iy1 = Math.round((100 + innerRadius * Math.sin(startRad)) * 100) / 100;
    const ix2 = Math.round((100 + innerRadius * Math.cos(endRad)) * 100) / 100;
    const iy2 = Math.round((100 + innerRadius * Math.sin(endRad)) * 100) / 100;

    const largeArc = angle > 180 ? 1 : 0;

    const path = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix1} ${iy1} Z`;

    // Calculate label position
    const labelAngle = (startAngle + endAngle) / 2;
    const labelRad = (labelAngle * Math.PI) / 180;
    const labelRadius = radius + 35;
    const labelX = Math.round((100 + labelRadius * Math.cos(labelRad)) * 100) / 100;
    const labelY = Math.round((100 + labelRadius * Math.sin(labelRad)) * 100) / 100;

    return { path, color: item.color, value: item.value, labelX, labelY };
  });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 h-full flex flex-col">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-[#026892]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
        <h2 className="text-lg font-bold text-gray-900">Department-wise Student Registration</h2>
      </div>

      {/* Chart Container */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 320 280"
          className="mb-3 max-w-[320px] max-h-[280px]"
          preserveAspectRatio="xMidYMid meet"
        >
          {segments.map((segment, index) => {
            const adjustedLabelX = segment.labelX + 60;
            const adjustedLabelY = segment.labelY + 40;
            
            return (
              <g
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cursor-pointer transition-opacity"
                style={{
                  opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.6,
                }}
              >
                <path
                  d={segment.path}
                  fill={segment.color}
                  transform="translate(60, 40)"
                  style={{
                    filter:
                      hoveredIndex === index
                        ? 'drop-shadow(0 4px 12px rgba(2, 104, 146, 0.3))'
                        : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
                {/* Value labels */}
                <text
                  x={adjustedLabelX}
                  y={adjustedLabelY}
                  textAnchor="middle"
                  style={{
                    fill: segment.color,
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  {segment.value}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredIndex !== null && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-lg z-20">
            <div className="text-sm font-semibold text-gray-900">
              {data[hoveredIndex].fullName}
            </div>
            <div className="text-xs text-gray-600 mt-1">
              {data[hoveredIndex].value} students
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4 mb-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 cursor-pointer transition-opacity"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.6,
            }}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm text-gray-900">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollmentAnalytics;
