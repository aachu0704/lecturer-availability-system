import React from 'react';
import { UserCheck, Users, Cpu, ShieldCheck, ArrowRight, Activity, MapPin, Sparkles, Radio, CheckCircle2, Clock, Terminal } from 'lucide-react';
import { Lecturer } from '../types/database';

interface RoleSelectorProps {
  onSelectRole: (role: 'lecturer' | 'student' | 'iot' | 'admin') => void;
  lecturers: Lecturer[];
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelectRole, lecturers }) => {
  const availableCount = lecturers.filter((l) => l.status === 'Available').length;
  const busyCount = lecturers.filter((l) => l.status === 'Busy').length;
  const unavailableCount = lecturers.filter((l) => l.status === 'Not Available').length;

  const roleCards = [
    {
      id: 'lecturer' as const,
      title: 'Lecturer Dashboard',
      subtitle: 'Faculty Status Control',
      description: 'Select your profile and broadcast your availability with 1-tap fast state transitions.',
      icon: UserCheck,
      iconBg: 'bg-blue-100 text-blue-700',
      badgeText: 'Quick Update',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
      actionText: 'Enter Lecturer View',
    },
    {
      id: 'student' as const,
      title: 'Student View',
      subtitle: 'Live Campus Directory',
      description: 'Search faculty members, office rooms, and check real-time availability for consultations.',
      icon: Users,
      iconBg: 'bg-emerald-100 text-emerald-700',
      badgeText: 'Live Directory',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      actionText: 'Enter Student View',
    },
    {
      id: 'iot' as const,
      title: 'IoT ESP32 Display',
      subtitle: 'Hardware Panel Simulation',
      description: 'Simulated corridor OLED door terminal with scanlines, live digital clock, and auto ticker.',
      icon: Cpu,
      iconBg: 'bg-cyan-100 text-cyan-700',
      badgeText: 'ESP32 Device',
      badgeClass: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      actionText: 'Enter IoT View',
    },
    {
      id: 'admin' as const,
      title: 'Admin Panel',
      subtitle: 'Faculty Registry & CRUD',
      description: 'Add new lecturers, edit room assignments or statuses inline, and manage paired terminal nodes.',
      icon: ShieldCheck,
      iconBg: 'bg-purple-100 text-purple-700',
      badgeText: 'Management',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
      actionText: 'Enter Admin View',
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* Academic Hero Section */}
      <div className="flex flex-col gap-6 pt-2">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
              Department of Computer Science &amp; Engineering
            </span>
            <span className="text-xs text-slate-500 font-mono">Node: ESP32-CORR-04B</span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Realtime Active
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Smart Multi-Lecturer Availability Display
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Check faculty availability across departments and corridor terminals in real time. Faculty updates sync instantly with corridor hardware displays via Supabase Realtime WebSocket client.
          </p>
        </div>

        {/* 4 Clean Statistics Cards (Snitch Academic Clean Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Total Faculty */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between gap-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Faculty</span>
              <span className="material-symbols-outlined text-[20px] text-blue-600">badge</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-2xl sm:text-3xl text-slate-900">{lecturers.length}</span>
              <span className="text-xs font-medium text-slate-500">Registered</span>
            </div>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium pt-2 border-t border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Computer Science Wing
            </span>
          </div>

          {/* Card 2: Available Now */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between gap-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Available Now</span>
              <span className="material-symbols-outlined text-[20px] text-emerald-600">check_circle</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-2xl sm:text-3xl text-emerald-600">{availableCount}</span>
              <span className="text-xs font-medium text-emerald-700 font-semibold">In Office</span>
            </div>
            <span className="text-xs text-emerald-700 flex items-center gap-1 font-medium pt-2 border-t border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Walk-ins welcome
            </span>
          </div>

          {/* Card 3: Busy / In Meeting */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between gap-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">In Session / Busy</span>
              <span className="material-symbols-outlined text-[20px] text-amber-600">pending</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-2xl sm:text-3xl text-amber-600">{busyCount}</span>
              <span className="text-xs font-medium text-amber-700 font-semibold">Meeting</span>
            </div>
            <span className="text-xs text-amber-700 flex items-center gap-1 font-medium pt-2 border-t border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Do not disturb
            </span>
          </div>

          {/* Card 4: Hardware Nodes */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between gap-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Corridor Nodes</span>
              <span className="material-symbols-outlined text-[20px] text-cyan-600">router</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-2xl sm:text-3xl text-slate-900">{lecturers.length} / {lecturers.length}</span>
              <span className="text-xs font-medium text-emerald-600 font-semibold">Active</span>
            </div>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium pt-2 border-t border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              ESP32-S3 Mesh Synced
            </span>
          </div>
        </div>
      </div>

      {/* Role Selection Section Title */}
      <div className="pt-2 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Select System Perspective
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Choose a role to experience the interactive availability system from different viewpoints.
            </p>
          </div>
        </div>

        {/* 4 Role Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roleCards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                onClick={() => onSelectRole(card.id)}
                className="group relative text-left bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-lg ${card.iconBg} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${card.badgeClass}`}>
                      {card.badgeText}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {card.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>{card.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
