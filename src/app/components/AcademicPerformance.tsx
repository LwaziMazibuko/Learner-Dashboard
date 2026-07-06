import { useState } from 'react';
import {
  BookOpen, Trophy, Zap, Flame, Star, ChevronRight,
  Check, X, ArrowLeft, Lock, Brain, Shield,
  TrendingUp, Coins, CreditCard, Sparkles, Clock,
  BarChart3, Target, Award, AlertCircle, PlayCircle,
  ChevronDown, Lightbulb, Bell, MessageSquare
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface Module {
  id: string;
  title: string;
  subtitle: string;
  story: string;
  character: string;
  difficulty: 'Starter' | 'Building Up' | 'Level Up';
  difficultyColor: string;
  duration: number;
  xpReward: number;
  gradient: string;
  bgLight: string;
  borderColor: string;
  icon: React.ElementType;
  tag: string;
  questions: Question[];
  learningPoints: string[];
  unlocked: boolean;
  completed: boolean;
  progress: number;
}

const modules: Module[] = [
  {
    id: 'budgeting',
    title: 'The Payday Trap',
    subtitle: 'Budgeting Basics',
    story:
      "It's the 25th of the month and Thabo just got R8,500 into his Capitec account — his first real salary! His WhatsApp is blowing up: friends want to hit Eastgate Mall, his cousin needs R500, and rent is due tomorrow. Sound familiar? Let's help Thabo make smart choices before the money vanishes! 💸",
    character: 'Thabo',
    difficulty: 'Starter',
    difficultyColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    duration: 8,
    xpReward: 150,
    gradient: 'from-sky-500 to-blue-600',
    bgLight: 'from-sky-50 to-blue-50',
    borderColor: 'border-sky-200',
    icon: Coins,
    tag: '💰 Budgeting',
    questions: [
      {
        question:
          'Thabo earns R8,500/month. Using the 50/30/20 rule, how much should go to SAVINGS?',
        options: ['R850 (10%)', 'R1,700 (20%)', 'R2,550 (30%)', 'R4,250 (50%)'],
        correct: 1,
        explanation:
          "The 50/30/20 rule: 50% for needs, 30% for wants, 20% for savings. That's R1,700 straight to savings every month! Small habit, big future. 💪",
      },
      {
        question: "What should Thabo pay FIRST after his salary lands?",
        options: [
          'Take friends to Eastgate Mall',
          'Buy new AirPods',
          'Pay rent and essential expenses',
          'Lend his cousin R500',
        ],
        correct: 2,
        explanation:
          "Always secure your needs first — rent, food, transport. This is 'paying your future self' before your wants. The mall and cousins can wait! 🏠",
      },
      {
        question: 'Thabo has R500 left at month-end. The SMARTEST move is:',
        options: [
          'Spend it before it disappears',
          'Put it in a savings account',
          'Bet it on sports',
          'Lend it to a friend',
        ],
        correct: 1,
        explanation:
          'Even R500/month saved at 7% interest grows to over R100,000 in 10 years! Small, consistent habits are how ordinary people build extraordinary wealth. 📈',
      },
      {
        question: "Which of these is a 'WANT' rather than a 'NEED'?",
        options: [
          'Taxi fare to work',
          'Airtime for work calls',
          'Netflix subscription',
          'Electricity bill',
        ],
        correct: 2,
        explanation:
          "Netflix is entertainment — a 'want'. Transport, utilities and work calls are 'needs' you can't skip. Knowing the difference puts YOU in control of your budget! 🎯",
      },
    ],
    learningPoints: [
      'Apply the 50/30/20 budgeting rule to any income',
      'Know the difference between needs and wants',
      'Pay essential expenses before anything else',
      'Save consistently — even small amounts compound over time',
    ],
    unlocked: true,
    completed: false,
    progress: 0,
  },
  {
    id: 'saving',
    title: "Sipho's Savings Secret",
    subtitle: 'Smart Saving',
    story:
      "Sipho works at a call centre in Cape Town and wants a secondhand car in 18 months. He has R1,200 to save monthly. His cousin says 'stash it under the mattress', but his colleague mentions a 32-day notice account. What's Sipho's best move? Let's find out before inflation sneaks up on him! 🚗",
    character: 'Sipho',
    difficulty: 'Starter',
    difficultyColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    duration: 10,
    xpReward: 175,
    gradient: 'from-emerald-500 to-teal-600',
    bgLight: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200',
    icon: TrendingUp,
    tag: '🏦 Saving',
    questions: [
      {
        question: "Why is keeping money 'under the mattress' a bad idea?",
        options: [
          'It could be stolen or damaged',
          'Inflation eats its value over time',
          'It earns zero interest',
          'All of the above',
        ],
        correct: 3,
        explanation:
          "All three! SA inflation averages ~6% a year, cash earns nothing, and it can be stolen. A bank is safer AND makes your money grow. 🏛️",
      },
      {
        question: 'What makes a 32-day notice account special?',
        options: [
          'You wait 32 days to withdraw, but earn higher interest',
          "It's only for businesses",
          'It has no minimum balance',
          'The government guarantees it',
        ],
        correct: 0,
        explanation:
          "You give 32 days notice before withdrawing, and in return the bank rewards you with better interest rates. Perfect for money you're saving towards a goal! ⏰",
      },
      {
        question: 'Sipho saves R1,200/month for 18 months. How much will he have (before interest)?',
        options: ['R14,400', 'R18,000', 'R21,600', 'R24,000'],
        correct: 2,
        explanation:
          "R1,200 × 18 = R21,600! Plus the interest earned on top. That's a solid deposit for a reliable car. Consistency always wins! 🚗",
      },
      {
        question: 'What is a Stokvel?',
        options: [
          'A type of investment fund',
          'A group rotating savings scheme',
          'A government savings program',
          'A banking app',
        ],
        correct: 1,
        explanation:
          "A Stokvel is a traditional South African savings club where members contribute monthly and take turns receiving the lump sum. Ubuntu-powered finance! 🤝",
      },
    ],
    learningPoints: [
      'Understand why cash loses real value over time',
      'Compare savings accounts and 32-day notice accounts',
      'Set a savings goal and calculate what you need monthly',
      'Learn how Stokvels work as community savings tools',
    ],
    unlocked: true,
    completed: true,
    progress: 100,
  },
  {
    id: 'credit',
    title: 'The Mashonisa Mistake',
    subtitle: 'Understanding Credit',
    story:
      "Nomsa urgently needs R3,000 for school fees. A mashonisa (informal lender) offers it today — but she must repay R5,000 in 30 days. Her bank offers a personal loan at 28% per year. Which should she choose? This decision could affect years of her financial life... 🤔",
    character: 'Nomsa',
    difficulty: 'Building Up',
    difficultyColor: 'text-amber-700 bg-amber-50 border-amber-200',
    duration: 12,
    xpReward: 225,
    gradient: 'from-amber-500 to-orange-600',
    bgLight: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-200',
    icon: CreditCard,
    tag: '💳 Credit',
    questions: [
      {
        question: "The mashonisa charges R2,000 on a R3,000 loan in 30 days. Annualised, this is roughly:",
        options: ['28% per year', '66% per year', '200% per year', 'Over 800% per year'],
        correct: 3,
        explanation:
          "66.7% per MONTH annualises to over 800%! Compare that to a bank's 28% per year. Informal lenders are dangerously expensive. Always use NCR-registered lenders! 🚨",
      },
      {
        question: 'Your credit score reflects:',
        options: [
          'How much money you have saved',
          'Your history of repaying debts on time',
          'Your monthly salary amount',
          'How many bank accounts you have',
        ],
        correct: 1,
        explanation:
          "Your score (from TransUnion, Experian, or Compuscan) shows how reliably you repay debt. A good score unlocks lower interest rates and better loan terms. Pay on time! ✅",
      },
      {
        question: 'Before taking any loan, Nomsa MUST check:',
        options: [
          'Whether the lender is registered with the NCR',
          'The total repayment amount (not just monthly installment)',
          'The interest rate compared to other options',
          'All of the above',
        ],
        correct: 3,
        explanation:
          "Always check all three! The NCR (National Credit Regulator) registers legal lenders. Know EXACTLY what you'll repay in total — interest adds up fast! 🔍",
      },
      {
        question: 'Nomsa takes the bank loan: R3,000 at 28% p.a. for 12 months. Total repayment is roughly:',
        options: ['R3,000', 'R3,420', 'R3,840', 'R5,000'],
        correct: 2,
        explanation:
          "28% of R3,000 = R840 interest, so ~R3,840 total vs the mashonisa's R5,000. The bank saves Nomsa R1,160! Formal credit always wins when used responsibly. 💰",
      },
    ],
    learningPoints: [
      'Calculate and compare real interest rates',
      'Understand what affects your credit score',
      'Always use NCR-registered lenders',
      'Know your rights under the National Credit Act',
    ],
    unlocked: true,
    completed: false,
    progress: 50,
  },
  {
    id: 'digital',
    title: "Don't Get Phished!",
    subtitle: 'Mobile Banking Safety',
    story:
      "Zanele gets an SMS: 'FNB ALERT: Your account is compromised. Click NOW to verify or it will be SUSPENDED.' Her heart races — R4,500 is in that account. What does she do RIGHT NOW? The wrong move could cost her everything... 🔐",
    character: 'Zanele',
    difficulty: 'Building Up',
    difficultyColor: 'text-amber-700 bg-amber-50 border-amber-200',
    duration: 10,
    xpReward: 200,
    gradient: 'from-rose-500 to-pink-600',
    bgLight: 'from-rose-50 to-pink-50',
    borderColor: 'border-rose-200',
    icon: Shield,
    tag: '🔐 Safety',
    questions: [
      {
        question: "That SMS Zanele received is most likely:",
        options: [
          'A legitimate FNB security alert',
          'A phishing scam attempt',
          'A promotional offer',
          'A government notification',
        ],
        correct: 1,
        explanation:
          "Classic phishing! Banks NEVER send links via SMS asking you to verify details. Zanele should NOT click. Report it to FNB on 087 575 9444 immediately! 🚫",
      },
      {
        question: "The SAFEST way for Zanele to check if her account is really at risk:",
        options: [
          'Click the link in the SMS',
          'Call the number in the SMS',
          'Open the official FNB app or call the number on her card',
          'Reply with her account details',
        ],
        correct: 2,
        explanation:
          "Only use official channels — the app from official stores, or the number printed on your physical card. Never use contacts from suspicious messages! 📱",
      },
      {
        question: "Two-factor authentication (2FA) protects you against:",
        options: [
          'Someone with your password accessing your account',
          'High bank fees',
          'Investment losses',
          'Inflation',
        ],
        correct: 0,
        explanation:
          "Even if a criminal gets your password, they still need the OTP sent to your phone to log in. Enable 2FA on every financial app — it's your best digital shield! 🛡️",
      },
      {
        question: 'Which of these is SAFE to confirm with your bank on a call YOU initiated?',
        options: ['Your full card number', 'Your PIN', 'Your CVV number', 'Your ID number'],
        correct: 3,
        explanation:
          "ID number for identity verification is okay — on a call YOU started. But NEVER share your PIN, full card number or CVV over phone or SMS. Hang up if asked! 📞",
      },
    ],
    learningPoints: [
      'Identify phishing SMS and email scams instantly',
      'Use only official bank channels for account queries',
      'Enable two-factor authentication on all financial apps',
      'Know exactly what to share (and not share) with banks',
    ],
    unlocked: true,
    completed: false,
    progress: 0,
  },
  {
    id: 'investing',
    title: "Lebo's First Investment",
    subtitle: 'Investing 101',
    story:
      "Lebo has saved R15,000 over two years sitting in a 5% savings account. Her friend mentions a Tax-Free Savings Account (TFSA) and JSE unit trusts. Lebo wonders: 'Is investing really for someone like me?' Spoiler: it absolutely is. Let's unlock her wealth potential! 🌱",
    character: 'Lebo',
    difficulty: 'Level Up',
    difficultyColor: 'text-purple-700 bg-purple-50 border-purple-200',
    duration: 15,
    xpReward: 300,
    gradient: 'from-violet-500 to-purple-600',
    bgLight: 'from-violet-50 to-purple-50',
    borderColor: 'border-violet-200',
    icon: Brain,
    tag: '📈 Investing',
    questions: [
      {
        question: 'A Tax-Free Savings Account (TFSA) in South Africa means:',
        options: [
          'Zero tax on growth, interest and withdrawals',
          'A government grant for saving',
          'A fee-free bank account',
          'A retirement annuity for pensioners only',
        ],
        correct: 0,
        explanation:
          "You can invest up to R36,000/year (R500,000 lifetime) in a TFSA and pay ZERO tax on interest, dividends or capital gains. It's one of the most powerful tools for long-term wealth in SA! 🌱",
      },
      {
        question: "The BIGGEST risk of NOT investing your savings:",
        options: [
          'Losing all your money overnight',
          "Inflation eroding your savings' real value",
          'Being audited by SARS',
          'High bank fees',
        ],
        correct: 1,
        explanation:
          "With SA inflation ~6%, money in a 5% savings account is LOSING real value. Assets that beat inflation — shares, property, unit trusts — are how you grow actual wealth. 📊",
      },
      {
        question: "Diversification in investing means:",
        options: [
          'Putting all your money in one winning share',
          'Spreading investments across different assets to reduce risk',
          'Only investing in the JSE Top 40',
          'Keeping money in multiple bank accounts',
        ],
        correct: 1,
        explanation:
          "Don't put all your eggs in one basket! Spreading across shares, bonds, property and cash means one bad investment won't ruin you. Unit trusts diversify automatically! 🧺",
      },
      {
        question: "Lebo puts R15,000 in + adds R500/month at 10% annual return. After 20 years she'll have roughly:",
        options: ['R120,000', 'R250,000', 'R420,000', 'Over R500,000'],
        correct: 3,
        explanation:
          "The compound interest miracle! R15,000 + R500/month at 10% for 20 years = ~R550,000+. Einstein called compound interest 'the 8th wonder of the world'. Start early, stay consistent! ✨",
      },
    ],
    learningPoints: [
      'Understand and open a Tax-Free Savings Account',
      'See how inflation erodes unprotected savings',
      'Apply diversification to reduce investment risk',
      'Harness compound interest over time',
    ],
    unlocked: false,
    completed: false,
    progress: 0,
  },
];

type View = 'overview' | 'module' | 'quiz' | 'results';
type OverviewTab = 'path' | 'modules' | 'stats';

const difficultyOrder = { Starter: 0, 'Building Up': 1, 'Level Up': 2 };

export default function AcademicPerformance() {
  const [view, setView] = useState<View>('overview');
  const [overviewTab, setOverviewTab] = useState<OverviewTab>('path');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [xp] = useState(1240);
  const [streak] = useState(7);
  const [nudgeDismissed, setNudgeDismissed] = useState(false);
  const [completedModules, setCompletedModules] = useState<Set<string>>(
    new Set(modules.filter(m => m.completed).map(m => m.id))
  );
  const [expandedStory, setExpandedStory] = useState(false);

  const level = Math.floor(xp / 500) + 1;
  const xpInLevel = xp % 500;
  const xpToNextLevel = 500;

  const totalCompleted = completedModules.size;
  const totalModules = modules.length;

  const handleStartModule = (mod: Module) => {
    setSelectedModule(mod);
    setView('module');
    setExpandedStory(false);
    window.scrollTo(0, 0);
  };

  const handleStartQuiz = () => {
    setCurrentQ(0);
    setChosen(null);
    setShowExplanation(false);
    setAnswers([]);
    setView('quiz');
    window.scrollTo(0, 0);
  };

  const handleSelectAnswer = (idx: number) => {
    if (chosen !== null) return;
    setChosen(idx);
    setShowExplanation(true);
  };

  const handleNext = () => {
    const newAnswers = [...answers, chosen!];
    if (currentQ + 1 < selectedModule!.questions.length) {
      setAnswers(newAnswers);
      setCurrentQ(q => q + 1);
      setChosen(null);
      setShowExplanation(false);
    } else {
      setAnswers(newAnswers);
      const score = newAnswers.filter(
        (a, i) => a === selectedModule!.questions[i].correct
      ).length;
      if (score >= 3) {
        setCompletedModules(prev => new Set([...prev, selectedModule!.id]));
      }
      setView('results');
    }
  };

  const handleBackToOverview = () => {
    setView('overview');
    setSelectedModule(null);
    setAnswers([]);
    setChosen(null);
    setShowExplanation(false);
  };

  const scoreCount = answers.filter(
    (a, i) => a === selectedModule?.questions[i].correct
  ).length;

  const statsData = modules
    .filter(m => completedModules.has(m.id))
    .map(m => ({
      name: m.subtitle.split(' ')[0],
      score: 85 + Math.floor(Math.random() * 15),
    }));

  if (view === 'quiz' && selectedModule) {
    const q = selectedModule.questions[currentQ];
    const isCorrect = chosen === q.correct;
    const progress = ((currentQ) / selectedModule.questions.length) * 100;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Quiz Header */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleBackToOverview}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Exit Quiz
            </button>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600">{streak} day streak</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQ + 1} of {selectedModule.questions.length}
            </span>
            <span className="text-sm font-semibold text-sky-600">
              +{selectedModule.xpReward} XP on completion
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-4 ${selectedModule.difficultyColor} border`}>
            {selectedModule.tag}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-6 leading-snug">
            {q.question}
          </h3>

          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              let style =
                'border-2 border-gray-200 bg-white text-gray-800 hover:border-sky-300 hover:bg-sky-50';
              if (chosen !== null) {
                if (idx === q.correct) {
                  style = 'border-2 border-emerald-400 bg-emerald-50 text-emerald-800';
                } else if (idx === chosen && chosen !== q.correct) {
                  style = 'border-2 border-red-400 bg-red-50 text-red-800';
                } else {
                  style = 'border-2 border-gray-100 bg-gray-50 text-gray-400';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectAnswer(idx)}
                  disabled={chosen !== null}
                  className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200 flex items-center gap-3 ${style} ${chosen === null ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    chosen !== null && idx === q.correct
                      ? 'border-emerald-500 bg-emerald-500 text-white'
                      : chosen !== null && idx === chosen && chosen !== q.correct
                      ? 'border-red-500 bg-red-500 text-white'
                      : 'border-current'
                  }`}>
                    {chosen !== null && idx === q.correct ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : chosen !== null && idx === chosen && chosen !== q.correct ? (
                      <X className="w-3.5 h-3.5" />
                    ) : (
                      String.fromCharCode(65 + idx)
                    )}
                  </span>
                  <span className="text-sm font-medium">{opt}</span>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`mt-5 p-4 rounded-xl border ${isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
              <div className="flex items-start gap-2.5">
                {isCorrect ? (
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className={`text-sm font-bold mb-1 ${isCorrect ? 'text-emerald-800' : 'text-amber-800'}`}>
                    {isCorrect ? '🎉 Nailed it!' : "💡 Good try — here's the insight:"}
                  </p>
                  <p className={`text-sm leading-relaxed ${isCorrect ? 'text-emerald-700' : 'text-amber-700'}`}>
                    {q.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {chosen !== null && (
            <button
              onClick={handleNext}
              className="mt-5 w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {currentQ + 1 < selectedModule.questions.length ? (
                <>Next Question <ChevronRight className="w-4 h-4" /></>
              ) : (
                <>See My Results <Trophy className="w-4 h-4" /></>
              )}
            </button>
          )}
        </div>
      </div>
    );
  }

  if (view === 'results' && selectedModule) {
    const total = selectedModule.questions.length;
    const passed = scoreCount >= Math.ceil(total * 0.75);
    const percentage = Math.round((scoreCount / total) * 100);

    return (
      <div className="max-w-2xl mx-auto space-y-5">
        <div className={`rounded-2xl p-8 text-center shadow-sm border ${passed ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200' : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200'}`}>
          <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl ${passed ? 'bg-emerald-100' : 'bg-amber-100'}`}>
            {passed ? '🏆' : '💪'}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {passed ? 'Module Complete!' : 'Keep Going!'}
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            {passed
              ? `Amazing work, Thabo! You aced the "${selectedModule.title}" module.`
              : `You're making progress! Review and retry to unlock this module.`}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white/70 rounded-xl p-4">
              <p className="text-3xl font-bold text-gray-900">{percentage}%</p>
              <p className="text-xs text-gray-500 mt-1">Score</p>
            </div>
            <div className="bg-white/70 rounded-xl p-4">
              <p className="text-3xl font-bold text-gray-900">{scoreCount}/{total}</p>
              <p className="text-xs text-gray-500 mt-1">Correct</p>
            </div>
            <div className={`rounded-xl p-4 ${passed ? 'bg-sky-500' : 'bg-gray-200'}`}>
              <p className={`text-3xl font-bold ${passed ? 'text-white' : 'text-gray-500'}`}>
                +{passed ? selectedModule.xpReward : Math.round(selectedModule.xpReward * 0.3)}
              </p>
              <p className={`text-xs mt-1 ${passed ? 'text-sky-100' : 'text-gray-400'}`}>XP Earned</p>
            </div>
          </div>

          {passed && (
            <div className="bg-white/60 rounded-xl p-4 mb-5 text-left">
              <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                What you've mastered:
              </p>
              <div className="space-y-2">
                {selectedModule.learningPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleBackToOverview}
              className="flex-1 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              Back to Learning Path
            </button>
            {!passed && (
              <button
                onClick={handleStartQuiz}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (view === 'module' && selectedModule) {
    const mod = selectedModule;
    const Icon = mod.icon;

    return (
      <div className="max-w-2xl mx-auto space-y-5">
        {/* Back */}
        <button
          onClick={handleBackToOverview}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Learning Path
        </button>

        {/* Module Hero */}
        <div className={`rounded-2xl p-6 bg-gradient-to-br ${mod.gradient} text-white shadow-md`}>
          <div className="flex items-start justify-between mb-4">
            <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/20`}>
              {mod.tag}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/80 bg-white/20 px-2.5 py-1 rounded-full">
              <Clock className="w-3 h-3" /> {mod.duration} min
            </div>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-white/80">{mod.subtitle}</p>
              <h2 className="text-xl font-bold">{mod.title}</h2>
            </div>
          </div>
        </div>

        {/* Scenario Story */}
        <div className={`rounded-2xl p-5 bg-gradient-to-br ${mod.bgLight} border ${mod.borderColor} shadow-sm`}>
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-4 h-4 text-gray-600" />
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">The Scenario</span>
          </div>
          <p className={`text-sm text-gray-700 leading-relaxed ${!expandedStory ? 'line-clamp-3' : ''}`}>
            {mod.story}
          </p>
          <button
            onClick={() => setExpandedStory(e => !e)}
            className="mt-2 text-xs font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1"
          >
            {expandedStory ? 'Show less' : 'Read full story'}
            <ChevronDown className={`w-3 h-3 transition-transform ${expandedStory ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Learning Points */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-sky-600" />
            <h3 className="text-sm font-bold text-gray-900">What you'll learn</h3>
          </div>
          <div className="space-y-3">
            {mod.learningPoints.map((pt, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-sky-600">{i + 1}</span>
                </div>
                <p className="text-sm text-gray-700">{pt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quiz Info */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">Knowledge Check</p>
              <p className="text-xs text-gray-500">
                {mod.questions.length} questions • Pass 75%+ to earn {mod.xpReward} XP
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-bold text-amber-600">+{mod.xpReward} XP</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleStartQuiz}
          className={`w-full py-4 rounded-2xl bg-gradient-to-r ${mod.gradient} text-white font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2.5 shadow-md`}
        >
          <PlayCircle className="w-5 h-5" />
          Start the Quiz
        </button>
      </div>
    );
  }

  // Overview
  const nextUnlockedModule = modules.find(m => m.unlocked && !completedModules.has(m.id));

  return (
    <div className="space-y-6">
      {/* Gamification Header */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
              <span className="text-white font-bold text-lg">{level}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-bold text-gray-900">Level {level} Learner</span>
                <span className="text-xs text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full font-semibold border border-sky-100">
                  Financial Explorer
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all"
                    style={{ width: `${(xpInLevel / xpToNextLevel) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0">
                  {xpInLevel}/{xpToNextLevel} XP
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="text-xl font-bold text-gray-900">{streak}</span>
              </div>
              <p className="text-xs text-gray-500">day streak</p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span className="text-xl font-bold text-gray-900">{xp}</span>
              </div>
              <p className="text-xs text-gray-500">total XP</p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center">
                <BookOpen className="w-5 h-5 text-sky-500" />
                <span className="text-xl font-bold text-gray-900">{totalCompleted}/{totalModules}</span>
              </div>
              <p className="text-xs text-gray-500">completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Nudge Banner */}
      {!nudgeDismissed && nextUnlockedModule && (
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-violet-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-violet-900 mb-0.5">
              🧠 AI Learning Tip
            </p>
            <p className="text-xs text-violet-700 leading-relaxed">
              Based on your progress, we think you're ready for{' '}
              <span className="font-semibold">"{nextUnlockedModule.title}"</span> next.
              It matches your current pace and builds on what you've already learned.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => handleStartModule(nextUnlockedModule)}
              className="text-xs font-semibold text-violet-700 hover:text-violet-900 bg-violet-100 hover:bg-violet-200 px-3 py-1.5 rounded-lg transition-colors"
            >
              Start now →
            </button>
            <button
              onClick={() => setNudgeDismissed(true)}
              className="text-violet-400 hover:text-violet-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-100">
          {(
            [
              { id: 'path', label: 'My Path', icon: Target },
              { id: 'modules', label: 'All Modules', icon: BookOpen },
              { id: 'stats', label: 'My Stats', icon: BarChart3 },
            ] as { id: OverviewTab; label: string; icon: React.ElementType }[]
          ).map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setOverviewTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-colors ${
                  overviewTab === tab.id
                    ? 'text-sky-600 border-b-2 border-sky-500 bg-sky-50/50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="p-5">
          {/* MY PATH TAB */}
          {overviewTab === 'path' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">Your Learning Journey</h3>
                  <p className="text-xs text-gray-500 mt-0.5">AI-personalised path • Adaptive difficulty</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Overall progress</p>
                  <p className="text-lg font-bold text-sky-600">
                    {Math.round((totalCompleted / totalModules) * 100)}%
                  </p>
                </div>
              </div>

              {/* Overall progress bar */}
              <div className="w-full bg-gray-100 rounded-full h-2 mb-5">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all"
                  style={{ width: `${(totalCompleted / totalModules) * 100}%` }}
                />
              </div>

              {/* Path Steps */}
              <div className="space-y-3">
                {modules.map((mod, idx) => {
                  const Icon = mod.icon;
                  const isComplete = completedModules.has(mod.id);
                  const isCurrent =
                    mod.unlocked && !isComplete && modules.findIndex(m => m.unlocked && !completedModules.has(m.id)) === idx;

                  return (
                    <div key={mod.id} className="relative">
                      {idx < modules.length - 1 && (
                        <div className={`absolute left-6 top-[3.5rem] w-0.5 h-4 ${isComplete ? 'bg-emerald-300' : 'bg-gray-200'}`} />
                      )}
                      <button
                        onClick={() => mod.unlocked && handleStartModule(mod)}
                        disabled={!mod.unlocked}
                        className={`w-full text-left rounded-xl border p-4 transition-all flex items-center gap-4 ${
                          !mod.unlocked
                            ? 'border-gray-100 bg-gray-50 opacity-60 cursor-not-allowed'
                            : isCurrent
                            ? `border-sky-300 bg-gradient-to-r ${mod.bgLight} shadow-sm ring-2 ring-sky-200`
                            : isComplete
                            ? 'border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50'
                            : 'border-gray-200 bg-white hover:border-sky-200 hover:shadow-sm'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          isComplete
                            ? 'bg-emerald-100'
                            : isCurrent
                            ? `bg-gradient-to-br ${mod.gradient}`
                            : !mod.unlocked
                            ? 'bg-gray-200'
                            : 'bg-gray-100'
                        }`}>
                          {isComplete ? (
                            <Check className="w-6 h-6 text-emerald-600" />
                          ) : !mod.unlocked ? (
                            <Lock className="w-5 h-5 text-gray-400" />
                          ) : (
                            <Icon className={`w-5 h-5 ${isCurrent ? 'text-white' : 'text-gray-600'}`} />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-bold text-gray-900">{mod.title}</span>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${mod.difficultyColor}`}>
                              {mod.difficulty}
                            </span>
                            {isCurrent && (
                              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-500 text-white">
                                Up Next
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">{mod.subtitle} • {mod.duration} min</p>
                          {mod.unlocked && !isComplete && mod.progress > 0 && (
                            <div className="mt-2 w-full bg-gray-100 rounded-full h-1.5">
                              <div
                                className="h-1.5 rounded-full bg-sky-400"
                                style={{ width: `${mod.progress}%` }}
                              />
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <div className="flex items-center gap-1">
                            <Zap className="w-3.5 h-3.5 text-amber-500" />
                            <span className="text-xs font-bold text-amber-600">{mod.xpReward}</span>
                          </div>
                          {mod.unlocked && (
                            <ChevronRight className={`w-4 h-4 ${isComplete ? 'text-emerald-400' : 'text-gray-400'}`} />
                          )}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Adaptive Difficulty Note */}
              <div className="mt-4 flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <Brain className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-blue-900">AI Adaptive Learning</p>
                  <p className="text-xs text-blue-700 mt-0.5">
                    Your path adjusts based on quiz performance. Score above 90% consistently and harder modules unlock faster. Currently at <span className="font-semibold">Building Up</span> level.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ALL MODULES TAB */}
          {overviewTab === 'modules' && (
            <div className="space-y-4">
              <p className="text-xs text-gray-500">
                {totalCompleted} of {totalModules} modules completed
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {modules.map(mod => {
                  const Icon = mod.icon;
                  const isComplete = completedModules.has(mod.id);

                  return (
                    <button
                      key={mod.id}
                      onClick={() => mod.unlocked && handleStartModule(mod)}
                      disabled={!mod.unlocked}
                      className={`text-left rounded-2xl overflow-hidden shadow-sm border transition-all ${
                        !mod.unlocked
                          ? 'border-gray-200 opacity-60 cursor-not-allowed'
                          : isComplete
                          ? 'border-emerald-200 hover:shadow-md'
                          : 'border-gray-200 hover:shadow-md hover:-translate-y-0.5'
                      }`}
                    >
                      <div className={`h-24 bg-gradient-to-br ${mod.gradient} p-4 flex items-end justify-between`}>
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                          {!mod.unlocked ? (
                            <Lock className="w-5 h-5 text-white" />
                          ) : (
                            <Icon className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div className="flex items-center gap-1.5">
                          {isComplete && (
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                          )}
                          <div className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full">
                            <Zap className="w-3 h-3 text-white" />
                            <span className="text-xs text-white font-bold">{mod.xpReward}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-3.5">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <p className="text-sm font-bold text-gray-900 leading-tight">{mod.title}</p>
                            <p className="text-xs text-gray-500">{mod.subtitle}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${mod.difficultyColor}`}>
                            {mod.difficulty}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />{mod.duration}m
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STATS TAB */}
          {overviewTab === 'stats' && (
            <div className="space-y-5">
              {/* Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Modules Done', value: `${totalCompleted}/${totalModules}`, icon: BookOpen, color: 'text-sky-600 bg-sky-50' },
                  { label: 'Total XP', value: xp.toLocaleString(), icon: Zap, color: 'text-amber-600 bg-amber-50' },
                  { label: 'Day Streak', value: `${streak}`, icon: Flame, color: 'text-orange-600 bg-orange-50' },
                  { label: 'Avg Score', value: '82%', icon: Star, color: 'text-purple-600 bg-purple-50' },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm text-center">
                      <div className={`w-9 h-9 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Quiz Scores Chart */}
              {statsData.length > 0 ? (
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                  <h4 className="text-sm font-bold text-gray-900 mb-4">Quiz Scores by Module</h4>
                  <ResponsiveContainer width="100%" height={160}>
                    <BarChart data={statsData} barSize={28}>
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 11, fill: '#9ca3af' }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        domain={[0, 100]}
                        tick={{ fontSize: 11, fill: '#9ca3af' }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        formatter={(v: number) => [`${v}%`, 'Score']}
                        contentStyle={{
                          borderRadius: 8,
                          border: '1px solid #e5e7eb',
                          fontSize: 12,
                        }}
                      />
                      <Bar
                        dataKey="score"
                        fill="url(#barGrad)"
                        radius={[6, 6, 0, 0]}
                      />
                      <defs>
                        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
                  <BarChart3 className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">Complete a module to see your quiz scores here.</p>
                </div>
              )}

              {/* Adaptive Difficulty */}
              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <h4 className="text-sm font-bold text-gray-900 mb-3">Adaptive Learning Level</h4>
                <div className="flex gap-2">
                  {(['Starter', 'Building Up', 'Level Up'] as const).map(lvl => (
                    <div
                      key={lvl}
                      className={`flex-1 rounded-lg p-3 border text-center text-xs font-semibold ${
                        lvl === 'Building Up'
                          ? 'bg-amber-50 border-amber-300 text-amber-700'
                          : 'bg-gray-50 border-gray-200 text-gray-400'
                      }`}
                    >
                      {lvl === 'Building Up' && <span className="block text-base mb-1">⚡</span>}
                      {lvl}
                      {lvl === 'Building Up' && (
                        <span className="block text-amber-500 text-xs mt-0.5">Current</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Score 90%+ on 3 consecutive quizzes to advance to <span className="font-semibold text-purple-600">Level Up</span> difficulty and unlock bonus modules.
                </p>
              </div>

              {/* Badges */}
              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <h4 className="text-sm font-bold text-gray-900 mb-3">Badges Earned</h4>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { emoji: '🚀', name: 'First Step', earned: true },
                    { emoji: '🔥', name: 'Week Streak', earned: true },
                    { emoji: '💰', name: 'Budget Boss', earned: false },
                    { emoji: '🛡️', name: 'Fraud Fighter', earned: false },
                    { emoji: '📈', name: 'Investor', earned: false },
                  ].map((badge, i) => (
                    <div key={i} className={`text-center px-3 py-2.5 rounded-xl border ${badge.earned ? 'bg-amber-50 border-amber-200' : 'bg-gray-50 border-gray-200 opacity-40'}`}>
                      <span className="block text-2xl">{badge.emoji}</span>
                      <span className="block text-xs font-semibold text-gray-700 mt-1">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notification Nudges */}
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Bell className="w-4 h-4 text-sky-600" />
                  <span className="text-sm font-bold text-sky-900">Behavioural Nudges</span>
                  <span className="text-xs bg-sky-100 text-sky-600 px-2 py-0.5 rounded-full border border-sky-200 font-semibold ml-auto">Active</span>
                </div>
                <div className="space-y-2">
                  {[
                    { time: 'Daily', msg: "⏰ Learning reminder at 7:30 AM — 'Good morning, Thabo! 5 min to level up?'" },
                    { time: 'Weekly', msg: "📊 Friday financial check-in — review your budget for the week." },
                    { time: 'Smart', msg: "💡 Re-engagement trigger if you miss 3+ days — personalised catch-up module." },
                  ].map((nudge, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-white/70 rounded-lg px-3 py-2.5">
                      <AlertCircle className="w-3.5 h-3.5 text-sky-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-sky-700">{nudge.time}: </span>
                        <span className="text-xs text-gray-600">{nudge.msg}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
