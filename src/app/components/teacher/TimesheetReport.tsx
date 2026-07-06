import { useState } from 'react';
import { Calendar, Download, Filter } from 'lucide-react';

export default function TimesheetReport() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('6');

  const availableYears = ['2024', '2025', '2026'];
  const availableMonths = [
    { month: '1', label: 'January' }, { month: '2', label: 'February' },
    { month: '3', label: 'March' }, { month: '4', label: 'April' },
    { month: '5', label: 'May' }, { month: '6', label: 'June' },
    { month: '7', label: 'July' }, { month: '8', label: 'August' },
    { month: '9', label: 'September' }, { month: '10', label: 'October' },
    { month: '11', label: 'November' }, { month: '12', label: 'December' }
  ];

  const reportData = [
    { date: '2026-06-05', totalHours: 8, sessions: 4, approved: 8, pending: 0, rejected: 0 },
    { date: '2026-06-04', totalHours: 7, sessions: 3, approved: 7, pending: 0, rejected: 0 },
    { date: '2026-06-03', totalHours: 6, sessions: 3, approved: 5, pending: 1, rejected: 0 },
    { date: '2026-06-02', totalHours: 8.5, sessions: 4, approved: 6.5, pending: 2, rejected: 0 }
  ];

  const totalHours = reportData.reduce((sum, item) => sum + item.totalHours, 0);
  const approvedHours = reportData.reduce((sum, item) => sum + item.approved, 0);
  const pendingHours = reportData.reduce((sum, item) => sum + item.pending, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Timesheet Report</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-gray-700">Year:</span>
            {availableYears.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  selectedYear === year
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="font-medium text-gray-700">Month:</span>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {availableMonths.map(month => (
                <option key={month.month} value={month.month}>{month.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <p className="text-purple-100 text-sm mb-1">Total Hours</p>
          <p className="text-3xl font-bold">{totalHours}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <p className="text-green-100 text-sm mb-1">Approved</p>
          <p className="text-3xl font-bold">{approvedHours}</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
          <p className="text-yellow-100 text-sm mb-1">Pending</p>
          <p className="text-3xl font-bold">{pendingHours}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <p className="text-blue-100 text-sm mb-1">Sessions</p>
          <p className="text-3xl font-bold">{reportData.reduce((sum, item) => sum + item.sessions, 0)}</p>
        </div>
      </div>

      {/* Report Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Daily Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Total Hours</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Sessions</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Approved</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Pending</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Rejected</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 text-sm text-gray-900">{new Date(row.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{row.totalHours} hrs</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{row.sessions}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {row.approved} hrs
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      {row.pending} hrs
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {row.rejected} hrs
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
