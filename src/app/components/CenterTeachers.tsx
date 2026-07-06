import { useState } from 'react';
import {
  Search,
  ChevronDown,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Users,
  BookOpen,
  Star
} from 'lucide-react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const teachers = [
  { id: 1, name: 'Ms. Sarah Ndlovu', subjects: ['Mathematics', 'Physical Science'], grade: '11 & 12', classes: 4, hoursWeek: 22, timesheetStatus: 'submitted', rating: 4.8, experience: '8 years' },
  { id: 2, name: 'Mr. Thabo Sithole', subjects: ['English', 'Life Orientation'], grade: '10 & 11', classes: 5, hoursWeek: 24, timesheetStatus: 'pending', rating: 4.5, experience: '5 years' },
  { id: 3, name: 'Mrs. Zanele Dlamini', subjects: ['Accounting', 'Business Studies'], grade: '11 & 12', classes: 4, hoursWeek: 20, timesheetStatus: 'submitted', rating: 4.7, experience: '12 years' },
  { id: 4, name: 'Mr. Sipho Khumalo', subjects: ['Life Sciences', 'Geography'], grade: '10 & 12', classes: 4, hoursWeek: 18, timesheetStatus: 'overdue', rating: 4.2, experience: '3 years' },
  { id: 5, name: 'Ms. Lerato Maseko', subjects: ['History', 'Tourism'], grade: '10 & 11', classes: 3, hoursWeek: 16, timesheetStatus: 'submitted', rating: 4.6, experience: '6 years' },
  { id: 6, name: 'Mr. Bongani Mokoena', subjects: ['Computer Applications'], grade: '10, 11 & 12', classes: 3, hoursWeek: 14, timesheetStatus: 'submitted', rating: 4.9, experience: '9 years' },
];

const timesheetSummary = [
  { month: 'Jan', submitted: 24, pending: 0, overdue: 0 },
  { month: 'Feb', submitted: 22, pending: 2, overdue: 0 },
  { month: 'Mar', submitted: 23, pending: 1, overdue: 0 },
  { month: 'Apr', submitted: 21, pending: 2, overdue: 1 },
  { month: 'May', submitted: 20, pending: 3, overdue: 1 },
  { month: 'Jun', submitted: 18, pending: 4, overdue: 2 },
];

export default function CenterTeachers() {
  const [search, setSearch] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('Jun');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = teachers.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) &&
    (statusFilter === 'all' || t.timesheetStatus === statusFilter)
  );

  const current = timesheetSummary.find(m => m.month === selectedMonth) ?? timesheetSummary[timesheetSummary.length - 1];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Teacher Management</h2>
            <p className="text-sm text-gray-600 mt-1">Manage staff, classes, and timesheet submissions</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm font-medium">
            <Users className="w-4 h-4" />
            Add Teacher
          </button>
        </div>
      </div>

      {/* Timesheet Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-sky-600" />
            <h3 className="font-semibold text-gray-900">Timesheet Summary</h3>
          </div>
          <div className="relative">
            <select
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {months.map(m => (
                <option key={m} value={m}>{m} 2026</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
            <CheckCircle2 className="w-7 h-7 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-700">{current.submitted}</p>
            <p className="text-sm text-gray-600">Submitted</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-4 text-center border border-yellow-100">
            <Clock className="w-7 h-7 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-yellow-700">{current.pending}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
            <AlertTriangle className="w-7 h-7 text-red-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-red-700">{current.overdue}</p>
            <p className="text-sm text-gray-600">Overdue</p>
          </div>
        </div>

        {/* Monthly timeline */}
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">6-Month History</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {timesheetSummary.map((m, i) => (
              <div key={i} className="flex-shrink-0 text-center">
                <button
                  onClick={() => setSelectedMonth(m.month)}
                  className={`w-14 h-14 rounded-lg flex flex-col items-center justify-center text-xs border transition-all ${
                    selectedMonth === m.month
                      ? 'bg-sky-500 text-white border-sky-500 shadow-md'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-sky-50'
                  }`}
                >
                  <span className="font-semibold">{m.month}</span>
                  <span className="mt-0.5 opacity-80">{m.submitted}/{m.submitted + m.pending + m.overdue}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teacher Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search teachers..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="all">All Timesheets</option>
              <option value="submitted">Submitted</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-sky-500 text-white">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-semibold">Teacher</th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Subjects</th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Grades</th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Classes</th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Hrs/Week</th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Rating</th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Timesheet</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t, i) => (
                <tr key={t.id} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {t.name.split(' ').slice(1).map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{t.name}</p>
                        <p className="text-xs text-gray-500">{t.experience}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {t.subjects.map((s, si) => (
                        <span key={si} className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{t.grade}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-700">{t.classes}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">{t.hoursWeek}h</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold text-gray-700">{t.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      t.timesheetStatus === 'submitted' ? 'bg-green-100 text-green-700' :
                      t.timesheetStatus === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {t.timesheetStatus.charAt(0).toUpperCase() + t.timesheetStatus.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
