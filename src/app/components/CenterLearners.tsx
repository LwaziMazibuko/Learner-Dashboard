import { useState } from 'react';
import {
  Search,
  Filter,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Users,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

const learners = [
  { id: 1, name: 'Thabo Mthembu', grade: '12', subject: 'Science', attendance: 94, average: 78, status: 'active', trend: 'up' },
  { id: 2, name: 'Nomsa Dlamini', grade: '12', subject: 'Commerce', attendance: 88, average: 82, status: 'active', trend: 'up' },
  { id: 3, name: 'Sipho Khumalo', grade: '11', subject: 'Arts', attendance: 72, average: 65, status: 'at-risk', trend: 'down' },
  { id: 4, name: 'Lerato Mokoena', grade: '11', subject: 'Science', attendance: 96, average: 91, status: 'active', trend: 'up' },
  { id: 5, name: 'Ayanda Nkosi', grade: '10', subject: 'Commerce', attendance: 79, average: 74, status: 'active', trend: 'up' },
  { id: 6, name: 'Zanele Sithole', grade: '10', subject: 'Arts', attendance: 65, average: 58, status: 'at-risk', trend: 'down' },
  { id: 7, name: 'Bongani Zulu', grade: '12', subject: 'Science', attendance: 91, average: 87, status: 'active', trend: 'up' },
  { id: 8, name: 'Precious Mahlangu', grade: '11', subject: 'Commerce', attendance: 85, average: 76, status: 'active', trend: 'up' },
  { id: 9, name: 'Thandeka Ndlovu', grade: '10', subject: 'Science', attendance: 98, average: 94, status: 'active', trend: 'up' },
  { id: 10, name: 'Kagiso Molefe', grade: '12', subject: 'Arts', attendance: 60, average: 52, status: 'at-risk', trend: 'down' },
  { id: 11, name: 'Dineo Maseko', grade: '11', subject: 'Science', attendance: 93, average: 85, status: 'active', trend: 'up' },
  { id: 12, name: 'Sanele Buthelezi', grade: '10', subject: 'Commerce', attendance: 82, average: 71, status: 'active', trend: 'up' },
];

export default function CenterLearners() {
  const [search, setSearch] = useState('');
  const [gradeFilter, setGradeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortField, setSortField] = useState<'name' | 'attendance' | 'average'>('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const filtered = learners
    .filter(l =>
      l.name.toLowerCase().includes(search.toLowerCase()) &&
      (gradeFilter === 'all' || l.grade === gradeFilter) &&
      (statusFilter === 'all' || l.status === statusFilter)
    )
    .sort((a, b) => {
      const av = a[sortField] as string | number;
      const bv = b[sortField] as string | number;
      if (av < bv) return sortDir === 'asc' ? -1 : 1;
      if (av > bv) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortField(field); setSortDir('asc'); }
  };

  const atRisk = learners.filter(l => l.status === 'at-risk').length;
  const avgAttendance = Math.round(learners.reduce((s, l) => s + l.attendance, 0) / learners.length);
  const avgMark = Math.round(learners.reduce((s, l) => s + l.average, 0) / learners.length);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Learner Management</h2>
            <p className="text-sm text-gray-600 mt-1">Monitor attendance, performance and at-risk learners</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm font-medium">
            <Users className="w-4 h-4" />
            Add Learner
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Learners', value: learners.length, icon: Users, color: 'from-sky-400 to-blue-500', change: '+3 this term' },
          { label: 'Avg Attendance', value: `${avgAttendance}%`, icon: CheckCircle2, color: 'from-green-400 to-emerald-500', change: '+2% vs last term' },
          { label: 'Avg Mark', value: `${avgMark}%`, icon: TrendingUp, color: 'from-purple-400 to-indigo-500', change: '+4% vs last term' },
          { label: 'At-Risk Learners', value: atRisk, icon: AlertTriangle, color: 'from-orange-400 to-red-500', change: 'Needs attention' },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center shadow`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-gray-500 text-right">{s.change}</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{s.value}</p>
              <p className="text-sm text-gray-600">{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* Filters & Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Filter Bar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search learners..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="flex gap-2">
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
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="at-risk">At Risk</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-sky-500 text-white">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-semibold">Learner</th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Grade</th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Stream</th>
                <th
                  className="text-left px-4 py-3 text-sm font-semibold cursor-pointer hover:text-sky-100"
                  onClick={() => handleSort('attendance')}
                >
                  Attendance {sortField === 'attendance' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th
                  className="text-left px-4 py-3 text-sm font-semibold cursor-pointer hover:text-sky-100"
                  onClick={() => handleSort('average')}
                >
                  Average {sortField === 'average' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Trend</th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l, i) => (
                <tr key={l.id} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                        {l.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{l.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">Grade {l.grade}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{l.subject}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-1.5">
                        <div
                          className={`h-full rounded-full ${l.attendance >= 85 ? 'bg-green-500' : l.attendance >= 75 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${l.attendance}%` }}
                        />
                      </div>
                      <span className={`text-sm font-medium ${l.attendance >= 85 ? 'text-green-700' : l.attendance >= 75 ? 'text-yellow-700' : 'text-red-700'}`}>
                        {l.attendance}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-sm font-semibold ${l.average >= 75 ? 'text-green-700' : l.average >= 60 ? 'text-yellow-700' : 'text-red-700'}`}>
                      {l.average}%
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {l.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      l.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {l.status === 'active' ? 'Active' : 'At Risk'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-indigo-600 text-white">
                <td colSpan={3} className="px-4 py-3 text-sm font-bold">
                  Showing {filtered.length} of {learners.length} learners
                </td>
                <td className="px-4 py-3 text-sm font-bold">{avgAttendance}% avg</td>
                <td className="px-4 py-3 text-sm font-bold">{avgMark}% avg</td>
                <td colSpan={2} />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
