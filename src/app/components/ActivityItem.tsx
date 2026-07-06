import { CheckCircle2, PlayCircle, Send, Award } from 'lucide-react';

interface ActivityItemProps {
  type: 'completed' | 'started' | 'submitted' | 'achievement';
  title: string;
  course: string;
  time: string;
}

export function ActivityItem({ type, title, course, time }: ActivityItemProps) {
  const iconConfig = {
    completed: { Icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100' },
    started: { Icon: PlayCircle, color: 'text-blue-600', bg: 'bg-blue-100' },
    submitted: { Icon: Send, color: 'text-purple-600', bg: 'bg-purple-100' },
    achievement: { Icon: Award, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  };

  const { Icon, color, bg } = iconConfig[type];

  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex gap-3">
        <div className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-xs text-gray-500 mt-0.5">{course}</p>
          <p className="text-xs text-gray-400 mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
}
