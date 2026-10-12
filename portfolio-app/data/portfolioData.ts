export interface Project {
  title: string;
  description: string;
  bgImage: string;
  problemStatement: string;
  solution: string;
  implementation: string;
  techStack: string;
  conclusion: string;
  github?: string;
  demoUrl?: string;
}

export interface AboutCard {
  icon: string;
  iconDark: string;
  title: string;
  description: string;
  popupTitle: string;
  popupType?: 'text' | 'education';
  popupContent?: string;
}

export interface SkillItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface EducationEntry {
  period: string;
  institution: string;
  degree: string;
}

export const PERSONAL_INFO = {
  name: "Mani Joshi Alokam",
  roleTitle1: "Full Stack Developer",
  summary: "I am a Computer Science student at VIT-AP University with a strong foundation in frontend development. Constantly learning, building projects, and solving problems through code.",
  aboutText: "I am a Computer Science student and an aspiring frontend web developer skilled in web development and data structures. I focus on writing clean, efficient code to turn complex logic into user-friendly digital experiences. I am eager to bring my technical skills and collaborative mindset to deliver immediate impact for your team",
  github: "https://github.com/Manijoshi-567",
  linkedin: "https://www.linkedin.com/in/alokammanijoshi/",
  leetcode: "https://leetcode.com/u/Mani_Joshi_Alokam/",
  resumeUrl: "/resume-Mani.pdf",
};

export const ABOUT_CARDS: AboutCard[] = [
  {
    icon: "/assets/award.png",
    iconDark: "/assets/quality.png",
    title: "Imarticus Learning",
    description: "Full Stack Development",
    popupTitle: "Imarticus Learning Certification",
    popupType: "text",
    popupContent: "I loved to do this! I enjoyed it really and experienced a lot, learned something new every single day during this Full Stack journey."
  },
  {
    icon: "/assets/award.png",
    iconDark: "/assets/quality.png",
    title: "Oracle Dev Gym",
    description: "Databases for Developers: Performance",
    popupTitle: "Oracle Dev Gym Certification",
    popupType: "text",
    popupContent: "I loved to do this! I enjoyed it really and experienced a lot, especially breaking down query execution plans and database indexing strategies."
  },
  {
    icon: "/assets/edu-icon.png",
    iconDark: "/assets/edu-icon-dark.png",
    title: "Education",
    description: "B.Tech in Computer Science",
    popupTitle: "Education History",
    popupType: "education"
  }
];

export const EDUCATION_HISTORY: EducationEntry[] = [
  {
    period: "2023 - 2027",
    institution: "VIT-AP University (Amaravati, Andhra Pradesh)",
    degree: "Bachelor of Technology: Computer Science And Engineering"
  },
  {
    period: "2021 - 2023",
    institution: "Narayana Junior College (Guntur, Andhra Pradesh)",
    degree: "Intermediate: MPC"
  },
  {
    period: "2021",
    institution: "Unique concept School (Sattenpalle, Andhra Pradesh)",
    degree: "Secondary School: High School"
  }
];

export const TOOLS_LIST = [
  { name: "VS Code", icon: "/assets/vscode.png" },
  { name: "Firebase", icon: "/assets/firebase.png" },
  { name: "MongoDB", icon: "/assets/mongodb.png" },
  { name: "Figma", icon: "/assets/figma.png" },
  { name: "Git", icon: "/assets/git.png" },
  { name: "Docker", icon: "/assets/docker.png" }
];

