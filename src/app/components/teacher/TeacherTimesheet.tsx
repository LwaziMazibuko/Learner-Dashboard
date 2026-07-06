import { useState } from 'react';
import { Save, Clock } from 'lucide-react';

export default function TeacherTimesheet() {
  const [timesheetForm, setTimesheetForm] = useState({
    session: '',
    date: new Date().toISOString().split('T')[0],
    topic: ''
  });

  const sessions = [
    { id: '1', name: 'Grade 10 - Mathematics - 08:00-10:00' },
    { id: '2', name: 'Grade 11 - Physical Sciences - 10:30-12:30' },
    { id: '3', name: 'Grade 12 - Mathematics - 13:00-15:00' }
  ];

  const timesheets = [
    { id: 1, session: 'Grade 10 - Mathematics', startTime: '08:00', endTime: '10:00', topic: 'Algebra Basics', date: '2026-06-05', hours: 2, status: 'approved' },
    { id: 2, session: 'Grade 11 - Physical Sciences', startTime: '10:30', endTime: '12:30', topic: 'Newton\'s Laws', date: '2026-06-05', hours: 2, status: 'pending' },
    { id: 3, session: 'Grade 12 - Mathematics', startTime: '13:00', endTime: '15:30', topic: 'Quadratic Functions', date: '2026-06-04', hours: 2.5, status: 'approved' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Timesheet submitted:', timesheetForm);
    setTimesheetForm({
      session: '',
      date: new Date().toISOString().split('T')[0],
      topic: ''
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Teacher Timesheet</h2>
        <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">Today: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Timesheet Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Log New Timesheet</h3>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Session</label>
              <select
                value={timesheetForm.session}
                onChange={(e) => setTimesheetForm({ ...timesheetForm, session: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Choose a session</option>
                {sessions.map(session => (
                  <option key={session.id} value={session.id}>{session.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={timesheetForm.date}
                onChange={(e) => setTimesheetForm({ ...timesheetForm, date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Topic Covered</label>
              <input
                type="text"
                value={timesheetForm.topic}
                onChange={(e) => setTimesheetForm({ ...timesheetForm, topic: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g., Quadratic Equations"
                required
              />
            </div>
            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Timesheet
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Recent Timesheets */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Recent Timesheets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">Session</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Topic</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Hours</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {timesheets.map((ts, index) => (
                <tr key={ts.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 text-sm text-gray-900">{ts.session}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{ts.startTime} - {ts.endTime}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{ts.topic}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{ts.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{ts.hours} hrs</td>
                  <td className="px-6 py-4">
                    {ts.status === 'approved' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Approved
                      </span>
                    )}
                    {ts.status === 'pending' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    )}
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
