// Central editable content for the portfolio. Update details here.

export const profile = {
  name: "Devika Krishna K",
  title: "Aspiring HR Analyst",
  focus: "HR Analytics · Excel · Power BI",
  location: "Kozhikode, Kerala, India",
  email: "devikakrishnak14@gmail.com",
  phone: "+91 7736704538",
  phoneHref: "tel:+917736704538",
  linkedin: "https://www.linkedin.com/in/devika-krishna-k/",
  // Set to a real file path (e.g. "/resume.pdf" placed in /public) to enable download.
  resumeUrl: null as string | null,
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = {
  heading: "A business mindset with a growing passion for people analytics.",
  paragraphs: [
    "I'm Devika Krishna K, based in Kozhikode, Kerala. I recently completed my Bachelor of Business Administration at Peekay CICS Arts and Science College under Calicut University.",
    "My academic background in business administration, along with my Certified Financial Data Analyst qualification and ongoing Diploma in Human Resource Management, has strengthened my interest in using data to understand business and people-related challenges.",
    "During college, I coordinated campus programmes and activities, developing my leadership, communication, teamwork, and organizational skills.",
    "I'm particularly interested in HR Analytics, workforce reporting, employee engagement, recruitment metrics, and data visualization. I enjoy learning new tools, organizing information, and presenting insights clearly.",
    "My goal is to grow into an HR Analyst who combines analytical thinking with a people-first perspective.",
  ],
  markers: ["Business Administration", "Human Resource Management", "Data Analytics"],
  learning: ["Human Resource Management", "HR Analytics"],
};

export const skills = [
  { title: "Microsoft Excel & Power Pivot", code: "XL", items: ["VLOOKUP", "HLOOKUP", "Pivot Tables", "Advanced Charts", "Data Structuring", "Reporting"] },
  { title: "Power BI", code: "BI", items: ["Data Visualization", "Interactive Dashboard Creation", "Visual Reporting"] },
  { title: "Power Query", code: "PQ", items: ["Data Cleaning", "Data Transformation", "Data Processing"] },
  { title: "Business & Professional Skills", code: "HR", items: ["Human Resource Management", "Communication", "Leadership", "Teamwork", "Time Management", "Problem Solving", "Adaptability", "Quick Learning"] },
];

export const otherTools = [
  { name: "Microsoft Word", use: "Report writing and documentation" },
  { name: "Microsoft PowerPoint", use: "Presentation design" },
];

export const project = {
  slug: "khadi-india",
  title: "Marketing Strategy Analysis — Khadi India",
  category: "Academic Project · Marketing Research · Data Analysis",
  overview:
    "An academic project focused on evaluating marketing strategies and identifying operational and marketing challenges faced by Khadi India. The work involved structured analysis, comparative reporting, and the development of practical recommendations to strengthen sales and brand outreach.",
  highlights: [
    { value: "25+", label: "Operational and marketing challenges identified" },
    { value: "15+", label: "Structured charts, visual reports and comparative summaries in Excel" },
    { value: "30+", label: "Actionable marketing methods and strategies suggested" },
  ],
  stages: [
    { n: "01", title: "Research", text: "Understand the marketing context and identify challenges." },
    { n: "02", title: "Organize", text: "Structure information for comparison and analysis." },
    { n: "03", title: "Visualize", text: "Present findings using Excel charts and reports." },
    { n: "04", title: "Recommend", text: "Develop actionable ideas for sales improvement and brand outreach." },
  ],
  objectives: [
    "Evaluate the existing marketing strategies of Khadi India.",
    "Identify operational and marketing challenges.",
    "Organize findings into comparative, visual reports.",
    "Propose practical methods to strengthen sales and brand outreach.",
  ],
  learnings: [
    "Structuring qualitative research so it can be compared side by side.",
    "Choosing the right Excel chart to make a finding easy to read.",
    "Turning analysis into recommendations someone can act on.",
  ],
  recommendationsNote:
    "The project produced 30+ actionable marketing methods and strategies focused on sales improvement and brand outreach.",
  reflection:
    "This project showed me how much clarity comes from organizing information well. Moving from scattered challenges to structured charts and recommendations is the same analytical habit I want to bring to people data in HR.",
};

export const interests = [
  { title: "Recruitment Analytics", text: "Exploring time-to-hire, hiring funnel performance, and recruitment reporting.", use: "Helps HR teams spot bottlenecks in hiring and plan recruitment capacity." },
  { title: "Employee Engagement", text: "Understanding employee feedback and engagement trends.", use: "Shows how connected people feel to their work, guiding culture and wellbeing efforts." },
  { title: "Workforce Reporting", text: "Organizing workforce information into clear, useful reports.", use: "Gives leaders a reliable picture of headcount, structure and change over time." },
  { title: "Retention & Turnover", text: "Exploring employee retention, turnover metrics, and workforce patterns.", use: "Highlights where and why people leave, so teams can act early." },
];

export const experience = [
  {
    role: "Coordinator",
    org: "Campus of Kozhikode",
    date: "2026",
    points: [
      "Coordinated 10+ campus programmes.",
      "Supported programme operations and student initiatives.",
      "Engaged with events involving 500+ students per event.",
    ],
    tags: ["Coordination", "Communication", "Teamwork", "Operations"],
  },
  {
    role: "Co-organizer — Management Fest",
    org: "NSKL Education, in collaboration with MAMO College",
    date: "December 2025",
    points: [
      "Co-organized a management fest for 100+ students.",
      "Worked as part of the organizing team.",
      "Supported event coordination and collaborative execution.",
    ],
    tags: ["Event Coordination", "Collaboration"],
  },
];

export const education = [
  { title: "Diploma in Human Resource Management", org: "Edwin Academy", meta: "Currently pursuing", current: true },
  { title: "Bachelor of Business Administration", org: "Peekay CICS Arts and Science College · Calicut University", meta: "2023–2026" },
  { title: "Higher Secondary (+2)", org: "Government Model Higher Secondary School", meta: "2023" },
  { title: "SSLC", org: "Saraswati Vidyanikethan", meta: "2021" },
];

export const certification = { title: "Certified Financial Data Analyst (CFDA)", org: "NSKL Education" };

export const values = [
  { title: "Learn continuously.", text: "Every new tool or dataset is a chance to get a little better." },
  { title: "Work responsibly.", text: "Careful with details, dependable with deadlines." },
  { title: "Communicate clearly.", text: "Insights only matter when people can understand them." },
  { title: "Turn information into useful insights.", text: "Organize first, then find what actually helps a decision." },
];

// Illustrative demo data — NOT real employee records.
export const demo = {
  headcount: [
    { dept: "Operations", value: 48 },
    { dept: "Sales", value: 36 },
    { dept: "Finance", value: 18 },
    { dept: "HR", value: 10 },
    { dept: "IT", value: 22 },
  ],
  funnel: [
    { stage: "Applied", value: 420 },
    { stage: "Screened", value: 180 },
    { stage: "Interviewed", value: 72 },
    { stage: "Offered", value: 24 },
    { stage: "Hired", value: 18 },
  ],
  hiring: [
    { m: "Jan", hires: 4 }, { m: "Feb", hires: 6 }, { m: "Mar", hires: 5 },
    { m: "Apr", hires: 8 }, { m: "May", hires: 7 }, { m: "Jun", hires: 10 },
    { m: "Jul", hires: 9 }, { m: "Aug", hires: 12 },
  ],
  turnoverRate: 8.4,
};
