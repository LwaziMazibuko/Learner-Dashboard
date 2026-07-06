import { useState } from 'react';
import { Search, Filter, Download } from 'lucide-react';

export default function AttendanceList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedDate, setSelectedDate] = useState('');

  const classes = [
    { id: 'all', name: 'All Classes' },
    { id: '1', name: 'Grade 10 - Mathematics' },
    { id: '2', name: 'Grade 11 - Physical Sciences' },
    { id: '3', name: 'Grade 12 - Mathematics' }
  ];

  const attendanceRecords = [
    { id: 1, learnerName: 'Thabo Mthembu', studentId: 'ST001', class: 'Grade 10 - Mathematics', date: '2026-06-05', status: 'present' },
    { id: 2, learnerName: 'Sarah Johnson', studentId: 'ST002', class: 'Grade 10 - Mathematics', date: '2026-06-05', status: 'present' },
    { id: 3, learnerName: 'Peter Ndlovu', studentId: 'ST003', class: 'Grade 11 - Physical Sciences', date: '2026-06-05', status: 'late' },
    { id: 4, learnerName: 'Mary Williams', studentId: 'ST004', class: 'Grade 10 - Mathematics', date: '2026-06-05', status: 'absent' },
    { id: 5, learnerName: 'John Mokoena', studentId: 'ST005', class: 'Grade 12 - Mathematics', date: '2026-06-05', status: 'present' },
    { id: 6, learnerName: 'Lisa van der Merwe', studentId: 'ST006', class: 'Grade 11 - Physical Sciences', date: '2026-06-04', status: 'present' },
    { id: 7, learnerName: 'David Sithole', studentId: 'ST007', class: 'Grade 12 - Mathematics', date: '2026-06-04', status: 'present' },
    { id: 8, learnerName: 'Grace Nkosi', studentId: 'ST008', class: 'Grade 10 - Mathematics', date: '2026-06-04', status: 'late' }
  ];

  const filteredRecords = attendanceRecords.filter(record => {
    const matchesSearch = record.learnerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || record.class === classes.find(c => c.id === selectedClass)?.name;
    const matchesDate = !selectedDate || record.date === selectedDate;
    return matchesSearch && matchesClass && matchesDate;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Attendance List</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          <Download className="w-4 h-4" />
          Export List
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {classes.map(cls => (
                <option key={cls.id} value={cls.id}>{cls.name}</option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <p>Showing <strong>{filteredRecords.length}</strong> records</p>
        {(searchTerm || selectedClass !== 'all' || selectedDate) && (
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedClass('all');
              setSelectedDate('');
            }}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">Student ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Learner Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Class</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record, index) => (
                  <tr key={record.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.studentId}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{record.learnerName}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{record.class}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{new Date(record.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      {record.status === 'present' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Present
                        </span>
                      )}
                      {record.status === 'absent' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Absent
                        </span>
                      )}
                      {record.status === 'late' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Late
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-sm text-gray-500">
                    No attendance records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
