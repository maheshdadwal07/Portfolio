export const portfolioData = {
  personalInfo: {
    name: "Mahesh Dadwal",
    role: "Full Stack Developer (MERN)",
    shortIntro: "I build scalable web applications and modern user experiences using MERN stack technologies.",
    email: "maheshdadwal07@gmail.com",
    phone: "+91-7889002971",
    location: "Hoshiarpur, Punjab, India",
    github: "https://github.com",
    linkedin: "https://linkedin.com/in/maheshdadwal07",
    resumeLink: "/resume.pdf",
  },
  about: {
    summary: "I'm a Computer Science Engineering student at Chitkara University, passionate about building scalable and user-friendly web applications. I work on full-stack development using the MERN stack, where I build REST APIs, authentication systems, and responsive user interfaces. Alongside development, I regularly practice DSA to strengthen my problem-solving skills.",
    highlights: [
      "Built an e-commerce platform with authentication and cart functionality",
      "Developed management and frontend-focused applications",
      "Experience with REST APIs, backend logic, and UI integration"
    ],
    stats: {
      projectsCompleted: 5,
      technologiesUsed: 12,
      githubContributions: 150
    }
  },
  skills: {
    frontend: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "REST API Integration", "Responsive UI Development"],
    backend: ["Node.js", "Express.js", "Java"],
    database: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Postman", "Vercel", "Linux", "AWS EC2", "AWS S3"],
    concepts: ["REST APIs", "Authentication", "JWT", "MVC Architecture", "State Management", "Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks"]
  },
  experience: [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "CodeAlpha",
      location: "Lucknow, Uttar Pradesh, India",
      duration: "Oct 2025 - Nov 2025",
      type: "Internship",
      points: [
        "Worked on building a full-stack E-commerce web application using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
        "Implemented user authentication, product management, cart functionality, and order processing.",
        "Gained hands-on experience in frontend-backend integration and REST API development.",
        "Enhanced understanding of web architecture and database design through real-world project tasks."
      ]
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "SkillCraft Technology",
      location: "Mumbai, Maharashtra, India",
      duration: "Sep 2025 - Oct 2025",
      type: "Internship",
      points: [
        "Built responsive frontend applications including To-Do App, Stopwatch, and interactive web tools using HTML, CSS, and JavaScript.",
        "Implemented dynamic UI behavior using JavaScript for state handling and user interactions.",
        "Designed reusable UI components and optimized layouts for cross-device compatibility."
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Chitkara University",
      location: "Punjab, India",
      duration: "July 2023 - July 2027",
      score: "CGPA: 8.58/10.0"
    }
  ],
  achievements: [
    {
      id: 1,
      title: "HackVega Hackathon",
      description: "Awarded a Certificate of Merit for performance in the first round of a competitive hackathon."
    }
  ],
  projects: [
    {
      id: "midnight-cravings",
      title: "Midnight Cravings",
      tagline: "MERN E-Commerce Platform",
      description: "Built a full-stack MERN-based e-commerce platform addressing hostel-based food ordering use cases.",
      features: [
        "REST APIs for product listing, cart management, order processing, and authentication",
        "JWT-based role-based access control for Admin, Seller, and Student users",
        "Deployed on AWS using EC2 with static assets hosted on S3 and configured networking using VPC",
        "Tested application workflows across multiple user roles to ensure reliable system functionality"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS EC2", "AWS S3", "VPC"],
      backendLogic: "Node.js API servers connected to MongoDB, serving JSON to the React frontend. Authentication implemented with JWT.",
      deployment: "AWS",
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/maheshdadwal07/midnight-cravings",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
      challenges: "Handling complex user role hierarchies and ensuring secure payment routing."
    },
    {
      id: "hirehub",
      title: "HireHub",
      tagline: "Recruitment Management Platform",
      description: "Built a recruitment platform with JWT-based authentication, RBAC authorization, and company-level recruiter management.",
      features: [
        "Application lifecycle system with secure hiring state transitions and ownership validation",
        "Scalable REST APIs using MySQL, Sequelize, Joi validation, and centralized error handling",
        "Dynamic frontend built with React and Tailwind CSS for responsive user experiences"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Sequelize", "JWT", "Tailwind CSS"],
      backendLogic: "Express.js REST APIs using Sequelize ORM to interact with MySQL database, using Joi for request validation.",
      deployment: "Local/Vercel (Pending)",
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/maheshdadwal07/HireHub",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
      challenges: "Designing scalable database schema for application lifecycles and validating complex user states."
    },
    {
      id: "task-dashboard",
      title: "Task Management Dashboard",
      tagline: "Productivity Application",
      description: "A comprehensive task management dashboard built to help teams organize workflow and track progress.",
      features: [
        "Drag-and-drop task boards",
        "Real-time collaboration features",
        "Detailed analytics and progress tracking",
        "Customizable workspaces and tags"
      ],
      techStack: ["React.js", "Tailwind CSS", "Firebase", "Framer Motion"],
      backendLogic: "Serverless backend utilizing Firebase Firestore for real-time data sync and Firebase Auth.",
      deployment: "Vercel",
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/maheshdadwal07/task-dashboard",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      challenges: "Implementing smooth drag-and-drop interactions while maintaining state consistency."
    }
  ]
};
