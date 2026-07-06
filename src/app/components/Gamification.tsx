import {
  Trophy,
  Star,
  Flame,
  Target,
  Calendar,
  Award,
  Crown,
  Zap,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

export default function Gamification() {
  const badges = [
    {
      id: 1,
      name: 'Maths Warrior',
      description: 'Score 90%+ in 3 consecutive Maths tests',
      icon: '🔢',
      progress: 100,
      earned: true,
      rarity: 'gold',
      dateEarned: 'May 10, 2026'
    },
    {
      id: 2,
      name: 'STEM Champion',
      description: 'Maintain 85%+ average in all Science subjects for a term',
      icon: '🔬',
      progress: 100,
      earned: true,
      rarity: 'gold',
      dateEarned: 'April 28, 2026'
    },
    {
      id: 3,
      name: 'Attendance King',
      description: '100% attendance for 3 consecutive months',
      icon: '👑',
      progress: 85,
      earned: false,
      rarity: 'platinum',
      dateEarned: null
    },
    {
      id: 4,
      name: 'Quiz Master',
      description: 'Complete 20 quizzes with 80%+ average',
      icon: '🎯',
      progress: 100,
      earned: true,
      rarity: 'silver',
      dateEarned: 'May 15, 2026'
    },
    {
      id: 5,
      name: 'Comeback Award',
      description: 'Improve any subject mark by 15%+ in one term',
      icon: '📈',
      progress: 100,
      earned: true,
      rarity: 'gold',
      dateEarned: 'May 5, 2026'
    },
    {
      id: 6,
      name: 'Study Streak Legend',
      description: 'Maintain 30-day study streak',
      icon: '🔥',
      progress: 40,
      earned: false,
      rarity: 'platinum',
      dateEarned: null
    },
    {
      id: 7,
      name: 'Perfect Assignment',
      description: 'Submit 10 assignments on time with 100% completion',
      icon: '📝',
      progress: 70,
      earned: false,
      rarity: 'silver',
      dateEarned: null
    },
    {
      id: 8,
      name: 'Early Bird',
      description: 'Complete assignments 3+ days before deadline 10 times',
      icon: '🌅',
      progress: 100,
      earned: true,
      rarity: 'bronze',
      dateEarned: 'May 12, 2026'
    },
  ];

  const stats = {
    totalPoints: 2450,
    weeklyQuizzes: 8,
    assignmentsSubmitted: 24,
    attendanceStreak: 12,
    rank: 5,
    totalStudents: 45,
  };

  const leaderboard = [
    { rank: 1, name: 'Sipho Ndlovu', points: 2850, avatar: '🎓' },
    { rank: 2, name: 'Lerato Mabaso', points: 2720, avatar: '📚' },
    { rank: 3, name: 'Kagiso Molefe', points: 2680, avatar: '✨' },
    { rank: 4, name: 'Nomvula Dube', points: 2520, avatar: '🌟' },
    { rank: 5, name: 'Thabo Mthembu (You)', points: 2450, avatar: '👤', isCurrentUser: true },
    { rank: 6, name: 'Zanele Khumalo', points: 2380, avatar: '💫' },
    { rank: 7, name: 'Bongani Sithole', points: 2290, avatar: '🎯' },
  ];

  const recentActivities = [
    { action: 'Completed Quiz', subject: 'Mathematics', points: 50, time: '2 hours ago' },
    { action: 'Submitted Assignment', subject: 'Physical Science', points: 100, time: '1 day ago' },
    { action: 'Perfect Attendance', subject: 'Week 7', points: 75, time: '3 days ago' },
    { action: 'Earned Badge', subject: 'Quiz Master', points: 200, time: '4 days ago' },
  ];

  const challenges = [
    {
      title: 'Weekly Quiz Champion',
      description: 'Complete 10 quizzes this week',
      progress: 8,
      total: 10,
      reward: 150,
      timeLeft: '2 days'
    },
    {
      title: 'Assignment Sprint',
      description: 'Submit 5 assignments early',
      progress: 3,
      total: 5,
      reward: 200,
      timeLeft: '1 week'
    },
    {
      title: 'Attendance Hero',
      description: 'Maintain 100% attendance this month',
      progress: 15,
      total: 20,
      reward: 300,
      timeLeft: '5 days'
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'platinum':
        return 'from-cyan-400 to-blue-500';
      case 'gold':
        return 'from-yellow-400 to-orange-500';
      case 'silver':
        return 'from-gray-300 to-gray-500';
      case 'bronze':
        return 'from-orange-600 to-orange-800';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const earnedBadges = badges.filter(b => b.earned);
  const inProgressBadges = badges.filter(b => !b.earned);

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Achievements & Rewards</h2>
            <p className="text-purple-100">Keep earning points and climbing the leaderboard!</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <div className="flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                <span className="text-3xl font-bold">{stats.totalPoints}</span>
              </div>
              <p className="text-xs text-purple-100 mt-1">Total Points</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
              <div className="flex items-center gap-2">
                <Crown className="w-6 h-6" />
                <span className="text-3xl font-bold">#{stats.rank}</span>
              </div>
              <p className="text-xs text-purple-100 mt-1">Your Rank</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scoring Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-600">+{stats.weeklyQuizzes * 50}</span>
          </div>
          <p className="text-sm text-gray-600">Weekly Quizzes</p>
          <p className="text-xs text-gray-500 mt-1">{stats.weeklyQuizzes} completed × 50 pts</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-green-600">+{stats.assignmentsSubmitted * 100}</span>
          </div>
          <p className="text-sm text-gray-600">Assignments Submitted</p>
          <p className="text-xs text-gray-500 mt-1">{stats.assignmentsSubmitted} submitted × 100 pts</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-orange-600">{stats.attendanceStreak} days</span>
          </div>
          <p className="text-sm text-gray-600">Attendance Streak</p>
          <p className="text-xs text-gray-500 mt-1">+{stats.attendanceStreak * 25} bonus pts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Badges Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Earned Badges */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-600" />
                <h3 className="font-semibold text-gray-900">Earned Badges ({earnedBadges.length})</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {earnedBadges.map((badge) => (
                <div
                  key={badge.id}
                  className={`relative bg-gradient-to-br ${getRarityColor(badge.rarity)} rounded-xl p-4 text-white shadow-md hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{badge.icon}</div>
                    <p className="font-semibold text-sm mb-1">{badge.name}</p>
                    <p className="text-xs opacity-90">{badge.dateEarned}</p>
                  </div>
                  <div className="absolute top-2 right-2">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges in Progress */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-5">
              <Star className="w-6 h-6 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Badges in Progress ({inProgressBadges.length})</h3>
            </div>
            <div className="space-y-4">
              {inProgressBadges.map((badge) => (
                <div key={badge.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{badge.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{badge.name}</h4>
                          <p className="text-xs text-gray-600 mt-1">{badge.description}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getRarityColor(badge.rarity)} text-white font-medium`}>
                          {badge.rarity}
                        </span>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                          <span>Progress</span>
                          <span className="font-semibold">{badge.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${badge.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Challenges */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-6 h-6 text-yellow-600" />
              <h3 className="font-semibold text-gray-900">Active Challenges</h3>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{challenge.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{challenge.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-yellow-600">+{challenge.reward}</p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <span>{challenge.progress} / {challenge.total} completed</span>
                    <span className="text-orange-600 font-medium">⏱️ {challenge.timeLeft}</span>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2.5 rounded-full"
                      style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Leaderboard */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold text-gray-900">Leaderboard</h3>
            </div>
            <div className="space-y-2">
              {leaderboard.map((student) => (
                <div
                  key={student.rank}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    student.isCurrentUser
                      ? 'bg-gradient-to-r from-sky-100 to-blue-100 border-2 border-sky-400'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    student.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                    student.rank === 2 ? 'bg-gray-300 text-gray-700' :
                    student.rank === 3 ? 'bg-orange-600 text-white' :
                    'bg-gray-200 text-gray-700'
                  }`}>
                    {student.rank <= 3 ? <Crown className="w-4 h-4" /> : student.rank}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${student.isCurrentUser ? 'text-sky-900' : 'text-gray-900'}`}>
                      {student.name}
                    </p>
                    <p className="text-xs text-gray-600">{student.points} points</p>
                  </div>
                  <span className="text-xl">{student.avatar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">+</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.subject}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                  <span className="text-sm font-bold text-green-600">+{activity.points}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
