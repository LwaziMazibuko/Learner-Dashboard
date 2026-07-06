import { useState } from 'react';
import { Save, Upload, Download } from 'lucide-react';

export default function AssessmentMarks() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedAssessment, setSelectedAssessment] = useState('');
  const [marks, setMarks] = useState<Record<number, string>>({});

  const classes = [
    { id: '1', name: 'Grade 10 - Mathematics' },
    { id: '2', name: 'Grade 11 - Physical Sciences' },
    { id: '3', name: 'Grade 12 - Mathematics' }
  ];

  const assessments = [
    { id: '1', name: 'June Test - Mathematics', maxMark: 100, date: '2026-06-15' },
    { id: '2', name: 'Physics Quiz', maxMark: 50, date: '2026-06-10' },
    { id: '3', name: 'Algebra Assignment', maxMark: 30, date: '2026-06-08' }
  ];

  const learners = [
    { id: 1, name: 'Thabo Mthembu', studentId: 'ST001' },
    { id: 2, name: 'Sarah Johnson', studentId: 'ST002' },
    { id: 3, name: 'Peter Ndlovu', studentId: 'ST003' },
    { id: 4, name: 'Mary Williams', studentId: 'ST004' },
    { id: 5, name: 'John Mokoena', studentId: 'ST005' }
  ];

  const handleMarkChange = (learnerId: number, mark: string) => {
    setMarks(prev => ({ ...prev, [learnerId]: mark }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Marks submitted:', { class: selectedClass, assessment: selectedAssessment, marks });
  };

  const calculateAverage = () => {
    const values = Object.values(marks).filter(m => m !== '').map(Number);
    if (values.length === 0) return 0;
    return (values.reduce((sum, val) => sum + val, 0) / values.length).toFixed(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Assessment Marks</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="w-4 h-4" />
            Import
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Selection */}
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Assessment</label>
            <select
              value={selectedAssessment}
              onChange={(e) => setSelectedAssessment(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Choose an assessment</option>
              {assessments.map(assessment => (
                <option key={assessment.id} value={assessment.id}>
                  {assessment.name} (Max: {assessment.maxMark})
                </option>
              ))}
            </select>
          </div>
        </div>

        {selectedAssessment && (
          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Assessment:</span>
                <p className="font-medium text-gray-900">
                  {assessments.find(a => a.id === selectedAssessment)?.name}
                </p>
              </div>
              <div>
                <span className="text-gray-600">Maximum Mark:</span>
                <p className="font-medium text-gray-900">
                  {assessments.find(a => a.id === selectedAssessment)?.maxMark}
                </p>
              </div>
              <div>
                <span className="text-gray-600">Date:</span>
                <p className="font-medium text-gray-900">
                  {new Date(assessments.find(a => a.id === selectedAssessment)?.date || '').toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Marks Entry */}
      {selectedClass && selectedAssessment && (
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">Enter Marks</h3>
              <div className="text-sm text-gray-600">
                Class Average: <strong className="text-purple-600">{calculateAverage()}%</strong>
              </div>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Student ID</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Learner Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Mark</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {learners.map((learner, index) => {
                      const maxMark = assessments.find(a => a.id === selectedAssessment)?.maxMark || 100;
                      const mark = marks[learner.id] ? Number(marks[learner.id]) : 0;
                      const percentage = maxMark > 0 ? ((mark / maxMark) * 100).toFixed(1) : 0;

                      return (
                        <tr key={learner.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-sm text-gray-700">{learner.studentId}</td>
                          <td className="px-4 py-3 text-sm text-gray-900 font-medium">{learner.name}</td>
                          <td className="px-4 py-3">
                            <input
                              type="number"
                              min="0"
                              max={maxMark}
                              value={marks[learner.id] || ''}
                              onChange={(e) => handleMarkChange(learner.id, e.target.value)}
                              className="w-24 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                              placeholder="0"
                            />
                            <span className="ml-2 text-sm text-gray-500">/ {maxMark}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              Number(percentage) >= 70 ? 'bg-green-100 text-green-800' :
                              Number(percentage) >= 50 ? 'bg-yellow-100 text-yellow-800' :
                              Number(percentage) > 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {percentage}%
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Marks
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
