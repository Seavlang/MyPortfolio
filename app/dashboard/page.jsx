"use client";

import { Search, Home, Edit, CheckSquare, Lightbulb, Smile, LogOut, Bell, ChevronDown, Plus, Settings, ArrowRight } from 'lucide-react';

export default function TeacherDashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-[290px] bg-white rounded-tr-[30px] p-6 flex flex-col gap-12 shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="size-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg"></div>
          <div className="bg-[#EEF9FF] px-2 py-1 rounded-r-lg">
            <span className="text-[#0000D2] font-semibold text-lg">Math First Academy</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col justify-between flex-1">
          <div className="space-y-2">
            {/* Dashboard - Active */}
            <button className="w-full flex items-center gap-4 px-4 py-3 bg-[#EEF9FF] rounded-lg text-[#4FB5DB] font-semibold transition-colors">
              <Home className="size-5" />
              <span>Dashboard</span>
            </button>

            {/* Assessments */}
            <button className="w-full flex items-center gap-3 px-3 py-3 text-[#A0AEC0] hover:bg-gray-50 rounded-lg transition-colors">
              <Edit className="size-5" />
              <span className="font-medium">Assessments</span>
            </button>

            {/* Grading */}
            <button className="w-full flex items-center gap-3 px-3 py-3 text-[#A0AEC0] hover:bg-gray-50 rounded-lg transition-colors">
              <CheckSquare className="size-5" />
              <span className="font-medium">Grading</span>
            </button>

            {/* Solution Interpret */}
            <button className="w-full flex items-center gap-3 px-3 py-3 text-[#A0AEC0] hover:bg-gray-50 rounded-lg transition-colors">
              <Lightbulb className="size-5" />
              <span className="font-medium">Solution Interpret</span>
            </button>

            {/* Motivation */}
            <button className="w-full flex items-center gap-3 px-3 py-3 text-[#A0AEC0] hover:bg-gray-50 rounded-lg transition-colors">
              <Smile className="size-5" />
              <span className="font-medium">Motivation</span>
            </button>
          </div>

          {/* Leave */}
          <button className="w-full flex items-center gap-3 px-3 py-3 text-[#FF4640] hover:bg-red-50 rounded-lg mb-20 transition-colors">
            <LogOut className="size-5" />
            <span className="font-medium">Leave</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Navbar */}
        <header className="bg-[#F3F7FB] rounded-bl-[30px] px-10 py-5 flex justify-between items-center shadow-sm">
          {/* Search Bar */}
          <div className="flex items-center gap-3 bg-white border border-[#E4E4E7] rounded-2xl px-4 py-2 w-[547px]">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 opacity-70 placeholder:text-gray-400"
            />
            <Search className="size-6 text-gray-400" />
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="size-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
              <span className="absolute -top-1 -right-1 size-2 bg-red-500 rounded-full animate-pulse"></span>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 ring-2 ring-white overflow-hidden">
                <img src="/images/profile.jpg" alt="Profile" width={50} height={50} className="size-full object-cover" />
              </div>
              <span className="font-semibold text-[#324C5B]">Vey Seavlang</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-10 space-y-10">
          {/* Welcome Section */}
          <div>
            <h1 className="text-[35px] font-bold text-[#4FB5DB] leading-tight mb-1">
              Good Morning, Vey Seavlang!
            </h1>
            <p className="text-[#B3B3B3] font-semibold">
              Here's an overview of your students' performance and recent classroom activities.
            </p>
          </div>

          {/* Filters and Actions */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              {/* Class Filter */}
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E4E4E7] rounded-lg text-[#858590] text-sm hover:border-gray-300 transition-colors">
                <span>Class</span>
                <Settings className="size-5" />
              </button>

              {/* Month Filter */}
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E4E4E7] rounded-lg text-[#858590] text-sm hover:border-gray-300 transition-colors">
                <span>Month</span>
                <Settings className="size-5" />
              </button>
            </div>

            {/* Create Assessments Button */}
            <button className="flex items-center gap-2 px-4 py-3 bg-[#4FB5DB] text-white rounded-lg font-medium text-sm hover:bg-[#3da5c9] transition-all hover:shadow-md active:scale-95">
              <Plus className="size-5" />
              <span>Create Assessments</span>
            </button>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Total Students Card */}
            <div className="bg-white rounded-[30px] p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[#324C5B] font-semibold">Total Students</h3>
                <ChevronDown className="size-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
              </div>

              <div className="text-5xl font-semibold text-[#333333] mb-8">60</div>

              {/* Class Distribution Chart */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-sm bg-[#497AF9]/60"></div>
                  <span className="text-xs text-gray-600">37%    Class A</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-sm bg-[#789DFB]/30"></div>
                  <span className="text-xs text-gray-600">9%      Class B</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-3 rounded-sm bg-[#E5E5E5]"></div>
                  <span className="text-xs text-gray-600">14%     Class C</span>
                </div>
              </div>

              {/* Pie Chart Placeholder */}
              <div className="size-48 mx-auto relative">
                <svg viewBox="0 0 200 200" className="size-full">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#497AF9" strokeWidth="40" strokeDasharray="207 565" transform="rotate(-90 100 100)" />
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#789DFB" strokeWidth="40" strokeDasharray="50 565" strokeDashoffset="-207" transform="rotate(-90 100 100)" />
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#E5E5E5" strokeWidth="40" strokeDasharray="78 565" strokeDashoffset="-257" transform="rotate(-90 100 100)" />
                </svg>
              </div>
            </div>

            {/* Teaching Summary Card */}
            <div className="bg-white rounded-[30px] p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[#324C5B] font-semibold">Teaching Summary</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[#324C5B] font-semibold">October</span>
                  <ChevronDown className="size-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[#02A0FC]"></div>
                  <span className="text-xs text-[#324C5B]">Quiz</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[#4339F2]"></div>
                  <span className="text-xs text-[#324C5B]">Homework</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[#FFB200]"></div>
                  <span className="text-xs text-[#324C5B]">Assignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[#6BBEB6]"></div>
                  <span className="text-xs text-[#324C5B]">Exam</span>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                <div className="flex justify-between items-center border-t border-b border-[#BEE7F8] py-3">
                  <span className="text-sm text-[#324C5B]">Quiz</span>
                  <span className="text-sm font-semibold text-[#02A0FC]">10</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#BEE7F8] py-3">
                  <span className="text-sm text-[#324C5B]">Homework</span>
                  <span className="text-sm font-semibold text-[#4339F2]">4</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#BEE7F8] py-3">
                  <span className="text-sm text-[#324C5B]">Assignment</span>
                  <span className="text-sm font-semibold text-[#FFB200]">6</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#BEE7F8] py-3">
                  <span className="text-sm text-[#324C5B]">Exam</span>
                  <span className="text-sm font-semibold text-[#6BBEB6]">8</span>
                </div>
              </div>
            </div>

            {/* Average Student Score Chart */}
            <div className="bg-white rounded-[30px] p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[#324C5B] font-semibold">Average Student Score by Class</h3>
                <ChevronDown className="size-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
              </div>

              {/* Legend */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full ring-2 ring-[#A9A4F5]"></div>
                  <span className="text-xs text-[#1E1B39]">Homework</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full ring-2 ring-[#69C5E4]"></div>
                  <span className="text-xs text-[#1E1B39]">Quiz</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full ring-2 ring-[#F8CDCD]"></div>
                  <span className="text-xs text-[#1E1B39]">Assignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full ring-2 ring-[#6BBEB6]"></div>
                  <span className="text-xs text-[#1E1B39]">Exam</span>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="relative h-64 border-l border-b border-[#E5E5EF]">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#324C5B] pr-2">
                  <span>100</span>
                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                  <span>0</span>
                </div>

                {/* Bars */}
                <div className="ml-8 h-full flex items-end justify-around gap-4 pb-8">
                  {/* Class A */}
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex gap-1 items-end h-48">
                      <div className="flex-1 bg-[#A9A4F5] rounded-t" style={{height: '70%'}}></div>
                      <div className="flex-1 bg-[#69C5E4] rounded-t" style={{height: '85%'}}></div>
                      <div className="flex-1 bg-[#F8CDCD] rounded-t" style={{height: '60%'}}></div>
                      <div className="flex-1 bg-[#6BBEB6] rounded-t" style={{height: '75%'}}></div>
                    </div>
                    <span className="text-xs text-[#324C5B] uppercase">Class A</span>
                  </div>

                  {/* Class B */}
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex gap-1 items-end h-48">
                      <div className="flex-1 bg-[#F7F7FB] rounded-t" style={{height: '45%'}}></div>
                      <div className="flex-1 bg-[#F7F7FB] rounded-t" style={{height: '35%'}}></div>
                      <div className="flex-1 bg-[#F7F7FB] rounded-t" style={{height: '40%'}}></div>
                      <div className="flex-1 bg-[#F7F7FB] rounded-t" style={{height: '50%'}}></div>
                    </div>
                    <span className="text-xs text-[#324C5B] uppercase">Class B</span>
                  </div>

                  {/* Class C */}
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex gap-1 items-end h-48">
                      <div className="flex-1 bg-[#F7F7FB] rounded-t" style={{height: '55%'}}></div>
                      <div className="flex-1 bg-[#F7F7FB] rounded-t" style={{height: '70%'}}></div>
                      <div className="flex-1 bg-[#F7F7FB] rounded-t" style={{height: '65%'}}></div>
                      <div className="flex-1 bg-[#F7F7FB] rounded-t" style={{height: '60%'}}></div>
                    </div>
                    <span className="text-xs text-[#324C5B] uppercase">Class C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Students Section */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#333333]">Top Students</h2>
              <button className="flex items-center gap-2 text-[#6C757D] text-sm hover:text-[#4FB5DB] transition-colors">
                <span>View All</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
            <p className="text-xs text-[#6C757D] mb-6">
              Students with highest average performance this month
            </p>

            {/* Students List */}
            <div className="space-y-3 max-h-[430px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {/* Student 1 */}
              <div className="flex items-center gap-4 p-4 bg-white border border-[#E4E4E7] rounded-lg hover:shadow-md transition-all hover:border-[#4FB5DB]/30">
                <div className="size-12 rounded-full bg-gradient-to-br from-[#FEF3C7] to-[#FFDF5D] flex items-center justify-center shrink-0">
                  <span className="text-[#FFAD18] font-bold text-lg">#1</span>
                </div>
                <div>
                  <h4 className="font-medium text-black">Han Soo Hee</h4>
                  <p className="text-sm text-[#85858F]">Class A</p>
                </div>
              </div>

              {/* Student 2 */}
              <div className="flex items-center gap-4 p-4 bg-white border border-[#E4E4E7] rounded-lg hover:shadow-md transition-all hover:border-[#4FB5DB]/30">
                <div className="size-12 rounded-full bg-gradient-to-br from-[#E4E4E4] to-[#7E7E7E]/35 flex items-center justify-center shrink-0">
                  <span className="text-[#8FA2A8] font-bold text-lg">#2</span>
                </div>
                <div>
                  <h4 className="font-medium text-black">Tan Dara</h4>
                  <p className="text-sm text-[#85858F]">Class B</p>
                </div>
              </div>

              {/* Student 3 */}
              <div className="flex items-center gap-4 p-4 bg-white border border-[#E4E4E7] rounded-lg hover:shadow-md transition-all hover:border-[#4FB5DB]/30">
                <div className="size-12 rounded-full bg-gradient-to-br from-[#FED2D1] to-[#FF8481] flex items-center justify-center shrink-0">
                  <span className="text-[#B9292C] font-bold text-lg">#3</span>
                </div>
                <div>
                  <h4 className="font-medium text-black">Kheng Sovannak</h4>
                  <p className="text-sm text-[#85858F]">Class A</p>
                </div>
              </div>

              {/* Student 4 */}
              <div className="flex items-center gap-4 p-4 bg-white border border-[#E4E4E7] rounded-lg hover:shadow-md transition-all hover:border-[#4FB5DB]/30">
                <div className="size-12 rounded-full bg-gradient-to-br from-[#DAE2F4] to-[#8D99B3] flex items-center justify-center shrink-0">
                  <span className="text-[#606FA4] font-bold text-lg">#4</span>
                </div>
                <div>
                  <h4 className="font-medium text-black">Lee Jung Suk</h4>
                  <p className="text-sm text-[#85858F]">Class C</p>
                </div>
              </div>

              {/* Student 5 */}
              <div className="flex items-center gap-4 p-4 bg-white border border-[#E4E4E7] rounded-lg hover:shadow-md transition-all hover:border-[#4FB5DB]/30">
                <div className="size-12 rounded-full bg-gradient-to-br from-[#FFE9D3] to-[#D1A57A] flex items-center justify-center shrink-0">
                  <span className="text-[#8E5033] font-bold text-lg">#5</span>
                </div>
                <div>
                  <h4 className="font-medium text-black">Kim Jennie</h4>
                  <p className="text-sm text-[#85858F]">Class B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

