"use client";

import { Bell, Menu } from "lucide-react";
import Image from "next/image";

const BRAND_BLUE = "#026892";

interface TopBarProps {
  user?: {
    name: string;
    email: string;
    role: string;
  };
  onToggleSidebar?: () => void;
}

const TopBar = ({ user, onToggleSidebar }: TopBarProps) => {
  return (
    <div className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-2 sm:px-4 lg:px-8">
        {/* Row 1: Mobile top bar */}
        <div className="flex items-center justify-between h-16 sm:h-16">
          {/* Left: Menu + Brand */}
          <div className="flex items-center gap-2 sm:gap-3 pr-2">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-1.5 hover:bg-gray-100 rounded-lg shrink-0"
              aria-label="Open menu"
              type="button"
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>

            <Image
              src="/images/ur-logo-full.png"
              alt="University of Rwanda Logo"
              width={32}
              height={32}
              className="rounded-full sm:w-10 sm:h-10 shrink-0"
            />
            <div className="leading-tight">
              <h1
                className="text-sm sm:text-base font-bold"
                style={{ color: BRAND_BLUE }}
              >
                SAMPS UR
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-500">
                Registrar Dashboard
              </p>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 shrink-0">
            {/* Desktop dropdowns */}
            <div className="hidden sm:flex items-center gap-2 lg:gap-3">
              <select style={{ accentColor: '#026892' }} className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-white border border-gray-300 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#026892]">
                <option>2024-2025</option>
                <option>2025-2026</option>
                <option>2023-2024</option>
              </select>
              <select style={{ accentColor: '#026892' }} className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-white border border-gray-300 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#026892]">
                <option>Semester 1</option>
                <option>Semester 2</option>
              </select>
              <select style={{ accentColor: '#026892' }} className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-white border border-gray-300 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#026892]">
                <option>Registrar</option>
                <option>Secretary</option>
                <option>Admission</option>
                <option>Academic</option>
              </select>
            </div>

            {/* Notifications */}
            <button
              className="relative p-1 sm:p-2 hover:bg-secondary rounded-lg transition-colors shrink-0"
              type="button"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-[9px] sm:text-xs rounded-full flex items-center justify-center font-medium">
                3
              </span>
            </button>

            {/* User Avatar */}
            <div className="flex items-center gap-1 sm:gap-2 pl-0.5 shrink-0 ml-auto">
              <div className="text-right hidden xl:block">
                <p className="text-xs font-medium text-foreground">{user?.name || 'Omake'}</p>
                <p className="text-[10px] text-muted-foreground">{user?.role || 'Registrar'}</p>
              </div>
              <div className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full bg-[#026892] flex items-center justify-center">
                <span className="font-bold text-white text-xs sm:text-sm">
                  OM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Mobile dropdowns */}
        <div className="flex sm:hidden items-center gap-2 pb-3 overflow-x-auto">
          <select style={{ accentColor: '#026892' }} className="flex-shrink-0 px-3 py-2 bg-white border border-gray-300 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#026892]">
            <option>2024-2025</option>
            <option>2025-2026</option>
            <option>2023-2024</option>
          </select>
          <select style={{ accentColor: '#026892' }} className="flex-shrink-0 px-3 py-2 bg-white border border-gray-300 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#026892]">
            <option>Semester 1</option>
            <option>Semester 2</option>
          </select>
          <select style={{ accentColor: '#026892' }} className="flex-shrink-0 px-3 py-2 bg-white border border-gray-300 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#026892]">
            <option>Registrar</option>
            <option>Secretary</option>
            <option>Admission</option>
            <option>Academic</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
