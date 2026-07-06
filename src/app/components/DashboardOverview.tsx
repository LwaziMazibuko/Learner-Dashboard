import {
  BookOpen,
  TrendingUp,
  Award,
  Calendar,
  Target,
  Flame,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { PerformanceChart } from './PerformanceChart';

export default function DashboardOverview() {
  const stats = [
    {
      label: 'Overall Average',
      value: '78%',
      change: '+5%',
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Attendance Rate',
      value: '94%',
      change: '+2%',
      icon: Calendar,
      color: 'from-blue-400 to-sky-500',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Assignments Done',
      value: '24/28',
      change: '86%',
      icon: CheckCircle2,
      color: 'from-purple-400 to-indigo-500',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Study Streak',
      value: '12 days',
      change: 'Active',
      icon: Flame,
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50'
    },
  ];

  const subjects = [
    { name: 'Mathematics', current: 85, target: 90, color: 'bg-blue-500' },
    { name: 'Physical Science', current: 78, target: 85, color: 'bg-purple-500' },
    { name: 'Life Sciences', current: 82, target: 80, color: 'bg-green-500' },
    { name: 'English', current: 76, target: 85, color: 'bg-yellow-500' },
    { name: 'Accounting', current: 72, target: 75, color: 'bg-pink-500' },
  ];

  const upcomingTasks = [
    { title: 'Mathematics Quiz - Calculus', date: 'Tomorrow', type: 'quiz', urgent: true },
    { title: 'Physics Assignment - Mechanics', date: 'May 23', type: 'assignment', urgent: false },
    { title: 'English Essay Submission', date: 'May 25', type: 'assignment', urgent: false },
    { title: 'Life Sciences Test - Genetics', date: 'May 28', type: 'test', urgent: false },
  ];

  const recentAchievements = [
    { title: 'Perfect Attendance', icon: '📅', date: 'Yesterday' },
    { title: 'Quiz Master', icon: '🎯', date: '2 days ago' },
    { title: 'Study Streak - 10 Days', icon: '🔥', date: '3 days ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome Back, Thabo! 👋</h2>
            <p className="text-sky-100">
              You're doing great! Keep up the momentum.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-3xl font-bold">78%</p>
              <p className="text-xs text-sky-100">Overall Average</p>
            </div>
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-3xl font-bold">5th</p>
              <p className="text-xs text-sky-100">Class Rank</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subject Progress */}
        <div className="lg:col-span-2 space-y-6">
          {/* Subject Progress Cards */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-gray-900">Subject Progress vs Target</h3>
              <button className="text-sm text-sky-600 hover:text-sky-700 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {subjects.map((subject, index) => {
                const percentage = (subject.current / subject.target) * 100;
                const isAboveTarget = subject.current >= subject.target;

                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{subject.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">
                          Current: <span className="font-semibold text-gray-900">{subject.current}%</span>
                        </span>
                        <span className="text-xs text-gray-500">
                          Target: <span className="font-semibold">{subject.target}%</span>
                        </span>
                      </div>
                    </div>
                    <div className="relative w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${subject.color}`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                      {isAboveTarget && (
                        <div className="absolute inset-0 flex items-center justify-end pr-2">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Term Performance Trend</h3>
            <PerformanceChart />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Tasks */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-sky-600" />
              <h3 className="font-semibold text-gray-900">Upcoming Tasks</h3>
            </div>
            <div className="space-y-3">
              {upcomingTasks.map((task, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border-l-4 ${
                    task.urgent ? 'bg-red-50 border-red-500' : 'bg-gray-50 border-sky-500'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{task.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <p className="text-xs text-gray-600">{task.date}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      task.type === 'quiz' ? 'bg-purple-100 text-purple-700' :
                      task.type === 'test' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {task.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-5 shadow-sm border border-yellow-200">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold text-gray-900">Recent Achievements</h3>
            </div>
            <div className="space-y-3">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                    <p className="text-xs text-gray-600">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
