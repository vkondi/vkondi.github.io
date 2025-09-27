import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

interface ArticleUser {
  name: string;
  username: string;
  twitter_username: null | string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

export interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
  body_markdown: string;
  positive_reactions_count: number;
  cover_image: null | string;
  tag_list: string[];
  canonical_url: string;
  reading_time_minutes: number;
  user: ArticleUser;
}

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
  blogs: Article[];
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
    {
      name: "Richa Sharma",
      description:
        "A full responsive numerology profile application for Richa Sharma",
      previewUrl: "https://richa-sharma-k.vercel.app/",
      repoUrl: "https://github.com/vkondi/richa-profile",
      tags: ["profile", "numerology", "nextjs"],
    },
    {
      name: "AI Code Reviewer",
      description:
        "An AI-powered code review application that uses Deepseek AI to analyze and suggest improvements for your code",
      previewUrl: "https://reviewwithai.vercel.app/",
      repoUrl: "https://github.com/vkondi/ai-code-reviewer",
      tags: ["ai", "codereview", "deepseek"],
    },
  ],
  blogs: [
    {
      type_of: "article",
      id: 2755944,
      title: "🦙 Ollama + OpenWebUI: Your Local AI Setup Guide",
      description:
        "Want to run AI models on your computer without paying for cloud services? Meet Ollama - your new best...",
      published: true,
      published_at: "2025-08-06T12:33:00.943Z",
      slug: "ollama-openwebui-your-local-ai-setup-guide-fdc",
      path: "/vishdevwork/ollama-openwebui-your-local-ai-setup-guide-fdc",
      url: "https://dev.to/vishdevwork/ollama-openwebui-your-local-ai-setup-guide-fdc",
      comments_count: 0,
      public_reactions_count: 0,
      page_views_count: 65,
      published_timestamp: "2025-08-06T12:33:00Z",
      body_markdown:
        "*Want to run AI models on your computer without paying for cloud services? Meet Ollama - your new best friend.*\n\n*P.S. This blog was inspired by questions from my previous post about [building a data analysis agent with local AI models](https://dev.to/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al). Many of you asked about setting up Ollama locally, so here's your complete guide!*\n\n---\n\n## 🤔 What's Ollama Anyway?\n\nThink of Ollama as your personal AI helper that runs on your computer. No internet needed, no API keys to worry about, no monthly bills. Just AI that works on your own machine.\n\n*\"But wait, isn't local AI slow and bad?\"* \n\nNope. Modern computers + good models = surprisingly fast performance. Plus, you get to run your own AI server.\n\n*If you've seen my [data analysis agent project](https://dev.to/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al), you know how useful local AI can be for real projects. This guide will get you set up so you can build your own AI tools!*\n\n---\n\n## 🚀 The Setup Saga\n\n### Step 1: Download the Thing\nGo to [ollama.ai](https://ollama.ai) and download the installer for your OS. It's like downloading any other app, but this one can chat with you.\n\n**Windows users:** Ollama now has native Windows support! Simply download the Windows installer from the official site. No WSL2 required - it works directly on your Windows machine. The installation process is just as straightforward as on other platforms.\n\n### Step 2: Install & Pray\n```bash\n# Mac/Linux\ncurl -fsSL https://ollama.ai/install.sh | sh\n\n# Windows (in WSL2)\ncurl -fsSL https://ollama.ai/install.sh | sh\n```\n\nIf you see errors, don't worry. Google is your friend here.\n\n### Step 3: Start the Party\n```bash\nollama serve\n```\n\nThis starts your local AI server. Keep this running in a terminal window. It's like having a small data center on your computer.\n\n---\n\n## 🎯 Model Madness\n\n### The Classics\n```bash\n# The OG - good for everything\nollama pull llama2\n\n# The coding wizard\nollama pull codellama\n\n# The creative one\nollama pull mistral\n```\n\n### The Heavy Hitters\n```bash\n# If you have a good GPU\nollama pull llama2:70b\n\n# The new hotness\nollama pull llama2:13b\n```\n\n*Pro tip: Start with smaller models first. Your computer will thank you.*\n\n---\n\n## 🎮 Let's Play\n\n### Basic Chat\n```bash\nollama run llama2\n```\n\nNow you can chat with your AI! Type your questions, get answers. It's like having a really smart friend who never gets tired.\n\n*Or use OpenWebUI above for a nicer interface!*\n\n---\n\n## 🌐 OpenWebUI: Your Web Interface\n\n*Tired of typing in the terminal? OpenWebUI gives you a nice web interface to chat with your AI models.*\n\n### What is OpenWebUI?\nOpenWebUI is a web interface for Ollama. Think of it as ChatGPT, but running on your computer with your local models.\n\n### Step 1: Install OpenWebUI\n```bash\n# Using Docker (easiest way)\ndocker run -d --network=host --name open-webui --restart always -v open-webui:/app/backend/data openwebui/open-webui:main\n\n# Or using pip\npip install open-webui\n```\n\n### Step 2: Start OpenWebUI\n```bash\n# If you used Docker, it's already running\n# If you used pip, run this:\nopen-webui\n```\n\n### Step 3: Access Your Web Interface\nOpen your browser and go to: `http://localhost:3000`\n\nYou'll see a clean interface where you can:\n- Chat with your models\n- Switch between different models\n- Save conversations\n- Upload files for analysis\n\n*Pro tip: OpenWebUI works with all your Ollama models automatically!*\n\n---\n\n\n\n## 🚨 Common Issues & Solutions\n\n### \"It's so slow!\"\n- **Solution:** Use smaller models or get better hardware\n- **Alternative:** Try quantized models (they're smaller but still good)\n\n### \"It's not working!\"\n- **Check:** Is Ollama running? (`ollama serve`)\n- **Check:** Do you have enough RAM? (8GB minimum, 16GB recommended)\n- **Check:** GPU drivers updated?\n\n### \"Models won't download!\"\n- **Solution:** Check your internet connection\n- **Alternative:** Try downloading during off-peak hours\n\n---\n\n## 🎉 Pro Tips\n\n1. **Model Management:** Use `ollama list` to see what you have\n2. **Clean Up:** Use `ollama rm modelname` to delete unused models\n3. **Custom Models:** You can create your own models with custom prompts\n4. **Performance:** GPU acceleration makes a BIG difference\n\n---\n\n## 🏁 Wrapping Up\n\nOllama is like having a personal AI assistant that runs on your computer. No cloud needed, no privacy worries, no monthly bills. Just AI that works on your own machine.\n\n**The best part?** You can run it offline, customize it, and it's completely free.\n\n**The worst part?** You might spend hours chatting with your local AI instead of doing actual work.\n\nNow that you're set up with Ollama, you can build cool things like my [data analysis agent](https://dev.to/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al) or create your own AI tools!\n\n*Happy coding, AI enthusiasts! 🚀*\n\n---\n\n*P.S. If this helped you, consider sharing it with your fellow developers. Local AI is the future, and the future is now.*",
      positive_reactions_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F927wghj0tbhyddyxfr0i.jpg",
      tag_list: ["ai", "ollama", "programming", "tutorial"],
      canonical_url:
        "https://dev.to/vishdevwork/ollama-openwebui-your-local-ai-setup-guide-fdc",
      reading_time_minutes: 3,
      user: {
        name: "Vishwajeet Kondi",
        username: "vishdevwork",
        twitter_username: null,
        github_username: "vkondi",
        user_id: 1854239,
        website_url: "https://vishwajeetkondi.vercel.app/",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
      },
    },
    {
      type_of: "article",
      id: 2753662,
      title: "🎪 So I Built This AI Thing That Doesn't Suck",
      description:
        'So I\'ve been working on this project called "Everyday AI" for a while now, and I thought it might be...',
      published: true,
      published_at: "2025-08-05T13:47:40.333Z",
      slug: "so-i-built-this-ai-thing-that-doesnt-suck-inb",
      path: "/vishdevwork/so-i-built-this-ai-thing-that-doesnt-suck-inb",
      url: "https://dev.to/vishdevwork/so-i-built-this-ai-thing-that-doesnt-suck-inb",
      comments_count: 0,
      public_reactions_count: 0,
      page_views_count: 42,
      published_timestamp: "2025-08-05T13:47:40Z",
      body_markdown:
        "So I've been working on this project called \"Everyday AI\" for a while now, and I thought it might be interesting to share what it's all about. It's basically a collection of AI tools that are supposed to make regular daily tasks a bit easier. You know, like writing emails, planning trips, and staying on top of the news.\n\n## What Even Is This Thing?\n\nThe idea started pretty simple - I was tired of spending way too much time on things that should be quick. Like writing professional emails that don't sound like a robot wrote them, or trying to figure out what to do on vacation without reading a million travel blogs. So I thought, hey, what if we could get AI to help with this stuff?\n\nEveryday AI is basically a web app with three main tools right now. There's a Smart Email Assistant that looks at your emails and gives you suggestions to make them sound better. Then there's a Travel Itinerary Builder that's supposed to help plan trips (though that one's still in the works). And finally, there's a News Digest tool that summarizes news articles so you don't have to read through everything.\n\n\n![AI Tools](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bj0i6buecjmbbc2lyqso.png)\n\n\n\n## The Tech Stuff (But Not Too Boring)\n\nI built this using Next.js for the frontend, which is this React framework that's pretty popular these days. The backend is Python with Flask, which I chose because it's straightforward and doesn't overcomplicate things. For the AI part, I'm using both DeepSeek's API and Google's Gemini Flash, which are these newer AI models that are supposed to be pretty good at understanding context.\n\n\n![AI Models - Cloud + Local](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v4bbklc3p07v540urvkz.png)\n\nThe cool thing is that it works both ways - you can use the cloud version with either DeepSeek or Gemini APIs, or if you're into that kind of thing, you can run local models with Ollama. I added that option mainly because some people are really into privacy and want everything to run on their own computer.\n\n## What Actually Works Right Now\n\nThe Smart Email Assistant is the one that's fully functional. You paste in an email you're writing, and it gives you feedback on things like tone, clarity, and grammar. It's not perfect, but it's surprisingly helpful. Like, it'll tell you if your email sounds too formal or too casual, and suggest ways to make it clearer.\n\n\n![Smart Email](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jl4icpc8mw8f8ckc6cft.png)\n\nThe interface is pretty clean - just a simple form where you type your email, and then you get this analysis back with suggestions. I tried to make it look nice with Tailwind CSS, which is this utility-first CSS framework that makes styling less of a nightmare.\n\n## The Stuff That's Still Coming\n\nThe Travel Itinerary Builder is supposed to help you plan trips by suggesting destinations, activities, and even budget tips. I've got the basic structure set up, but it's not quite ready yet. The idea is that you tell it what kind of trip you want (adventure, relaxation, cultural, etc.), your budget, and how long you're going, and it gives you a personalized itinerary.\n\nThe News Digest tool is also in progress. The plan is to have the AI pull in the latest news and create summaries that are actually readable, not just regurgitated headlines. I'm letting the AI handle the news gathering, which should give more relevant and up-to-date information.\n\n## Why I Built It This Way\n\nI wanted to keep things simple. A lot of AI tools out there are either too complicated or try to do too much. This one is focused on specific, everyday tasks that people actually struggle with. The interface is clean and doesn't require a PhD to figure out how to use it.\n\nI also wanted to make sure it works on different devices. The responsive design means it looks decent on phones, tablets, and computers. And I added dark mode support because, well, who doesn't like dark mode these days?\n\n## The Challenges I Ran Into\n\nGetting the AI responses to be actually useful was harder than I expected. Sometimes the AI would give really generic advice, or suggestions that didn't make sense in context. I had to spend a lot of time tweaking the prompts and figuring out how to structure the requests to get better results.\n\nThe local model setup was also a bit tricky. Ollama is great, but getting everything to work together smoothly took some trial and error. And making sure the app doesn't break when switching between cloud and local models required some careful planning.\n\n## What I Learned\n\nBuilding this project taught me a lot about how to structure AI applications. The key is making sure the AI has enough context to give useful suggestions, but not so much that it gets confused. I also learned that user experience is really important - even if the AI is working perfectly, if the interface is clunky, people won't use it.\n\nAnother thing I realized is that AI tools work best when they're focused on specific tasks rather than trying to be everything to everyone. The Smart Email Assistant works well because it has a clear, defined purpose.\n\n## Where It's Going\n\nI'm planning to add more tools as I go. An AI code reviewer would be really useful - imagine having an AI look at your code and give you suggestions for improvements, bug fixes, and best practices. That could be a game-changer for developers.\n\nThe goal is to keep expanding the toolkit while keeping everything simple and useful. I want to keep it as a standalone tool that doesn't require any account creation or collaboration features - just simple, focused tools that do one thing well.\n\n## The Bottom Line\n\nEveryday AI is basically my attempt to make AI actually useful for regular daily tasks. It's not perfect, and there's still a lot of work to do, but it's a start. The idea is to take the power of AI and apply it to problems that people actually face every day.\n\nIf you're interested in trying it out or want to see how it works, you can check out the [GitHub repository](https://github.com/vkondi/everyday-ai) or try the [live website](https://everyday-ai-tools.vercel.app/). It's open source, so if you have ideas for improvements or want to contribute, that would be awesome. The whole point is to make AI more accessible and useful for everyday life, not just for tech companies with huge budgets.\n\nAnyway, that's the story of how I ended up building an AI assistant for daily tasks. It's been a fun project to work on, and hopefully it'll actually help people with their day-to-day stuff. We'll see how it goes! ",
      positive_reactions_count: 0,
      cover_image: null,
      tag_list: ["ai", "nextjs", "python", "webdev"],
      canonical_url:
        "https://dev.to/vishdevwork/so-i-built-this-ai-thing-that-doesnt-suck-inb",
      reading_time_minutes: 5,
      user: {
        name: "Vishwajeet Kondi",
        username: "vishdevwork",
        twitter_username: null,
        github_username: "vkondi",
        user_id: 1854239,
        website_url: "https://vishwajeetkondi.vercel.app/",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
      },
    },
    {
      type_of: "article",
      id: 2753487,
      title: "My Journey Building a Data Analysis Agent with Local AI Models",
      description:
        "Introduction   I'm learning about data analysis and wanted to find an easier way to work...",
      published: true,
      published_at: "2025-08-05T12:54:36.968Z",
      slug: "my-journey-building-a-data-analysis-agent-with-local-ai-models-26al",
      path: "/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al",
      url: "https://dev.to/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al",
      comments_count: 0,
      public_reactions_count: 0,
      page_views_count: 57,
      published_timestamp: "2025-08-05T12:54:36Z",
      body_markdown:
        "## Introduction\n\nI'm learning about data analysis and wanted to find an easier way to work with CSV files. Writing Python code with pandas was taking me a long time to learn, so I thought about using AI to help.\n\nI built a tool called the **Data Analysis Agent** that lets you ask questions about your data in plain English. Instead of writing code, you can just ask things like \"What's the average sales?\" and get an answer.\n\nIn this blog post, I'll show you how I made this tool and how you can use it too.\n\n## What is the Data Analysis Agent?\n\nThe Data Analysis Agent is a tool I built that lets you analyze CSV files by asking questions in plain English. Instead of struggling to write complex pandas code, you can simply ask questions like:\n\n- \"What is the average sales?\"\n- \"Show me the top 5 highest values in the salary column\"\n- \"Count the number of rows\"\n- \"What is the correlation between age and salary?\"\n- \"Group by department and show the mean salary\"\n\nThe system then uses a local AI model to understand your question and generate the appropriate pandas commands to answer it. It's like having a helpful assistant that knows how to work with data!\n\n## Key Features\n\n### 1. **Interactive Natural Language Interface**\nThe coolest thing about this tool is that you can ask questions about your data in plain English. No need to learn complex programming syntax - just ask what you want to know!\n\n### 2. **Local AI Integration with Ollama**\nI chose to use Ollama to run AI models locally on your computer instead of using cloud services. This means:\n- **Privacy**: Your data stays on your computer\n- **Speed**: No waiting for internet connections\n- **Cost**: Completely free to use\n- **Offline**: Works even without internet\n\n### 3. **Multiple AI Model Support**\nYou can use different AI models depending on what you have installed. Some popular ones include:\n- **Llama2**: A good all-around model\n- **CodeLlama**: Great for generating code\n- **Mistral**: Another solid option\n- **Any model**: You can use whatever you have in Ollama\n\n### 4. **Automatic CSV Detection**\nThe tool automatically finds all your CSV files in the `data/` folder and lets you pick which one to analyze. No need to remember file paths!\n\n### 5. **Pandas Integration**\nAll the actual data analysis is done using pandas, which is the standard tool for data analysis in Python. This means you get reliable, well-tested results.\n\n## How It All Works (The Simple Version)\n\nI tried to keep the code organized in a way that makes sense. Here's how the different parts work together:\n\n```\n┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐\n│   You ask a     │───▶│  AI Model       │───▶│  Pandas Code    │\n│   question      │    │  (Ollama)       │    │  gets made      │\n│   in English    │    │                 │    │                 │\n└─────────────────┘    └─────────────────┘    └─────────────────┘\n                                │                        │\n                                ▼                        ▼\n┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐\n│   Pick which    │    │   Load your     │    │   Show you      │\n│   AI model      │    │   CSV file      │    │   the results   │\n└─────────────────┘    └─────────────────┘    └─────────────────┘\n```\n\n## The Code Pieces (What I Built)\n\nI broke the project into smaller pieces to make it easier to understand and work on. Here are the main parts:\n\n### 1. **Main Application (`main.py`)**\nThis is where everything starts. It handles:\n- Letting you pick which AI model to use\n- Loading your dataset\n- The main menu where you ask questions\n- Running the whole show\n\n```python\ndef main():\n    # Pick which AI model to use\n    selected_model = select_model()\n    \n    # Load your dataset\n    file_path, df = select_dataset()\n    \n    # Keep asking questions until you're done\n    while True:\n        query = input(\"Enter your query: \")\n        result = analyze_data(df, query, selected_model)\n        print(result)\n```\n\n### 2. **Data Analyzer (`data_analyzer.py`)**\nThis is the brain of the operation. It:\n- Takes your question and turns it into a prompt for the AI\n- Gets the AI's response\n- Runs the pandas code the AI generates\n- Handles any errors that might happen\n\n```python\ndef analyze_data(df, query, selected_model):\n    prompt = f\"\"\"\n    System: You are a data analysis assistant. The dataset has columns: {list(df.columns)}.\n    The user asked: \"{query}\"\n    \n    Suggest a pandas operation to answer the query. Return only the pandas command.\n    \"\"\"\n    \n    ollama_response = query_ollama(prompt, selected_model)\n    # Run the code the AI gave us\n    result = eval(command, {'df': df, 'pd': pd})\n    return result\n```\n\n### 3. **Ollama Client (`ollama_client.py`)**\nThis talks to the AI model on your computer:\n- Sends your questions to the AI\n- Gets the AI's answers back\n- Handles any connection problems\n\n### 4. **Model Selection (`model_selection.py`)**\nThis helps you pick which AI model to use:\n- Finds all the AI models you have installed\n- Lets you choose which one to use\n- Remembers your choice so it's faster next time\n\n### 5. **Data Management**\n- **CSV Files (`csv_files.py`)**: Finds all your CSV files and lets you pick one\n- **Data Loader (`data_loader.py`)**: Loads your CSV file into pandas\n\n## How It Works: Step-by-Step\n\n### Step 1: Model Discovery\nThe tool looks for AI models you have installed on your computer:\n\n```python\nresponse = requests.get(\"http://localhost:11434/api/tags\")\nmodels = [model['name'] for model in response.json()['models']]\n```\n\n### Step 2: Dataset Loading\nIt finds all your CSV files and loads the one you pick:\n\n```python\ncsv_files = glob.glob(os.path.join(\"data\", \"*.csv\"))\ndf = pd.read_csv(selected_file)\n```\n\n### Step 3: Query Processing\nWhen you ask a question, here's what happens:\n\n1. **Makes a Prompt**: It takes your question and adds information about your dataset\n2. **Asks the AI**: Sends your question to the AI model you picked\n3. **Gets Code**: The AI gives back pandas code to answer your question\n4. **Runs the Code**: It runs the pandas code on your data\n5. **Shows Results**: You get your answer!\n\n### Step 4: Code Generation Example\nIf you ask \"What is the average sales?\", the AI might give you:\n```python\ndf['Sales'].mean()\n```\n\nIf you ask \"Show me the top 5 highest salaries\":\n```python\ndf.nlargest(5, 'Salary')[['Name', 'Salary']]\n```\n\n## What You Can Do With It\n\nI included some sample datasets to help you get started:\n\n1. **Sales Data**: A dataset with sales records (Date, Product, Sales, Region)\n2. **Employee Data**: HR data with employee information (Name, Department, Salary, Experience)\n3. **Voter Information**: Electoral data with demographic details\n4. **Candidate Data**: Information about political candidates by state\n\n### Some Examples of What You Can Ask\n\n**You ask**: \"What is the average salary by department?\"\n**The AI generates**: `df.groupby('Department')['Salary'].mean()`\n\n**You ask**: \"Show me the top 3 highest sales\"\n**The AI generates**: `df.nlargest(3, 'Sales')`\n\n**You ask**: \"How many employees are in each department?\"\n**The AI generates**: `df['Department'].value_counts()`\n\n## Some Technical Stuff I Learned\n\n### Security Considerations\nI made sure the tool is safe to use by controlling what code can run:\n\n```python\nlocal_vars = {'df': df, 'pd': pd}\nresult = eval(command, local_vars)\n```\n\nThis means only pandas operations can run, so nothing dangerous can happen to your computer.\n\n### Error Handling\nI tried to handle common problems that might come up:\n- If Ollama isn't running\n- If your CSV file is corrupted\n- If the AI gives a weird response\n- If the generated code has an error\n\n### Performance Optimizations\nI made a few small improvements:\n- The tool remembers which AI models you have so it doesn't have to ask every time\n- It loads data efficiently using pandas\n- It doesn't use much memory\n\n\n## Things to Keep in Mind\n\n### 1. **AI Model Quality**\n- Different AI models give different results\n- Some models are better at generating code than others\n- You might need to try different models to see which works best for you\n\n### 2. **Computer Requirements**\n- AI models need quite a bit of RAM to run\n- Having a good graphics card helps with larger models\n- Downloading models can take a while the first time\n\n### 3. **Question Complexity**\n- Simple questions work best\n- Very complex analysis might confuse the AI\n- You might need to break down complicated questions into simpler ones\n\n\n## Want to Try It Yourself?\n\nThe project is open-source and available on [GitHub](https://github.com/vkondi/data_analysis_agent). \n\nTo get started:\n1. Install Ollama and download at least one AI model\n2. Put your CSV files in the `data/` folder\n3. Start with simple questions and work your way up to more complex ones\n\nI'm still learning and improving this tool, so feel free to try it out and let me know what you think!\n\n---\n\n*This project shows how local AI models can make data analysis more accessible to everyone. By keeping everything on your own computer, you get privacy and control while still getting the benefits of AI assistance.* ",
      positive_reactions_count: 0,
      cover_image: null,
      tag_list: ["ai", "python", "nlp"],
      canonical_url:
        "https://dev.to/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al",
      reading_time_minutes: 5,
      user: {
        name: "Vishwajeet Kondi",
        username: "vishdevwork",
        twitter_username: null,
        github_username: "vkondi",
        user_id: 1854239,
        website_url: "https://vishwajeetkondi.vercel.app/",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
      },
    },
  ],
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState<DataContextType | undefined>(portfolioData);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/portfolio/blogs`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });

      setData((prevData) => ({
        ...(prevData || portfolioData),
        blogs: response?.data?.blogs
          ? response.data.blogs
          : prevData?.blogs || portfolioData.blogs,
      }));
    } catch (error) {
      console.error("[DataProvider][fetchBlogs] >> Exception:", error);
    }
  };

  // Fetch blogs on component mount
  useEffect(() => {
    if (isAuthenticated) {
      fetchBlogs();
    }
  }, [isAuthenticated]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const usePortfolioData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("usePortfolioData must be used within a DataProvider");
  }
  return context;
};
