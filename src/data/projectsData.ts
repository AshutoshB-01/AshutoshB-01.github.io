/**
 * Projects Data
 * Author: Ashutosh Bhagwat
 *
 * Comprehensive project information with public and protected content.
 * Protected content requires password authentication.
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  tags: string[];
  category: string;
  stats: {
    label: string;
    value: string;
  }[];
  demoUrl?: string;
  publicContent: {
    problem: string;
    solution: string;
    techStack: {
      name: string;
      icon: string;
    }[];
    features: string[];
    timeline: string;
  };
  protectedContent: {
    architecture: string;
    challenges: string[];
    technicalDetails: string[];
    metrics: string[];
    lessonsLearned: string[];
  };
  images: {
    hero: string;
    gallery: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'edge-ai-analytics',
    title: 'Edge AI Analytics Platform',
    subtitle: 'Computer Vision at Scale',
    tagline: 'Real-time intelligence across 13,000+ distributed edge devices',
    description: 'Enterprise-grade Computer Vision platform deployed across 13,000+ edge devices supporting 10,000+ ATMs and 2,000+ retail stores. Delivers real-time analytics for compliance monitoring, customer behavior analysis, and operational intelligence.',
    tags: ['YOLO', 'OpenCV', 'Edge Computing', 'Raspberry Pi', 'NVIDIA Jetson', 'Python', 'Docker'],
    category: 'Computer Vision',
    stats: [
      { label: 'Edge Devices', value: '13,000+' },
      { label: 'Countries', value: '11+' },
      { label: 'ATMs Monitored', value: '10,000+' },
      { label: 'Retail Stores', value: '2,000+' }
    ],
    demoUrl: 'https://youtube.com/demo-placeholder',
    publicContent: {
      problem: 'Enterprise clients needed real-time analytics and compliance monitoring across geographically distributed locations (ATMs and retail stores) without relying on expensive cloud infrastructure or high-bandwidth internet connections.',
      solution: 'Built a distributed edge AI platform that processes video streams locally on resource-constrained devices, extracting actionable insights and transmitting only metadata to central dashboards. The system operates reliably even with intermittent connectivity.',
      techStack: [
        { name: 'YOLO', icon: '🎯' },
        { name: 'OpenCV', icon: '📷' },
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'Raspberry Pi', icon: '🥧' },
        { name: 'NVIDIA Jetson', icon: '⚡' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Python', icon: '🐍' },
        { name: 'FastAPI', icon: '🚀' },
        { name: 'MySQL', icon: '🗄️' },
        { name: 'Redis', icon: '⚡' }
      ],
      features: [
        'Real-time object detection and tracking',
        'Compliance monitoring (mask detection, queue management)',
        'Customer behavior analytics (foot traffic, dwell time)',
        'Tamper detection and security alerts',
        'Bandwidth-efficient edge processing',
        'Fault-tolerant operation with offline capability',
        'Central dashboard for multi-location monitoring',
        'Automated alerting system'
      ],
      timeline: 'Jun 2021 - Present (Ongoing)'
    },
    protectedContent: {
      architecture: 'Multi-tier architecture with edge processing layer (Raspberry Pi/Jetson), secure data pipeline (MQTT/REST), aggregation layer (Redis), database layer (MySQL/MongoDB), and visualization layer (Metabase/custom dashboards). Nebula VPN for secure P2P communication.',
      challenges: [
        'Optimizing models to run at 40 FPS on 2GB RAM devices',
        'Handling intermittent network connectivity across 11+ countries',
        'Managing firmware updates for 13K+ devices remotely',
        'Ensuring data privacy and security across regions',
        'Scaling monitoring infrastructure for real-time alerts'
      ],
      technicalDetails: [
        'Custom YOLO model quantization achieving 75% compression with <2% accuracy loss',
        'Inference latency reduced from 120ms to 35ms through TensorRT optimization',
        'Implemented differential sync to reduce bandwidth by 90% vs full frame transmission',
        'Built automated recovery system with 99.8% uptime across deployments',
        'Database sharding strategy supporting 500K+ daily transactions'
      ],
      metrics: [
        'Average FPS: 40 on Raspberry Pi 4 (2GB RAM)',
        'Model size: 12MB (quantized from 48MB)',
        'Inference time: 35ms per frame',
        'Uptime: 99.8% across all devices',
        'Data transmission: <100KB per hour per device',
        'Alert latency: <5 seconds from detection to dashboard'
      ],
      lessonsLearned: [
        'Edge-first architecture is critical for reliability in distributed systems',
        'Model optimization should prioritize inference speed over marginal accuracy gains',
        'Automated monitoring and recovery systems are non-negotiable at scale',
        'Regional compliance requirements significantly impact architecture decisions',
        'Building for offline-first operation prevents costly downtime'
      ]
    },
    images: {
      hero: '/images/projects/edge-ai-hero.jpg',
      gallery: [
        '/images/projects/edge-ai-1.jpg',
        '/images/projects/edge-ai-2.jpg',
        '/images/projects/edge-ai-3.jpg'
      ]
    }
  },
  {
    id: 'tarsyer-vpn',
    title: 'Tarsyer VPN',
    subtitle: 'P2P Orchestration Platform',
    tagline: 'Secure, mesh-based connectivity for distributed edge infrastructure',
    description: 'Nebula-based P2P orchestration platform enabling secure remote access and bandwidth-efficient communication for 13,000+ distributed devices. Reduced infrastructure costs by ~$3K/year through intelligent peer-to-peer networking.',
    tags: ['Nebula', 'P2P Networking', 'Security', 'DevOps', 'Go', 'Infrastructure'],
    category: 'Infrastructure',
    stats: [
      { label: 'Connected Devices', value: '13,000+' },
      { label: 'Cost Savings', value: '$3K+/year' },
      { label: 'Bandwidth Reduction', value: '85%' },
      { label: 'Deployment Time', value: '<5 min' }
    ],
    publicContent: {
      problem: 'Managing and remotely accessing 13,000+ geographically distributed edge devices through traditional VPN solutions resulted in high costs, bandwidth bottlenecks, and complex network configuration.',
      solution: 'Deployed Nebula-based mesh VPN creating direct P2P connections between devices and management systems. Eliminated central VPN servers, reduced bandwidth usage, and enabled secure direct access to any device.',
      techStack: [
        { name: 'Nebula VPN', icon: '🌐' },
        { name: 'Go', icon: '🔵' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Ansible', icon: '⚙️' },
        { name: 'Prometheus', icon: '📊' },
        { name: 'Grafana', icon: '📈' }
      ],
      features: [
        'Zero-trust mesh networking',
        'Automated certificate management',
        'One-click device enrollment',
        'Bandwidth-efficient P2P routing',
        'Real-time connectivity monitoring',
        'Secure remote shell access',
        'Multi-region support',
        'Automated failover'
      ],
      timeline: 'Sep 2022 - Mar 2023'
    },
    protectedContent: {
      architecture: 'Lighthouse servers for NAT traversal, certificate authority for PKI, automated enrollment pipeline, monitoring stack (Prometheus + Grafana), and custom orchestration layer for fleet management.',
      challenges: [
        'NAT traversal across diverse network topologies',
        'Certificate rotation at scale without downtime',
        'Handling asymmetric connectivity (some devices behind strict firewalls)',
        'Monitoring connection health across 13K+ peers',
        'Graceful handling of lighthouse server failures'
      ],
      technicalDetails: [
        'Custom enrollment API reducing device onboarding from 30min to <5min',
        'Automated certificate rotation with zero-downtime rollout strategy',
        'Implemented UDP hole-punching success rate monitoring (>95% success)',
        'Built health check system detecting connectivity issues within 60 seconds',
        'Multi-lighthouse architecture for 99.95% availability'
      ],
      metrics: [
        'Bandwidth savings: 85% vs traditional VPN',
        'Infrastructure cost reduction: ~$3,000/year',
        'Connection establishment time: <2 seconds',
        'Lighthouse uptime: 99.95%',
        'Average peer latency: <50ms (same region)',
        'Certificate rotation completion: <24 hours across fleet'
      ],
      lessonsLearned: [
        'P2P mesh networking scales better than hub-and-spoke for distributed systems',
        'Automated certificate management is essential for security at scale',
        'Monitoring must be built-in from day one',
        'Graceful degradation is more valuable than perfect availability',
        'Documentation for troubleshooting saves 10x time vs perfect architecture'
      ]
    },
    images: {
      hero: '/images/projects/vpn-hero.jpg',
      gallery: [
        '/images/projects/vpn-1.jpg',
        '/images/projects/vpn-2.jpg'
      ]
    }
  },
  {
    id: 'high-speed-ocr',
    title: 'High-Speed OCR System',
    subtitle: 'Industrial Computer Vision',
    tagline: 'Real-time text extraction from high-speed conveyors and machinery',
    description: 'Production-grade OCR system for industrial environments operating on high-speed conveyor belts and machine odometers. Achieves high accuracy under variable lighting, motion blur, and harsh conditions.',
    tags: ['OCR', 'TensorFlow', 'Computer Vision', 'Industrial IoT', 'Real-time Processing'],
    category: 'Computer Vision',
    stats: [
      { label: 'Processing Speed', value: '60 FPS' },
      { label: 'Accuracy', value: '98.5%' },
      { label: 'Latency', value: '<50ms' },
      { label: 'Deployments', value: '15+' }
    ],
    demoUrl: 'https://youtube.com/demo-ocr',
    publicContent: {
      problem: 'Industrial clients needed automated reading of serial numbers, batch codes, and odometer values from fast-moving products and machinery under challenging lighting and environmental conditions.',
      solution: 'Developed custom OCR pipeline combining motion compensation, adaptive preprocessing, and optimized text recognition models. System handles speeds up to 60 FPS with high accuracy even in poor lighting.',
      techStack: [
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'OpenCV', icon: '📷' },
        { name: 'Python', icon: '🐍' },
        { name: 'C++', icon: '⚙️' },
        { name: 'ONNX Runtime', icon: '🚀' },
        { name: 'Industrial Cameras', icon: '📸' }
      ],
      features: [
        'Real-time text detection and recognition',
        'Motion blur compensation',
        'Adaptive lighting correction',
        'Multi-font recognition',
        'Quality scoring and confidence thresholds',
        'Integration with industrial PLCs',
        'Historical data logging',
        'Reject mechanism triggering'
      ],
      timeline: 'Jan 2023 - Jun 2023'
    },
    protectedContent: {
      architecture: 'Camera trigger system synchronized with conveyor motion, preprocessing pipeline (motion deblur, contrast enhancement), CRNN-based text detection, attention-based recognition model, post-processing validation, and PLC integration layer.',
      challenges: [
        'Handling motion blur at high conveyor speeds',
        'Variable lighting from factory floor environments',
        'Text at different scales and orientations',
        'Real-time processing requirements (<50ms)',
        'Integration with legacy industrial equipment'
      ],
      technicalDetails: [
        'Custom motion deblur algorithm using optical flow estimation',
        'Adaptive histogram equalization with local contrast enhancement',
        'Model quantization achieving 3x speedup with <1% accuracy loss',
        'Multi-scale text detection supporting 4mm to 40mm characters',
        'Modbus/TCP integration for PLC communication'
      ],
      metrics: [
        'Text recognition accuracy: 98.5% in production',
        'Processing latency: 42ms average (including capture)',
        'Throughput: 60 products/minute',
        'False positive rate: <0.5%',
        'Model inference time: 18ms',
        'System uptime: 99.7% in 24/7 operation'
      ],
      lessonsLearned: [
        'Domain-specific preprocessing is more valuable than larger models',
        'Industrial deployments require extensive validation and safety mechanisms',
        'Integration with legacy systems requires flexible communication protocols',
        'Lighting control is as important as algorithm optimization',
        'Real-world accuracy differs significantly from benchmark datasets'
      ]
    },
    images: {
      hero: '/images/projects/ocr-hero.jpg',
      gallery: [
        '/images/projects/ocr-1.jpg',
        '/images/projects/ocr-2.jpg',
        '/images/projects/ocr-3.jpg'
      ]
    }
  }
];

export const projectCategories = ['All', 'Computer Vision', 'Infrastructure', 'Industrial IoT', 'Automation'];
