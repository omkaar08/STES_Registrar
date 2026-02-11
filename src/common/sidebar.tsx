"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Building2,
  FileText,
  ScrollText,
  Wrench,
  Users,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const BRAND_BLUE = "#026892";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

const navItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Executive Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  { id: "departments", label: "Departments", icon: Building2 },
  { id: "grade-submissions", label: "Grade Submissions", icon: FileText },
  { id: "transcripts", label: "Transcripts", icon: ScrollText },
  { id: "service-requests", label: "Service Requests", icon: Wrench },
  { id: "students-performance", label: "Students Performance", icon: Users },
  { id: "reports", label: "Reports", icon: BarChart3 },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 lg:translate-x-0 pt-4",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Navigation */}
        <nav className="p-3 space-y-1 pt-30 sm:pt-22 lg:pt-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.active;

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (isOpen) onToggle();
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#EAF7F1] text-[#026892]"
                    : "text-gray-600 hover:bg-blue-50",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
