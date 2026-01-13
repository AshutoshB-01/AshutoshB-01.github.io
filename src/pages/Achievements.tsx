/**
 * Achievements Page
 * Author: Ashutosh Bhagwat
 */

import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { AchievementCard } from '@/components/AchievementCard';
import { FloatingShapes } from '@/components/FloatingShapes';
import { Badge } from '@/components/ui/badge';
import { setPageTitle, pageTitles } from '@/lib/pageTitle';

// Competitions & Recognition
const competitions = [
  {
    title: 'e-Yantra IIT Bombay - Air 3',
    description: 'Ranked 3rd nationally in IIT Bombay\'s prestigious robotics competition. Led 12+ member team.',
    date: '2020',
    certificateLink: '#',
  },
  {
    title: 'Catapult 4.0 - Winner',
    description: 'Award-winning AI solution recognized for innovation and impact in the AI/ML space.',
    date: '2023',
    certificateLink: '#',
  },
  {
    title: 'Retacon - Winner',
    description: 'First place in AI competition for developing cutting-edge computer vision solutions.',
    date: '2023',
    certificateLink: '#',
  },
  {
    title: 'Maruti Suzuki Innovation Lab - Top 7',
    description: 'Selected among top 7 teams nationally for innovative AI automotive solutions.',
    date: '2022',
    certificateLink: '#',
  },
];

// Leadership & Growth
const leadership = [
  {
    title: 'Team Growth: 2 → 10+ Engineers',
    description: 'Contributed to startup growth from 2-member team to 10+ engineers, driving technical excellence and operational maturity.',
    date: '2020-2024',
  },
  {
    title: 'Career Progression: Intern → Team Lead',
    description: 'Journey from intern to AI Solution Engineer to Senior AI Engineer and Team Lead, managing 10+ member engineering team.',
    date: '4.7 years',
  },
  {
    title: 'Technical Leadership',
    description: 'Led client onboarding, multi-region deployments, and operational excellence across 13K+ edge devices.',
    date: '2023-2024',
  },
  {
    title: 'Campus Ambassador',
    description: 'Selected as campus ambassador, representing the institution in various tech initiatives and leading student teams.',
    date: '2019-2022',
  },
];

// Business Impact
const businessImpact = [
  {
    title: '~$3K/Year Cost Reduction',
    description: 'Built P2P VPN infrastructure reducing bandwidth costs while maintaining secure device communication.',
    date: 'Ongoing',
  },
  {
    title: '~9× Operational Efficiency',
    description: 'One-click diagnostics reduced device health checks from 15 minutes to 2 minutes.',
    date: '2023',
  },
  {
    title: '99.8% System Uptime',
    description: 'Fault-tolerant monitoring and alerting across 13K+ live deployments in 11+ countries.',
    date: 'Ongoing',
  },
];

// Professional Certifications
const certifications = [
  {
    title: 'TensorFlow Developer',
    description: 'Professional certification from Google demonstrating expertise in TensorFlow framework.',
    date: '2022',
    certificateLink: '#',
  },
  {
    title: 'Deep Learning Specialization',
    description: 'Comprehensive course covering neural networks, CNNs, RNNs, and deep learning best practices.',
    date: '2021',
    certificateLink: '#',
  },
  {
    title: 'AWS Machine Learning',
    description: 'Amazon Web Services certification for machine learning deployment and infrastructure.',
    date: '2022',
    certificateLink: '#',
  },
  {
    title: 'Docker & Kubernetes',
    description: 'Linux Foundation certification for containerization and orchestration technologies.',
    date: '2022',
    certificateLink: '#',
  },
];

const skills = {
  'AI & CV': ['TensorFlow', 'PyTorch', 'YOLO', 'OpenCV', 'NCNN', 'SAM', 'ML Flow', 'AWS SageMaker', 'Object Detection & Tracking'],
  'Edge & Infra': ['Raspberry Pi', 'NVIDIA Jetson', 'Qualcomm', 'Docker', 'Kubernetes', 'CUDA', 'CI/CD', 'Git', 'GitHub Actions'],
  'Data & Backend': ['FastAPI', 'Flask', 'REST APIs', 'MySQL', 'MongoDB', 'Redis', 'Looker', 'Power BI', 'Tableau', 'Metabase', 'Streamlit'],
  'Systems & Security': ['GCP', 'Azure', 'P2P Networking', 'Nebula VPN', 'Secure Communication', 'Remote Device Orchestration'],
  'Leadership': ['Technical Ownership', 'People Management', 'Systems Thinking', 'Operational Execution', 'Ambiguity Handling'],
};

export default function Achievements() {
  useEffect(() => {
    setPageTitle(pageTitles.achievements);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-20 relative overflow-hidden">
        <FloatingShapes />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Achievements & <span className="gradient-text">Recognition</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Awards, certifications, leadership milestones, and business impact
            </p>
          </div>

          {/* Competitions & Recognition */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">
              Competitions & <span className="gradient-text">Recognition</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {competitions.map((achievement, i) => (
                <AchievementCard
                  key={i}
                  {...achievement}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>

          {/* Leadership & Growth */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">
              Leadership & <span className="gradient-text">Growth</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {leadership.map((achievement, i) => (
                <AchievementCard
                  key={i}
                  {...achievement}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">
              Business <span className="gradient-text">Impact</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {businessImpact.map((achievement, i) => (
                <AchievementCard
                  key={i}
                  {...achievement}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>

          {/* Professional Certifications */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">
              Professional <span className="gradient-text">Certifications</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {certifications.map((cert, i) => (
                <AchievementCard
                  key={i}
                  {...cert}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>

          {/* Technologies & Skills */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Technologies & <span className="gradient-text">Skills</span>
            </h2>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="glass-card rounded-xl p-6 glow-hover">
                  <h3 className="font-bold text-primary mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Ashutosh Bhagwat. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
