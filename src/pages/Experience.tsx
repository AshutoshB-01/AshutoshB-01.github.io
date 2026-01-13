import { Navbar } from '@/components/Navbar';
import { TimelineBlock } from '@/components/TimelineBlock';
import { FloatingShapes } from '@/components/FloatingShapes';
import { Badge } from '@/components/ui/badge';
import { Rocket, Zap, MapPin } from 'lucide-react';
import { CompactJourney } from '@/components/CompactJourney';

const experiences = [
  {
    title: '(Intern → AI Solution Engineer → Senior AI Engineer) | Team Lead',
    company: 'Tarsyer Insights LLP',
    location: 'Pune, India',
    period: 'Jun 2021 – Present',
    points: [
      'Owned end-to-end AI solution delivery: problem understanding → solution design → data collection & model development → edge deployment → dashboards → real-time alerts',
      'Deployed real-time Computer Vision analytics for compliance monitoring, customer behavior analysis, and operational intelligence across enterprise environments',
      'Built Tarsyer VPN, a Nebula-based P2P orchestration platform for secure remote access across distributed devices',
      'Led a 10+ member engineering team, owning client onboarding, deployment workflows, and post-deployment operations',
    ],
  },
  {
    title: '3D Modeling & Prototyping Core Member',
    company: 'Fortune3D',
    location: 'Pune, India',
    period: 'Jan 2021 – Jul 2021',
    points: [
      'Owned end-to-end 3D prototyping for client projects, delivering production-ready assets for early-stage product validation',
      'Enabled faster product iteration by supporting B2C and C2C use cases with custom 3D design solutions',
    ],
  },
  {
    title: 'Robotics Intern (Team Member)',
    company: 'eYantra IIT Bombay',
    location: 'Mumbai, India',
    period: 'Aug 2020 – Jul 2020',
    points: [
      'Ranked 3rd nationally in IIT Bombay\'s e-Yantra program by delivering a fully autonomous robotics system',
      'Contributed to open-source robotics education by developing instructional content using Blender for multi-domain applications',
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        <FloatingShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From intern to Team Lead — 4.7+ years of building production-grade AI systems at scale
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

            <div className="space-y-16">
              {experiences.map((exp, i) => (
                <TimelineBlock
                  key={i}
                  {...exp}
                  isLeft={i % 2 === 1}
                  delay={i * 200}
                />
              ))}
            </div>
          </div>

          {/* Impact & Scale */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center glow-hover shadow-lg">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Impact & Scale</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mt-2" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '13,000+ Edge Devices Deployed',
                  description: 'Scaled Computer Vision systems across 11+ countries spanning 4 continents',
                  metric: '13K+',
                  icon: '🌍'
                },
                {
                  title: 'Multi-Region Production Systems',
                  description: 'Successfully deployed in India, Indonesia, South Africa, Zambia, Nigeria, Saudi Arabia, Jordan, Guatemala, Burkina Faso, Sri Lanka',
                  metric: '11+',
                  icon: '🗺️'
                },
                {
                  title: '10,000+ ATMs & 2,000+ Retail Stores',
                  description: 'Real-time analytics and compliance monitoring at scale',
                  metric: '12K+',
                  icon: '🏪'
                }
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-6 group hover-lift glow-hover transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <Badge variant="secondary" className="ml-2 shrink-0 font-mono">
                          {item.metric}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Excellence */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center glow-hover shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Technical Excellence</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mt-2" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '40 FPS on 2GB RAM',
                  description: 'Optimized deep learning models for resource-constrained edge hardware',
                  metric: '40 FPS',
                  icon: '⚡'
                },
                {
                  title: '75% Model Compression',
                  description: 'Achieved significant model size reduction while maintaining accuracy',
                  metric: '75%',
                  icon: '📦'
                },
                {
                  title: '120ms → 35ms Latency',
                  description: 'Reduced inference latency through optimization and quantization',
                  metric: '3.4x',
                  icon: '🚀'
                },
                {
                  title: '80% Annotation Effort Reduction',
                  description: 'Built CPU-based auto-labeling tool using SAM',
                  metric: '80%',
                  icon: '🎯'
                }
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-6 group hover-lift glow-hover transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <Badge variant="secondary" className="ml-2 shrink-0 font-mono">
                          {item.metric}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Section */}
          <div className="mt-32 max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center glow-hover shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold">The Journey</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mt-2 mx-auto" />
              </div>
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From nursery to leading AI teams — every milestone tells a story
            </p>
            <CompactJourney />
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
