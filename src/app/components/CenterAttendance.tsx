import { useState } from 'react';
import {
  Calendar,
  TrendingUp,
  TrendingDown,
  Users,
  AlertTriangle
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';

const classAttendance = [
  { class: 'Gr 12 Science', present: 28, absent: 2, late: 1, rate: 90 },
  { class: 'Gr 12 Commerce', present: 25, absent: 3, late: 2, rate: 86 },
  { class: 'Gr 11 Science', present: 30, absent: 0, late: 1, rate: 97 },
  { class: 'Gr 11 Commerce', present: 27, absent: 4, late: 0, rate: 87 },
  { class: 'Gr 10 Science', present: 26, absent: 5, late: 2, rate: 84 },
  { class: 'Gr 10 Arts', present: 22, absent: 7, late: 3, rate: 75 },
];

const weeklyTrend = [
  { week: 'W1 Apr', gr10: 82, gr11: 91, gr12: 88 },
  { week: 'W2 Apr', gr10: 79, gr11: 89, gr12: 90 },
  { week: 'W3 Apr', gr10: 85, gr11: 93, gr12: 87 },
  { week: 'W4 Apr', gr10: 80, gr11: 90, gr12: 91 },
  { week: 'W1 May', gr10: 78, gr11: 92, gr12: 93 },
  { week: 'W2 May', gr10: 83, gr11: 94, gr12: 89 },
  { week: 'W3 May', gr10: 75, gr11: 91, gr12: 92 },
  { week: 'W4 May', gr10: 80, gr11: 95, gr12: 94 },
];

const absenceReasons = [
  { reason: 'Illness', count: 45, color: '#f87171' },
  { reason: 'Family Matters', count: 28, color: '#fb923c' },
  { reason: 'Transport', count: 19, color: '#fbbf24' },
  { reason: 'Unknown', count: 14, color: '#a78bfa' },
  { reason: 'Other', count: 8, color: '#94a3b8' },
];

export default function CenterAttendance() {
  const [view, setView] = useState<'class' | 'trend'>('class');
  const [gradeFilter, setGradeFilter] = useState('all');

  const filtered = classAttendance.filter(c =>
    gradeFilter === 'all' || c.class.includes(`Gr ${gradeFilter}`)
  );

  const overall = Math.round(
    classAttendance.reduce((s, c) => s + c.rate, 0) / classAttendance.length
  );

  const atRiskClasses = classAttendance.filter(c => c.rate < 80).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Attendance Tracking</h2>
            <p className="text-sm text-gray-600 mt-1">Monitor attendance across all classes and grades</p>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            {(['class', 'trend'] as const).map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  view === v ? 'bg-white shadow text-sky-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {v === 'class' ? 'By Class' : 'Trends'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Overall Attendance', value: `${overall}%`, icon: Calendar, color: 'from-sky-400 to-blue-500', sub: 'Centre average' },
          { label: 'Total Present Today', value: '158', icon: Users, color: 'from-green-400 to-emerald-500', sub: 'of 176 learners' },
          { label: 'Absent Today', value: '18', icon: TrendingDown, color: 'from-orange-400 to-red-500', sub: '10.2%' },
          { label: 'Classes Below 80%', value: atRiskClasses, icon: AlertTriangle, color: 'from-red-400 to-rose-600', sub: 'Needs attention' },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center shadow`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-0.5">{s.value}</p>
              <p className="text-sm text-gray-600">{s.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
            </div>
          );
        })}
      </div>

      {view === 'class' ? (
        <>
          {/* Class Attendance Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Class Attendance — This Week</h3>
              <div className="relative">
                <select
                  value={gradeFilter}
                  onChange={e => setGradeFilter(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="all">All Grades</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Class</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Present</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Absent</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Late</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Rate</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{c.class}</td>
                      <td className="px-4 py-3 text-sm text-green-700 font-medium">{c.present}</td>
                      <td className="px-4 py-3 text-sm text-red-700 font-medium">{c.absent}</td>
                      <td className="px-4 py-3 text-sm text-yellow-700 font-medium">{c.late}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-full rounded-full ${c.rate >= 85 ? 'bg-green-500' : c.rate >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`}
                              style={{ width: `${c.rate}%` }}
                            />
                          </div>
                          <span className={`text-sm font-semibold ${c.rate >= 85 ? 'text-green-700' : c.rate >= 80 ? 'text-yellow-700' : 'text-red-700'}`}>
                            {c.rate}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {c.rate >= 85 ? (
                          <span className="flex items-center gap-1 text-green-600 text-xs font-medium">
                            <TrendingUp className="w-3 h-3" /> Good
                          </span>
                        ) : c.rate >= 80 ? (
                          <span className="flex items-center gap-1 text-yellow-600 text-xs font-medium">
                            <AlertTriangle className="w-3 h-3" /> Watch
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-600 text-xs font-medium">
                            <AlertTriangle className="w-3 h-3" /> Critical
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Absence Reasons */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Absence Reasons — Term 2</h3>
            <div className="space-y-3">
              {absenceReasons.map((r, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700">{r.reason}</span>
                    <span className="text-sm font-semibold text-gray-900">{r.count} absences</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(r.count / absenceReasons[0].count) * 100}%`,
                        background: r.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Trend Chart */
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-5">Attendance Trend by Grade — Apr to May 2026</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="week" tick={{ fontSize: 11 }} />
              <YAxis domain={[70, 100]} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Legend />
              <Line type="monotone" dataKey="gr10" name="Grade 10" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="gr11" name="Grade 11" stroke="#38bdf8" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="gr12" name="Grade 12" stroke="#4ade80" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-sm">Grade Comparison — Current Week</h4>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={[
                { grade: 'Grade 10', rate: 80 },
                { grade: 'Grade 11', rate: 92 },
                { grade: 'Grade 12', rate: 91 },
              ]} barSize={48}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="grade" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v: number) => `${v}%`} />
                <Bar dataKey="rate" name="Attendance %" radius={[6, 6, 0, 0]}>
                  {[{ rate: 80 }, { rate: 92 }, { rate: 91 }].map((_, i) => (
                    <Cell key={i} fill={['#f59e0b', '#38bdf8', '#4ade80'][i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
