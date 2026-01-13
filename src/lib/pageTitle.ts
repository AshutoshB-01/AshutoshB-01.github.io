/**
 * Page Title Utility
 * Author: Ashutosh Bhagwat
 *
 * Sets unique, memorable page titles for each route
 */

export const setPageTitle = (title: string) => {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
};

export const pageTitles = {
  home: 'Ashutosh Bhagwat • Still Excited About Every Debug Session',
  journey: 'Memory Lane • From First Steps to 13K+ Devices',
  experience: 'Work Experience • Building AI That Scales',
  projects: 'Projects • Production AI Across Continents',
  projectDetail: (name: string) => `${name} • Case Study`,
  achievements: 'Achievements • From Code to Impact',
  contact: 'Let\'s Build Together • Get in Touch',
  resume: 'Resume • Ashutosh Bhagwat • Download PDF',
  education: 'Education • The Learning Journey',
  notFound: '404 • Page Not Found'
};
