import { useState } from 'react';
import {
  LayoutDashboard,
  GraduationCap,
  Trophy,
  BookOpen,
  Compass,
  Heart,
  Bell,
  Search,
  User,
  Users,
  Calendar,
  BarChart3,
  ChevronDown,
  Building2,
  Menu,
  X,
  ClipboardList,
  FileText,
  UserCheck,
  List,
  FileBarChart,
  HelpCircle
} from 'lucide-react';
import DashboardOverview from './components/DashboardOverview';
import AcademicPerformance from './components/AcademicPerformance';
import Gamification from './components/Gamification';
import LearningResources from './components/LearningResources';
import CareerPlanning from './components/CareerPlanning';
import WellbeingTools from './components/WellbeingTools';
import CenterManagerOverview from './components/CenterManagerOverview';
import CenterLearners from './components/CenterLearners';
import CenterTeachers from './components/CenterTeachers';
import CenterAttendance from './components/CenterAttendance';
import CenterAnalytics from './components/CenterAnalytics';
import TeacherDashboard from './components/TeacherDashboard';
import TimesheetReport from './components/teacher/TimesheetReport';
import TeacherTimesheet from './components/teacher/TeacherTimesheet';
import AttendanceReport from './components/teacher/AttendanceReport';
import LearnerAttendance from './components/teacher/LearnerAttendance';
import AttendanceList from './components/teacher/AttendanceList';
import LearnerList from './components/teacher/LearnerList';
import AssessmentMarks from './components/teacher/AssessmentMarks';
import UserManual from './components/teacher/UserManual';

type Portal = 'student' | 'manager' | 'teacher';

const studentTabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'academic', label: 'Fin. Literacy', icon: GraduationCap },
  { id: 'gamification', label: 'Achievements', icon: Trophy },
  { id: 'resources', label: 'Resources', icon: BookOpen },
  { id: 'career', label: 'Career', icon: Compass },
  { id: 'wellbeing', label: 'Wellbeing', icon: Heart },
];

const managerTabs = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'learners', label: 'Learners', icon: Users },
  { id: 'teachers', label: 'Teachers', icon: GraduationCap },
  { id: 'attendance', label: 'Attendance', icon: Calendar },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
];

const teacherTabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'timesheet-report', label: 'Timesheet Report', icon: FileText },
  { id: 'teacher-timesheet', label: 'Teacher Timesheet', icon: ClipboardList },
  { id: 'attendance-report', label: 'Attendance Report', icon: BarChart3 },
  { id: 'learner-attendance', label: 'Learner Attendance', icon: UserCheck },
  { id: 'attendance-list', label: 'Attendance List', icon: List },
  { id: 'learner-list', label: 'Learner List', icon: Users },
  { id: 'assessment-marks', label: 'Assessment Marks', icon: FileBarChart },
  { id: 'user-manual', label: 'User Manual', icon: HelpCircle },
];

