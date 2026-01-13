/**
 * Projects Page - Portfolio Showcase
 * Author: Ashutosh Bhagwat
 */

import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FloatingShapes } from '@/components/FloatingShapes';
import { projects } from '@/data/projectsData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group glass-card rounded-xl overflow-hidden hover-lift glow-hover ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-2 bg-gradient-to-r from-primary to-accent" />

      <div className="p-6">
        <Badge className="mb-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white border-0">
          {project.category}
        </Badge>
        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3">{project.subtitle}</p>
        <p className="text-foreground/80 text-sm mb-4 line-clamp-3">{project.tagline}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.tags.length - 4} more
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            asChild
            className="flex-1 gradient-orange text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Link to={`/projects/${project.id}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {project.demoUrl && (
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-primary/10 hover:border-primary transition-all"
              asChild
            >
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-20 relative overflow-hidden">
        <FloatingShapes />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Production-grade AI systems deployed across multiple continents and industries.
              Click "View Details" to explore each project in depth.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 100} />
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              🔒 Each project includes password-protected technical deep dives with architecture details,
              metrics, and lessons learned
            </p>
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
