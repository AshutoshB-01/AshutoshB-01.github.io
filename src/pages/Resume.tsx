/**
 * Resume Page - Web View and Download
 * Author: Ashutosh Bhagwat
 *
 * Displays resume in web format with download option.
 */

import { Download, ExternalLink, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';

export default function Resume() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header with download button */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Resume</span>
            </h1>
            <Button
              size="lg"
              className="gradient-orange text-primary-foreground glow-hover"
              asChild
            >
              <a href="/resume/Ashutosh_Bhagwat_AI_CV.pdf" download="Ashutosh_Bhagwat_Resume.pdf" type="application/pdf">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </a>
            </Button>
          </div>

          {/* Resume content */}
          <div className="glass-card p-8 md:p-12 rounded-xl space-y-8">
            {/* Header */}
            <div className="text-center border-b border-border pb-6">
              <h2 className="text-3xl font-bold mb-4">Ashutosh Bhagwat</h2>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> Pune, India
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:mr.ashutoshbhagwat@gmail.com" className="hover:text-primary transition-colors">
                    mr.ashutoshbhagwat@gmail.com
                  </a>
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="h-4 w-4" /> 9175559790
                </span>
                <span className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" />
                  <a href="https://ashutoshbhagwat.tech" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    ashutoshbhagwat.tech
                  </a>
                </span>
                <span className="flex items-center gap-1">
                  <Linkedin className="h-4 w-4" />
                  <a href="https://www.linkedin.com/in/ashutosh-bhagwat" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </span>
              </div>
            </div>

            {/* Profile */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-primary">PROFILE</h3>
              <p className="text-foreground/80 leading-relaxed mb-3">
                <strong>Senior AI Engineer</strong> with <strong>4.7+ years of experience</strong> building and scaling{' '}
                <strong>production-grade AI systems</strong> across <strong>edge devices</strong>, backend infrastructure,
                and analytics platforms. Progressed from <strong>Intern to Team Lead</strong> at an early-stage startup,
                contributing directly to growth from a <strong>2-member team to 10+ engineers</strong> while owning{' '}
                <strong>end-to-end AI systems</strong>.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Led deployment of large-scale <strong>Computer Vision platforms</strong> across <strong>13,000+ edge devices</strong>,
                supporting analytics for <strong>10,000+ ATMs</strong> and <strong>2,000+ retail stores</strong>. Delivered{' '}
                <strong>reliable, cost-efficient systems</strong> across <strong>multi-region deployments</strong> spanning
                India, Indonesia, South Africa, Zambia, Nigeria, Saudi Arabia, Jordan, Guatemala, Burkina Faso, Sri Lanka, and more.
              </p>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-primary">EDUCATION</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">Government College of Engineering and Research</h4>
                    <p className="text-sm text-muted-foreground italic">
                      Bachelor of Engineering in Electronics and Telecommunication, CGPA 8.88 (First Class with Distinction)
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">Jun 2018 – Jul 2022</span>
                </div>
                <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 ml-4">
                  <li><strong>Coursework:</strong> Signal and System, Artificial Intelligence, MicroControllers, DSA, Image Processing</li>
                  <li><strong>Projects:</strong> Construct-o-Bot, Mastering 3D Blender, Smart Home Automation, 3D Volumetric Estimation</li>
                  <li><strong>Achievements:</strong> Air-3 in e-Yantra IIT Bombay Competition, Campus Ambassador, Led 12+ member team</li>
                </ul>
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-primary">WORK EXPERIENCE</h3>

              {/* Tarsyer */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">Tarsyer Insights LLP</h4>
                    <p className="text-sm text-muted-foreground italic">
                      (Intern → AI Solution Engineer → Senior AI Engineer) | Team Lead
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">Jun 2021 – Present</span>
                </div>
                <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 ml-4">
                  <li>Owned end-to-end AI solution delivery: problem understanding → solution design → data collection & model development → edge deployment → secure ingestion → databases → dashboards → real-time alerts</li>
                  <li>Deployed real-time Computer Vision analytics for compliance monitoring, customer behavior analysis, and operational intelligence</li>
                  <li>Designed and maintained data pipelines and databases (MySQL, MongoDB) powering real-time enterprise dashboards</li>
                  <li>Implemented real-time monitoring and alerting systems to prevent data loss across distributed deployments</li>
                  <li>Optimized deep learning models for resource-constrained edge hardware, achieving 40 FPS on 2GB RAM, 75% model compression, and 120ms → 35ms inference latency</li>
                  <li>Designed and operated hybrid Cloud + On-Prem infrastructure for secure, high-throughput communication</li>
                  <li>Built Tarsyer VPN, a Nebula-based P2P orchestration platform, reducing infrastructure costs by ~$3K/year</li>
                  <li>Delivered high-accuracy OCR systems for high-speed industrial conveyor belts under variable lighting conditions</li>
                  <li>Built CPU-based auto-labeling tools using SAM, reducing annotation effort by 80%</li>
                  <li>Led a 10+ member engineering team, owning client onboarding, deployment workflows, and post-deployment operations</li>
                </ul>
              </div>

              {/* Fortune3D */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">Fortune3D</h4>
                    <p className="text-sm text-muted-foreground italic">3D Modeling and Prototyping | Core Member</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">Jan 2021 – Jul 2021</span>
                </div>
                <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 ml-4">
                  <li>Owned end-to-end 3D prototyping for client projects, delivering production-ready assets</li>
                  <li>Enabled faster product iteration by supporting B2C and C2C use cases with custom 3D design solutions</li>
                </ul>
              </div>

              {/* eYantra */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">eYantra IIT Bombay</h4>
                    <p className="text-sm text-muted-foreground italic">Robotics Intern | Team Member</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">Aug 2020 – Jul 2021</span>
                </div>
                <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 ml-4">
                  <li>Ranked 3rd nationally in IIT Bombay's e-Yantra program by delivering a fully autonomous robotics system</li>
                  <li>Contributed to open-source robotics education by developing instructional content using Blender</li>
                </ul>
              </div>
            </section>

            {/* Project & Business Impact */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-primary">PROJECT & BUSINESS IMPACT</h3>
              <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 ml-4">
                <li>Enabled data-driven decision-making by converting large-scale edge telemetry into real-time dashboards and operational KPIs</li>
                <li>Reduced infrastructure costs by ~$3K/year by designing and deploying a P2P VPN architecture</li>
                <li>Achieved ~9× operational efficiency by building a one-click diagnostics system, cutting health checks from ~15 min to ~2 min</li>
                <li>Built an AI-driven media optimization system using camera-based analytics; demonstrated via live enterprise client demos</li>
                <li>Delivered award-winning AI solutions: Catapult 4.0 (Winner), Retacon (Winner), Maruti Suzuki Innovation Lab (Top 7)</li>
                <li>Ensured production reliability at scale by designing fault-tolerant monitoring and alerting across 13K+ live edge deployments</li>
              </ul>
            </section>

            {/* Technologies & Skills */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-primary">TECHNOLOGIES & SKILLS</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2">AI & CV:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['TensorFlow', 'PyTorch', 'YOLO', 'OpenCV', 'NCNN', 'SAM', 'ML flow', 'AWS SageMaker', 'Object Detection & Tracking'].map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Edge & Infra:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Raspberry Pi', 'NVIDIA Jetson', 'Qualcomm', 'Docker', 'Kubernetes', 'CUDA', 'CI/CD', 'Git', 'GitHub Actions'].map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Data & Backend:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['FastAPI', 'Flask', 'REST APIs', 'MySQL', 'MongoDB', 'Redis', 'Looker', 'Power BI', 'Tableau', 'Metabase', 'Zoho', 'Streamlit'].map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Systems & Security:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['GCP', 'Azure', 'P2P Networking', 'Nebula VPN', 'Secure Client-Server Communication', 'Remote Device Orchestration'].map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Leadership:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Technical Ownership', 'People Management', 'Systems Thinking', 'Operational Execution', 'Ambiguity Handling'].map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Ashutosh Bhagwat. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
