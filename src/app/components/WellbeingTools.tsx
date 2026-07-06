import { useState, useEffect } from 'react';
import {
  Heart,
  Smile,
  Meh,
  Frown,
  Plus,
  Trash2,
  CheckCircle2,
  Circle,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  Save,
  Filter
} from 'lucide-react';

export default function WellbeingTools() {
  const [selectedView, setSelectedView] = useState<'checkin' | 'todo' | 'pomodoro' | 'notes'>('checkin');
  const [mood, setMood] = useState<string>('');
  const [challenges, setChallenges] = useState<string[]>([]);
  const [newChallenge, setNewChallenge] = useState('');

  // Todo List State
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete Mathematics assignment', completed: false, subject: 'Mathematics' },
    { id: 2, text: 'Study Physical Science Chapter 5', completed: true, subject: 'Physical Science' },
    { id: 3, text: 'Prepare for English test', completed: false, subject: 'English' },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  // Pomodoro Timer State
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);

  // Notes State
  const [notes, setNotes] = useState([
    { id: 1, subject: 'Mathematics', topic: 'Calculus', content: 'Remember: derivative of x^n is nx^(n-1)', date: '2026-05-18' },
    { id: 2, subject: 'Physical Science', topic: 'Chemistry', content: 'Balancing equations: ensure equal atoms on both sides', date: '2026-05-17' },
  ]);
  const [noteSubject, setNoteSubject] = useState('');
  const [noteTopic, setNoteTopic] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteFilter, setNoteFilter] = useState('all');

  const subjects = ['Mathematics', 'Physical Science', 'Life Sciences', 'English', 'Accounting', 'Business Studies'];

  const moods = [
    { value: 'great', icon: Smile, label: 'Great', color: 'text-green-500', bg: 'bg-green-100' },
    { value: 'good', icon: Smile, label: 'Good', color: 'text-blue-500', bg: 'bg-blue-100' },
    { value: 'okay', icon: Meh, label: 'Okay', color: 'text-yellow-500', bg: 'bg-yellow-100' },
    { value: 'stressed', icon: Frown, label: 'Stressed', color: 'text-orange-500', bg: 'bg-orange-100' },
    { value: 'overwhelmed', icon: Frown, label: 'Overwhelmed', color: 'text-red-500', bg: 'bg-red-100' },
  ];

  // Pomodoro Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer complete
            setIsActive(false);
            if (!isBreak) {
              setPomodorosCompleted(prev => prev + 1);
              setIsBreak(true);
              setMinutes(5);
            } else {
              setIsBreak(false);
              setMinutes(25);
            }
            setSeconds(0);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, minutes, seconds, isBreak]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(isBreak ? 5 : 25);
    setSeconds(0);
  };

  const addChallenge = () => {
    if (newChallenge.trim()) {
      setChallenges([...challenges, newChallenge]);
      setNewChallenge('');
    }
  };

  const removeChallenge = (index: number) => {
    setChallenges(challenges.filter((_, i) => i !== index));
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false, subject: selectedSubject }]);
      setNewTodo('');
      setSelectedSubject('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const saveNote = () => {
    if (noteSubject && noteTopic && noteContent) {
      setNotes([...notes, {
        id: Date.now(),
        subject: noteSubject,
        topic: noteTopic,
        content: noteContent,
        date: new Date().toISOString().split('T')[0]
      }]);
      setNoteSubject('');
      setNoteTopic('');
      setNoteContent('');
    }
  };

  const filteredNotes = noteFilter === 'all' ? notes : notes.filter(note => note.subject === noteFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Student Wellbeing & Productivity</h2>
            <p className="text-pink-100">Track your wellness and stay organized</p>
          </div>
          <Heart className="w-12 h-12 opacity-80" />
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1 flex gap-1">
        <button
          onClick={() => setSelectedView('checkin')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
            selectedView === 'checkin' ? 'bg-pink-100 text-pink-700' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Heart className="w-4 h-4" />
          Daily Check-in
        </button>
        <button
          onClick={() => setSelectedView('todo')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
            selectedView === 'todo' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          To-Do List
        </button>
        <button
          onClick={() => setSelectedView('pomodoro')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
            selectedView === 'pomodoro' ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Play className="w-4 h-4" />
          Pomodoro Timer
        </button>
        <button
          onClick={() => setSelectedView('notes')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
            selectedView === 'notes' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Study Notes
        </button>
      </div>

      {/* Daily Check-in View */}
      {selectedView === 'checkin' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">How are you feeling today?</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {moods.map((moodOption) => {
                const Icon = moodOption.icon;
                return (
                  <button
                    key={moodOption.value}
                    onClick={() => setMood(moodOption.value)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                      mood === moodOption.value
                        ? `${moodOption.bg} border-current ${moodOption.color}`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${mood === moodOption.value ? moodOption.color : 'text-gray-400'}`} />
                    <span className="text-sm font-medium">{moodOption.label}</span>
                  </button>
                );
              })}
            </div>

            {mood && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-blue-900 mb-2">
                  {mood === 'great' && "That's wonderful! Keep up the positive energy!"}
                  {mood === 'good' && "Great to hear! You're doing well!"}
                  {mood === 'okay' && "That's alright. Remember to take breaks when needed."}
                  {mood === 'stressed' && "It's okay to feel stressed. Consider taking a short break or talking to someone."}
                  {mood === 'overwhelmed' && "We're here for you. Don't hesitate to reach out to a teacher or counselor for support."}
                </p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Any challenges with subjects?</h3>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newChallenge}
                onChange={(e) => setNewChallenge(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addChallenge()}
                placeholder="E.g., Struggling with calculus concepts..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                onClick={addChallenge}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {challenges.length > 0 ? (
              <div className="space-y-2">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <span className="text-sm text-gray-700">{challenge}</span>
                    <button
                      onClick={() => removeChallenge(index)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-900">
                    💡 <span className="font-medium">Tip:</span> Share these challenges with your teacher during office hours or explore our learning resources for extra help.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p className="text-sm">No challenges reported. You're doing great!</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* To-Do List View */}
      {selectedView === 'todo' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">My To-Do List</h3>

          <div className="mb-6 space-y-3">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Add a new task..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select subject (optional)</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              <button
                onClick={addTodo}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Add Task
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 p-4 rounded-lg border transition-all ${
                  todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="flex-shrink-0"
                >
                  {todo.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <div className="flex-1">
                  <p className={`text-sm ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {todo.text}
                  </p>
                  {todo.subject && (
                    <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
                      {todo.subject}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {todos.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="text-sm">No tasks yet. Add your first task above!</p>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {todos.filter(t => t.completed).length} of {todos.length} tasks completed
            </p>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${todos.length > 0 ? (todos.filter(t => t.completed).length / todos.length) * 100 : 0}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Pomodoro Timer View */}
      {selectedView === 'pomodoro' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">
                {isBreak ? 'Break Time' : 'Study Session'}
              </h3>
              <p className="text-sm text-gray-600">
                {isBreak ? 'Take a short break to recharge' : 'Focus on your studies'}
              </p>
            </div>

            <div className="relative w-64 h-64 mx-auto mb-8">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  stroke={isBreak ? '#fb923c' : '#3b82f6'}
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 120}`}
                  strokeDashoffset={`${2 * Math.PI * 120 * (1 - ((minutes * 60 + seconds) / ((isBreak ? 5 : 25) * 60)))}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold text-gray-900">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {isBreak ? 'Break' : 'Focus'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={toggleTimer}
                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    : isBreak
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isActive ? (
                  <>
                    <Pause className="w-5 h-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Start
                  </>
                )}
              </button>
              <button
                onClick={resetTimer}
                className="flex items-center gap-2 px-8 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                Reset
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Pomodoros Completed Today</p>
              <div className="flex justify-center gap-2">
                {[...Array(Math.min(pomodorosCompleted, 8))].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-green-500 rounded-full"></div>
                ))}
                {pomodorosCompleted > 8 && (
                  <span className="text-sm font-semibold text-green-600">+{pomodorosCompleted - 8}</span>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-semibold text-gray-900 mb-3">How it works</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">1.</span>
                Work for 25 minutes with full focus
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">2.</span>
                Take a 5-minute break
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">3.</span>
                After 4 pomodoros, take a longer 15-30 minute break
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Study Notes View */}
      {selectedView === 'notes' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Create New Note</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <select
                  value={noteSubject}
                  onChange={(e) => setNoteSubject(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select subject</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
                <input
                  type="text"
                  value={noteTopic}
                  onChange={(e) => setNoteTopic(e.target.value)}
                  placeholder="Topic (e.g., Quadratic Equations)"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Write your note here..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={saveNote}
                className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Note
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">My Notes</h3>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <select
                  value={noteFilter}
                  onChange={(e) => setNoteFilter(e.target.value)}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Subjects</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
            </div>

            {filteredNotes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredNotes.map((note) => (
                  <div key={note.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                          {note.subject}
                        </span>
                        <h4 className="font-semibold text-gray-900 mt-2">{note.topic}</h4>
                      </div>
                      <span className="text-xs text-gray-500">{note.date}</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">{note.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <BookOpen className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p className="text-sm">No notes yet. Create your first note above!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
