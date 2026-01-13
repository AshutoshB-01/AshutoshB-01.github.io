/**
 * Project Detail Page
 * Author: Ashutosh Bhagwat
 *
 * Displays comprehensive project information with public and password-protected sections.
 */

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Lock, Unlock, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { projects } from '@/data/projectsData';
import { verifyPassword } from '@/lib/auth';

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button className="gradient-orange text-primary-foreground">
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyPassword(password)) {
      setIsUnlocked(true);
      setError('');
      setPassword('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 gradient-warm opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back button */}
          <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Hero image placeholder */}
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-orange-200 to-orange-400 dark:from-orange-800 dark:to-orange-900 rounded-2xl mb-8 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-foreground/60 mb-2">Project Hero Image</p>
              <p className="text-xs text-foreground/40">{project.images.hero}</p>
            </div>
          </div>

          {/* Title and description */}
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white border-0">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.tagline}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.demoUrl && (
                <Button size="lg" className="gradient-orange text-primary-foreground glow-hover" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          {/* Problem Statement */}
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">🎯</span> Problem Statement
            </h2>
            <p className="text-foreground/80 leading-relaxed">{project.publicContent.problem}</p>
          </div>

          {/* Solution */}
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">💡</span> Solution
            </h2>
            <p className="text-foreground/80 leading-relaxed">{project.publicContent.solution}</p>
          </div>

          {/* Tech Stack */}
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">🛠️</span> Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {project.publicContent.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  <span className="text-3xl">{tech.icon}</span>
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">✨</span> Key Features
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.publicContent.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">📅</span> Timeline
            </h2>
            <p className="text-lg font-medium text-primary">{project.publicContent.timeline}</p>
          </div>

          {/* Protected Content Section */}
          <div className="glass-card p-8 rounded-xl border-2 border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              {isUnlocked ? (
                <Unlock className="h-8 w-8 text-green-500" />
              ) : (
                <Lock className="h-8 w-8 text-primary" />
              )}
              <h2 className="text-2xl font-bold">
                Technical Deep Dive {isUnlocked && <span className="text-green-500">- Unlocked</span>}
              </h2>
            </div>

            {!isUnlocked ? (
              <div>
                <p className="text-muted-foreground mb-6">
                  This section contains confidential technical details including architecture diagrams,
                  specific implementation challenges, metrics, and lessons learned. Enter the password to access.
                </p>

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="max-w-md"
                    />
                    {error && <p className="text-destructive text-sm mt-2">{error}</p>}
                  </div>
                  <Button type="submit" className="gradient-orange text-primary-foreground glow-hover">
                    <Unlock className="mr-2 h-4 w-4" />
                    Unlock Content
                  </Button>
                </form>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Architecture */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">🏗️ Architecture</h3>
                  <p className="text-foreground/80 leading-relaxed">{project.protectedContent.architecture}</p>
                </div>

                {/* Technical Challenges */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">⚡ Technical Challenges</h3>
                  <ul className="space-y-2">
                    {project.protectedContent.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1">▸</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Details */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">🔬 Technical Implementation</h3>
                  <ul className="space-y-2">
                    {project.protectedContent.technicalDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1">▸</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">📊 Performance Metrics</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.protectedContent.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-secondary/30 p-3 rounded-lg">
                        <p className="text-sm text-foreground/80">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lessons Learned */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">💡 Lessons Learned</h3>
                  <ul className="space-y-2">
                    {project.protectedContent.lessonsLearned.map((lesson, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1">▸</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Back to projects */}
          <div className="text-center pt-8">
            <Link to="/projects">
              <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:border-primary transition-all">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View More Projects
              </Button>
            </Link>
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
