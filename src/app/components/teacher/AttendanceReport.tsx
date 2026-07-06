import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, Calendar } from 'lucide-react';

export default function AttendanceReport() {
  const [selectedClass, setSelectedClass] = useState('all');

  const classes = [
    { id: 'all', name: 'All Classes' },
    { id: '1', name: 'Grade 10 - Mathematics' },
    { id: '2', name: 'Grade 11 - Physical Sciences' },
    { id: '3', name: 'Grade 12 - Mathematics' }
  ];

  const attendanceData = [
    { date: 'Jun 1', present: 28, absent: 2, late: 1 },
    { date: 'Jun 2', present: 30, absent: 1, late: 0 },
    { date: 'Jun 3', present: 27, absent: 3, late: 1 },
    { date: 'Jun 4', present: 29, absent: 1, late: 1 },
    { date: 'Jun 5', present: 31, absent: 0, late: 0 }
  ];

  const classStats = [
    { class: 'Grade 10 - Mathematics', totalLearners: 35, avgAttendance: '89%', present: 31, absent: 3, late: 1 },
    { class: 'Grade 11 - Physical Sciences', totalLearners: 30, avgAttendance: '92%', present: 28, absent: 1, late: 1 },
    { class: 'Grade 12 - Mathematics', totalLearners: 32, avgAttendance: '87%', present: 28, absent: 3, late: 1 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Attendance Report</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center gap-4">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="font-medium text-gray-700">Class:</span>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {classes.map(cls => (
              <option key={cls.id} value={cls.id}>{cls.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Attendance Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="present" fill="#22C55E" name="Present" />
            <Bar dataKey="absent" fill="#EF4444" name="Absent" />
            <Bar dataKey="late" fill="#F59E0B" name="Late" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Class Statistics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Class Statistics</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">Class</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Total Learners</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Avg Attendance</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Present</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Absent</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Late</th>
              </tr>
            </thead>
            <tbody>
              {classStats.map((stat, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{stat.class}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{stat.totalLearners}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {stat.avgAttendance}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{stat.present}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{stat.absent}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{stat.late}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
