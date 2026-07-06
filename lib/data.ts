export const profile = {
  name: "Paolo Ignacio",
  title: "Backend & AI Engineer",
  intro:
    "Recent BS Information Technology graduate with experience in backend development and AI-powered applications. Skilled in Python, FastAPI, Node.js, Docker, and vector databases, with hands-on experience building scalable APIs, RAG systems, and distributed backend services.",
  location: "Pangasinan, Philippines",
  email: "paoloignacio022@gmail.com",
  github: "https://github.com/paolo-ignacio",
  linkedin: "https://www.linkedin.com/in/paolo-ignacio-6108a7267/",
};

export const about = {
  body: "I am passionate about backend engineering, AI-powered systems, and building scalable applications that solve real-world problems. My interests include Retrieval-Augmented Generation (RAG), distributed systems, API development, OCR processing, and AI integration. I enjoy designing production-ready systems and continuously learning modern technologies in AI and backend development.",
  focusAreas: [
    "Retrieval-Augmented Generation (RAG)",
    "Distributed Systems",
    "API Development",
    "OCR Processing",
    "AI Integration",
  ],
};

export type TechCategory = {
  key: string;
  label: string;
  command: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    key: "languages",
    label: "Programming Languages",
    command: "$ langs --list",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Dart", "PHP"],
  },
  {
    key: "backend",
    label: "Backend & APIs",
    command: "$ backend --ls",
    items: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "Laravel",
      "REST APIs",
      "Pydantic",
      "Starlette",
    ],
  },
  {
    key: "ai",
    label: "AI & Data",
    command: "$ ai --ls",
    items: [
      "Retrieval-Augmented Generation (RAG)",
      "Pinecone",
      "OCR Integration",
      "AI Chatbots",
      "Vector Databases",
    ],
  },
  {
    key: "databases",
    label: "Databases & Storage",
    command: "$ storage --ls",
    items: ["PostgreSQL", "MySQL", "Firebase", "BigQuery", "Redis", "RabbitMQ"],
  },
  {
    key: "cloud",
    label: "Cloud & DevOps",
    command: "$ infra --ls",
    items: ["Docker", "Git", "GitHub", "Google Cloud Platform (GCP)", "Google Cloud Storage (GCS)", "Celery"],
  },
  {
    key: "mobile",
    label: "Mobile Development",
    command: "$ mobile --ls",
    items: ["Flutter", "Dart"],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string[];
  stack: string[];
  category: "AI/RAG" | "Backend/Infra";
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "legallyai",
    title: "LegallyAI",
    tagline: "OCR-Based Legal Document Review and AI Analysis System",
    description: [
      "Developed an AI-powered legal document analysis system using FastAPI, Flutter, Firebase, and vector databases",
      "Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline with OCR-based document processing and AI-generated summaries",
      "Integrated vector search and fallback web retrieval to improve chatbot response accuracy for legal-related queries",
      "Built a mobile and backend system focused on simplifying complex legal documents for users",
    ],
    stack: ["Python", "FastAPI", "Flutter", "Firebase", "Pinecone", "OCR", "AI APIs"],
    category: "AI/RAG",
    github: "https://github.com/paolo-ignacio/legallyai_mobile_backend",
  },
  {
    id: "async-ingestion",
    title: "Async Document Ingestion API & RAG",
    tagline: "Distributed Pipeline for Concurrent Document Processing",
    description: [
      "Developed a distributed document ingestion and processing pipeline using FastAPI, Celery, RabbitMQ, Redis, and Docker",
      "Implemented asynchronous OCR and embedding generation to maintain API responsiveness during concurrent document uploads",
      "Designed Redis-backed job tracking for real-time processing status monitoring across API and worker services",
      "Containerized and configured a multi-service backend architecture using Docker Compose for scalable deployment",
    ],
    stack: ["Python", "FastAPI", "Celery", "RabbitMQ", "Redis", "Docker"],
    category: "Backend/Infra",
    github: "https://github.com/paolo-ignacio/improved_rag_ingestion",
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  duration: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer Intern",
    org: "Makerspace Innovhub OPC",
    duration: "February 2026 – May 2026",
    points: [
      "Refactored monolithic APIs into modular backend services using Node.js, TypeScript, and MongoDB",
      "Optimized resource-heavy endpoints to improve API performance and reduce server memory usage",
      "Developed backend analytics features including sentiment analysis and prompt filtering systems",
      "Reduced technical debt by auditing and removing unused legacy endpoints",
      "Collaborated with developers in debugging, testing, and improving backend system reliability",
    ],
  },
];

export const certifications = [
  {
    name: "TOPCIT Level 3 Certification",
    issuer: "12th TOPCIT Examination",
    year: "2025",
  },
  {
    name: "TOPCIT Level 3 Certification",
    issuer: "13th TOPCIT Examination",
    year: "2025",
  },
];

export const navLinks = [
  { href: "#about", label: "About", command: "about" },
  { href: "#stack", label: "Stack", command: "stack" },
  { href: "#projects", label: "Projects", command: "projects" },
  { href: "#experience", label: "Experience", command: "experience" },
  { href: "#certifications", label: "Certs", command: "certs" },
  { href: "#contact", label: "Contact", command: "contact" },
];
