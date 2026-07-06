import { useState } from 'react';
import { Save, UserCheck, UserX, Clock } from 'lucide-react';

export default function LearnerAttendance() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendance, setAttendance] = useState<Record<number, string>>({});

  const classes = [
    { id: '1', name: 'Grade 10 - Mathematics - 08:00-10:00' },
    { id: '2', name: 'Grade 11 - Physical Sciences - 10:30-12:30' },
    { id: '3', name: 'Grade 12 - Mathematics - 13:00-15:00' }
  ];

  const learners = [
    { id: 1, name: 'Thabo Mthembu', studentId: 'ST001' },
    { id: 2, name: 'Sarah Johnson', studentId: 'ST002' },
    { id: 3, name: 'Peter Ndlovu', studentId: 'ST003' },
    { id: 4, name: 'Mary Williams', studentId: 'ST004' },
    { id: 5, name: 'John Mokoena', studentId: 'ST005' },
    { id: 6, name: 'Lisa van der Merwe', studentId: 'ST006' },
    { id: 7, name: 'David Sithole', studentId: 'ST007' },
    { id: 8, name: 'Grace Nkosi', studentId: 'ST008' }
  ];

  const handleAttendanceChange = (learnerId: number, status: string) => {
    setAttendance(prev => ({ ...prev, [learnerId]: status }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Attendance submitted:', { class: selectedClass, date: selectedDate, attendance });
  };

  const markAllPresent = () => {
    const allPresent = learners.reduce((acc, learner) => ({ ...acc, [learner.id]: 'present' }), {});
    setAttendance(allPresent);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Mark Learner Attendance</h2>
        <button
          onClick={markAllPresent}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <UserCheck className="w-4 h-4" />
          Mark All Present
        </button>
      </div>

      {/* Class Selection */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Choose a class</option>
              {classes.map(cls => (
                <option key={cls.id} value={cls.id}>{cls.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        </div>
      </div>

      {/* Attendance Form */}
      {selectedClass && (
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="border-b border-gray-200 px-6 py-4">
              <h3 className="text-lg font-bold text-gray-900">Learner List</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {learners.map(learner => (
                  <div key={learner.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <p className="font-medium text-gray-900">{learner.name}</p>
                      <p className="text-sm text-gray-500">{learner.studentId}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleAttendanceChange(learner.id, 'present')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          attendance[learner.id] === 'present'
                            ? 'bg-green-500 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <UserCheck className="w-4 h-4 inline mr-1" />
                        Present
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAttendanceChange(learner.id, 'absent')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          attendance[learner.id] === 'absent'
                            ? 'bg-red-500 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <UserX className="w-4 h-4 inline mr-1" />
                        Absent
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAttendanceChange(learner.id, 'late')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          attendance[learner.id] === 'late'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <Clock className="w-4 h-4 inline mr-1" />
                        Late
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Attendance
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
