/**
 * Education Journey Data
 * Author: Ashutosh Bhagwat
 *
 * Complete educational timeline from nursery to senior engineer position.
 * Includes milestones with grades, achievements, and placeholder images.
 */

export interface EducationMilestone {
  id: string;
  title: string;
  year: string;
  grade?: string;
  percentage?: number;
  image: string;
  achievements: string[];
  icon: string;
  category: 'primary' | 'secondary' | 'higher-secondary' | 'college' | 'professional';
}

export const educationMilestones: EducationMilestone[] = [
  {
    id: 'nursery',
    title: 'Nursery',
    year: '2001-2002',
    grade: 'N/A',
    image: '/images/education/nursery-placeholder.jpg',
    achievements: ['Beginning of learning journey', 'Early childhood development'],
    icon: '🎨',
    category: 'primary'
  },
  {
    id: '1st-grade',
    title: '1st Grade',
    year: '2002-2003',
    grade: 'A+',
    percentage: 95,
    image: '/images/education/1st-placeholder.jpg',
    achievements: ['Strong foundation in basics', 'Active participation'],
    icon: '📚',
    category: 'primary'
  },
  {
    id: '2nd-grade',
    title: '2nd Grade',
    year: '2003-2004',
    grade: 'A+',
    percentage: 93,
    image: '/images/education/2nd-placeholder.jpg',
    achievements: ['Excellent academic performance', 'Class monitor'],
    icon: '✏️',
    category: 'primary'
  },
  {
    id: '3rd-grade',
    title: '3rd Grade',
    year: '2004-2005',
    grade: 'A+',
    percentage: 94,
    image: '/images/education/3rd-placeholder.jpg',
    achievements: ['Consistent performer', 'Science enthusiast'],
    icon: '🔬',
    category: 'primary'
  },
  {
    id: '4th-grade',
    title: '4th Grade',
    year: '2005-2006',
    grade: 'A+',
    percentage: 96,
    image: '/images/education/4th-placeholder.jpg',
    achievements: ['Top of the class', 'Mathematics award'],
    icon: '🏆',
    category: 'primary'
  },
  {
    id: '5th-grade',
    title: '5th Grade',
    year: '2006-2007',
    grade: 'A+',
    percentage: 95,
    image: '/images/education/5th-placeholder.jpg',
    achievements: ['Primary school completion', 'All-rounder award'],
    icon: '⭐',
    category: 'primary'
  },
  {
    id: '6th-grade',
    title: '6th Grade',
    year: '2007-2008',
    grade: 'A+',
    percentage: 92,
    image: '/images/education/6th-placeholder.jpg',
    achievements: ['Transition to middle school', 'Science project winner'],
    icon: '🧪',
    category: 'secondary'
  },
  {
    id: '7th-grade',
    title: '7th Grade',
    year: '2008-2009',
    grade: 'A+',
    percentage: 91,
    image: '/images/education/7th-placeholder.jpg',
    achievements: ['Strong academic record', 'Sports participation'],
    icon: '⚽',
    category: 'secondary'
  },
  {
    id: '8th-grade',
    title: '8th Grade',
    year: '2009-2010',
    grade: 'A+',
    percentage: 93,
    image: '/images/education/8th-placeholder.jpg',
    achievements: ['Academic excellence', 'Leadership qualities'],
    icon: '👨‍🎓',
    category: 'secondary'
  },
  {
    id: '9th-grade',
    title: '9th Grade',
    year: '2010-2011',
    grade: 'A+',
    percentage: 90,
    image: '/images/education/9th-placeholder.jpg',
    achievements: ['High school journey begins', 'STEM focus'],
    icon: '📐',
    category: 'secondary'
  },
  {
    id: '10th-grade',
    title: '10th Grade (SSC)',
    year: '2011-2012',
    grade: 'A+',
    percentage: 94.5,
    image: '/images/education/10th-placeholder.jpg',
    achievements: ['Board examination success', '94.5% aggregate', 'Mathematics and Science excellence'],
    icon: '🎓',
    category: 'secondary'
  },
  {
    id: '11th-grade',
    title: '11th Grade',
    year: '2012-2013',
    grade: 'A',
    percentage: 88,
    image: '/images/education/11th-placeholder.jpg',
    achievements: ['Science stream (PCM)', 'Foundation for engineering'],
    icon: '⚙️',
    category: 'higher-secondary'
  },
  {
    id: '12th-grade',
    title: '12th Grade (HSC)',
    year: '2013-2014',
    grade: 'A',
    percentage: 89.2,
    image: '/images/education/12th-placeholder.jpg',
    achievements: ['Board examination cleared', '89.2% in PCM', 'Engineering entrance qualified'],
    icon: '🎯',
    category: 'higher-secondary'
  },
  {
    id: 'engineering-first',
    title: 'Engineering First Year',
    year: '2018-2019',
    grade: '8.5 CGPA',
    image: '/images/education/eng-first-placeholder.jpg',
    achievements: ['Strong start in Engineering', 'Electronics & Telecommunication', 'Programming fundamentals'],
    icon: '💻',
    category: 'college'
  },
  {
    id: 'engineering-second',
    title: 'Engineering Second Year',
    year: '2019-2020',
    grade: '8.8 CGPA',
    image: '/images/education/eng-second-placeholder.jpg',
    achievements: ['Core subjects mastery', 'Microcontrollers & DSA', 'First hackathon participation'],
    icon: '🔌',
    category: 'college'
  },
  {
    id: 'engineering-third',
    title: 'Engineering Third Year',
    year: '2020-2021',
    grade: '8.9 CGPA',
    image: '/images/education/eng-third-placeholder.jpg',
    achievements: ['AI & Image Processing courses', 'e-Yantra IIT Bombay Air-3', 'Multiple internships begin'],
    icon: '🤖',
    category: 'college'
  },
  {
    id: 'fortune3d-intern',
    title: 'Fortune3D Internship',
    year: 'Jan 2021 - Jul 2021',
    image: '/images/education/fortune3d-placeholder.jpg',
    achievements: ['3D modeling & prototyping', 'Client project delivery', 'Production-ready assets'],
    icon: '🎨',
    category: 'professional'
  },
  {
    id: 'tarsyer-intern',
    title: 'Tarsyer Internship',
    year: 'Jun 2021 - Present',
    image: '/images/education/tarsyer-intern-placeholder.jpg',
    achievements: ['Edge AI deployment', 'Computer Vision systems', 'Real-world problem solving'],
    icon: '💼',
    category: 'professional'
  },
  {
    id: 'eyantra-intern',
    title: 'eYantra IIT Bombay',
    year: 'Aug 2020 - Jul 2021',
    image: '/images/education/eyantra-placeholder.jpg',
    achievements: ['Ranked 3rd nationally', 'Autonomous robotics system', 'Open-source contributions'],
    icon: '🏅',
    category: 'professional'
  },
  {
    id: 'engineering-final',
    title: 'Engineering Final Year',
    year: '2021-2022',
    grade: '8.88 CGPA',
    image: '/images/education/final-year-placeholder.jpg',
    achievements: ['First Class with Distinction', 'Multiple competitions won', 'Campus Ambassador', 'Final year project excellence'],
    icon: '🎓',
    category: 'college'
  },
  {
    id: 'ai-solution-engineer',
    title: 'AI Solution Engineer',
    year: '2022-2024',
    image: '/images/education/ai-engineer-placeholder.jpg',
    achievements: ['Full-time at Tarsyer', 'Production AI systems', '13K+ edge devices', 'Multi-country deployments'],
    icon: '🚀',
    category: 'professional'
  },
  {
    id: 'senior-engineer',
    title: 'Senior AI Engineer & Team Lead',
    year: '2024-Present',
    image: '/images/education/senior-engineer-placeholder.jpg',
    achievements: ['Team leadership (10+ engineers)', '11+ countries deployment', 'End-to-end AI ownership', 'Technical excellence at scale'],
    icon: '👨‍💼',
    category: 'professional'
  }
];

export const milestoneCategories = {
  primary: { label: 'Primary Education', color: 'from-orange-200 to-orange-300' },
  secondary: { label: 'Secondary Education', color: 'from-orange-300 to-orange-400' },
  'higher-secondary': { label: 'Higher Secondary', color: 'from-orange-400 to-orange-500' },
  college: { label: 'Engineering', color: 'from-orange-500 to-orange-600' },
  professional: { label: 'Professional Journey', color: 'from-orange-600 to-orange-700' }
};
