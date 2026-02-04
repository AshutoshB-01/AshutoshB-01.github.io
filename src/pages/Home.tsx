/**
 * Home Page - Reimagined Creative Introduction
 * Author: Ashutosh Bhagwat
 *
 * A unique, out-of-the-box homepage that breaks traditional portfolio conventions.
 * Focuses on storytelling, curiosity, and interactive engagement.
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code2, Brain, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { setPageTitle, pageTitles } from '@/lib/pageTitle';

const typingPhrases = [
  "solving real-world problems...",
  "optimizing edge devices...",
  "deploying across continents...",
  "turning cameras into intelligence...",
  "building AI that scales..."
];

export default function Home() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setPageTitle(pageTitles.home);
  }, []);

  useEffect(() => {
    const phrase = typingPhrases[currentPhrase];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText === phrase) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentPhrase((prev) => (prev + 1) % typingPhrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? phrase.substring(0, displayedText.length - 1)
          : phrase.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhrase, isPaused]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Terminal Style */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-background to-orange-50 dark:from-orange-950/20 dark:via-background dark:to-orange-950/20 opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Terminal-style intro */}
            <div className="bg-card/80 backdrop-blur-md border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-2xl mb-8 animate-slide-up">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground ml-2 font-mono">~/ashutosh-bhagwat</span>
              </div>

              <div className="space-y-4 font-mono text-sm md:text-base">
                <div className="flex items-start gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-foreground/80">whoami</span>
                </div>
                <div className="pl-4 text-foreground/90">
                  <span className="gradient-text font-bold text-xl">Ashutosh Bhagwat</span>
                </div>

                <div className="flex items-start gap-2 mt-6">
                  <span className="text-primary">$</span>
                  <span className="text-foreground/80">cat current_status.txt</span>
                </div>
                <div className="pl-4 space-y-1 text-foreground/80">
                  <div>→ Senior AI Engineer & Team Lead</div>
                  <div>→ 4.7 years of production AI experience</div>
                  <div>→ 13,000+ edge devices | 11+ countries</div>
                </div>

                <div className="flex items-start gap-2 mt-6">
                  <span className="text-primary">$</span>
                  <div className="flex-1">
                    <span className="text-foreground/80">{displayedText}</span>
                    <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Unique value propositions - Card style */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="glass-card p-6 rounded-xl hover-lift glow-hover group cursor-default">
                <Brain className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Edge-First Mindset</h3>
                <p className="text-sm text-muted-foreground">Building AI that runs where it matters - on the edge, not just in the cloud</p>
              </div>

              <div className="glass-card p-6 rounded-xl hover-lift glow-hover group cursor-default">
                <Globe className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Global Scale</h3>
                <p className="text-sm text-muted-foreground">From Mumbai to Nigeria, building systems that work everywhere</p>
              </div>

              <div className="glass-card p-6 rounded-xl hover-lift glow-hover group cursor-default">
                <Zap className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Startup DNA</h3>
                <p className="text-sm text-muted-foreground">Grew with a team from 2 to 10+, intern to tech lead</p>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="glass-card p-8 rounded-2xl mb-8 border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-3">The Real Story</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Most AI engineers optimize for accuracy on benchmarks. I optimize for systems that work reliably
                    in challenging environments with intermittent internet. Most build for GPUs in datacenters. I build for
                    Raspberry Pis in ATM kiosks running 24/7 without maintenance.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    The journey from nursery to deploying AI across 11 countries wasn't about grades or certificates.
                    It was about learning that production AI is 10% model training and 90% everything else that textbooks don't teach.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="gradient-orange text-primary-foreground px-8 glow-hover">
                <Link to="/experience">
                  <Code2 className="mr-2 h-5 w-5" />
                  Explore My Journey
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 hover:bg-primary/10 hover:border-primary transition-all glow-hover">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Fun fact */}
            <p className="text-center mt-8 text-sm text-muted-foreground italic">
              💡 Fun fact: Still excited about every debug session — complexity is just opportunity in disguise
            </p>
          </div>
        </div>

        {/* Floating code snippets decoration */}
        <div className="absolute top-20 left-10 opacity-20 text-xs font-mono text-primary animate-float hidden lg:block">
          if (challenge.isHard) &#123;<br />
          &nbsp;&nbsp;solve();<br />
          &#125;
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 text-xs font-mono text-primary animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
          while (learning) &#123;<br />
          &nbsp;&nbsp;build++;<br />
          &#125;
        </div>
      </section>

      {/* Stats Section - Minimalist */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">
              By The <span className="gradient-text">Numbers</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">4.7+</div>
                <div className="text-sm text-muted-foreground">Years Building AI</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">13K+</div>
                <div className="text-sm text-muted-foreground">Edge Devices</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">11+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">10+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div>
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
