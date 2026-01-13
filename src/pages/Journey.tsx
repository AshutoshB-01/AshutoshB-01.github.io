/**
 * Journey Memory Lane - Timeline Visualization
 * Author: Ashutosh Bhagwat
 *
 * Inspired by interactive timeline design with background photos,
 * vertical scrolling timeline showing educational and professional milestones.
 */

import { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { FileText, X, ChevronDown } from 'lucide-react';
import { educationMilestones } from '@/data/educationJourney';

export default function Journey() {
  const [selectedMilestone, setSelectedMilestone] = useState<typeof educationMilestones[0] | null>(null);
  const [viewingCertificate, setViewingCertificate] = useState(false);
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const reversedMilestones = [...educationMilestones].reverse();

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const timelineTop = timelineRef.current.offsetTop;

      reversedMilestones.forEach((milestone) => {
        const element = document.getElementById(`milestone-${milestone.id}`);
        if (element) {
          const elementTop = element.offsetTop + timelineTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveYear(milestone.year);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/40 via-background/60 to-background dark:from-orange-900/20 dark:via-background/80 dark:to-background" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">Memory Lane</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up stagger-1">
            From Senior Engineer to First Steps
          </p>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8 animate-slide-up stagger-2">
            Every milestone, every achievement, every lesson learned.<br/>
            Scroll to explore the journey that shaped who I am today.
          </p>

          <Button
            onClick={scrollToNext}
            variant="outline"
            size="lg"
            className="animate-slide-up stagger-3 hover:bg-primary/10 hover:border-primary glow-hover"
          >
            <ChevronDown className="mr-2 h-5 w-5 animate-bounce" />
            Start the Journey
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="relative">
        {/* Year indicator - Fixed on scroll */}
        <div className="fixed top-24 right-8 z-40 hidden lg:block">
          <div className="glass-card px-6 py-3 rounded-full border-2 border-primary/30">
            <span className="text-4xl font-bold gradient-text">
              {activeYear || reversedMilestones[0]?.year.split('-')[0]}
            </span>
          </div>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 hidden md:block" />

          {/* Milestones */}
          {reversedMilestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={milestone.id}
                id={`milestone-${milestone.id}`}
                className="relative min-h-screen flex items-center py-20"
              >
                {/* Background image area with overlay */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-background/90 dark:from-orange-950/30 dark:to-background/95" />
                  {/* Placeholder for background photo */}
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-orange-200 to-orange-400 dark:from-orange-800 dark:to-orange-950" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Card */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-center`}>
                      <div className="inline-block">
                        <div className="glass-card p-8 md:p-12 rounded-2xl border-2 border-primary/20 hover-lift group cursor-pointer max-w-2xl"
                             onClick={() => setSelectedMilestone(milestone)}>
                          <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''} justify-center md:justify-start`}>
                            <span className="text-6xl group-hover:scale-110 transition-transform">
                              {milestone.icon}
                            </span>
                            <div>
                              <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {milestone.title}
                              </h3>
                              <p className="text-primary font-semibold text-lg">{milestone.year}</p>
                            </div>
                          </div>

                          {milestone.grade && (
                            <div className="mb-4">
                              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
                                📊 {milestone.grade} {milestone.percentage && `(${milestone.percentage}%)`}
                              </span>
                            </div>
                          )}

                          <div className="space-y-2 mb-6">
                            {milestone.achievements.slice(0, 2).map((achievement, idx) => (
                              <p key={idx} className="text-foreground/80 text-sm">
                                ▸ {achievement}
                              </p>
                            ))}
                            {milestone.achievements.length > 2 && (
                              <p className="text-primary text-sm font-medium">
                                +{milestone.achievements.length - 2} more achievements
                              </p>
                            )}
                          </div>

                          <Button
                            variant="outline"
                            className="hover:bg-primary/10 hover:border-primary glow-hover"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Center Timeline Node */}
                    <div className="hidden md:flex items-center justify-center w-24 shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-3xl shadow-2xl border-4 border-background hover:scale-125 transition-transform cursor-pointer glow-primary"
                           onClick={() => setSelectedMilestone(milestone)}>
                        {milestone.icon}
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* End marker */}
        <div className="relative py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="glass-card inline-block px-12 py-8 rounded-2xl">
              <p className="text-2xl font-bold gradient-text">The Journey Continues...</p>
              <p className="text-muted-foreground mt-2">And the best is yet to come</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <Dialog open={!!selectedMilestone && !viewingCertificate} onOpenChange={() => setSelectedMilestone(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedMilestone && (
            <>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl">{selectedMilestone.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedMilestone.title}</h2>
                    <p className="text-primary font-semibold text-lg">{selectedMilestone.year}</p>
                  </div>
                </div>

                {/* Milestone Photo Placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-xl flex items-center justify-center border-2 border-primary/20">
                  <div className="text-center p-8">
                    <span className="text-6xl mb-2 block">{selectedMilestone.icon}</span>
                    <p className="text-sm text-muted-foreground">Add your photo/memory here</p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                      {selectedMilestone.image}
                    </p>
                  </div>
                </div>

                {selectedMilestone.grade && (
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Marks/Grades</p>
                    <p className="font-bold text-2xl text-primary">
                      {selectedMilestone.grade}
                      {selectedMilestone.percentage && ` (${selectedMilestone.percentage}%)`}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-lg mb-3">🏆 Achievements & Highlights</h4>
                  <ul className="space-y-2">
                    {selectedMilestone.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button
                    className="flex-1 gradient-orange text-primary-foreground glow-hover"
                    onClick={() => setViewingCertificate(true)}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Certificate Viewer */}
      <Dialog open={viewingCertificate} onOpenChange={setViewingCertificate}>
        <DialogContent className="max-w-5xl max-h-[95vh] p-0">
          {selectedMilestone && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10 bg-background/90 backdrop-blur-sm"
                onClick={() => setViewingCertificate(false)}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  {selectedMilestone.title} - Certificate/Marksheet
                </h3>

                <div className="w-full aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-xl flex items-center justify-center border-2 border-primary/20">
                  <div className="text-center p-8">
                    <FileText className="h-20 w-20 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold mb-2">Certificate Placeholder</p>
                    <p className="text-sm text-muted-foreground mb-1">
                      Add certificate/marksheet image here
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {selectedMilestone.image.replace('.jpg', '-certificate.jpg')}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center mt-4">
                  Place images in: <code className="bg-secondary px-2 py-1 rounded">public/images/education/</code>
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
