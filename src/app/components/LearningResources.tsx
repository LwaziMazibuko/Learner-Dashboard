import {
  FileText,
  Video,
  Download,
  Play,
  BookOpen,
  Search,
  Filter,
  Clock,
  Star
} from 'lucide-react';
import { useState } from 'react';

export default function LearningResources() {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const pastPapers = [
    {
      id: 1,
      title: 'Mathematics Paper 1',
      subject: 'Mathematics',
      year: 2025,
      term: 'Final',
      pages: 12,
      downloads: 234,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Mathematics Paper 2',
      subject: 'Mathematics',
      year: 2025,
      term: 'Final',
      pages: 10,
      downloads: 198,
      rating: 4.7
    },
    {
      id: 3,
      title: 'Physical Science Paper 1',
      subject: 'Physical Science',
      year: 2025,
      term: 'Final',
      pages: 14,
      downloads: 167,
      rating: 4.9
    },
    {
      id: 4,
      title: 'Physical Science Paper 2',
      subject: 'Physical Science',
      year: 2025,
      term: 'Final',
      pages: 11,
      downloads: 156,
      rating: 4.6
    },
    {
      id: 5,
      title: 'Life Sciences Paper 1',
      subject: 'Life Sciences',
      year: 2025,
      term: 'Final',
      pages: 13,
      downloads: 143,
      rating: 4.5
    },
    {
      id: 6,
      title: 'English Paper 1 - Language',
      subject: 'English',
      year: 2025,
      term: 'Final',
      pages: 9,
      downloads: 189,
      rating: 4.4
    },
    {
      id: 7,
      title: 'Accounting Theory Paper',
      subject: 'Accounting',
      year: 2025,
      term: 'Mid-Year',
      pages: 15,
      downloads: 132,
      rating: 4.7
    },
  ];

  const videoTutorials = [
    {
      id: 1,
      title: 'Calculus Fundamentals',
      subject: 'Mathematics',
      instructor: 'Mr. Khumalo',
      duration: '45:32',
      views: 1234,
      thumbnail: '📐',
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: 'Organic Chemistry Basics',
      subject: 'Physical Science',
      instructor: 'Dr. Naidoo',
      duration: '38:15',
      views: 987,
      thumbnail: '🧪',
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'Cell Biology Deep Dive',
      subject: 'Life Sciences',
      instructor: 'Ms. Molefe',
      duration: '52:20',
      views: 876,
      thumbnail: '🔬',
      difficulty: 'Advanced'
    },
    {
      id: 4,
      title: 'Shakespeare Analysis',
      subject: 'English',
      instructor: 'Mrs. van der Merwe',
      duration: '41:08',
      views: 765,
      thumbnail: '📖',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'Financial Statements Explained',
      subject: 'Accounting',
      instructor: 'Mr. Sithole',
      duration: '48:45',
      views: 654,
      thumbnail: '💰',
      difficulty: 'Beginner'
    },
    {
      id: 6,
      title: 'Trigonometry Mastery',
      subject: 'Mathematics',
      instructor: 'Mr. Khumalo',
      duration: '55:12',
      views: 1543,
      thumbnail: '📊',
      difficulty: 'Advanced'
    },
  ];

  const subjects = [
    'all',
    'Mathematics',
    'Physical Science',
    'Life Sciences',
    'English',
    'Accounting',
    'Business Studies'
  ];

  const filteredPapers = pastPapers.filter(paper => {
    const matchesSubject = selectedSubject === 'all' || paper.subject === selectedSubject;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const filteredVideos = videoTutorials.filter(video => {
    const matchesSubject = selectedSubject === 'all' || video.subject === selectedSubject;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Learning Resources</h2>
            <p className="text-indigo-100">Access past exam papers and video tutorials</p>
          </div>
          <BookOpen className="w-12 h-12 opacity-80" />
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>
                  {subject === 'all' ? 'All Subjects' : subject}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Past Exam Papers Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-5">
          <FileText className="w-6 h-6 text-indigo-600" />
          <h3 className="font-semibold text-gray-900">Past Exam Papers</h3>
          <span className="ml-2 text-sm text-gray-500">({filteredPapers.length} available)</span>
        </div>

        {filteredPapers.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No past papers found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all hover:border-indigo-400 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{paper.title}</h4>
                    <p className="text-xs text-gray-600">{paper.subject}</p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-medium">{paper.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    {paper.pages} pages
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    {paper.downloads}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-600">
                    <span className="font-semibold">{paper.year}</span> • {paper.term}
                  </div>
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-medium hover:bg-indigo-700 transition-colors">
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Tutorials Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-5">
          <Video className="w-6 h-6 text-purple-600" />
          <h3 className="font-semibold text-gray-900">Video Tutorials Library</h3>
          <span className="ml-2 text-sm text-gray-500">({filteredVideos.length} videos)</span>
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-12">
            <Video className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No video tutorials found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:border-purple-400 cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 h-40 flex items-center justify-center">
                  <div className="text-6xl">{video.thumbnail}</div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-7 h-7 text-purple-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{video.title}</h4>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                    <span>{video.instructor}</span>
                    <span>{video.views} views</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-xs text-gray-600">{video.subject}</span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(video.difficulty)}`}>
                      {video.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Papers</p>
              <p className="text-3xl font-bold text-indigo-600">{pastPapers.length}</p>
            </div>
            <FileText className="w-10 h-10 text-indigo-400" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Videos</p>
              <p className="text-3xl font-bold text-purple-600">{videoTutorials.length}</p>
            </div>
            <Video className="w-10 h-10 text-purple-400" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Study Hours</p>
              <p className="text-3xl font-bold text-green-600">127</p>
            </div>
            <Clock className="w-10 h-10 text-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
