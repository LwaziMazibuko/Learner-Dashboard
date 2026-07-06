import { useState } from 'react';
import {
  Users,
  BookOpen,
  Clock,
  Calendar,
  Bell,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  BarChart3,
  GraduationCap,
  FileText
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from 'recharts';

const DonutStat = ({
  title,
  data,
  colors,
  centerLabel,
  centerValue,
}: {
  title: string;
  data: { name: string; value: number }[];
  colors: string[];
  centerLabel: string;
  centerValue: string;
}) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <h4 className="text-sm font-semibold text-gray-700 mb-3">{title}</h4>
    <div className="relative h-40">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={65}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(v: number) => `${v}%`} />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-xl font-bold text-gray-900">{centerValue}</span>
        <span className="text-xs text-gray-500">{centerLabel}</span>
      </div>
    </div>
    <div className="flex flex-wrap gap-2 mt-2">
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: colors[i % colors.length] }} />
          <span className="text-xs text-gray-600">{item.name}: {item.value}%</span>
        </div>
      ))}
    </div>
  </div>
);

export default function CenterManagerOverview() {
  const [calendarDate] = useState(new Date(2026, 5, 1));

  const teacherGenderData = [{ name: 'Female', value: 62 }, { name: 'Male', value: 38 }];
  const classStatusData = [{ name: 'Active', value: 81 }, { name: 'Inactive', value: 19 }];
  const timesheetData = [{ name: 'Submitted', value: 87 }, { name: 'Pending', value: 13 }];
  const attendanceData = [{ name: 'Present', value: 90 }, { name: 'Absent', value: 10 }];

  const weeklyAttendance = [
    { day: 'Mon', present: 92, absent: 8 },
    { day: 'Tue', present: 88, absent: 12 },
    { day: 'Wed', present: 95, absent: 5 },
    { day: 'Thu', present: 91, absent: 9 },
    { day: 'Fri', present: 86, absent: 14 },
  ];

  const notices = [
    { title: 'School Annual Sports Day', date: '20 Jul 2026', type: 'event' },
    { title: 'Annual Function Celebration', date: '15 Jul 2026', type: 'event' },
    { title: 'Mid Term Examination', date: '18 Jun 2026', type: 'exam' },
    { title: 'Inter-School Painting Competition', date: '30 May 2026', type: 'event' },
    { title: 'Term 2 Progress Reports Due', date: '10 Jun 2026', type: 'deadline' },
  ];

  const notifications = [
    { message: '3 teachers have pending timesheets for May', type: 'warning', time: '2h ago' },
    { message: 'Grade 11 Maths attendance dropped below 80%', type: 'alert', time: '4h ago' },
    { message: 'New learner enrollment: Sipho Dlamini (Gr 10)', type: 'info', time: 'Yesterday' },
    { message: 'Term 2 mid-point report generated successfully', type: 'success', time: 'Yesterday' },
  ];

  const analyticsCards = [
    {
      title: 'Learner Performance',
      desc: 'In-depth analysis of all learners',
      icon: TrendingUp,
      color: 'from-sky-400 to-blue-500',
      bg: 'bg-blue-50',
    },
    {
      title: 'Centre Performance',
      desc: 'In-depth analysis of all centres',
      icon: BarChart3,
      color: 'from-indigo-400 to-purple-500',
      bg: 'bg-indigo-50',
    },
    {
      title: 'Timesheet Summary',
      desc: 'In-depth analysis of timesheets',
      icon: FileText,
      color: 'from-teal-400 to-cyan-500',
      bg: 'bg-teal-50',
    },
  ];

  // Build calendar
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const monthName = calendarDate.toLocaleString('default', { month: 'long' });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
  const todayDate = isCurrentMonth ? today.getDate() : -1;

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Welcome, Centre Manager</h2>
            <p className="text-cyan-100">Here's an overview of your centre's performance today.</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-3xl font-bold">24</p>
              <p className="text-xs text-cyan-100">Teachers</p>
            </div>
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-3xl font-bold">312</p>
              <p className="text-xs text-cyan-100">Learners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donut Chart Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DonutStat
          title="Total Teachers"
          data={teacherGenderData}
          colors={['#e879f9', '#38bdf8']}
          centerLabel="Teachers"
          centerValue="24"
        />
        <DonutStat
          title="Number of Classes"
          data={classStatusData}
          colors={['#4ade80', '#fbbf24']}
          centerLabel="Classes"
          centerValue="12"
        />
        <DonutStat
          title="Teacher Timesheets"
          data={timesheetData}
          colors={['#38bdf8', '#f87171']}
          centerLabel="Submitted"
          centerValue="87%"
        />
        <DonutStat
          title="Learner Attendance"
          data={attendanceData}
          colors={['#4ade80', '#f87171']}
          centerLabel="Present"
          centerValue="90%"
        />
      </div>

      {/* Weekly Attendance Chart + Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-gray-900">Weekly Attendance Overview</h3>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">This Week</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyAttendance} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Legend />
              <Bar dataKey="present" name="Present %" fill="#38bdf8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="absent" name="Absent %" fill="#f87171" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-sky-600" />
            <h3 className="font-semibold text-gray-900">Notifications</h3>
            <span className="ml-auto text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{notifications.length}</span>
          </div>
          <div className="space-y-3">
            {notifications.map((n, i) => (
              <div key={i} className={`flex gap-3 p-3 rounded-lg ${
                n.type === 'warning' ? 'bg-yellow-50' :
                n.type === 'alert' ? 'bg-red-50' :
                n.type === 'success' ? 'bg-green-50' :
                'bg-blue-50'
              }`}>
                <div className="mt-0.5 flex-shrink-0">
                  {n.type === 'warning' || n.type === 'alert' ? (
                    <AlertCircle className={`w-4 h-4 ${n.type === 'alert' ? 'text-red-500' : 'text-yellow-500'}`} />
                  ) : (
                    <CheckCircle2 className={`w-4 h-4 ${n.type === 'success' ? 'text-green-500' : 'text-blue-500'}`} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-700 leading-snug">{n.message}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notice Board + Calendar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notice Board */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-5">
            <BookOpen className="w-5 h-5 text-sky-600" />
            <h3 className="font-semibold text-gray-900">Notice Board</h3>
          </div>
          <div className="space-y-3">
            {notices.map((notice, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    notice.type === 'exam' ? 'bg-orange-400' :
                    notice.type === 'deadline' ? 'bg-red-400' :
                    'bg-sky-400'
                  }`} />
                  <span className="text-sm text-gray-800">{notice.title}</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-gray-400">{notice.date}</span>
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-5">
            <Calendar className="w-5 h-5 text-sky-600" />
            <h3 className="font-semibold text-gray-900">{monthName} {year}</h3>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d} className="text-xs font-semibold text-gray-400 py-1">{d}</div>
            ))}
            {calendarDays.map((day, i) => (
              <div
                key={i}
                className={`text-xs py-1.5 rounded-md ${
                  day === null ? '' :
                  day === todayDate
                    ? 'bg-sky-500 text-white font-bold'
                    : 'text-gray-700 hover:bg-sky-50 cursor-pointer'
                }`}
              >
                {day ?? ''}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Quick Links */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-5">
          <BarChart3 className="w-5 h-5 text-sky-600" />
          <h3 className="font-semibold text-gray-900">Analytics</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {analyticsCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className={`${card.bg} rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all cursor-pointer group`}>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center shadow-md mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{card.title}</h4>
                <p className="text-xs text-gray-500 mb-3">{card.desc}</p>
                <div className="flex items-center gap-1 text-sky-600 text-sm font-medium group-hover:gap-2 transition-all">
                  View Report <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
