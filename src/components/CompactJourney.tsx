/**
 * Compact Journey Component
 * Author: Ashutosh Bhagwat
 *
 * Compact one-page journey visualization in snake/ladder/forest theme
 * Everything visible at once - hover highlights, click for details
 */

import { useState } from 'react';
import { educationMilestones } from '@/data/educationJourney';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, X } from 'lucide-react';

export function CompactJourney() {
  const [selectedMilestone, setSelectedMilestone] = useState<typeof educationMilestones[0] | null>(null);
  const [viewingCertificate, setViewingCertificate] = useState(false);

  // Reverse the array so it goes from Senior Engineer → Nursery
  const reversedMilestones = [...educationMilestones].reverse();

  // Create a snake-like path layout
  const getPositionClass = (index: number) => {
    const row = Math.floor(index / 6);
    const col = index % 6;
    const isReversedRow = row % 2 === 1;
    const actualCol = isReversedRow ? 5 - col : col;

    return `row-[${row + 1}] col-[${actualCol + 1}]`;
  };

  const categoryColors = {
    primary: 'from-blue-500 to-cyan-500',
    secondary: 'from-green-500 to-emerald-500',
    'higher-secondary': 'from-purple-500 to-pink-500',
    college: 'from-orange-500 to-red-500',
    professional: 'from-yellow-500 to-amber-500'
  };

  return (
    <>
      <div className="relative">
        {/* Journey Grid - Snake pattern */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-7xl mx-auto">
          {reversedMilestones.map((milestone, idx) => {
            return (
              <div
                key={milestone.id}
                onClick={() => setSelectedMilestone(milestone)}
                className="glass-card rounded-xl p-4 cursor-pointer group hover-lift glow-hover transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${idx * 30}ms` }}
              >
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${categoryColors[milestone.category]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform mx-auto glow-hover shadow-lg`}>
                  <span className="text-2xl">{milestone.icon}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xs text-center mb-1 group-hover:text-primary transition-colors line-clamp-2 min-h-[2rem]">
                  {milestone.title}
                </h3>

                {/* Year */}
                <p className="text-xs text-center text-muted-foreground">
                  {milestone.year}
                </p>

                {/* Grade/Percentage badge if available */}
                {milestone.percentage && (
                  <div className="flex justify-center mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {milestone.percentage}%
                    </Badge>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            { category: 'primary', label: 'Primary', color: 'from-blue-500 to-cyan-500' },
            { category: 'secondary', label: 'Secondary', color: 'from-green-500 to-emerald-500' },
            { category: 'higher-secondary', label: 'Higher Sec', color: 'from-purple-500 to-pink-500' },
            { category: 'college', label: 'Engineering', color: 'from-orange-500 to-red-500' },
            { category: 'professional', label: 'Professional', color: 'from-yellow-500 to-amber-500' }
          ].map((cat) => (
            <div key={cat.category} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded bg-gradient-to-br ${cat.color}`} />
              <span className="text-xs text-muted-foreground">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal - Same as Journey page */}
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
    </>
  );
}
