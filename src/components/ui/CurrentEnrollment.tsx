"use client";

import React from "react";

interface EnrollmentItem {
  label: string;
  value: string | number;
  badgeColor?: string;
}

const CurrentEnrollment: React.FC = () => {
  const enrollmentData: EnrollmentItem[] = [
    {
      label: "Total Enrolled",
      value: "12,347",
      badgeColor: "bg-green-50 text-green-600",
    },
    {
      label: "Pending Applications",
      value: "5",
      badgeColor: "bg-red-50 text-red-600",
    },
    {
      label: "Capacity Alerts",
      value: "2",
      badgeColor: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">Current Enrollment</h2>
      </div>

      <div className="space-y-3 flex flex-col">
        {enrollmentData.map((item) => {
          return (
            <div
              key={item.label}
              className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200/60 ${item.badgeColor}`}
            >
              <span className="text-sm font-medium text-gray-900">
                {item.label}
              </span>
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-current"></span>
                <span className="text-base text-gray-900">
                  {item.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentEnrollment;
