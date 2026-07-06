import { BookOpen } from 'lucide-react';

interface ProgressCardProps {
  name: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
}

export function ProgressCard({ name, progress, totalLessons, completedLessons }: ProgressCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-blue-600" />
        </div>
        <span className="text-xs font-medium text-gray-500">
          {completedLessons}/{totalLessons} lessons
        </span>
      </div>

      <h3 className="font-semibold text-gray-900 mb-3">{name}</h3>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-semibold text-gray-900">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
