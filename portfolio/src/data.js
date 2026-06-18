export const skills = {
  "Languages": ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "SQL"],
  "Frameworks": ["React.js", "Node.js", "Express.js", "Redux Toolkit", "Bootstrap", "Next.js"],
  "Databases": ["MongoDB", "MySQL", "SQLite3"],
  "Tools": ["GitHub", "REST APIs", "Postman", "Render", "Vercel", "Netlify", "VS Code"],
};

export const projects = [
  {
    title: "Eduport",
    tag: "LMS Platform",
    year: "2026",
    status: "ongoing",
    desc: "A responsive Learning Management System where users can browse courses, view detailed course info, and apply to become a teacher through a dedicated onboarding flow.",
    tech: ["React.js", "Node.js", "Express.js", "Bootstrap", "Vercel"],
    highlights: ["Dynamic course listing & detail pages", "Teacher onboarding with RESTful APIs", "Admin dashboard for applicant management", "Mobile-first responsive UI"],
  },
  {
    title: "Jobby App",
    tag: "Job Search Platform",
    year: "2025",
    status: "live",
    desc: "Full-featured job search app with JWT-based auth and protected routes. Fetches live job listings with filtering by employment type, salary, and keyword search.",
    tech: ["React.js", "React Router", "JWT", "CSS"],
    highlights: ["Secure JWT authentication", "Live job listings via NxtWave API", "Dynamic job detail pages", "Filter by type, salary & keyword"],
  },
  {
    title: "Cinema Ticket Booking",
    tag: "Booking Platform",
    year: "2025",
    status: "live",
    desc: "Scalable cinema booking platform with city, movie, showtime, and seat selection. Global state via Context API and Redux with SQLite3 backend.",
    tech: ["React.js", "Node.js", "Express.js", "SQLite3", "Redux", "Render"],
    highlights: ["Full booking flow end-to-end", "Redux + Context API state", "SQLite3 RESTful backend", "Deployed on Render + Vercel"],
  },
  {
    title: "Restaurant Booking System",
    tag: "Food Ordering App",
    year: "2025",
    status: "live",
    desc: "Responsive food ordering app specialised in Indian cuisine. Users can browse, customise orders, select chutneys and dosa varieties, and generate printable bills.",
    tech: ["React.js", "Bootstrap", "Context API"],
    highlights: ["Indian cuisine personalisation", "Real-time state — zero reloads", "Custom toppings & variety selection", "Printable bill generation"],
  },
];

export const education = [
  { degree: "Full Stack Web Development (MERN)", school: "NxtWave", location: "Hyderabad", year: "2024–2025" },
  { degree: "Data Science Program", school: "Luminar Techno Lab", location: "", year: "2023–2024" },
  { degree: "Bachelor of Business Administration", school: "Amrita Vishwa Vidyapeetham", location: "Mysore", year: "2020–2023" },
];

export const certs = [
  { title: "React.js", issuer: "NxtWave", year: "2025" },
  { title: "JavaScript Essential", issuer: "NxtWave", year: "2025" },
  { title: "Responsive Website", issuer: "NxtWave", year: "2025" },
  { title: "Data Analysis with Python", issuer: "IBM", year: "2024" },
  { title: "Certified Data Science", issuer: "NACTET", year: "2024" },
  { title: "Dynamic Web Application", issuer: "Let's Upgrade", year: "2025" },
  { title: "Public Speaking", issuer: "Let's Upgrade", year: "2025" },
  { title: "Time Management", issuer: "Infosys Springboard", year: "2023" },
];
