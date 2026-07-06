import { useState } from 'react';
import {
  TrendingUp,
  Award,
  Target,
  BarChart3,
  ChevronDown
} from 'lucide-react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  Cell
} from 'recharts';

const subjectPerformance = [
  { subject: 'Maths', centre: 75, grade: 70, national: 65 },
  { subject: 'Science', centre: 78, grade: 72, national: 68 },
  { subject: 'English', centre: 80, grade: 75, national: 72 },
  { subject: 'Accounting', centre: 72, grade: 68, national: 63 },
  { subject: 'Life Sci', centre: 82, grade: 76, national: 71 },
  { subject: 'History', centre: 77, grade: 73, national: 69 },
];

const termTrend = [
  { term: 'Term 1 2025', gr10: 68, gr11: 72, gr12: 76 },
  { term: 'Term 2 2025', gr10: 71, gr11: 74, gr12: 78 },
  { term: 'Term 3 2025', gr10: 73, gr11: 76, gr12: 80 },
  { term: 'Term 4 2025', gr10: 75, gr11: 78, gr12: 82 },
  { term: 'Term 1 2026', gr10: 76, gr11: 79, gr12: 83 },
  { term: 'Term 2 2026', gr10: 78, gr11: 81, gr12: 85 },
];

const radarData = [
  { subject: 'Maths', A: 75 },
  { subject: 'Science', A: 78 },
  { subject: 'English', A: 80 },
  { subject: 'Accounting', A: 72 },
  { subject: 'Life Sci', A: 82 },
  { subject: 'History', A: 77 },
  { subject: 'Tourism', A: 74 },
];

const passCounts = [
  { range: '0–29%', count: 4, color: '#ef4444' },
  { range: '30–49%', count: 18, color: '#f97316' },
  { range: '50–59%', count: 42, color: '#eab308' },
  { range: '60–69%', count: 85, color: '#84cc16' },
  { range: '70–79%', count: 78, color: '#22c55e' },
  { range: '80–100%', count: 85, color: '#10b981' },
];

export default function CenterAnalytics() {
  const [selectedTerm, setSelectedTerm] = useState('Term 2 2026');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Performance Analytics</h2>
            <p className="text-sm text-gray-600 mt-1">Comprehensive analysis of centre, grade, and subject performance</p>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700 font-medium">Term:</label>
            <div className="relative">
              <select
                value={selectedTerm}
                onChange={e => setSelectedTerm(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option>Term 1 2026</option>
                <option>Term 2 2026</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Centre Average', value: '78%', change: '+3%', icon: Award, color: 'from-sky-400 to-blue-500', positive: true },
          { label: 'Pass Rate (≥50%)', value: '91%', change: '+2%', icon: TrendingUp, color: 'from-green-400 to-emerald-500', positive: true },
          { label: 'vs National Avg', value: '+8%', change: 'Above target', icon: Target, color: 'from-indigo-400 to-purple-500', positive: true },
          { label: 'Distinction Rate', value: '27%', change: '+5%', icon: BarChart3, color: 'from-teal-400 to-cyan-500', positive: true },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center shadow`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${s.positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {s.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{s.value}</p>
              <p className="text-sm text-gray-600">{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* Subject Comparison + Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-5">Subject Performance: Centre vs Grade vs National</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={subjectPerformance} barSize={18}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="subject" tick={{ fontSize: 11 }} />
              <YAxis domain={[50, 100]} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Legend />
              <Bar dataKey="centre" name="Centre Avg" fill="#38bdf8" radius={[3, 3, 0, 0]} />
              <Bar dataKey="grade" name="Grade Avg" fill="#a78bfa" radius={[3, 3, 0, 0]} />
              <Bar dataKey="national" name="National" fill="#4ade80" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Subject Radar</h3>
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
              <Radar name="Centre Avg" dataKey="A" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.3} />
              <Tooltip formatter={(v: number) => `${v}%`} />
            </RadarChart>
          </ResponsiveContainer>
          <p className="text-xs text-center text-gray-400 mt-2">All subjects — centre average</p>
        </div>
      </div>

      {/* Term Trend + Mark Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-5">Performance Trend by Grade</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={termTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="term" tick={{ fontSize: 10 }} />
              <YAxis domain={[60, 90]} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Legend />
              <Line type="monotone" dataKey="gr10" name="Grade 10" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="gr11" name="Grade 11" stroke="#38bdf8" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="gr12" name="Grade 12" stroke="#4ade80" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-5">Mark Distribution — All Learners</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={passCounts} barSize={32}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="range" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="count" name="Learners" radius={[4, 4, 0, 0]}>
                {passCounts.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: 'Failed (<50%)', value: '22', color: 'text-red-600 bg-red-50' },
              { label: 'Passed (≥50%)', value: '290', color: 'text-green-600 bg-green-50' },
              { label: 'Distinction', value: '85', color: 'text-sky-600 bg-sky-50' },
            ].map((s, i) => (
              <div key={i} className={`rounded-lg p-3 text-center ${s.color}`}>
                <p className="text-lg font-bold">{s.value}</p>
                <p className="text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
