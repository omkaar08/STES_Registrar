"use client";

import React, { useState } from "react";
import { TopBar, Footer, Sidebar } from "@/common";
import { StatCard, QuickActions, TodaySchedule, CurrentEnrollment, StudentStatistics, EnrollmentAnalytics } from "@/components/ui";
import { Users, Users2, ClipboardList, BookMarked } from "lucide-react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dummy user data
  const user = {
    name: "Omake",
    email: "omake@university.edu",
    role: "Registrar"
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <TopBar 
        user={user} 
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />

      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />

      {/* Main Content */}
      <main className="flex-1 pt-28 sm:pt-20 lg:pt-16 lg:pl-64 transition-all duration-300">
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
          {/* Page Header */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">Registrar Dashboard</h1>
            <p className="text-xs sm:text-sm text-gray-600">Executive overview and institutional management</p>
          </div>

          {/* Statistics Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <StatCard
              title="Total Students"
              value="12,347"
              icon={<Users />}
              iconColor="blue"
              change={{
                text: "+5% from last year",
                variant: "positive"
              }}
            />
            
            <StatCard
              title="Total Faculty Members"
              value="789"
              icon={<Users2 />}
              iconColor="green"
              change={{
                text: "+3% from last year",
                variant: "positive"
              }}
            />
            
            <StatCard
              title="Pending Tasks"
              value="27"
              icon={<ClipboardList />}
              iconColor="orange"
              change={{
                text: "Needs attention",
                variant: "negative"
              }}
            />
            
            <StatCard
              title="Active Courses"
              value="1,247"
              icon={<BookMarked />}
              iconColor="purple"
              change={{
                text: "Current semester",
                variant: "positive"
              }}
            />
          </div>

          {/* Main Grid - Quick Actions, Today's Schedule, and Current Enrollment */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Quick Actions */}
            <div className="min-h-[300px]">
              <QuickActions />
            </div>

            {/* Today's Schedule */}
            <div className="min-h-[300px]">
              <TodaySchedule />
            </div>

            {/* Current Enrollment */}
            <div className="min-h-[300px] md:col-span-2 lg:col-span-1">
              <CurrentEnrollment />
            </div>
          </div>

          {/* Student Statistics and Enrollment Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4">
            {/* Student Statistics */}
            <div className="min-h-[400px]">
              <StudentStatistics />
            </div>

            {/* Enrollment Analytics */}
            <div className="min-h-[400px]">
              <EnrollmentAnalytics />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
