/**
 * Journey Page - Interactive Educational Timeline
 * Author: Ashutosh Bhagwat
 *
 * Displays educational journey from nursery to senior engineer
 * with stunning winding path visualization and hover effects.
 */

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { FloatingShapes } from '@/components/FloatingShapes';
import { educationMilestones, milestoneCategories } from '@/data/educationJourney';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SelectedMilestone {
  id: string;
  title: string;
  year: string;
  grade?: string;
  percentage?: number;
  image: string;
  achievements: string[];
  icon: string;
}

export default function Journey() {
  const [selectedMilestone, setSelectedMilestone] = useState<SelectedMilestone | null>(null);
  const [viewingCertificate, setViewingCertificate] = useState(false);
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Background */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/30 via-background/80 to-background dark:from-orange-900/10 dark:via-background/90 dark:to-background z-0" />
        <FloatingShapes />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
              The <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-1">
              From Senior AI Engineer back to the beginning - every milestone shaped who I am today.
              <br/>
              <span className="text-sm">Hover for details | Click for achievements | View certificates</span>
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Timeline path */}
          <div className="relative" ref={ref}>
            {/* Connecting winding path line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-orange-400 to-orange-600 dark:from-orange-400 dark:via-orange-500 dark:to-orange-700 transform -translate-x-1/2 rounded-full"
                 style={{
                   opacity: isVisible ? 1 : 0,
                   transition: 'opacity 0.8s ease-in-out'
                 }}
            />

            {/* Milestone nodes - Reversed timeline (Senior Engineer to Birth) */}
            {[...educationMilestones].reverse().map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const category = milestoneCategories[milestone.category];

              return (
                <div
                  key={milestone.id}
                  className={`relative mb-12 md:mb-16 ${
                    isLeft ? 'md:text-right' : 'md:text-left'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`flex items-center gap-8 ${
                    isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                  } flex-row`}>
                    {/* Content card */}
                    <div className={`flex-1 ${isLeft ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                      <div
                        className="glass-card p-6 rounded-xl cursor-pointer group hover-lift glow-hover transition-all duration-300"
                        onClick={() => setSelectedMilestone(milestone)}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                            {milestone.icon}
                          </span>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                              {milestone.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{milestone.year}</p>
                          </div>
                        </div>

                        {/* Grade/Percentage - shown on hover */}
                        <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100">
                          <div className="pt-3 border-t border-border/50 mt-3">
                            {milestone.grade && (
                              <p className="text-sm font-medium text-primary mb-2">
                                📊 Grade: {milestone.grade}
                                {milestone.percentage && ` (${milestone.percentage}%)`}
                              </p>
                            )}
                            <p className="text-xs text-muted-foreground">
                              Click to see achievements →
                            </p>
                          </div>
                        </div>

                        {/* Category badge */}
                        <Badge
                          className={`mt-3 bg-gradient-to-r ${category.color} text-white border-0`}
                          variant="secondary"
                        >
                          {category.label}
                        </Badge>
                      </div>
                    </div>

                    {/* Center node */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 -translate-x-1/2 z-10">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-2xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12 glow-hover border-4 border-background`}
                        onClick={() => setSelectedMilestone(milestone)}
                      >
                        {milestone.icon}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal for detailed view */}
      <Dialog open={!!selectedMilestone} onOpenChange={() => setSelectedMilestone(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedMilestone && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-2xl">
                  <span className="text-4xl">{selectedMilestone.icon}</span>
                  {selectedMilestone.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Image placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl mb-2 block">{selectedMilestone.icon}</span>
                    <p className="text-sm text-muted-foreground">Image placeholder</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Path: {selectedMilestone.image}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Year</p>
                    <p className="font-semibold text-lg">{selectedMilestone.year}</p>
                  </div>

                  {selectedMilestone.grade && (
                    <div className="glass-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Grade</p>
                      <p className="font-semibold text-lg text-primary">
                        {selectedMilestone.grade}
                        {selectedMilestone.percentage && ` (${selectedMilestone.percentage}%)`}
                      </p>
                    </div>
                  )}
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-3 text-lg">🏆 Achievements</h4>
                  <ul className="space-y-2">
                    {selectedMilestone.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certificate/Marksheet Button */}
                <div className="flex justify-center pt-4 border-t border-border">
                  <Button
                    className="gradient-orange text-primary-foreground glow-hover"
                    onClick={() => setViewingCertificate(true)}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Certificate/Marksheet
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Certificate/Document Viewer Modal */}
      <Dialog open={viewingCertificate} onOpenChange={setViewingCertificate}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedMilestone && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={() => setViewingCertificate(false)}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {selectedMilestone.title} - Certificate/Marksheet
                </h3>

                {/* Certificate image placeholder */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-lg flex items-center justify-center border-2 border-primary/20">
                  <div className="text-center p-8">
                    <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold mb-2">Certificate Placeholder</p>
                    <p className="text-sm text-muted-foreground mb-1">
                      Add your certificate/marksheet image here
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {selectedMilestone.image.replace('.jpg', '-certificate.jpg')}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center mt-4">
                  Place certificate images in: <code className="text-xs bg-secondary px-2 py-1 rounded">public/images/education/</code>
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Ashutosh Bhagwat. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
