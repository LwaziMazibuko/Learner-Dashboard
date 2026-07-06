import { Calendar, AlertCircle } from 'lucide-react';

interface AssignmentCardProps {
  title: string;
  course: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

export function AssignmentCard({ title, course, dueDate, priority }: AssignmentCardProps) {
  const priorityColors = {
    high: 'bg-red-100 text-red-700 border-red-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    low: 'bg-green-100 text-green-700 border-green-200',
  };

  const daysUntilDue = Math.ceil((new Date(dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight pr-2">{title}</h3>
        <span className={`text-xs px-2 py-1 rounded-full border ${priorityColors[priority]} flex-shrink-0`}>
          {priority}
        </span>
      </div>

      <p className="text-xs text-gray-600 mb-3">{course}</p>

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1 text-gray-600">
          <Calendar className="w-3.5 h-3.5" />
          <span>Due {new Date(dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
        </div>
        {daysUntilDue <= 3 && (
          <div className="flex items-center gap-1 text-orange-600">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{daysUntilDue} days left</span>
          </div>
        )}
      </div>
    </div>
  );
}
