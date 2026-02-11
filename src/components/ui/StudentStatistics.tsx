'use client';

import React, { useState } from 'react';

interface StatisticMetric {
  label: string;
  value: number;
}

const StudentStatistics: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const metrics: StatisticMetric[] = [
    { label: 'Enrollment Rate', value: 94.2 },
    { label: 'Retention Rate', value: 91.8 },
    { label: 'Graduation Rate', value: 87.5 },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 h-full flex flex-col">
      {/* Header */}
      <div className="mb-3 flex items-center gap-2">
        <svg className="w-5 h-5 text-[#026892]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21V13M17 21V9M12 21V3" />
        </svg>
        <h2 className="text-base font-bold text-gray-900">Student Statistics</h2>
      </div>

      {/* Chart Container */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Y-axis labels */}
        <div className="flex mb-2">
          <div className="w-12 flex flex-col justify-between text-xs text-gray-500 font-medium text-right pr-3">
            <span>100%</span>
            <span>50%</span>
            <span>0%</span>
          </div>

          {/* Chart area */}
          <div className="flex-1">
            {/* Grid lines */}
            <div className="h-48 border-l border-gray-300 relative mb-1">
              <div className="absolute top-0 left-0 right-0 border-t border-gray-200 w-full"></div>
              <div className="absolute top-1/2 left-0 right-0 border-t border-gray-200 w-full"></div>
              <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 w-full"></div>

              {/* Bars */}
              <div className="absolute inset-0 flex items-end justify-around px-4 gap-3">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1 h-full justify-end"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative w-full flex flex-col items-center h-full justify-end">
                      {/* Tooltip */}
                      {hoveredIndex === index && (
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg p-2 whitespace-nowrap z-20 shadow-lg">
                          <div className="font-semibold">{metric.label}</div>
                          <div className="text-gray-300">{metric.value}%</div>
                        </div>
                      )}

                      {/* Bar */}
                      <div
                        className="w-12 rounded-t-lg transition-all duration-300 cursor-pointer"
                        style={{
                          backgroundColor: hoveredIndex === index ? '#014d6e' : '#026892',
                          height: `${(metric.value / 100) * 100}%`,
                          minHeight: '4px',
                          boxShadow: hoveredIndex === index ? '0 4px 12px rgba(2, 104, 146, 0.3)' : 'none',
                        }}
                      />

                      {/* Value label on bar */}
                      {hoveredIndex === index && (
                        <div className="absolute -top-5 text-xs font-bold" style={{ color: '#026892' }}>
                          {metric.value}%
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* X-axis labels */}
        <div className="flex">
          <div className="w-12"></div>
          <div className="flex-1 flex items-start justify-around px-4 gap-3 pt-2">
            {metrics.map((metric, index) => (
              <div key={index} className="flex-1 text-center">
                <span className="text-xs font-semibold text-gray-700">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="w-full mt-3 px-3 py-2 text-xs font-medium rounded-lg border-2 transition-all duration-200 hover:bg-blue-50" style={{ borderColor: '#026892', color: '#026892' }}>
          View All Student Reports
        </button>
      </div>
    </div>
  );
};

export default StudentStatistics;
