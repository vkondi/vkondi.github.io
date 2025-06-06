import { createContext, useContext } from "react";
import type { ReactNode } from "react";

interface DataContextType {
  generalDetails: {
    name: string;
    email: string;
    mobile: string;
    dob: string;
  };
  aboutMe: string;
  skills: Array<{
    title: string;
    skills: string[];
  }>;
  rolesAndResponsibilities: string[];
  workExperience: Array<{
    jobTitle: string;
    employer: string;
    city: string;
    country: string;
    startDate: string;
    endDate: string;
    isCurrentEmployer: boolean;
  }>;
  projects: Array<{
    title: string;
    subTitle: string;
    startDate: string;
    endDate: string;
    isCurrentProject: boolean;
    description: string;
  }>;
  education: Array<{
    degree: string;
    school: string;
    startDate: string;
    endDate: string;
    city: string;
    country: string;
    gpa: string;
  }>;
  socialMedia: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
  previewWebsites: Array<{
    name: string;
    description: string;
    previewUrl: string;
    repoUrl: string;
    tags: string[];
  }>;
}

const portfolioData: DataContextType = {
  generalDetails: {
    name: "Vishwajeet Kondi",
    email: "vkondi@gmail.com",
    mobile: "+91 7448013092",
    dob: "18th June 1989",
  },
  aboutMe:
    "Full-stack developer with over 13 years of experience building scalable web and mobile applications using React, Node.js, and Azure. Skilled in leading cross-functional teams to deliver high-quality projects on time, with a focus on performance optimization and innovative architecture solutions. Passionate about adopting emerging technologies and driving technical excellence.",
  skills: [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Micro Frontends",
        "React Native",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python", "GraphQL"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["Microsoft Azure", "CI/CD"],
    },
    {
      title: "Databases",
      skills: ["SQL", "PostgreSQL"],
    },
  ],
  rolesAndResponsibilities: [
    "Developed scalable, reusable UI components, collaborating closely with UX teams.",
    "Wrote high-performance, maintainable code, following best practices.",
    "Optimized system performance, identifying and resolving bottlenecks.",
    "Led and mentored teams, ensuring timely delivery of quality solutions.",
    "Conducted architectural analysis, recommending improvements for scalability.",
    "Ensured software compliance with performance, security, and business requirements.",
    "Maintained technical documentation for architecture and deployment.",
    "Worked cross-functionally to align technical solutions with business goals.",
  ],
  workExperience: [
    {
      jobTitle: "Associate Director",
      employer: "UBS",
      city: "Pune",
      country: "India",
      startDate: "Feb 2024",
      endDate: "",
      isCurrentEmployer: true,
    },
    {
      jobTitle: "Lead Software Engineer",
      employer: "EPAM Systems",
      city: "Pune",
      country: "India",
      startDate: "July 2023",
      endDate: "January 2024",
      isCurrentEmployer: false,
    },
    {
      jobTitle: "Lead Member of Technical Staff",
      employer: "Mindstix Software Labs Pvt Ltd",
      city: "Pune",
      country: "India",
      startDate: "September 2021",
      endDate: "May 2023",
      isCurrentEmployer: false,
    },
    {
      jobTitle: "Senior Mobile Developer",
      employer: "Maybank",
      city: "Kuala Lumpur",
      country: "Malaysia",
      startDate: "October 2020",
      endDate: "August 2021",
      isCurrentEmployer: false,
    },
  ],
  projects: [
    {
      title: "Client Advisor Workbench (UBS)",
      subTitle: "React JS",
      startDate: "February 2024",
      endDate: "",
      isCurrentProject: true,
      description:
        "A platform designed to empower financial advisors with tools and resources to deliver personalized and effective client advice, focusing on digital-led, advisor-driven services and holistic wealth management solutions.",
    },
    {
      title: "Recruitement Central (EPAM | Atlassian)",
      subTitle: "React JS | Node JS | SQL",
      startDate: "July 2023",
      endDate: "January 2024",
      isCurrentProject: false,
      description:
        "A comprehensive tool designed to streamline the entire recruitment process, encompassing activities from job posting and candidate interviews to the final offer stage.",
    },
    {
      title: "Lennar Nova (Mindstix | Lennar)",
      subTitle: "React JS | Node JS | Azure | GraphQL | React Native",
      startDate: "October 2022",
      endDate: "May 2023",
      isCurrentProject: false,
      description:
        "HomeBuilder platform for Lennar to monitor end-to-end flow from land allocation to home buying stage for auditors and concierges.",
    },
  ],
  education: [
    {
      degree: "Bachelor's of Engineering, Computer Science",
      school: "Solapur University",
      startDate: "June 2008",
      endDate: "May 2011",
      city: "Solapur",
      country: "India",
      gpa: "64.46%",
    },
    {
      degree: "Diploma, Computer Science",
      school: "MSBTE",
      startDate: "July 2005",
      endDate: "April 2008",
      city: "Solapur",
      country: "India",
      gpa: "66.50%",
    },
  ],
  socialMedia: [
    {
      name: "Github",
      url: "https://github.com/vkondi",
      icon: "",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vishwajeetkondi/",
      icon: "",
    },
  ],
  previewWebsites: [
    {
      name: "FINTRAKR",
      description:
        "A modern multi-user investment portfolio tracker with real-time analytics and visual insights for managing family/group finances across diverse platforms",
      previewUrl: "https://fintrakr-flame.vercel.app/",
      repoUrl: "https://github.com/vkondi/fin-tracker",
      tags: ["react", "fin-tech"],
    },
    {
      name: "Random Roster",
      description:
        "A modern web app for fair and effortless team organization through smart randomization tools.",
      previewUrl: "https://random-roster.vercel.app/",
      repoUrl: "https://github.com/vkondi/random-roster",
      tags: ["team collab", "nextjs"],
    },
  ],
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DataContext.Provider value={portfolioData}>
      {children}
    </DataContext.Provider>
  );
};

export const usePortfolioData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("usePortfolioData must be used within a DataProvider");
  }
  return context;
};
