export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  isOpen: boolean;
}

export const jobPositions: JobPosition[] = [
  {
    id: "senior-flutter-developer",
    title: "Senior Flutter Developer",
    department: "Engineering",
    location: "Remote / Ahmedabad",
    type: "Full-time",
    experience: "3+ years",
    description: "We're looking for an experienced Flutter developer to build beautiful, high-performance cross-platform mobile applications for our clients worldwide.",
    responsibilities: [
      "Design and build advanced applications for iOS and Android using Flutter",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Work on bug fixing and improving application performance",
      "Continuously discover, evaluate, and implement new technologies to maximize development efficiency",
      "Maintain code quality, organization, and automation",
      "Participate in code reviews and mentor junior developers"
    ],
    requirements: [
      "3+ years of experience in mobile app development with Flutter",
      "Strong knowledge of Dart programming language",
      "Experience with state management solutions (Provider, Riverpod, BLoC)",
      "Proficiency in RESTful APIs and integration with backend services",
      "Strong understanding of Material Design and iOS design principles",
      "Experience with Git version control",
      "Excellent problem-solving and communication skills"
    ],
    niceToHave: [
      "Experience with Firebase (Authentication, Firestore, Cloud Functions)",
      "Knowledge of native Android (Kotlin) or iOS (Swift) development",
      "Experience with CI/CD pipelines",
      "Published apps on Google Play Store and Apple App Store",
      "Contributions to open-source projects"
    ],
    benefits: [
      "Competitive salary based on experience",
      "Flexible work hours and remote work options",
      "Health insurance coverage",
      "Professional development opportunities",
      "Work with international clients",
      "Collaborative and innovative work environment"
    ],
    isOpen: true
  },
  {
    id: "fullstack-nodejs-react-developer",
    title: "Full Stack Developer (Node.js + React)",
    department: "Engineering",
    location: "Remote / Ahmedabad",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our team as a Full Stack Developer to build scalable web applications using modern JavaScript technologies. You'll work on exciting projects across various industries.",
    responsibilities: [
      "Develop and maintain full-stack web applications using Node.js and React",
      "Design and implement RESTful APIs and GraphQL endpoints",
      "Build responsive and intuitive user interfaces with React and TypeScript",
      "Work with databases (MongoDB, PostgreSQL) to design efficient schemas",
      "Implement authentication, authorization, and security best practices",
      "Write clean, maintainable code with comprehensive test coverage",
      "Participate in architecture and technical design discussions"
    ],
    requirements: [
      "2-4 years of experience in full-stack web development",
      "Strong proficiency in JavaScript/TypeScript",
      "Experience with Node.js, Express.js, and backend development",
      "Proficiency in React.js and modern frontend frameworks",
      "Knowledge of MongoDB, PostgreSQL, or other databases",
      "Understanding of RESTful API design principles",
      "Experience with Git and Agile development practices",
      "Strong debugging and problem-solving skills"
    ],
    niceToHave: [
      "Experience with Next.js or other React frameworks",
      "Knowledge of GraphQL and Apollo",
      "Experience with Docker and containerization",
      "Familiarity with AWS, GCP, or Azure cloud platforms",
      "Understanding of microservices architecture",
      "Experience with testing frameworks (Jest, React Testing Library)"
    ],
    benefits: [
      "Competitive salary package",
      "Remote work flexibility",
      "Annual performance bonuses",
      "Learning and development budget",
      "Latest tools and technologies",
      "Opportunity to work on diverse projects"
    ],
    isOpen: true
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Ahmedabad",
    type: "Full-time",
    experience: "2+ years",
    description: "We're seeking a creative UI/UX Designer to create exceptional user experiences for web and mobile applications. You'll work closely with developers and clients to bring ideas to life.",
    responsibilities: [
      "Create user-centered designs for web and mobile applications",
      "Develop wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Design intuitive user interfaces following best practices",
      "Create and maintain design systems and component libraries",
      "Collaborate with developers to ensure accurate implementation",
      "Present design concepts to clients and stakeholders"
    ],
    requirements: [
      "2+ years of experience in UI/UX design",
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Strong portfolio demonstrating web and mobile design projects",
      "Understanding of user-centered design principles",
      "Knowledge of responsive design and mobile-first approach",
      "Experience with design systems and component libraries",
      "Excellent communication and presentation skills",
      "Ability to iterate based on feedback"
    ],
    niceToHave: [
      "Experience with prototyping tools (Framer, ProtoPie)",
      "Basic knowledge of HTML, CSS, and frontend technologies",
      "Familiarity with design thinking methodologies",
      "Experience with animation and micro-interactions",
      "Knowledge of accessibility standards (WCAG)",
      "Illustration or graphic design skills"
    ],
    benefits: [
      "Competitive salary",
      "Flexible working hours",
      "Creative freedom and autonomy",
      "Access to design tools and resources",
      "Work on diverse creative projects",
      "Professional growth opportunities"
    ],
    isOpen: true
  }
];

export const openPositions = jobPositions.filter(job => job.isOpen);
