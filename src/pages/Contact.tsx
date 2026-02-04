/**
 * Contact Page - Simplified & Focused
 * Author: Ashutosh Bhagwat
 */

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar, Linkedin, Github, MessageSquare, Coffee, Briefcase, Users, Lightbulb, Code2 } from 'lucide-react';
import { setPageTitle, pageTitles } from '@/lib/pageTitle';

const socialLinks = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    handle: '@ashutosh-bhagwat',
    href: 'https://linkedin.com/in/ashutosh-bhagwat',
    color: 'hover:text-blue-600'
  },
  {
    icon: Github,
    name: 'GitHub',
    handle: '@AshutoshB-01',
    href: 'https://github.com/AshutoshB-01',
    color: 'hover:text-purple-600'
  },
  {
    icon: MessageSquare,
    name: 'Twitter',
    handle: '@ashutosh_ai',
    href: 'https://twitter.com',
    color: 'hover:text-sky-500'
  },
  {
    icon: Coffee,
    name: 'Virtual Coffee',
    handle: 'Let\'s chat',
    href: 'https://cal.com/ashutosh-bhagwat-gxcjxv/30min',
    color: 'hover:text-amber-600'
  }
];

const openToItems = [
  {
    icon: Briefcase,
    title: 'Full-Time Opportunities',
    description: 'Senior AI/ML roles, technical leadership positions',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Consulting & Advisory',
    description: 'Edge AI strategy, system architecture, team scaling',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Lightbulb,
    title: 'Collaborative Projects',
    description: 'Open-source contributions, research partnerships',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Code2,
    title: 'Technical Discussions',
    description: 'Computer Vision, edge computing, ML optimization',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Coffee,
    title: 'Coffee Chats ☕',
    description: 'Life, tech, interesting problems, or your favorite ML paper',
    color: 'from-amber-500 to-yellow-500'
  }
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    setPageTitle(pageTitles.contact);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('mr.ashutoshbhagwat@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-background to-background dark:from-orange-950/20 dark:via-background dark:to-background" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Let's <span className="gradient-text">Build Together</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up stagger-1">
              Whether it's a groundbreaking AI project, technical consultation,<br className="hidden md:block" />
              or just a chat about edge computing over virtual coffee
            </p>
          </div>

          {/* Main CTA - Schedule a Call */}
          <div className="max-w-2xl mx-auto mb-20">
            <a
              href="https://cal.com/ashutosh-bhagwat-gxcjxv/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-12 rounded-2xl hover-lift group cursor-pointer block text-center ring-2 ring-primary/50 glow-hover transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto glow-hover shadow-lg">
                <Calendar className="h-10 w-10 text-white" />
              </div>

              <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                Schedule a Call
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Book a 30-minute conversation to discuss your project, explore collaboration opportunities, or just connect
              </p>
              <Button
                size="lg"
                className="gradient-orange text-primary-foreground px-8 glow-hover"
              >
                Book on Cal.com →
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="max-w-4xl mx-auto mb-20">
            <h3 className="text-2xl font-bold text-center mb-8">
              Find Me <span className="gradient-text">Online</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 rounded-xl hover-lift glow-hover group text-center animate-slide-up transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <social.icon className={`h-12 w-12 mx-auto mb-3 text-foreground/70 group-hover:scale-110 transition-all ${social.color}`} />
                  <h4 className="font-bold mb-1 text-sm">{social.name}</h4>
                  <p className="text-xs text-muted-foreground">{social.handle}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Email Copy Section */}
          <div className="max-w-2xl mx-auto mb-20">
            <div className="glass-card p-8 rounded-2xl border-2 border-primary/20 glow-hover">
              <h3 className="text-xl font-bold text-center mb-4">Prefer the Traditional Way?</h3>
              <div className="flex items-center justify-center gap-3 mb-4">
                <code className="px-4 py-2 bg-secondary rounded-lg text-primary font-mono text-sm">
                  mr.ashutoshbhagwat@gmail.com
                </code>
                <Button
                  onClick={copyEmail}
                  size="sm"
                  className="gradient-orange text-primary-foreground glow-hover"
                >
                  {copiedEmail ? '✓ Copied!' : 'Copy'}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                I typically respond within 24 hours
              </p>
            </div>
          </div>

          {/* I'm Open To Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              I'm <span className="gradient-text">Open To</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Here's what I'm currently exploring and excited about
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openToItems.map((item, idx) => (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-6 group hover-lift glow-hover transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-hover shadow-lg`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
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