export default function App() {
  const [portal, setPortal] = useState<Portal>('student');
  const [studentTab, setStudentTab] = useState('dashboard');
  const [managerTab, setManagerTab] = useState('overview');
  const [teacherTab, setTeacherTab] = useState('dashboard');
  const [portalMenuOpen, setPortalMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isManager = portal === 'manager';
  const isTeacher = portal === 'teacher';

  const renderStudentContent = () => {
    switch (studentTab) {
      case 'dashboard': return <DashboardOverview />;
      case 'academic': return <AcademicPerformance />;
      case 'gamification': return <Gamification />;
      case 'resources': return <LearningResources />;
      case 'career': return <CareerPlanning />;
      case 'wellbeing': return <WellbeingTools />;
      default: return <DashboardOverview />;
    }
  };

  const renderManagerContent = () => {
    switch (managerTab) {
      case 'overview': return <CenterManagerOverview />;
      case 'learners': return <CenterLearners />;
      case 'teachers': return <CenterTeachers />;
      case 'attendance': return <CenterAttendance />;
      case 'analytics': return <CenterAnalytics />;
      default: return <CenterManagerOverview />;
    }
  };

  const renderTeacherContent = () => {
    switch (teacherTab) {
      case 'dashboard': return <TeacherDashboard />;
      case 'timesheet-report': return <TimesheetReport />;
      case 'teacher-timesheet': return <TeacherTimesheet />;
      case 'attendance-report': return <AttendanceReport />;
      case 'learner-attendance': return <LearnerAttendance />;
      case 'attendance-list': return <AttendanceList />;
      case 'learner-list': return <LearnerList />;
      case 'assessment-marks': return <AssessmentMarks />;
      case 'user-manual': return <UserManual />;
      default: return <TeacherDashboard />;
    }
  };

  const tabs = isManager ? managerTabs : isTeacher ? teacherTabs : studentTabs;
  const activeTab = isManager ? managerTab : isTeacher ? teacherTab : studentTab;
  const setActiveTab = isManager ? setManagerTab : isTeacher ? setTeacherTab : setStudentTab;

  const getPortalColor = () => {
    if (isManager) return { bg: 'bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50', primary: 'teal' };
    if (isTeacher) return { bg: 'bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50', primary: 'purple' };
    return { bg: 'bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50', primary: 'sky' };
  };

  const portalColor = getPortalColor();

  return (
    <div className={`min-h-screen ${portalColor.bg}`}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button & Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isManager
                    ? 'bg-gradient-to-br from-teal-400 to-cyan-600'
                    : isTeacher
                    ? 'bg-gradient-to-br from-purple-400 to-violet-600'
                    : 'bg-gradient-to-br from-sky-400 to-blue-600'
                }`}>
                  {isManager ? <Building2 className="w-6 h-6 text-white" /> : isTeacher ? <ClipboardList className="w-6 h-6 text-white" /> : <GraduationCap className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <h1 className="font-bold text-gray-900">EduTrack</h1>
                  <p className="text-xs text-gray-500">{isManager ? 'Centre Manager Portal' : isTeacher ? 'Teacher Portal' : 'Student Portal'}</p>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={isManager ? "Search learners, teachers..." : isTeacher ? "Search classes, learners..." : "Search courses, resources..."}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-3">
              {/* Portal Switcher */}
              <div className="relative">
                <button
                  onClick={() => setPortalMenuOpen(o => !o)}
                  className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                    isManager
                      ? 'bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100'
                      : isTeacher
                      ? 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100'
                      : 'bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100'
                  }`}
                >
                  {isManager ? <Building2 className="w-4 h-4" /> : isTeacher ? <ClipboardList className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                  {isManager ? 'Centre Manager' : isTeacher ? 'Teacher' : 'Student'}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {portalMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden">
                    <div className="p-1">
                      <button
                        onClick={() => { setPortal('student'); setPortalMenuOpen(false); }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${portal === 'student' ? 'bg-sky-50 text-sky-700' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">Student Portal</p>
                          <p className="text-xs text-gray-400">Thabo Mthembu</p>
                        </div>
                      </button>
                      <button
                        onClick={() => { setPortal('teacher'); setPortalMenuOpen(false); }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${portal === 'teacher' ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center flex-shrink-0">
                          <ClipboardList className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">Teacher Portal</p>
                          <p className="text-xs text-gray-400">Ms. Johnson</p>
                        </div>
                      </button>
                      <button
                        onClick={() => { setPortal('manager'); setPortalMenuOpen(false); }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${portal === 'manager' ? 'bg-teal-50 text-teal-700' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">Centre Manager</p>
                          <p className="text-xs text-gray-400">Admin Access</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{isManager ? 'Admin User' : isTeacher ? 'Ms. Johnson' : 'Thabo Mthembu'}</p>
                  <p className="text-xs text-gray-500">{isManager ? 'Centre Manager' : isTeacher ? 'Mathematics Teacher' : 'Grade 12 - Science'}</p>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isManager
                    ? 'bg-gradient-to-br from-teal-400 to-cyan-500'
                    : isTeacher
                    ? 'bg-gradient-to-br from-purple-400 to-violet-500'
                    : 'bg-gradient-to-br from-sky-400 to-indigo-500'
                }`}>
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Click-outside to close menus */}
      {(portalMenuOpen || sidebarOpen) && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => { setPortalMenuOpen(false); setSidebarOpen(false); }} />
      )}

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 transition-transform duration-300 z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <nav className="h-full overflow-y-auto py-6 px-3">
            <div className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? isManager
                          ? 'bg-teal-50 text-teal-700 shadow-sm'
                          : isTeacher
                          ? 'bg-purple-50 text-purple-700 shadow-sm'
                          : 'bg-sky-50 text-sky-700 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {isManager ? renderManagerContent() : isTeacher ? renderTeacherContent() : renderStudentContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
