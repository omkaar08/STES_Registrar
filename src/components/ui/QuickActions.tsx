"use client";

import React from "react";
import Link from "next/link";
import { UserPlus, Upload, ClipboardCheck } from "lucide-react";

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  bgColor: string;
  textColor: string;
  iconColor: string;
}

const QuickActions: React.FC = () => {
  const actions: QuickAction[] = [
    {
      id: "add-student",
      label: "Add Student",
      icon: <UserPlus size={20} />,
      href: "/student-records/add",
      bgColor: "bg-blue-50",
      textColor: "text-[#026892]",
      iconColor: "text-[#026892]",
    },
    {
      id: "import-students",
      label: "Import Students",
      icon: <Upload size={20} />,
      href: "/student-records/import",
      bgColor: "bg-blue-50",
      textColor: "text-[#026892]",
      iconColor: "text-[#026892]",
    },
    {
      id: "admissions",
      label: "Admissions",
      icon: <ClipboardCheck size={20} />,
      href: "/admissions",
      bgColor: "bg-orange-50",
      textColor: "text-[#f59e0b]",
      iconColor: "text-[#f59e0b]",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>
      </div>

      <div className="space-y-3 flex flex-col">
        {actions.map((action) => {
          return (
            <Link key={action.id} href={action.href} className="block">
              <div
                role="button"
                tabIndex={0}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg ${action.bgColor} border border-gray-200/60 hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#026892]/20 group`}
              >
                <div className={`flex-shrink-0 ${action.iconColor}`}>
                  <span className="[&>svg]:h-5 [&>svg]:w-5">{action.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold text-base ${action.textColor}`}>
                    {action.label}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
