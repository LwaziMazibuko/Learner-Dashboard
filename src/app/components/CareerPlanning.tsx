import { useState } from 'react';
import {
  Compass,
  Briefcase,
  GraduationCap,
  DollarSign,
  MapPin,
  Clock,
  FileText,
  Award,
  Calculator,
  ExternalLink,
  TrendingUp,
  BookOpen,
  Bell,
  Star,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function CareerPlanning() {
  const [selectedView, setSelectedView] = useState<'careers' | 'universities' | 'bursaries' | 'tools'>('careers');
  const [selectedCareer, setSelectedCareer] = useState<number | null>(null);

  const careers = [
    {
      id: 1,
      title: 'Mechanical Engineer',
      category: 'Engineering',
      icon: '⚙️',
      description: 'Design, develop, and test mechanical devices and systems',
      salaryRange: 'R450,000 - R850,000/year',
      growth: 'High',
      requiredSubjects: ['Mathematics', 'Physical Science'],
      minAPS: 32,
      universities: ['UCT', 'Wits', 'Stellenbosch', 'UP'],
      duties: [
        'Design mechanical systems and components',
        'Conduct tests and analyze results',
        'Oversee manufacturing processes',
        'Troubleshoot mechanical issues'
      ]
    },
    {
      id: 2,
      title: 'Software Developer',
      category: 'Technology',
      icon: '💻',
      description: 'Create and maintain software applications and systems',
      salaryRange: 'R380,000 - R900,000/year',
      growth: 'Very High',
      requiredSubjects: ['Mathematics', 'IT/CAT'],
      minAPS: 30,
      universities: ['UCT', 'Wits', 'UP', 'Stellenbosch'],
      duties: [
        'Write and test code',
        'Design software architecture',
        'Debug and fix issues',
        'Collaborate with teams'
      ]
    },
    {
      id: 3,
      title: 'Biomedical Scientist',
      category: 'Health Sciences',
      icon: '🔬',
      description: 'Research and develop medical treatments and technologies',
      salaryRange: 'R320,000 - R750,000/year',
      growth: 'High',
      requiredSubjects: ['Life Sciences', 'Physical Science', 'Mathematics'],
      minAPS: 35,
      universities: ['UCT', 'Wits', 'UKZN', 'Stellenbosch'],
      duties: [
        'Conduct laboratory research',
        'Analyze biological samples',
        'Develop new treatments',
        'Publish research findings'
      ]
    },
    {
      id: 4,
      title: 'Data Scientist',
      category: 'Technology',
      icon: '📊',
      description: 'Analyze complex data to help organizations make decisions',
      salaryRange: 'R420,000 - R1,200,000/year',
      growth: 'Very High',
      requiredSubjects: ['Mathematics', 'IT/CAT'],
      minAPS: 33,
      universities: ['UCT', 'Wits', 'UP', 'Stellenbosch'],
      duties: [
        'Collect and analyze data',
        'Build predictive models',
        'Create data visualizations',
        'Present insights to stakeholders'
      ]
    },
    {
      id: 5,
      title: 'Chartered Accountant',
      category: 'Finance',
      icon: '💼',
      description: 'Provide financial advice and manage financial records',
      salaryRange: 'R380,000 - R950,000/year',
      growth: 'Moderate',
      requiredSubjects: ['Mathematics', 'Accounting'],
      minAPS: 34,
      universities: ['UCT', 'Wits', 'Stellenbosch', 'UP'],
      duties: [
        'Audit financial statements',
        'Provide tax advice',
        'Financial planning',
        'Risk management'
      ]
    },
    {
      id: 6,
      title: 'Civil Engineer',
      category: 'Engineering',
      icon: '🏗️',
      description: 'Design and oversee construction of infrastructure projects',
      salaryRange: 'R420,000 - R800,000/year',
      growth: 'High',
      requiredSubjects: ['Mathematics', 'Physical Science'],
      minAPS: 32,
      universities: ['UCT', 'Wits', 'Stellenbosch', 'UP'],
      duties: [
        'Design infrastructure',
        'Project management',
        'Site inspections',
        'Quality control'
      ]
    }
  ];

  const universities = [
    {
      name: 'University of Cape Town (UCT)',
      location: 'Cape Town, Western Cape',
      apsCalculator: 'https://www.uct.ac.za/apply',
      applicationDeadline: 'September 30, 2026',
      applicationFee: 'R150',
      portal: 'https://www.uct.ac.za',
      programs: ['Engineering', 'Health Sciences', 'Commerce', 'Science'],
      ranking: 1
    },
    {
      name: 'University of the Witwatersrand (Wits)',
      location: 'Johannesburg, Gauteng',
      apsCalculator: 'https://www.wits.ac.za/applications',
      applicationDeadline: 'September 30, 2026',
      applicationFee: 'R120',
      portal: 'https://www.wits.ac.za',
      programs: ['Engineering', 'Health Sciences', 'Commerce', 'Science'],
      ranking: 2
    },
    {
      name: 'Stellenbosch University',
      location: 'Stellenbosch, Western Cape',
      apsCalculator: 'https://www.sun.ac.za/apply',
      applicationDeadline: 'September 30, 2026',
      applicationFee: 'R100',
      portal: 'https://www.sun.ac.za',
      programs: ['Engineering', 'Agriculture', 'Science', 'Commerce'],
      ranking: 3
    },
    {
      name: 'University of Pretoria (UP)',
      location: 'Pretoria, Gauteng',
      apsCalculator: 'https://www.up.ac.za/aps',
      applicationDeadline: 'September 30, 2026',
      applicationFee: 'R200',
      portal: 'https://www.up.ac.za',
      programs: ['Engineering', 'Health Sciences', 'Education', 'Science'],
      ranking: 4
    }
  ];

  const bursaries = [
    {
      id: 1,
      name: 'Sasol Bursary Programme',
      provider: 'Sasol',
      value: 'Full tuition + R50,000 allowance',
      fields: ['Engineering', 'Science', 'Technology'],
      requirements: {
        minAverage: 70,
        requiredSubjects: ['Mathematics', 'Physical Science'],
        minSubjectMark: 65
      },
      deadline: 'August 31, 2026',
      status: 'Open',
      daysLeft: 103,
      recommended: true
    },
    {
      id: 2,
      name: 'Eskom Engineering Bursary',
      provider: 'Eskom',
      value: 'Full tuition + accommodation',
      fields: ['Electrical Engineering', 'Mechanical Engineering'],
      requirements: {
        minAverage: 65,
        requiredSubjects: ['Mathematics', 'Physical Science'],
        minSubjectMark: 60
      },
      deadline: 'September 15, 2026',
      status: 'Open',
      daysLeft: 118,
      recommended: true
    },
    {
      id: 3,
      name: 'NSFAS Bursary',
      provider: 'Government',
      value: 'Full tuition + meals + accommodation',
      fields: ['All fields'],
      requirements: {
        minAverage: 50,
        requiredSubjects: [],
        minSubjectMark: 40,
        householdIncome: 'R350,000 or less'
      },
      deadline: 'November 30, 2026',
      status: 'Open',
      daysLeft: 194,
      recommended: true
    },
    {
      id: 4,
      name: 'Investec Bursary',
      provider: 'Investec Bank',
      value: 'R120,000/year',
      fields: ['Accounting', 'Finance', 'Economics'],
      requirements: {
        minAverage: 75,
        requiredSubjects: ['Mathematics', 'Accounting'],
        minSubjectMark: 70
      },
      deadline: 'September 30, 2026',
      status: 'Open',
      daysLeft: 133,
      recommended: false
    },
    {
      id: 5,
      name: 'Liberty Group Bursary',
      provider: 'Liberty Holdings',
      value: 'Full tuition',
      fields: ['Actuarial Science', 'Finance', 'IT'],
      requirements: {
        minAverage: 72,
        requiredSubjects: ['Mathematics'],
        minSubjectMark: 75
      },
      deadline: 'October 15, 2026',
      status: 'Open',
      daysLeft: 148,
      recommended: true
    }
  ];

  const myMarks = {
    average: 78,
    subjects: {
      'Mathematics': 85,
      'Physical Science': 78,
      'Life Sciences': 82,
      'English': 76,
      'Accounting': 72
    }
  };

  const checkBursaryEligibility = (bursary: typeof bursaries[0]) => {
    if (myMarks.average < bursary.requirements.minAverage) return false;

    for (const subject of bursary.requirements.requiredSubjects) {
      if (!myMarks.subjects[subject as keyof typeof myMarks.subjects] ||
          myMarks.subjects[subject as keyof typeof myMarks.subjects] < bursary.requirements.minSubjectMark) {
        return false;
      }
    }

    return true;
  };

  const selectedCareerData = careers.find(c => c.id === selectedCareer);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Career Pathing & Future Planning</h2>
            <p className="text-emerald-100">Explore careers, universities, and funding opportunities</p>
          </div>
          <Compass className="w-12 h-12 opacity-80" />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1 flex gap-1">
        <button
          onClick={() => setSelectedView('careers')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
            selectedView === 'careers'
              ? 'bg-emerald-100 text-emerald-700'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          Career Explorer
        </button>
        <button
          onClick={() => setSelectedView('universities')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
            selectedView === 'universities'
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          Universities
        </button>
        <button
          onClick={() => setSelectedView('bursaries')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
            selectedView === 'bursaries'
              ? 'bg-purple-100 text-purple-700'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Award className="w-4 h-4" />
          Bursaries
        </button>
        <button
          onClick={() => setSelectedView('tools')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
            selectedView === 'tools'
              ? 'bg-orange-100 text-orange-700'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <FileText className="w-4 h-4" />
          Application Tools
        </button>
      </div>

      {/* Career Explorer View */}
      {selectedView === 'careers' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Careers List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Browse STEM Careers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {careers.map((career) => (
                  <div
                    key={career.id}
                    onClick={() => setSelectedCareer(career.id)}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedCareer === career.id
                        ? 'border-emerald-500 bg-emerald-50 shadow-md'
                        : 'border-gray-200 hover:border-emerald-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{career.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{career.title}</h4>
                        <p className="text-xs text-gray-600 mb-2">{career.category}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-3 h-3 text-green-600" />
                          <span className="text-xs text-gray-700">{career.salaryRange}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-3 h-3 text-blue-600" />
                          <span className="text-xs text-gray-700">Growth: {career.growth}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career Details */}
          <div className="space-y-4">
            {selectedCareerData ? (
              <>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2">{selectedCareerData.icon}</div>
                    <h3 className="font-bold text-gray-900">{selectedCareerData.title}</h3>
                    <p className="text-sm text-gray-600">{selectedCareerData.description}</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Salary Range</p>
                      <p className="text-sm font-semibold text-green-600">{selectedCareerData.salaryRange}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Required Subjects</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedCareerData.requiredSubjects.map((subject, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Minimum APS Score</p>
                      <p className="text-sm font-semibold text-purple-600">{selectedCareerData.minAPS} points</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Duties</h4>
                  <ul className="space-y-2">
                    {selectedCareerData.duties.map((duty, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        {duty}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Universities Offering</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareerData.universities.map((uni, idx) => (
                      <span key={idx} className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg">
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
                <Compass className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 text-sm">Select a career to view details</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Universities View */}
      {selectedView === 'universities' && (
        <div className="space-y-6">
          {/* APS Calculator */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-900">APS Calculator</h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Based on your current marks, your estimated APS score is:
            </p>
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-1">38</p>
                <p className="text-sm text-gray-600">Admission Point Score</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(myMarks.subjects).map(([subject, mark]) => (
                <div key={subject} className="flex items-center justify-between bg-white rounded px-3 py-2">
                  <span className="text-gray-700">{subject}</span>
                  <span className="font-semibold text-gray-900">{mark}% (7)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Universities List */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-5">Top Universities</h3>
            <div className="space-y-4">
              {universities.map((uni, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">{uni.name}</h4>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                          #{uni.ranking}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {uni.location}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Application Deadline</p>
                      <div className="flex items-center gap-1 text-gray-900">
                        <Clock className="w-3 h-3" />
                        {uni.applicationDeadline}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Application Fee</p>
                      <div className="flex items-center gap-1 text-gray-900">
                        <DollarSign className="w-3 h-3" />
                        {uni.applicationFee}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-600 mb-2">Available Programs</p>
                    <div className="flex flex-wrap gap-1">
                      {uni.programs.map((program, pidx) => (
                        <span key={pidx} className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-gray-200">
                    <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Apply Now
                    </button>
                    <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                      <Calculator className="w-4 h-4" />
                      APS Calc
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bursaries View */}
      {selectedView === 'bursaries' && (
        <div className="space-y-6">
          {/* Recommended Bursaries */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold text-gray-900">Recommended for You</h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Based on your marks and interests, you qualify for {bursaries.filter(b => b.recommended && checkBursaryEligibility(b)).length} bursaries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {bursaries.filter(b => b.recommended && checkBursaryEligibility(b)).map((bursary) => (
                <div key={bursary.id} className="bg-white rounded-lg p-3 border border-purple-200">
                  <p className="font-semibold text-sm text-gray-900 mb-1">{bursary.name}</p>
                  <p className="text-xs text-green-600 mb-2">{bursary.value}</p>
                  <div className="flex items-center gap-1 text-xs text-orange-600">
                    <Bell className="w-3 h-3" />
                    {bursary.daysLeft} days left
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Bursaries */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-5">Available Bursaries</h3>
            <div className="space-y-4">
              {bursaries.map((bursary) => {
                const isEligible = checkBursaryEligibility(bursary);

                return (
                  <div key={bursary.id} className={`border rounded-lg p-5 ${isEligible ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{bursary.name}</h4>
                          {isEligible && (
                            <span className="text-xs px-2 py-1 bg-green-500 text-white rounded-full flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              Eligible
                            </span>
                          )}
                          {!isEligible && (
                            <span className="text-xs px-2 py-1 bg-gray-400 text-white rounded-full flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              Not Eligible
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{bursary.provider}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">{bursary.value}</p>
                        <p className="text-xs text-orange-600">{bursary.daysLeft} days left</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-600 mb-2">Fields of Study</p>
                        <div className="flex flex-wrap gap-1">
                          {bursary.fields.map((field, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                              {field}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-2">Requirements</p>
                        <ul className="text-xs space-y-1">
                          <li className="flex items-center gap-1">
                            <span className={myMarks.average >= bursary.requirements.minAverage ? 'text-green-600' : 'text-red-600'}>
                              {myMarks.average >= bursary.requirements.minAverage ? '✓' : '✗'}
                            </span>
                            Minimum {bursary.requirements.minAverage}% average
                          </li>
                          {bursary.requirements.requiredSubjects.map((subject, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                              <span className={
                                myMarks.subjects[subject as keyof typeof myMarks.subjects] >= bursary.requirements.minSubjectMark
                                  ? 'text-green-600'
                                  : 'text-red-600'
                              }>
                                {myMarks.subjects[subject as keyof typeof myMarks.subjects] >= bursary.requirements.minSubjectMark ? '✓' : '✗'}
                              </span>
                              {subject}: {bursary.requirements.minSubjectMark}%+
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600">
                        Deadline: <span className="font-semibold">{bursary.deadline}</span>
                      </div>
                      <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isEligible
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      }`}>
                        <ExternalLink className="w-4 h-4" />
                        Apply Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Application Tools View */}
      {selectedView === 'tools' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Motivational Letter Templates */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Motivational Letter Templates</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Choose from professionally crafted templates for university and bursary applications
              </p>
              <div className="space-y-3">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-400 hover:shadow-md transition-all cursor-pointer">
                  <p className="font-medium text-gray-900 mb-1">University Application Template</p>
                  <p className="text-xs text-gray-600 mb-2">Perfect for undergraduate applications</p>
                  <button className="text-sm text-orange-600 font-medium">View Template →</button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-400 hover:shadow-md transition-all cursor-pointer">
                  <p className="font-medium text-gray-900 mb-1">Bursary Application Template</p>
                  <p className="text-xs text-gray-600 mb-2">Highlight your financial need effectively</p>
                  <button className="text-sm text-orange-600 font-medium">View Template →</button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-400 hover:shadow-md transition-all cursor-pointer">
                  <p className="font-medium text-gray-900 mb-1">Engineering Specific Template</p>
                  <p className="text-xs text-gray-600 mb-2">Tailored for STEM applications</p>
                  <button className="text-sm text-orange-600 font-medium">View Template →</button>
                </div>
              </div>
            </div>

            {/* Personal Profile Builder */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Personal Profile Builder</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Build a comprehensive profile to use across all applications
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-900">Profile Completion</p>
                    <span className="text-sm font-bold text-blue-600">65%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2 mb-3">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Personal Information</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Academic Records</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">Extracurricular Activities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">References</span>
                    </li>
                  </ul>
                </div>
                <button className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Continue Building Profile
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">Application Guide</p>
                  <p className="text-xs text-gray-600">Step-by-step process</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all">
                <FileText className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">CV Templates</p>
                  <p className="text-xs text-gray-600">Professional formats</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all">
                <Award className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">Success Stories</p>
                  <p className="text-xs text-gray-600">Learn from others</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
