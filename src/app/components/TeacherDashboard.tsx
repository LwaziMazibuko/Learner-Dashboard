import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Clock, BookOpen, Users, CheckCircle, Save, ChevronLeft, ChevronRight, ChevronDown, Calendar as CalendarIcon, Filter } from 'lucide-react';

export default function TeacherDashboard() {
  const [timesheetForm, setTimesheetForm] = useState({
    startTime: '',
    endTime: '',
    grade: '',
    subject: '',
    topic: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('6');
  const [activeSubject, setActiveSubject] = useState('all');
  const [visibleEvents, setVisibleEvents] = useState(8);
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [expandedHistory, setExpandedHistory] = useState<number[]>([]);

  // Mock data
  const totalHours = 34;
  const totalClasses = 85;
  const totalLearners = 100;
  const attendancePercentage = 87.5;

  const availableYears = ['2024', '2025', '2026'];
  const availableMonths = [
    { month: '1', label: 'January' },
    { month: '2', label: 'February' },
    { month: '3', label: 'March' },
    { month: '4', label: 'April' },
    { month: '5', label: 'May' },
    { month: '6', label: 'June' }
  ];

  const todayLessons = [
    { subject: 'Mathematics', topic: 'Quadratic Equations', mode: 'In-person' },
    { subject: 'Physical Sciences', topic: 'Newton\'s Laws', mode: 'Online' }
  ];

  const todayEvent = { topic: 'Physics Test', subject: 'Physical Sciences', date: '2026-06-06' };

  const upcomingEvents = [
    { date: '2026-06-08', subject: 'Mathematics', topic: 'Algebra Quiz', mode: 'In-person', paper: 'Paper 1' },
    { date: '2026-06-10', subject: 'Physical Sciences', topic: 'Chemistry Lab', mode: 'Online', paper: '' },
    { date: '2026-06-12', subject: 'English', topic: 'Essay Submission', mode: 'In-person', paper: '' },
    { date: '2026-06-15', subject: 'Life Sciences', topic: 'Biology Practical', mode: 'In-person', paper: 'Paper 2' },
    { date: '2026-06-18', subject: 'Mathematics', topic: 'Calculus Test', mode: 'In-person', paper: 'Paper 1' },
    { date: '2026-06-20', subject: 'Physical Sciences', topic: 'Physics Exam', mode: 'In-person', paper: 'Paper 1' },
    { date: '2026-06-22', subject: 'English', topic: 'Literature Review', mode: 'Online', paper: '' },
    { date: '2026-06-25', subject: 'Life Sciences', topic: 'Ecology Project', mode: 'In-person', paper: '' },
    { date: '2026-06-28', subject: 'Mathematics', topic: 'Final Exam Prep', mode: 'In-person', paper: '' }
  ];

  const timesheets = [
    { id: 1, topic: 'Algebra Basics', startTime: '08:00', endTime: '10:00', grade: 'Grade 10', subject: 'Mathematics', totalHours: 2, date: '2026-06-05', dateSubmitted: '2026-06-05', status: 'approved', editCount: 0, remainingEdits: 2, rejectionComment: null },
    { id: 2, topic: 'Newton\'s Laws', startTime: '10:30', endTime: '12:30', grade: 'Grade 11', subject: 'Physical Sciences', totalHours: 2, date: '2026-06-05', dateSubmitted: '2026-06-05', status: 'pending', editCount: 1, remainingEdits: 1, rejectionComment: null },
    { id: 3, topic: 'Quadratic Functions', startTime: '13:00', endTime: '15:30', grade: 'Grade 12', subject: 'Mathematics', totalHours: 2.5, date: '2026-06-04', dateSubmitted: '2026-06-04', status: 'rejected', editCount: 0, remainingEdits: 2, rejectionComment: 'Incorrect hours logged' }
  ];

  const editHistory = [
    { id: 1, timesheetId: 2, editedBy: 'Ms. Johnson', editedAt: '2026-06-05 14:30', oldDate: '2026-06-04', oldStartTime: '10:00', oldEndTime: '12:00', oldGrade: 'Grade 10', oldSubject: 'Mathematics', oldTopic: 'Algebra', oldHours: 2, newStartTime: '10:30', newEndTime: '12:30', newGrade: 'Grade 11', newSubject: 'Physical Sciences', newTopic: 'Newton\'s Laws', newHours: 2 }
  ];

  const chartData = {
    hours: [{ name: 'Hours Logged', value: totalHours, color: '#0891B2' }],
    classes: [
      { name: 'Active Classes', value: 70, color: '#10B981' },
      { name: 'Empty Classes', value: 15, color: '#F59E0B' }
    ],
    learners: [
      { name: 'Male', value: 60, color: '#3B82F6' },
      { name: 'Female', value: 40, color: '#EC4899' }
    ],
    attendance: [
      { name: 'Present', value: 85, color: '#22C55E' },
      { name: 'Absent', value: 10, color: '#EF4444' },
      { name: 'Late', value: 5, color: '#F59E0B' }
    ]
  };

  const handleTimesheetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Timesheet submitted:', timesheetForm);
    setTimesheetForm({
      startTime: '',
      endTime: '',
      grade: '',
      subject: '',
      topic: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const toggleEditHistory = (id: number) => {
    setExpandedHistory(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const getSubjectBadgeColor = (subject: string) => {
    const colors: Record<string, string> = {
      'Mathematics': 'bg-[#E6F1FB] text-[#185FA5]',
      'Physical Sciences': 'bg-[#EAF3DE] text-[#3B6D11]',
      'English': 'bg-[#FAEEDA] text-[#854F0B]',
      'Life Sciences': 'bg-[#FBEAF0] text-[#993556]'
    };
    return colors[subject] || 'bg-[#F1EFE8] text-[#5F5E5A]';
  };

  const filteredEvents = upcomingEvents
    .filter(e => activeSubject === 'all' || e.subject === activeSubject)
    .slice(0, visibleEvents);

  const uniqueSubjects = [...new Set(upcomingEvents.map(e => e.subject))];

  const generateCalendar = () => {
    const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
    const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    const today = new Date();
    const isCurrentMonth = calendarMonth === today.getMonth() && calendarYear === today.getFullYear();
    const currentDay = today.getDate();

    const eventDates = new Set(
      upcomingEvents
        .filter(e => {
          const eventDate = new Date(e.date);
          return eventDate.getMonth() === calendarMonth && eventDate.getFullYear() === calendarYear;
        })
        .map(e => new Date(e.date).getDate())
    );

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<td key={`empty-${i}`} className="border border-gray-200 p-1"></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = isCurrentMonth && day === currentDay;
      const hasEvent = eventDates.has(day);

      days.push(
        <td key={day} className="border border-gray-200 p-1">
          <span
            className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs transition-colors ${
              isToday
                ? 'bg-[#185FA5] text-white font-medium'
                : hasEvent
                ? 'bg-[#C0DD97] text-[#27500A] font-medium cursor-pointer hover:bg-[#97C459]'
                : 'text-gray-700'
            }`}
            onClick={hasEvent ? () => {
              setActiveSubject('all');
              setVisibleEvents(8);
            } : undefined}
          >
            {day}
          </span>
        </td>
      );
    }

    const weeks = [];
    let week = [];
    days.forEach((day, index) => {
      week.push(day);
      if ((index + 1) % 7 === 0 || index === days.length - 1) {
        while (week.length < 7) {
          week.push(<td key={`fill-${week.length}`} className="border border-gray-200 p-1"></td>);
        }
        weeks.push(<tr key={`week-${weeks.length}`}>{week}</tr>);
        week = [];
      }
    });

    return weeks;
  };

  const StatCard = ({ icon: Icon, title, value, data, dropdownItems }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600">{title}</span>
          {dropdownItems && (
            <div className="relative group">
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10 hidden group-hover:block">
                {dropdownItems.map((item: string, idx: number) => (
                  <div key={idx} className="px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-2">{value}</div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  height={30}
                  iconSize={8}
                  formatter={(value) => <span className="text-xs text-gray-600">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Today's Schedule */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">🔥 Today's Schedule ATP</h3>
        </div>
        <div className="p-6">
          {todayLessons.length > 0 && (
            <ul className="space-y-2 mb-4">
              {todayLessons.map((lesson, idx) => (
                <li key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-900">{lesson.subject}</span>
                    <span className="text-gray-600"> — {lesson.topic}</span>
                  </div>
                  <span className="text-sm text-gray-500">{lesson.mode}</span>
                </li>
              ))}
            </ul>
          )}
          {todayEvent && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
              📌 {todayEvent.topic} ({todayEvent.subject}) — {new Date(todayEvent.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              <a href="#upcoming-events" className="ml-2 text-blue-600 font-medium hover:underline">
                View Details →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Year Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center flex-wrap gap-2">
          <CalendarIcon className="w-4 h-4 text-gray-600" />
          <span className="font-medium text-gray-700">Dashboard Year:</span>
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
          <span className="ml-auto text-sm text-gray-500">
            Showing data for: <strong>{selectedYear}</strong>
          </span>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Clock}
          title="Total Timesheet Hours"
          value={`${totalHours} hrs`}
          data={chartData.hours}
          dropdownItems={['June 5 - 8 hours', 'June 4 - 7 hours', 'June 3 - 6 hours']}
        />
        <StatCard
          icon={BookOpen}
          title="Register's Filled"
          value={totalClasses}
          data={chartData.classes}
          dropdownItems={['All Classes', 'Grade 10 - Mathematics', 'Grade 11 - Physics']}
        />
        <StatCard
          icon={Users}
          title="Total Learners"
          value={totalLearners}
          data={chartData.learners}
          dropdownItems={['All Learners', 'Grade 10 - 35 Learners', 'Grade 11 - 30 Learners']}
        />
        <StatCard
          icon={CheckCircle}
          title="Attendance Percentage"
          value={`${attendancePercentage}%`}
          data={chartData.attendance}
          dropdownItems={['Overall: 87.5%', 'Grade 10 - 90%', 'Grade 11 - 85%']}
        />
      </div>

      {/* Timesheet Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Timesheet</h3>
        </div>
        <div className="p-6">
          <form onSubmit={handleTimesheetSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
              <input
                type="time"
                value={timesheetForm.startTime}
                onChange={(e) => setTimesheetForm({ ...timesheetForm, startTime: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
              <input
                type="time"
                value={timesheetForm.endTime}
                onChange={(e) => setTimesheetForm({ ...timesheetForm, endTime: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
              <select
                value={timesheetForm.grade}
                onChange={(e) => setTimesheetForm({ ...timesheetForm, grade: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Grade</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                value={timesheetForm.subject}
                onChange={(e) => setTimesheetForm({ ...timesheetForm, subject: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physical Sciences">Physical Sciences</option>
                <option value="English">English</option>
                <option value="Life Sciences">Life Sciences</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
              <input
                type="text"
                value={timesheetForm.topic}
                onChange={(e) => setTimesheetForm({ ...timesheetForm, topic: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Lesson topic"
                required
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Timesheet
              </button>
            </div>
          </form>

          {/* Month Filter */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center flex-wrap gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by Month:</span>
              {availableMonths.map(month => (
                <button
                  key={month.month}
                  onClick={() => setSelectedMonth(month.month)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    selectedMonth === month.month
                      ? 'bg-purple-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {month.label}
                </button>
              ))}
              <span className="ml-auto text-sm text-gray-500">
                Showing: <strong>{availableMonths.find(m => m.month === selectedMonth)?.label} {selectedYear}</strong>
              </span>
            </div>
          </div>

          {/* Timesheet Table */}
          <h4 className="font-bold text-gray-900 mb-3">Your Timesheets</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-sky-500 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium">Topic</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Start</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">End</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Grade</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Subject</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Hours</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Submitted</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Edit</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {timesheets.map((ts, index) => (
                  <>
                    <tr key={ts.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 text-sm text-gray-700">{ts.topic}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{ts.startTime}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{ts.endTime}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{ts.grade}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{ts.subject}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{ts.totalHours}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{ts.date}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{ts.dateSubmitted}</td>
                      <td className="px-4 py-3 text-sm">
                        {ts.status !== 'approved' && ts.editCount < 2 ? (
                          <button className="px-2 py-1 bg-purple-500 text-white rounded text-xs hover:bg-purple-600">
                            Edit ({ts.remainingEdits} left)
                          </button>
                        ) : (
                          <span className="text-gray-400 text-xs">Locked</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {ts.status === 'approved' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Approved
                          </span>
                        )}
                        {ts.status === 'rejected' && (
                          <div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Rejected ❌
                            </span>
                            {ts.rejectionComment && (
                              <div className="text-xs text-red-600 mt-1">
                                <strong>Reason:</strong> {ts.rejectionComment}
                              </div>
                            )}
                          </div>
                        )}
                        {ts.status === 'pending' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Pending
                          </span>
                        )}
                      </td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td colSpan={10} className="px-4 py-2">
                        <button
                          onClick={() => toggleEditHistory(ts.id)}
                          className="text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
                        >
                          View Edit History ({editHistory.filter(h => h.timesheetId === ts.id).length})
                        </button>
                        {expandedHistory.includes(ts.id) && (
                          <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded text-xs">
                            {editHistory.filter(h => h.timesheetId === ts.id).map(history => (
                              <div key={history.id} className="mb-2 p-2 border border-gray-300 rounded bg-white">
                                <strong>{history.editedBy}</strong> edited on {history.editedAt}
                                <hr className="my-1" />
                                <div className="grid grid-cols-2 gap-2">
                                  <div>
                                    <strong>Old:</strong> {history.oldTopic} | {history.oldStartTime} - {history.oldEndTime} | {history.oldGrade} | {history.oldSubject} | {history.oldHours}hrs
                                  </div>
                                  <div>
                                    <strong>New:</strong> {history.newTopic} | {history.newStartTime} - {history.newEndTime} | {history.newGrade} | {history.newSubject} | {history.newHours}hrs
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-3 bg-sky-50 rounded-lg">
              <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
              <p className="text-sm text-gray-700">All teachers to undergo System Training</p>
            </li>
            <li className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <p className="text-sm text-gray-700">Keep your password and credentials safe</p>
            </li>
            <li className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <p className="text-sm text-gray-700">Log your timesheets every day</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Upcoming Events ATP */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100" id="upcoming-events">
        <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Upcoming Events ATP</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Notice Board */}
            <div className="lg:col-span-2 border border-gray-200 rounded-xl overflow-hidden">
              <div className="border-b border-gray-200 px-4 py-3 flex justify-between items-center flex-wrap gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-600">Notice Board</span>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setActiveSubject('all')}
                    className={`px-3 py-1 rounded-full text-xs border transition-all ${
                      activeSubject === 'all'
                        ? 'bg-[#185FA5] text-white border-[#185FA5]'
                        : 'bg-gray-50 text-gray-600 border-gray-300 hover:bg-[#185FA5] hover:text-white'
                    }`}
                  >
                    All
                  </button>
                  {uniqueSubjects.map(subject => (
                    <button
                      key={subject}
                      onClick={() => setActiveSubject(subject)}
                      className={`px-3 py-1 rounded-full text-xs border transition-all ${
                        activeSubject === subject
                          ? 'bg-[#185FA5] text-white border-[#185FA5]'
                          : 'bg-gray-50 text-gray-600 border-gray-300 hover:bg-[#185FA5] hover:text-white'
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event, idx) => {
                    const eventDate = new Date(event.date);
                    const day = eventDate.getDate();
                    const month = eventDate.toLocaleString('default', { month: 'short' });

                    return (
                      <div key={idx} className="grid grid-cols-[48px_1fr_auto] items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex flex-col items-center justify-center w-11 h-11 border border-gray-200 rounded-lg">
                          <span className="text-lg font-semibold text-gray-900 leading-none">{day}</span>
                          <span className="text-[10px] font-medium uppercase text-gray-500 tracking-wide">{month}</span>
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">{event.topic}</div>
                          <div className="text-xs text-gray-500 truncate">
                            {event.mode}{event.paper && event.paper !== 'None' ? ` · ${event.paper}` : ''}
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-[10px] font-medium ${getSubjectBadgeColor(event.subject)}`}>
                          {event.subject}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="py-8 text-center text-sm text-gray-500">
                    No upcoming events for this subject.
                  </div>
                )}
              </div>
              {filteredEvents.length < upcomingEvents.filter(e => activeSubject === 'all' || e.subject === activeSubject).length && (
                <div className="border-t border-gray-200 p-3 text-center">
                  <button
                    onClick={() => setVisibleEvents(prev => prev + 5)}
                    className="px-4 py-1 rounded-full border border-gray-300 text-xs text-gray-600 hover:bg-gray-50"
                  >
                    Load more events
                  </button>
                </div>
              )}
            </div>

            {/* Calendar */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="border-b border-gray-200 px-4 py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-600">Calendar</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <button
                    onClick={() => {
                      if (calendarMonth === 0) {
                        setCalendarMonth(11);
                        setCalendarYear(prev => prev - 1);
                      } else {
                        setCalendarMonth(prev => prev - 1);
                      }
                    }}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="text-sm font-medium text-gray-900">
                    {new Date(calendarYear, calendarMonth).toLocaleString('default', { month: 'long' })} {calendarYear}
                  </span>
                  <button
                    onClick={() => {
                      if (calendarMonth === 11) {
                        setCalendarMonth(0);
                        setCalendarYear(prev => prev + 1);
                      } else {
                        setCalendarMonth(prev => prev + 1);
                      }
                    }}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                        <th key={day} className="text-[11px] font-medium uppercase text-gray-500 text-center p-1">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {generateCalendar()}
                  </tbody>
                </table>
                <div className="flex gap-3 mt-3 pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#185FA5]"></div>
                    Today
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#97C459]"></div>
                    ATP Event
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
