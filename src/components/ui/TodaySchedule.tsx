"use client";

import React from "react";

interface ScheduleItem {
  id: string;
  title: string;
  location: string;
  time: string;
  status: "next" | "later";
}

const TodaySchedule: React.FC = () => {
  const scheduleItems: ScheduleItem[] = [
    {
      id: "1",
      title: "Orientation Meeting",
      location: "Main Hall",
      time: "09:00-10:00",
      status: "next",
    },
    {
      id: "2",
      title: "Faculty Meeting",
      location: "Board Room",
      time: "14:00-15:00",
      status: "later",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">Today's Schedule</h2>
      </div>

      <div className="space-y-3 flex flex-col">
        {scheduleItems.map((item) => {
          const isNext = item.status === "next";
          
          return (
            <div
              key={item.id}
              className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg border transition-all duration-200 ${
                isNext
                  ? "bg-blue-50 border-[#026892]/30"
                  : "bg-gray-50 border-gray-300/40"
              }`}
            >
              <div className="flex-1 min-w-0">
                <h3
                  className="font-semibold text-base mb-1 text-gray-900"
                >
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <span>{item.location}</span>
                  <span>•</span>
                  <span>{item.time}</span>
                </div>
              </div>

              <div className="flex-shrink-0">
                {isNext ? (
                  <span className="inline-flex items-center px-4 py-1.5 rounded-md bg-[#026892] text-white text-sm font-semibold">
                    Next
                  </span>
                ) : (
                  <span className="inline-flex items-center px-4 py-1.5 rounded-md bg-gray-200 text-gray-600 text-sm font-medium">
                    Later
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodaySchedule;
