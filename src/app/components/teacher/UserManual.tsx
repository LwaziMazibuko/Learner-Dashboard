import { BookOpen, Video, FileText, Download, HelpCircle } from 'lucide-react';

export default function UserManual() {
  const sections = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      items: [
        { name: 'Introduction to EduTrack', type: 'guide' },
        { name: 'Logging In for the First Time', type: 'video' },
        { name: 'Navigating the Dashboard', type: 'guide' }
      ]
    },
    {
      title: 'Timesheet Management',
      icon: FileText,
      items: [
        { name: 'How to Log Timesheets', type: 'video' },
        { name: 'Editing Timesheets', type: 'guide' },
        { name: 'Viewing Timesheet Reports', type: 'guide' },
        { name: 'Understanding Approval Process', type: 'guide' }
      ]
    },
    {
      title: 'Attendance Tracking',
      icon: FileText,
      items: [
        { name: 'Marking Learner Attendance', type: 'video' },
        { name: 'Viewing Attendance Reports', type: 'guide' },
        { name: 'Managing Late Arrivals', type: 'guide' }
      ]
    },
    {
      title: 'Assessment & Marks',
      icon: FileText,
      items: [
        { name: 'Entering Assessment Marks', type: 'video' },
        { name: 'Importing Marks from Excel', type: 'guide' },
        { name: 'Exporting Mark Sheets', type: 'guide' }
      ]
    },
    {
      title: 'Troubleshooting',
      icon: HelpCircle,
      items: [
        { name: 'Common Issues and Solutions', type: 'guide' },
        { name: 'Password Reset', type: 'guide' },
        { name: 'Contact Support', type: 'guide' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Click on your profile in the top right corner, select "Settings", then "Change Password". Follow the prompts to create a new password.'
    },
    {
      question: 'Can I edit a timesheet after it has been approved?',
      answer: 'No, once a timesheet is approved by the administrator, it cannot be edited. Contact your administrator if you need to make changes.'
    },
    {
      question: 'How many times can I edit a timesheet?',
      answer: 'You can edit each timesheet entry up to 2 times before it gets locked. After that, you will need administrator assistance.'
    },
    {
      question: 'What happens if I mark a student absent by mistake?',
      answer: 'You can correct attendance records by going to the Attendance List page, finding the record, and updating the status.'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">User Manual & Help</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          <Download className="w-4 h-4" />
          Download Full Manual (PDF)
        </button>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <Video className="w-8 h-8 mb-3" />
          <h3 className="font-bold mb-2">Video Tutorials</h3>
          <p className="text-sm text-purple-100">Watch step-by-step guides</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <FileText className="w-8 h-8 mb-3" />
          <h3 className="font-bold mb-2">Documentation</h3>
          <p className="text-sm text-blue-100">Read detailed instructions</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <HelpCircle className="w-8 h-8 mb-3" />
          <h3 className="font-bold mb-2">Support</h3>
          <p className="text-sm text-green-100">Get help from our team</p>
        </div>
      </div>

      {/* Manual Sections */}
      <div className="space-y-4">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="border-b border-gray-200 px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {section.items.map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        {item.type === 'video' ? (
                          <Video className="w-4 h-4 text-purple-600" />
                        ) : (
                          <FileText className="w-4 h-4 text-blue-600" />
                        )}
                        <span className="text-sm font-medium text-gray-900">{item.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.type === 'video'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {item.type === 'video' ? 'Video' : 'Guide'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900">Frequently Asked Questions</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Contact */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Need More Help?</h3>
            <p className="text-sm text-gray-600 mb-3">
              If you can't find what you're looking for, our support team is here to help.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm">
                Contact Support
              </button>
              <button className="px-4 py-2 bg-white border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors text-sm">
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
