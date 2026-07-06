import { useState } from 'react';
import { Search, Filter, UserCircle, Mail, Phone } from 'lucide-react';

export default function LearnerList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');

  const classes = [
    { id: 'all', name: 'All Classes' },
    { id: '1', name: 'Grade 10 - Mathematics' },
    { id: '2', name: 'Grade 11 - Physical Sciences' },
    { id: '3', name: 'Grade 12 - Mathematics' }
  ];

  const learners = [
    { id: 1, name: 'Thabo Mthembu', studentId: 'ST001', class: 'Grade 10 - Mathematics', email: 'thabo.m@school.edu', phone: '+27 11 234 5678', attendance: '92%' },
    { id: 2, name: 'Sarah Johnson', studentId: 'ST002', class: 'Grade 10 - Mathematics', email: 'sarah.j@school.edu', phone: '+27 11 234 5679', attendance: '95%' },
    { id: 3, name: 'Peter Ndlovu', studentId: 'ST003', class: 'Grade 11 - Physical Sciences', email: 'peter.n@school.edu', phone: '+27 11 234 5680', attendance: '88%' },
    { id: 4, name: 'Mary Williams', studentId: 'ST004', class: 'Grade 10 - Mathematics', email: 'mary.w@school.edu', phone: '+27 11 234 5681', attendance: '90%' },
    { id: 5, name: 'John Mokoena', studentId: 'ST005', class: 'Grade 12 - Mathematics', email: 'john.m@school.edu', phone: '+27 11 234 5682', attendance: '93%' },
    { id: 6, name: 'Lisa van der Merwe', studentId: 'ST006', class: 'Grade 11 - Physical Sciences', email: 'lisa.v@school.edu', phone: '+27 11 234 5683', attendance: '96%' },
    { id: 7, name: 'David Sithole', studentId: 'ST007', class: 'Grade 12 - Mathematics', email: 'david.s@school.edu', phone: '+27 11 234 5684', attendance: '89%' },
    { id: 8, name: 'Grace Nkosi', studentId: 'ST008', class: 'Grade 10 - Mathematics', email: 'grace.n@school.edu', phone: '+27 11 234 5685', attendance: '94%' }
  ];

  const filteredLearners = learners.filter(learner => {
    const matchesSearch = learner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         learner.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || learner.class === classes.find(c => c.id === selectedClass)?.name;
    return matchesSearch && matchesClass;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Learner List</h2>
        <div className="text-sm text-gray-600">
          Total Learners: <strong>{filteredLearners.length}</strong>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or student ID..."
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
        </div>
      </div>

      {/* Learner Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLearners.map(learner => (
          <div key={learner.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <UserCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 truncate">{learner.name}</h3>
                <p className="text-sm text-gray-500">{learner.studentId}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="text-sm text-gray-600 truncate">
                <span className="font-medium">Class:</span> {learner.class}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{learner.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-3 h-3 flex-shrink-0" />
                <span>{learner.phone}</span>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Attendance:</span>
                  <span className={`text-sm font-medium ${
                    parseFloat(learner.attendance) >= 90 ? 'text-green-600' :
                    parseFloat(learner.attendance) >= 80 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {learner.attendance}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredLearners.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <p className="text-gray-500">No learners found matching your search criteria</p>
        </div>
      )}
    </div>
  );
}
