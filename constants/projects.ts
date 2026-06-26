export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "featured" | "production";

  company?: string;

  overview: string;
  problem: string;
  solution: string;

  impact: string[];
  technologies: string[];
  features: string[];

  architecture?: string[];
  challenges?: string[];
  learned?: string[];

  github?: string;
  live?: string;

  playStore?: string;
  appStore?: string;
}

export const PROJECTS: Project[] = [
 {
  slug: "brightspeed",
  title: "Brightspeed",
  subtitle: "Enterprise Telecom Platform",
  category: "featured",

  company: "Revature",

  overview:
    "Associate Developer working on Brightspeed's Account Management application used by customers across the United States. Responsible for maintaining production features, modernizing the codebase and delivering new functionality.",

  problem:
    "The application required a major React Native migration while maintaining production stability for hundreds of thousands of users.",

  solution:
    "Migrated React Native from 0.68 to 0.76.6, redesigned more than twenty production screens, integrated over forty REST APIs, optimized performance, reduced crashes and improved overall application stability.",

  impact: [
    "250K+ Downloads",
    "40+ APIs",
    "20+ Screens",
    "Production App",
  ],

  technologies: [
    "React Native",
    "TypeScript",
    "Redux Toolkit",
    "React Query",
    "React Navigation",
    "Reanimated",
    "CodePush",
  ],

  features: [
    "Authentication",
    "Account Management",
    "Payments",
    "Push Notifications",
    "Deep Linking",
    "File Uploads",
    "Camera",
    "Offline Storage",
  ],

  architecture: [
    "React Native",
    "Redux Toolkit",
    "REST APIs",
    "Native Modules",
  ],

  challenges: [
    "React Native 0.68 → 0.76.6 Migration",
    "Crash Reduction",
    "Performance Optimization",
    "Legacy Code Refactoring",
  ],

  learned: [
    "Enterprise Development",
    "Large Scale Codebase",
    "Release Management",
    "Performance Profiling",
  ],

  playStore:
    "https://play.google.com/store/apps/details?id=com.brightspeed.my",

  appStore:
    "https://apps.apple.com/us/app/brightspeed/id1660769828",
},

 {
  slug: "bumpdaily",
  title: "BumpDaily",
  subtitle: "Social Platform",
  category: "featured",

  overview:
    "Designed and built an entire social platform independently using React Native, Hono, Cloudflare Workers and PostgreSQL. The backend runs completely on Cloudflare's edge infrastructure.",

  problem:
    "Build a scalable social media platform while keeping infrastructure costs extremely low.",

  solution:
    "Designed both frontend and backend from scratch. Built authentication, feeds, media uploads, notifications and scalable REST APIs using Cloudflare Workers.",

  impact: [
    "250K+ Downloads",
    "Android",
    "iOS",
    "Cloudflare Edge",
  ],

  technologies: [
    "React Native",
    "TypeScript",
    "Hono",
    "Cloudflare Workers",
    "Cloudflare R2",
    "PostgreSQL",
  ],

  features: [
    "Authentication",
    "Feeds",
    "Profiles",
    "Comments",
    "Notifications",
    "Media Upload",
    "Search",
  ],

  architecture: [
    "React Native",
    "Workers",
    "Hono",
    "PostgreSQL",
    "Cloudflare R2",
  ],

  challenges: [
    "Edge Architecture",
    "Media Optimization",
    "Scalable APIs",
  ],

  learned: [
    "Cloudflare Ecosystem",
    "Backend Architecture",
    "Edge Computing",
  ],

  github: "https://github.com/PraveenKb777",

  playStore: "YOUR_PLAYSTORE_LINK",

  appStore: "YOUR_APPSTORE_LINK",
},

  {
    slug: "procurement",
    title: "Procurement",
    subtitle: "Construction ERP",
    category: "production",

    company: "CENDROL",

    overview:
      "Built the complete Version 2 Procurement application from scratch for construction site engineers to manage procurement, inventory and material requests.",

    problem:
      "Site engineers needed a centralized mobile solution to manage materials, stock requests and project information without relying on manual processes.",

    solution:
      "Designed and developed the entire application with authentication, inventory management, approvals, notifications, camera integration, offline support and document uploads.",

    impact: ["Play Store", "Production", "Built V2", "From Scratch"],

    technologies: ["React Native", "Node.js", "Express", "MongoDB"],

    features: [
      "Authentication",
      "Inventory Management",
      "Material Requests",
      "Camera",
      "File Uploads",
      "Push Notifications",
      "Offline Storage",
      "Role Based Access",
    ],

    architecture: ["React Native", "REST APIs", "MongoDB"],

    challenges: ["Offline Data Handling", "Large Forms", "Sync Management"],

    learned: [
      "Enterprise Mobile Development",
      "Offline Architecture",
      "Construction Workflow",
    ],
  },

  {
    slug: "partners",
    title: "Partners",
    subtitle: "Real Estate Platform",
    category: "production",

    company: "CENDROL",

    overview:
      "Built the complete Version 2 Partner application from scratch for real estate partners to register customer leads and earn commissions.",

    problem:
      "The sales team required a dedicated mobile platform for collecting customer details, managing property leads and tracking commission workflows.",

    solution:
      "Built a production-ready application supporting authentication, customer onboarding, lead submission, maps, notifications, document uploads and commission management.",

    impact: ["Play Store", "Production", "Built V2", "From Scratch"],

    technologies: ["React Native", "Node.js", "Express", "MongoDB"],

    features: [
      "Authentication",
      "Customer Management",
      "Maps",
      "Camera",
      "Document Upload",
      "Push Notifications",
      "Commission Tracking",
      "Lead Management",
    ],

    architecture: ["React Native", "REST APIs", "MongoDB"],

    challenges: ["Large Dynamic Forms", "Media Uploads", "Offline Support"],

    learned: [
      "Business Workflow Design",
      "Production Deployment",
      "Scalable Forms",
    ],
  },
];