export const SKILLS_LIST: SkillItem[] = [
  {
    icon: "/assets/software.png",
    title: "Software Development",
    description: "Java, Python, Data Structures & Algorithms, Problem Solving",
    link: ""
  },
  {
    icon: "/assets/frontend.png",
    title: "Frontend Development",
    description: "HTML5 & CSS3, JavaScript, ReactJS, NextJS, DOM API, Web Storage API, Fetch API",
    link: ""
  },
  {
    icon: "/assets/backend.png",
    title: "Backend Systems",
    description: "MySQL, MongoDB, Node.js, Amazon Web Services (AWS), API Integration (Auth, Payments, Maps)",
    link: ""
  },
  {
    icon: "/assets/uiux.png",
    title: "UI/UX design",
    description: "User Interface (UI), User Experience (UX), User Research, Figma, Prototyping",
    link: ""
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    title: "Summariz",
    description: "Client-Side Document Summarizer",
    bgImage: "/work-1.png",
    problemStatement: "Organizations and researchers handle massive volumes of complex PDFs, spreadsheets, and scanned documents daily. Manually reviewing them leads to major operational bottlenecks, while traditional cloud AI services pose high risks of data leakage and compliance violations (GDPR/HIPAA) by transmitting proprietary files to third-party servers.",
    solution: "Engineered a high-performance, privacy-centric document summarization assistant that delivers contextual, multi-length structured summaries while maintaining 100% client-side data isolation. Raw files and OCR scans are processed locally in the browser sandbox, ensuring absolute data privacy and governance.",
    implementation: "Built with React 18, Vite, and TypeScript. Implemented localized document parsers utilizing Mammoth.js (DOCX), SheetJS (XLSX), PDF.js, and in-browser Tesseract.js WebAssembly OCR for scanned documents. Connected directly to the Google Gemini API with strict JSON schema validation for bulleted takeaways, executive summaries, and action items with zero server persistence.",
    techStack: "React 18, Vite, TypeScript, Tailwind CSS, Google Gemini API, Tesseract.js (Client-Side OCR), SheetJS, Mammoth.js, PDF.js",
    conclusion: "Completely eliminated server-side data leakage risks by processing 100% of raw documents locally in the user's browser, delivering rapid multi-format document intelligence with enterprise-grade data protection.",
    github: "https://github.com/Manijoshi-567/Summariz",
    demoUrl: "https://summariz-manijoshi-567.vercel.app/"
  },
  {
    title: "AI Studio",
    description: "Autonomous Multi-Agent Landing Page Generator",
    bgImage: "/work-2.png",
    problemStatement: "Creating high-converting, customized landing pages is slow, fragmented, and prohibitively expensive ($2,000–$15,000+ per page). Conventional drag-and-drop website builders produce bloated markup, cookie-cutter aesthetics, and subpar mobile responsiveness, while manual creative agency cycles take 2 to 6 weeks per release.",
    solution: "Constructed an autonomous 4-agent AI pipeline that ingests any brand name, custom product description, or live URL and generates a production-ready, fully responsive, self-contained HTML5/CSS3 landing page with premium UI/UX design in under 90 seconds.",
    implementation: "Developed a Python and Flask backend orchestrating a sequential 4-agent workflow: Web Scraper & Intent Analyzer (BeautifulSoup4) → Product Strategist Agent (brand positioning & palettes) → Conversion Copywriter Agent (hero, features, testimonials) → UI/UX Architect Agent (self-contained HTML5/CSS3). Engineered Multi-LLM provider abstraction (OpenAI GPT-4o, Google Gemini, Claude, Ollama), 5 dynamic themes, live iframe previews, and instant ZIP export.",
    techStack: "Python 3.10+, Flask, Multi-Agent AI Architecture, OpenAI GPT-4o, Google Gemini API, Claude API, BeautifulSoup4, HTML5, CSS3, JavaScript",
    conclusion: "Drastically condensed the landing page ideation and code generation lifecycle from weeks down to under 90 seconds, delivering clean, dependency-free, mobile-first code with built-in accessibility.",
    github: "https://github.com/Manijoshi-567/Manijoshi-s-Ai-Studio-"
  },
  {
    title: "Vathavaran",
    description: "Meteorological Intelligence Platform",
    bgImage: "/work-3.png",
    problemStatement: "Modern web users frequently encounter cluttered, ad-heavy weather applications that lack real-time meteorological precision, provide rigid forecasts without contextual travel intelligence, and fail to offer intuitive interactive radar maps or historical weather comparisons.",
    solution: "Developed a modern, edge-to-edge meteorological telemetry dashboard that combines hyper-accurate live weather data with AI-driven weather sentiment, precipitation arrival prediction models, and interactive radar map exploration.",
    implementation: "Constructed using React 19, TypeScript, and Vite. Integrated Open-Meteo real-time telemetry API with automatic browser GPS detection and reverse-geocoding fallbacks. Built an interactive Leaflet radar map with custom Signal Vermilion markers, Recharts thermal trend analysis for 7-day outlooks, a 5-day historical weather ledger, AI comfort & rain risk index rings, and persistent LocalStorage search history.",
    techStack: "React 19, Vite, TypeScript, Tailwind CSS, Leaflet Interactive Maps, Open-Meteo API, Recharts, Browser Geolocation API, LocalStorage",
    conclusion: "Delivered a high-contrast, full-bleed weather observatory offering hyper-accurate real-time telemetry, predictive AI travel comfort metrics, and seamless map-based exploration with zero latency.",
    github: "https://github.com/Manijoshi-567/Vathavaran"
  }
];
