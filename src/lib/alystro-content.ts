export const programs = [
  {
    slug: "foundation",
    name: "Foundation",
    classes: "Class 6–8",
    description:
      "Build strong digital foundations and introduce students to technology, creativity and problem-solving.",
    features: ["Digital Skills", "Coding Foundations", "AI Awareness", "Creative Activities"],
  },
  {
    slug: "skill-builder",
    name: "Skill Builder",
    classes: "Class 9–10",
    description:
      "Develop practical technology skills through coding, AI, digital tools and hands-on projects.",
    features: [
      "Coding & Programming",
      "AI & Digital Skills",
      "Project-Based Learning",
      "Practical Assignments",
    ],
  },
  {
    slug: "future-ready",
    name: "Future Ready",
    classes: "Class 11–12",
    description:
      "Prepare students for higher education, careers and the rapidly evolving digital world.",
    features: [
      "Advanced Digital Skills",
      "Artificial Intelligence",
      "Coding & Development",
      "Career-Oriented Projects",
    ],
  },
];
export const faqs = [
  [
    "What is ALYSTRO?",
    "ALYSTRO is a technology-driven EdTech platform bringing structured future-skills learning and school learning management together.",
  ],
  [
    "Which classes can participate?",
    "Our programs are designed for classes 6–12: Foundation for classes 6–8, Skill Builder for classes 9–10, and Future Ready for classes 11–12.",
  ],
  [
    "What programs does ALYSTRO offer?",
    "Programs cover AI, coding, digital skills, video editing, digital creativity and practical future skills.",
  ],
  [
    "Are classes live or recorded?",
    "Programs combine live classes with recorded lessons, so students can learn together and revisit topics at their own pace.",
  ],
  [
    "How long are the programs?",
    "ALYSTRO offers structured 3-month programs with practical assignments and project-based learning.",
  ],
  [
    "Do students receive certificates?",
    "Students receive digital certificates after completing eligible ALYSTRO programs and their completion requirements.",
  ],
  [
    "Can schools partner with ALYSTRO?",
    "Yes. Schools can explore a partnership to introduce structured technology programs, teacher support and progress tracking.",
  ],
  [
    "How can a school book a demo?",
    "Select Book a School Demo and fill in the school demo request form. Demo scheduling will be available when the enquiry service is connected.",
  ],
];
export const navLinks = [
  ["Home", "/#home"],
  ["Programs", "/#programs"],
  ["Courses", "/#skills"],
  ["For Schools", "/#schools"],
  ["For Students", "/#students"],
  ["About", "/about"],
  ["Resources", "/resources"],
];
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | ALYSTRO` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | ALYSTRO` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
