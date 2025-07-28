import { createContext, useContext } from "react";
import type { ReactNode } from "react";

interface DataContextType {
  generalDetails: {
    name: string;
    email: string;
    mobile: string;
    dob: string;
  };
  aboutMe: string[];
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
    logo: string;
  }>;
  projects: Array<{
    tags?: string[];
    title: string;
    startDate: string;
    endDate: string;
    isCurrentProject: boolean;
    descriptions?: string[];
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
    dob: "1989/06/01",
  },
  aboutMe: [
    "Full-stack developer with 13+ years of experience building websites and mobile apps using React, Node.js, and Azure.",
    "Experienced in leading teams to complete projects on time, with a focus on speed and smart design.",
    "Enjoys learning new technologies and improving development standards.",
  ],
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
      startDate: "2024/02",
      endDate: "",
      isCurrentEmployer: true,
      logo: "/ubs.jpg",
    },
    {
      jobTitle: "Lead Software Engineer",
      employer: "EPAM Systems",
      city: "Pune",
      country: "India",
      startDate: "2023/07",
      endDate: "2024/01",
      isCurrentEmployer: false,
      logo: "/epam.png",
    },
    {
      jobTitle: "Lead Member of Technical Staff",
      employer: "Mindstix Software Labs Pvt Ltd",
      city: "Pune",
      country: "India",
      startDate: "2021/09",
      endDate: "2023/05",
      isCurrentEmployer: false,
      logo: "/mindstix.jpg",
    },
    {
      jobTitle: "Senior Mobile Developer",
      employer: "Maybank",
      city: "Kuala Lumpur",
      country: "Malaysia",
      startDate: "2020/10",
      endDate: "2021/08",
      isCurrentEmployer: false,
      logo: "/maybank.jpeg",
    },
  ],
  projects: [
    {
      title: "Client Advisor Workbench (UBS)",
      tags: ["fin-tech", "React.js", "wealth management"],
      startDate: "2024/02",
      endDate: "",
      isCurrentProject: true,
      descriptions: [
        "Developed a comprehensive platform for financial advisors to manage client portfolios and provide personalized advice.",
        "Implemented advanced data visualization techniques to enhance user experience and decision-making.",
        "Collaborated with cross-functional teams to ensure seamless integration of new features and functionalities.",
      ],
    },
    {
      title: "Recruitement Central (EPAM | Atlassian)",
      tags: ["recruitment", "React.js", "Node.js", "SQL"],
      startDate: "2023/07",
      endDate: "2024/01",
      isCurrentProject: false,
      descriptions: [
        "Developed a recruitment management system to streamline the hiring process from job posting to candidate onboarding.",
        "Implemented features for interview scheduling, candidate tracking, and offer management.",
        "Integrated with existing HR systems to ensure data consistency and improve user experience.",
      ],
    },
    {
      title: "Lennar Nova (Mindstix | Lennar)",
      tags: [
        "real estate",
        "React.js",
        "Node.js",
        "Azure",
        "GraphQL",
        "React Native",
      ],
      startDate: "2022/10",
      endDate: "2023/05",
      isCurrentProject: false,
      descriptions: [
        "Developed a comprehensive platform for Lennar to manage homebuilding processes, from land allocation to home buying.",
        "Implemented features for real-time monitoring and reporting, enhancing operational efficiency.",
        "Utilized Azure services for cloud deployment and scalability, ensuring high availability and performance.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor's of Engineering, Computer Science",
      school: "Solapur University",
      startDate: "2008/06",
      endDate: "2011/05",
      city: "Solapur",
      country: "India",
      gpa: "64.46%",
    },
    {
      degree: "Diploma, Computer Science",
      school: "MSBTE",
      startDate: "2005/07",
      endDate: "2008/04",
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
      name: "Everyday AI",
      description:
        "Everyday AI is a comprehensive suite of intelligent tools that bring the power of artificial intelligence to your everyday activities.",
      previewUrl: "https://everyday-ai-tools.vercel.app/",
      repoUrl: "https://github.com/vkondi/everyday-ai",
      tags: ["deepseek-ai", "python", "email-assistant"],
    },
    {
      name: "Lite Data",
      description:
        "Lite Data is a modern web app for quickly generating and exporting custom datasets, perfect for developers, analysts, and testers needing tailored mock data.",
      previewUrl: "https://lite-data.vercel.app/",
      repoUrl: "https://github.com/vkondi/lite-data",
      tags: ["react", "python", "flask-api"],
    },
    {
      name: "Random Roster",
      description:
        "A modern web app for fair and effortless team organization through smart randomization tools.",
      previewUrl: "https://random-roster.vercel.app/",
      repoUrl: "https://github.com/vkondi/random-roster",
      tags: ["team collab", "nextjs"],
    },
    {
      name: "FINTRAKR",
      description:
        "A modern multi-user investment portfolio tracker with real-time analytics and visual insights for managing family/group finances across diverse platforms",
      previewUrl: "https://my-fintracker.vercel.app/",
      repoUrl: "https://github.com/vkondi/fin-tracker",
      tags: ["react", "fin-tech"],
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
