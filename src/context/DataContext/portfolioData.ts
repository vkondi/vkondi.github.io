import type { DataContextType } from "../types";

export const portfolioData: DataContextType = {
  generalDetails: {
    name: "Vishwajeet Kondi",
    email: "vkondi@gmail.com",
    mobile: "+91 7448013092",
    dob: "1989/06/01",
  },
  aboutMe: [
    "Software engineer with 14+ years of experience building web and mobile applications using React, Python, Node.js, and Azure.",
    "Hands-on with AI and LLM application development, including local AI workflows, knowledge onboarding systems, AI agents, and model integrations using Ollama, Gemini, and DeepSeek APIs.",
    "Experienced in leading teams, driving delivery, and building solutions with a practical, user-focused mindset.",
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
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "Python", "GraphQL"],
    },
    {
      title: "AI Engineering",
      skills: [
        "LLM Integration",
        "AI Agents",
        "RAG",
        "Ollama",
        "Gemini",
        "DeepSeek",
        "AI Workflows",
      ],
    },
    {
      title: "AI Dev Tooling",
      skills: [
        "Cursor",
        "GitHub Copilot",
        "Cline",
        "Antigravity",
        "Prompt Engineering",
      ],
    },
    {
      title: "Data & Storage",
      skills: ["SQL", "PostgreSQL"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["Microsoft Azure", "CI/CD"],
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
      startDate: "2018/02",
      endDate: "2021/08",
      isCurrentEmployer: false,
      logo: "/maybank.jpeg",
    },
    {
      jobTitle: "Consultant",
      employer: "TIBCO Software Inc.",
      city: "Pune",
      country: "India",
      startDate: "2014/08",
      endDate: "2018/01",
      isCurrentEmployer: false,
      logo: "/tibco.jpg",
    },
    {
      jobTitle: "Software Engineer",
      employer: "Mindstix Software Labs Pvt Ltd",
      city: "Pune",
      country: "India",
      startDate: "2011/12",
      endDate: "2014/07",
      isCurrentEmployer: false,
      logo: "/mindstix.jpg",
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
    {
      name: "Blogs",
      url: "https://dev.to/vishdevwork",
      icon: "",
    },
  ],
  previewWebsites: [
    {
      name: "Next Role",
      description:
        "AI career copilot for strategic planning: resume analysis, career paths, skill gaps, and actionable roadmaps.",
      previewUrl: "https://my-next-role.vercel.app",
      repoUrl: "https://github.com/vkondi/next-role",
      tags: ["career-planning", "skill-gap-analysis", "gemini-ai"],
    },
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
      body_markdown:
        "These days, everyone seems to be building AI agents.\n\nSo I figured I should probably build one too.\n\nBut instead of another generic demo, I wanted to solve a small problem I actually had.\n\nOver time, I had collected a bunch of blog posts and technical notes in a folder. I wanted a quick way to understand them without opening every file one by one.\n\nQuestions like:\n\n* What topics do I write about most?\n* Do some posts contradict each other?\n* Can I create a learning path from my own notes?\n\nUploading everything to ChatGPT did not feel right.\n\nMy content. My machine.\n\nSo I built a small local RAG agent.\n\n## How it works\n\nIt reads markdown files, understands their meaning, and lets me query across all of them in plain English.\n\nUnder the hood, it looks something like this:\n\n```plaintext\nMarkdown Files\n      ↓\nChunking & Parsing\n      ↓\nnomic-embed-text (via Ollama)\n      ↓\nChromaDB (local vector storage)\n      ↓\nRelevant Context Retrieval\n      ↓\nMistral (via Ollama)\n      ↓\nAnswer\n```\n\nEverything runs locally on my laptop.\n\nNo cloud. No external APIs. Just Python and a few focused tools.\n\n## Where AI Actually Helped\n\nThe architecture was clear before I started coding. The “vibe coding” part was mostly using AI to speed up repetitive work like tests, boilerplate, and wiring pieces together.\n\nIdea to working CLI in about a week.\n\nI’ve open sourced the project if you want to take a look:\n\n**Repo:** [Knowledge Onboarding Agent](https://github.com/vkondi/knowledge-onboarding-agent)\n\n## What’s next\n\nNext, I might add PDF support and a lightweight web UI.\n\nCurious to know, have you built something similar recently? If yes, what problem did you solve?\n\nAlso curious, if you were building this, would you keep it fully local or use cloud APIs? What would you do differently?\n",
      canonical_url:
        "https://dev.to/vishdevwork/everyones-building-ai-agents-heres-the-one-i-built-for-myself-1plh",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fadf3zdh2doz6w37hmx3f.png",
      description:
        "These days, everyone seems to be building AI agents.  So I figured I should probably build one...",
      id: 3775196,
      page_views_count: 0,
      path: "/vishdevwork/everyones-building-ai-agents-heres-the-one-i-built-for-myself-1plh",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2026-05-29T05:05:56.807Z",
      published_timestamp: "2026-05-29T05:05:56Z",
      reading_time_minutes: 2,
      slug: "everyones-building-ai-agents-heres-the-one-i-built-for-myself-1plh",
      tag_list: ["agents", "python", "rag", "ai"],
      title: "Everyone’s Building AI Agents. Here’s the One I Built for Myself",
      type_of: "article",
      url: "https://dev.to/vishdevwork/everyones-building-ai-agents-heres-the-one-i-built-for-myself-1plh",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        'You open a new Copilot chat and explain everything again.\n\nYour stack. Folder structure. That “no default exports” rule.\n\nCopilot writes code, but forgets context.\n\nThis isn’t a bug though. LLMs are stateless, every chat starts fresh.\n\nThe good part? You can fix it.\n\n---\n\n## The Problem Has a Name\n\nYou’re dealing with three problems:\n\n- **The Blank Slate**: Every session starts from zero.\n\n- **Correction Amnesia**: You fix a mistake. Next session, same mistake.\n\n- **Standards Drift**: Your team has patterns. Copilot ignores them. Code becomes inconsistent.\n\nEach problem has a different fix. Let\'s go through them one by one.\n\n---\n\n## The Instructions File (Your Copilot Brief)\n\nCreate this file:\n\n```plaintext\nyour-project/\n└── .github/\n    └── copilot-instructions.md\n```\n\nCopilot reads it at the start of every chat. No setup.\n\nThink of it as your team’s “how we work” doc.\n\nExample:\n\n```markdown\n## Stack\n- React 18, TypeScript (strict), Tailwind CSS\n- Node.js + Express + Prisma + PostgreSQL\n- Testing: Vitest + React Testing Library\n- Package manager: pnpm only\n\n## Rules\n- Named exports only — no default exports\n- No `any` types\n- Every API route uses `authenticate`\n- Handle nulls explicitly — no optional chaining on Prisma results\n- Conventional Commits: feat(scope): message\n```\n\nNow everyone gets the same baseline.\n\n---\n\n## Scoped Rules (Right Rules, Right Files)\n\nOne file works… until it grows.\n\nFrontend, backend, and tests follow different rules. A single file mixes context.\n\nUse scoped files:\n\n```plaintext\n.github/\n├── copilot-instructions.md\n└── instructions/\n    ├── frontend.instructions.md\n    ├── backend.instructions.md\n    └── testing.instructions.md\n```\n\nEach file defines where it applies:\n\n```markdown\n---\napplyTo: "src/components/**/*.tsx"\n---\n\n## Component Rules\n- Functional components only\n- Props interface named `[ComponentName]Props`\n- Use `cn()` for conditional classes\n- No inline styles\n```\n\nNow Copilot gets relevant rules only.\n\n---\n\n## The Memory Tool (Fix Repeated Mistakes)\n\nCopilot has a memory tool in VS Code (preview, enabled by default).\n\nWhen you correct it, make it persistent:\n\n```plaintext\nRemember: never use optional chaining on Prisma query results. \nAlways handle null with an explicit if-check.\n```\n\nIt stores this and applies it in future sessions.\n\nMemory types:\n\n**User memory** (all projects)\n\n```plaintext\nRemember I prefer async/await over .then()\n```\n\n**Repository memory** (this project)\n\n```plaintext\nRemember we use App Router (March 2026)\nRemember UserAvatar breaks in Server Components\n```\n\n**Session memory** (current chat only)\n\n**Key habit:** When you fix a repeated mistake, tell it to remember.\n\nCheck memory with `Chat: Show Memory Files`.\n\n*Note: Memory tool is in preview, enable via `github.copilot.chat.tools.memory.enabled`.* \n\n---\n\n## Prompt Files (Stop Repeating Yourself)\n\nIf you repeat prompts, create a prompt file:\n\n```plaintext\n.github/prompts/code-review.prompt.md\n```\n\nUse it with `/code-review`.\n\nExample:\n\n```markdown\n---\nname: "code-review"\ndescription: "Review staged changes"\nmode: "ask"\n---\n\nReview staged changes.\n\nFlag:\n- Must Fix — bugs, auth, unsafe types\n- Should Fix — standards, missing tests\n- Suggestion — improvements\n\nReference [copilot-instructions.md](../copilot-instructions.md).\n```\n\nNow your team shares the same workflow.\n\nOther useful prompts:\n\n* `/new-component`\n* `/new-migration`\n* `/write-tests`\n\n---\n\n## The Full Picture\n\n```plaintext\n.github/\n├── copilot-instructions.md\n├── instructions/\n│   ├── frontend.instructions.md\n│   ├── backend.instructions.md\n│   └── testing.instructions.md\n└── prompts/\n    ├── code-review.prompt.md\n    ├── new-component.prompt.md\n    └── new-migration.prompt.md\n```\n\nPlus memory running in the background.\n\n| Problem           | Fix                       |\n| ----------------- | ------------------------- |\n| Blank slate       | `copilot-instructions.md` |\n| Wrong rules       | Scoped files              |\n| Repeated mistakes | Memory tool               |\n| Repeated prompts  | Prompt files              |\n\n---\n\n## Just Start With One Thing\n\nYou don’t need everything today.\n\nStart with `copilot-instructions.md`. Add your stack and a few rules. Commit it. See the difference.\n\nThen:\n\n* Add scoped files when needed\n* Save repeated fixes to memory\n* Create prompt files when repetition appears\n\nThe model won’t change. But your context can improve every week.\n',
      canonical_url:
        "https://coderlegion.com/15392/copilot-forgets-everything-make-it-stop",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr5n6ry3veqgrau4ar4ya.png",
      description:
        "You open a new Copilot chat and explain everything again.  Your stack. Folder structure. That “no...",
      id: 3532150,
      page_views_count: 66,
      path: "/vishdevwork/copilot-forgets-everything-make-it-stop-1kp2",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2026-04-21T13:09:59.443Z",
      published_timestamp: "2026-04-21T13:09:59Z",
      reading_time_minutes: 3,
      slug: "copilot-forgets-everything-make-it-stop-1kp2",
      tag_list: [],
      title: "Copilot Forgets Everything. Make It Stop.",
      type_of: "article",
      url: "https://dev.to/vishdevwork/copilot-forgets-everything-make-it-stop-1kp2",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "If you’re still starting projects with plain React…\nyou’re already a bit behind.\n\nNot because React is bad.\nBut because the ecosystem has moved ahead.\n\nWelcome to the era of **meta-frameworks**.\n\n---\n\n## What is a meta-framework?\n\n> A framework on top of a framework.\n\nNot just UI (like React), but also:\n- routing\n- data fetching\n- backend APIs\n- rendering (SSR, SSG, etc.)\n- performance optimizations\n\nAll in one place.\n\nExamples:\nNext.js · Nuxt · Remix · SvelteKit · Astro\n\n---\n\n## Why they took over\n\nFrontend got too complex.\n\nBefore:\n- pick a router\n- setup Webpack\n- manage state\n- figure out SSR\n\nBasically… build your own system.\n\nNow?\n\n> One command → everything just works.\n\n---\n\n## The real shift\n\nFrontend is no longer just “frontend”.\n\n> Your frontend is also your backend.\n\nYou now have:\n- API routes inside frontend\n- server-side logic next to UI\n- server components & edge functions\n\nReact apps are no longer just client-side.\n\n---\n\n## Performance forced this\n\nSPAs had problems:\n- slow initial load\n- poor SEO\n- too much JS\n\nSo we moved back to:\n- server rendering\n- static generation\n- hybrid rendering\n\nMeta-frameworks handle this by default.\n\n---\n\n## This isn’t a small trend\n\n- Next.js powers **50%+ React apps**  \n- ~68% of new apps prefer it over plain React  \n- Meta-frameworks are now the default for scalable apps  \n\nDevelopers are clearly moving toward **integrated ecosystems** instead of assembling tools.\n\n---\n\n## Less JS is the new goal\n\n> Do more on the server, ship less to the browser.\n\nResult:\n- faster load\n- better UX\n- better performance\n\n---\n\n## Architecture changed\n\nOld:\n\n```plaintext\n\nBrowser (SPA)\n↓\nAPI\n↓\nDB\n\n```\n\nNew:\n\n```plaintext\n\nServer + Edge\n↓\nMinimal JS\n↓\nFaster UI\n\n```\n\n👉 Less browser work  \n👉 More server work  \n\n---\n\n## Not all meta-frameworks are the same\n\n**Full-stack**\nNext.js, Nuxt → everything in one place  \n\n**Server-first**\nRemix, SvelteKit → closer to web fundamentals  \n\n**Content-first**\nAstro → almost zero JS  \n\n---\n\n## Are they perfect?\n\n**Pros**\n- faster setup\n- better defaults\n- less decision fatigue\n\n**Cons**\n- more abstraction\n- breaking changes\n- some lock-in\n\n---\n\n## The bigger shift\n\nThis isn’t about tools.\n\n> It’s frontend → full-stack systems.\n\n---\n\n## Final thought\n\nThe question is no longer:\n\n> “Can you build a React app?”\n\nIt’s:\n\n> “Can you design systems using a meta-framework?”\n",
      canonical_url:
        "https://dev.to/vishdevwork/meta-frameworks-are-taking-over-frontend-and-most-devs-dont-even-notice-5846",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxjlx0juxpod2cay8omv2.png",
      description:
        "If you’re still starting projects with plain React… you’re already a bit behind.  Not because React...",
      id: 3440752,
      page_views_count: 84,
      path: "/vishdevwork/meta-frameworks-are-taking-over-frontend-and-most-devs-dont-even-notice-5846",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2026-04-01T11:51:43.704Z",
      published_timestamp: "2026-04-01T11:51:43Z",
      reading_time_minutes: 2,
      slug: "meta-frameworks-are-taking-over-frontend-and-most-devs-dont-even-notice-5846",
      tag_list: ["webdev", "frontend", "architecture", "react"],
      title:
        "Meta-Frameworks Are Taking Over Frontend (And Most Devs Don’t Even Notice)",
      type_of: "article",
      url: "https://dev.to/vishdevwork/meta-frameworks-are-taking-over-frontend-and-most-devs-dont-even-notice-5846",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        'Most frontend developers spend their time inside frameworks like React, Vue, or Angular. But underneath every framework is the same system: the browser turning code into pixels on a screen.\n\nThis process is known as the **browser rendering pipeline** (or the **critical rendering path**).\n\nIn simplified terms:\n\n```plaintext\nHTML → DOM\nCSS → CSSOM\nDOM + CSSOM → Render Tree\nRender Tree → Layout\nLayout → Paint\nPaint → Composite\n```\n\nUnderstanding this pipeline explains many real-world performance issues that developers encounter.\n\n---\n\n## 1. HTML Parsing → DOM Construction\n\nThe browser begins by parsing HTML and converting it into the **Document Object Model (DOM)**, a tree structure representing the page.\n\nExample HTML:\n\n```html\n<body>\n  <h1>Hello</h1>\n  <p>Welcome</p>\n</body>\n```\n\nDOM representation:\n\n```plaintext\nDocument\n └── body\n      ├── h1\n      └── p\n```\n\nBrowsers **stream-parse HTML**, meaning they start building the DOM before the entire document is downloaded.\n\nHowever, JavaScript can interrupt this process. When the parser encounters a blocking script:\n\n```html\n<script src="app.js"></script>\n```\n\nDOM construction pauses while the script executes. This is why script placement or using `defer` matters.\n\n---\n\n## 2. CSS Parsing → CSSOM Construction\n\nWhile the DOM represents structure, CSS defines how elements should appear.\n\nThe browser parses CSS into the **CSS Object Model (CSSOM)**.\n\nExample CSS:\n\n```css\nh1 {\n  color: red;\n}\n```\n\nThe browser resolves:\n\n* the cascade\n* specificity\n* inheritance\n\nEventually, every element receives its **computed styles**.\n\n---\n\n## 3. DOM + CSSOM → Render Tree\n\nThe DOM alone isn’t enough to render a page. The browser merges the DOM and CSSOM to create a **Render Tree**, which contains only visible elements with their computed styles.\n\nFor example:\n\nDOM:\n\n```plaintext\nbody\n ├─ h1\n ├─ p\n └─ script\n```\n\nRender Tree:\n\n```plaintext\nbody\n ├─ h1 (styled)\n └─ p (styled)\n```\n\nElements such as `<script>`, `<meta>`, or elements with `display: none` are excluded.\n\nThe render tree represents **what actually needs to be drawn**.\n\n---\n\n## 4. Layout (Reflow)\n\nOnce the render tree is built, the browser calculates the **geometry of each element**. This stage is called **layout** (or reflow).\n\nThe browser determines:\n\n* width and height\n* position\n* spacing and box model calculations\n\nExample:\n\n```plaintext\nh1 → x:0 y:0 width:800 height:40\np  → x:0 y:40 width:800 height:20\n```\n\nLayout can be expensive because a change in one element may affect many others. For example, changing a container’s width might require recalculating layout for the entire subtree.\n\n---\n\n## 5. Paint\n\nAfter layout, the browser converts elements into **drawing instructions**.\n\nPainting includes:\n\n* text\n* colors\n* borders\n* shadows\n* images\n\nAt this stage the browser determines **how elements should be visually drawn**, but pixels are not yet combined into the final frame.\n\n---\n\n## 6. Compositing\n\nModern browsers split the page into **layers** and send them to the GPU compositor.\n\nCertain properties create separate layers, including:\n\n* `transform`\n* `opacity`\n* `position: fixed`\n* `video`\n* `canvas`\n\nThe GPU then **combines these layers into the final image displayed on the screen**.\n\nThis step is what enables smooth animations and efficient rendering.\n\n---\n\n## The 16ms Frame Budget\n\nBrowsers aim for **60 frames per second**, which means each frame must be processed within about **16 milliseconds**.\n\nWithin that time the browser must run:\n\n```plaintext\nJavaScript\nStyle calculation\nLayout\nPaint\nComposite\n```\n\nIf the work exceeds this budget, the result is dropped frames and visible UI lag.\n\n---\n\n## Not All CSS Changes Are Equal\n\nDifferent CSS properties affect different stages of the pipeline.\n\n**Layout-triggering properties (expensive)**\nExamples: `width`, `height`, `margin`, `top`, `left`\n\nPipeline:\n\n```plaintext\nStyle → Layout → Paint → Composite\n```\n\n**Paint-only properties**\n\nExamples: `background-color`, `border-color`, `box-shadow`\n\nPipeline:\n\n```plaintext\nStyle → Paint → Composite\n```\n\n**Composite-only properties (fastest)**\n\nExamples: `transform`, `opacity`\n\nPipeline:\n\n```plaintext\nStyle → Composite\n```\n\nThis is why modern animation guidelines recommend using `transform` and `opacity`.\n\n---\n\n## Why This Matters\n\nMany developers blame frameworks when performance issues appear. In reality, problems usually come from:\n\n* excessive DOM updates\n* layout thrashing\n* expensive paint operations\n* overly complex render trees\n\nFrameworks may change, but browser fundamentals remain the same.\n\nMost developers think in terms of:\n\n```plaintext\nComponents → State → UI\n```\n\nBut the browser ultimately thinks in:\n\n```plaintext\nDOM → Style → Layout → Paint → Composite\n```\n\nUnderstanding that model is what separates **framework users from true frontend engineers**.\n',
      canonical_url:
        "https://coderlegion.com/12816/how-the-browser-rendering-pipeline-actually-works?prompt=cl_badge_remind",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz8gz8z1k79tyxql35rw6.png",
      description:
        "Most frontend developers spend their time inside frameworks like React, Vue, or Angular. But...",
      id: 3343606,
      page_views_count: 177,
      path: "/vishdevwork/how-the-browser-rendering-pipeline-actually-works-29n5",
      positive_reactions_count: 1,
      public_reactions_count: 1,
      published: true,
      published_at: "2026-03-12T12:56:52.086Z",
      published_timestamp: "2026-03-12T12:56:52Z",
      reading_time_minutes: 3,
      slug: "how-the-browser-rendering-pipeline-actually-works-29n5",
      tag_list: ["webdev", "frontend", "css", "webperf"],
      title: "How the Browser Rendering Pipeline Actually Works",
      type_of: "article",
      url: "https://dev.to/vishdevwork/how-the-browser-rendering-pipeline-actually-works-29n5",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        'Remember [Part 1](https://dev.to/vishdevwork/oxlint-js-linter-thats-actually-fast-enough-to-matter-4094) where we talked about Oxlint being stupidly fast? Well, buckle up because Oxfmt (the formatter) is even more ridiculous.\n\nWe\'re talking 30x faster than Prettier. Not a typo. Thirty times.\n\nBut speed isn\'t everything. Prettier works. It\'s stable. It\'s everywhere. So the real question isn\'t "is Oxfmt fast?" it\'s "is it fast enough to justify the risk of switching?"\n\nLet\'s find out.\n\n## What Is Oxfmt?\n\nOxfmt is a code formatter built by the same VoidZero team that made Oxlint. Written in Rust, runs on the Oxc parser (same one Oxlint uses), and targets 95%+ compatibility with Prettier.\n\nKey phrase: **targets compatibility**. Not "reinvents formatting" like Biome. Not "has its own opinions" like dprint. Oxfmt\'s goal is to be Prettier, but faster.\n\n[Announced in December 2025](https://oxc.rs/blog/2025-12-01-oxfmt-alpha), currently in alpha. Early, but with receipts.\n\n## The Performance Numbers (With Sources)\n\nAll numbers from [Oxc\'s official formatter benchmark repo](https://github.com/oxc-project/bench-formatter).\n\n**Large single file (TypeScript compiler\'s parser.ts, ~540KB):**\n```\noxfmt:                  104ms\nBiome:                  136ms (1.3x slower)\nprettier+oxc-parser:    710ms (6.8x slower)\nprettier (default):     1.04s (10x slower)\n```\n\n**Mixed repository (Storybook):**\n```\noxfmt:              16.6s\nprettier+oxc:       40.2s (2.4x slower)\n```\n\n**Full features (Continue repository):**\n```\noxfmt:              9.2s\nprettier+oxc:       56.8s (6.2x slower)\n```\n\n**Memory usage (Outline benchmark):**\n```\nprettier:       223.9 MB\noxfmt:          152.9 MB\nBiome:          62.2 MB  ← Biome wins here\n```\n\nWorth noting: Biome is significantly more memory-efficient. Oxfmt is faster, but Biome is leaner. [Official benchmarks](https://oxc.rs/docs/guide/benchmarks) put Oxfmt at roughly **30x faster than Prettier** and **3x faster than Biome** on initial runs without cache.\n\n## But Is It Actually Compatible?\n\nThis is the million-dollar question. If Oxfmt formats your code differently, migration becomes a nightmare of diffs.\n\nGood news: [Oxfmt passes ~95% of Prettier\'s JS/TS test suite](https://oxc.rs/blog/2025-12-01-oxfmt-alpha). The remaining 5%? Some of it is intentional.\n\n**Example — array formatting consistency:**\n```javascript\n// Prettier (inconsistent)\nconst longer = [\n  \'item1\', \'item2\', \'item3\' // breaks despite fitting\n];\n\n// Oxfmt (consistent)\nconst longer = [\'item1\', \'item2\', \'item3\']; // stays inline if it fits\n```\n\nThe team is even [submitting PRs to Prettier](https://voidzero.dev/posts/announcing-oxfmt-alpha) to converge on these edge cases, some landed in Prettier 3.7.\n\n**⚠️ Critical gotcha:** Oxfmt defaults to `printWidth: 100`. Prettier defaults to `80`. Migrate without setting this and you\'ll get massive diffs everywhere.\n\n```json\n// .oxfmtrc.jsonc — set this FIRST\n{\n  "$schema": "./node_modules/oxfmt/configuration_schema.json",\n  "printWidth": 80\n}\n```\n\n## Feature Comparison\n\n| Feature | Oxfmt (Alpha) | Prettier 3.7 | Biome 2.0 |\n|---------|---------------|--------------|-----------|\n| **Speed** | 30x faster | Baseline | 3x faster |\n| **Prettier compatibility** | 95%+ | 100% | ~70% |\n| **JS/TS/CSS/HTML** | ✅ | ✅ | ✅ |\n| **Tailwind class sorting** | Built-in ✅ | Plugin | ❌ |\n| **Import sorting** | Coming | Plugin | Built-in ✅ |\n| **Vue/Svelte/Astro** | Roadmap | Plugins | ❌ |\n| **Plugin support** | Roadmap | ✅ | ❌ |\n| **Memory usage** | 152 MB | 224 MB | 62 MB |\n| **Production ready** | No (alpha) | Yes | Yes |\n\nOxfmt\'s built-in Tailwind class sorting is a big deal if you\'re on Tailwind, no `prettier-plugin-tailwindcss` needed. But no Vue/Svelte/Astro support yet, and no plugin system. Both are on the beta roadmap.\n\n## Migration Strategies\n\n### Option 1: Full Replace\n\n**Best for:** JS/TS-only projects, no Prettier plugins, willing to be early adopters\n\n```bash\nnpm install -D oxfmt\nnpx oxfmt --migrate=prettier  # Auto-converts your Prettier config\nnpx oxfmt .\n```\n\n**Trade-offs:** 30x faster, built-in Tailwind sorting, 95% compatible, but alpha bugs exist, no plugins, no Vue/Svelte formatters.\n\n### Option 2: Hybrid (Local Speed, CI Safety)\n\n**Best for:** Teams that want fast local formatting but aren\'t ready to commit\n\n```json\n{\n  "scripts": {\n    "format": "oxfmt .",\n    "format:ci": "prettier --check ."\n  }\n}\n```\n\nRun Oxfmt locally for instant feedback. Keep Prettier in CI as a safety net. Slightly wasteful running both, but it de-risks the migration considerably.\n\n### Option 3: Wait for Beta (Q1 2026)\n\nHonestly the right call for most teams. [The team has been upfront](https://voidzero.dev/posts/announcing-oxfmt-alpha): *"Oxfmt is in alpha and may not suit complex setups."*\n\nBeta is targeting Q1 2026 with import sorting, Vue/Svelte/Astro support, and a plugin system. If you\'re not hitting CI pain right now, wait.\n\n## Common Pitfalls\n\n**`printWidth` mismatch:** The single biggest migration trap. Always set `printWidth: 80` explicitly if migrating from Prettier.\n\n**Prettier plugins:** `prettier-plugin-organize-imports`, `@trivago/prettier-plugin-sort-imports`, and similar won\'t work. Plugin system is on the beta roadmap.\n\n**Vue/Svelte/Astro files:** Oxfmt skips them silently. Keep Prettier for those files until framework support lands.\n\n## When Should You Use It?\n\n**Choose Oxfmt if:**\n- You need maximum speed (30x faster)\n- You use Tailwind heavily (built-in class sorting, no plugin needed)\n- You only format JS/TS/CSS/HTML\n- You\'re okay with alpha software and willing to file issues\n\n**Stick with Prettier if:**\n- You rely on plugins (import sorters, framework formatters)\n- You need proven stability\n- Your pre-commit hooks run on thousands of files daily (alpha bugs = blocked commits)\n\n**Consider Biome if:**\n- You want one unified tool for linting + formatting\n- Memory efficiency matters to you\n- You need stable Rust-based tooling today\n\n## The Bigger Picture: Full Oxc Stack\n\nIf you go all-in on Oxc, your entire pipeline shares the same parser. Lint and format without parsing your code twice.\n\n```json\n// package.json\n{\n  "scripts": {\n    "lint": "oxlint",\n    "format": "oxfmt",\n    "check": "oxlint && oxfmt --check"\n  }\n}\n```\n\nVoidZero\'s vision: *"One toolchain for parse, lint, format, transform, bundle."*\n\nNot fully there yet, Oxfmt is alpha, Rolldown is still in development. But the direction is clear.\n\n## The Honest Take\n\nOxfmt is impressive. 30x faster than Prettier is real. Built-in Tailwind sorting removes a dependency. 95% compatibility makes migration feasible without a giant diff.\n\nBut it\'s alpha. If you\'re on a greenfield project and comfortable filing GitHub issues, try it. If you\'re running a production app with dozens of engineers, wait for beta. If Prettier works fine and CI isn\'t painful, there\'s genuinely no reason to change. Being boring with tooling is underrated.\n\nThe best formatter is the one that gets out of your way.\n\n---\n\n**Try it yourself:**\n- [Oxfmt docs](https://oxc.rs/docs/guide/usage/formatter)\n- [Official benchmarks](https://github.com/oxc-project/bench-formatter)\n- [Alpha announcement](https://oxc.rs/blog/2025-12-01-oxfmt-alpha)\n- [Migration guide](https://oxc.rs/docs/guide/usage/formatter/migrate-from-prettier)\n\n**Questions? Hit bugs? Found edge cases?** Drop them in the comments, community feedback shapes these tools early on.\n\n**Missed Part 1?** Go read the [Oxlint deep dive](https://dev.to/vishdevwork/oxlint-js-linter-thats-actually-fast-enough-to-matter-4094) on why it\'s 50-100x faster than ESLint and when you should actually care.',
      canonical_url:
        "https://coderlegion.com/11839/oxfmt-the-prettier-compatible-formatter-thats-30x-faster",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvk9txli198d0tmznafjg.png",
      description:
        "Remember Part 1 where we talked about Oxlint being stupidly fast? Well, buckle up because Oxfmt (the...",
      id: 3265370,
      page_views_count: 78,
      path: "/vishdevwork/oxfmt-the-prettier-compatible-formatter-thats-30x-faster-40jp",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2026-02-18T12:05:17.008Z",
      published_timestamp: "2026-02-18T12:05:17Z",
      reading_time_minutes: 5,
      slug: "oxfmt-the-prettier-compatible-formatter-thats-30x-faster-40jp",
      tag_list: ["webdev", "formatter", "codequality", "typescript"],
      title: "Oxfmt: The Prettier Compatible Formatter That's 30x Faster",
      type_of: "article",
      url: "https://dev.to/vishdevwork/oxfmt-the-prettier-compatible-formatter-thats-30x-faster-40jp",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "So here's the thing about my last Biome blog post, the comments section(on Reddit) turned into a mini war zone. Not the angry kind, thankfully. More like the curious kind. Everyone wanted to know about Oxlint and how it stacks up against Biome.\n\nFair enough. Let's talk about it.\n\n## What Even Is Oxlint?\n\nOxlint is a JavaScript/TypeScript linter written in Rust. It's part of this bigger thing called Oxc (Oxidation Compiler) that Evan You's company VoidZero is building. You know Evan, the guy who made Vue and Vite.\n\n[Reached v1.0 stable in June 2025](https://oxc.rs/blog/2025-06-10-oxlint-stable.html) after about 18 months of development and help from 200+ contributors. It's not some side project anymore, companies like Shopify, Airbnb, Mercedes-Benz, Linear, and Framer are using it in production.\n\nThe pitch is simple: ESLint, but way faster. Like, ridiculously faster.\n\n## The Performance Numbers (With Receipts)\n\nOkay, let's get into the benchmarks. I'm pulling these from [Oxc's official benchmark repository](https://github.com/oxc-project/bench-linter) so you can verify this yourself.\n\n### Oxlint vs ESLint vs Biome\n\n**Vue Core codebase (~900 files):**\n```\noxlint:     138ms\nBiome:      377ms (2.7x slower than Oxlint)\nESLint:     28.6s (207x slower than Oxlint)\n```\n\nYeah, you read that right. ESLint took almost 30 seconds. Oxlint? Under 140 milliseconds.\n\n**Outline repository (larger project):**\n```\noxlint:     150ms\nBiome:      498ms (3.3x slower than Oxlint)\nESLint:     [They didn't even bother timing it]\n```\n\n[According to their official benchmarks page](https://oxc.rs/docs/guide/benchmarks), Oxlint is 50-100x faster than ESLint depending on how many CPU cores you have. The record? **264,925 files linted in 22.5 seconds**, roughly 10,000 files per second.\n\n\n## Why Is It So Fast?\n\nI know what you're thinking. \"Rust is faster than JavaScript\", yeah, we get it. But there's more to it.\n\n**Multi-threading:** ESLint runs on a single thread. Oxlint uses all your CPU cores by default. 8-core machine? That's 8x parallelism, no configuration needed.\n\n**Shared parser:** Oxlint and other Oxc tools share the same parser. Your code gets parsed once, then all tools work on the same AST. Compare that to ESLint + Prettier parsing your code twice.\n\n**No plugin overhead:** ESLint loads each plugin separately. Oxlint has all rules built-in. No dependency hell, no initialization overhead.\n\n## Feature Comparison: Oxlint vs Biome\n\n| Feature | Oxlint 1.0 | Biome 2.0 |\n|---------|-----------|-----------|\n| **Speed** | ~10,000 files/sec | ~5,000 files/sec |\n| **Built-in rules** | 670+ | 250+ |\n| **ESLint plugin compat** | Preview (experimental) | None |\n| **Type-aware linting** | Alpha via tsgolint | Stable via Biotype |\n| **Formatting** | Yes (oxfmt, alpha) | Yes (stable) |\n| **Single binary** | No (separate tools) | Yes |\n| **Memory efficiency** | Higher usage | Lower usage |\n\nOxlint is roughly 2x faster than Biome at linting, has way more rules available, and supports some ESLint plugins (experimental). But Biome wins on memory usage and the \"one tool does everything\" philosophy.\n\n### The Type-Aware Linting Difference\n\n**Biome's approach:** Custom type synthesizer (Biotype) reimplementing TypeScript's type checker in Rust. Single binary, no external dependencies, but every TS edge case must be reimplemented.\n\n**Oxlint's approach:** Uses tsgo (Microsoft's Go port of TypeScript) via tsgolint. 100% TypeScript compatibility, all 40+ typescript-eslint rules, but requires two binaries and is still alpha.\n\nEvan You [said it best](https://oxc.rs/blog/2025-12-08-type-aware-alpha): *\"Biome's type-aware linting cannot guarantee full coverage or behavior alignment with official TS.\"*\n\nBiome's approach is more mature right now. Oxlint's tsgolint is still alpha. Pick your tradeoff.\n\n## Migration: How Hard Is It Really?\n\n### Option 1: Full Replace\n\n**Best for:** Small to medium projects, greenfield codebases\n\n```bash\nnpm install -D oxlint\nnpx @oxlint/migrate  # Auto-migrate ESLint config\nnpx oxlint\n```\n\n**Trade-offs:** 50-100x faster, simple config, but you might lose niche ESLint rules and custom plugins won't work yet.\n\n### Option 2: Parallel Approach (Recommended)\n\n**Best for:** Large codebases, teams with heavy ESLint customization\n\nThis is what Mercedes-Benz did.\n\n```bash\nnpm install -D oxlint eslint-plugin-oxlint\n```\n\n```javascript\n// eslint.config.js\nimport oxlint from 'eslint-plugin-oxlint';\n\nexport default [\n  ...yourExistingConfig,\n  oxlint.configs['flat/recommended'], // Prevents duplicate errors\n];\n```\n\n```json\n\"lint\": \"oxlint && eslint .\"\n```\n\nOxlint runs first (fast feedback <1s), ESLint catches what Oxlint missed. You get speed AND comprehensive coverage.\n\n**Note on type-aware linting:** Oxlint's `--type-aware` flag (via `oxlint-tsgolint`) is still alpha. Unless you're okay with experimental software, keep typescript-eslint for now.\n\n## Common Pitfalls\n\n**Missing rules aren't obvious:** Oxlint silently skips unsupported rules. Run both linters in parallel initially to catch gaps.\n\n**Custom ESLint plugins:** JavaScript plugin support is [in preview](https://oxc.rs/blog/2025-10-09-oxlint-js-plugins.html) but not production-ready. Keep ESLint for custom rules.\n\n**Type-aware linting is alpha:** Memory usage can spike, bugs exist. Stick with ESLint for type-aware rules until tsgolint stabilizes.\n\n## When Should You Actually Use Oxlint?\n\n**Choose Oxlint if:**\n- You need maximum speed (2x faster than Biome, 50-100x faster than ESLint)\n- You want gradual migration (run alongside ESLint)\n- You need broad rule coverage (670+ rules)\n- You're in the Vite/Vue ecosystem (same team, shared tooling)\n\n**Don't choose Oxlint if:**\n- You need stable type-aware linting today (use Biome or ESLint)\n- You rely heavily on custom ESLint plugins (experimental support)\n- You want one unified tool (Biome does linting + formatting)\n- You're risk-averse about tooling changes (ESLint is 13 years old, battle-tested)\n\n## The Honest Take\n\nESLint and Prettier have been amazing. They've served us well for over a decade. But they're built on JavaScript running in a single thread, and there's only so fast you can make that.\n\nBiome proved that Rust-based tooling could work. Oxlint is pushing even harder on speed and ESLint compatibility.\n\n**Should you switch today?**\n\nIf you're starting a new project and want to live on the edge, go full Oxlint. Just know you're an early adopter.\n\nThe best tool is the one that solves your actual problem. Run the benchmarks on your codebase. Check if it covers your rules. Then decide.\n\n---\n\n**Next up:** [Part 2](https://dev.to/vishdevwork/oxfmt-the-prettier-compatible-formatter-thats-30x-faster-40jp) where we'll dig into Oxfmt (the formatter) and how it compares to Prettier and Biome. Spoiler: it's fast. Really fast.\n\n**Try it yourself:**\n- [Oxlint docs](https://oxc.rs/docs/guide/usage/linter)\n- [Official benchmarks](https://github.com/oxc-project/bench-linter)\n\n**Got questions? Benchmarks from your codebase?** Drop them in the comments. I actually read them (clearly, since that's why this post exists).",
      canonical_url:
        "https://coderlegion.com/11628/oxlint-js-linter-thats-actually-fast-enough-to-matter",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1ugkg9573scd0elhrpbv.png",
      description:
        "So here's the thing about my last Biome blog post, the comments section(on Reddit) turned into a mini...",
      id: 3255708,
      page_views_count: 99,
      path: "/vishdevwork/oxlint-js-linter-thats-actually-fast-enough-to-matter-4094",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2026-02-14T07:00:55.207Z",
      published_timestamp: "2026-02-14T07:00:55Z",
      reading_time_minutes: 5,
      slug: "oxlint-js-linter-thats-actually-fast-enough-to-matter-4094",
      tag_list: ["webdev", "tooling", "linting", "codequality"],
      title: "Oxlint: JS Linter That's Actually Fast Enough to Matter",
      type_of: "article",
      url: "https://dev.to/vishdevwork/oxlint-js-linter-thats-actually-fast-enough-to-matter-4094",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "If you've spent any time in the JavaScript ecosystem, you know the drill: install ESLint, configure it, install Prettier, configure it, make them play nice together, figure out why they're fighting, and then do it all over again every new project. It's exhausting.\n\nBiome is an attempt to fix that.\n\n---\n\n## What Is Biome?\n\n[Biome](https://biomejs.dev/) is a fast, all-in-one toolchain for web projects. It handles formatting and linting — the two things most JS/TS devs reach for ESLint and Prettier to do — in a single tool, written in Rust.\n\nThe short pitch: run one command, get your code formatted *and* linted, no plugin wrangling required.\n\nIt supports JavaScript, TypeScript, JSX, TSX, JSON, CSS, GraphQL, and HTML out of the box. No extra packages needed for any of those.\n\nBiome started as a fork of Rome (which is now archived), but it's been actively developed since and has diverged quite a bit. More on that in a moment.\n\n---\n\n## How Does It Compare?\n\n### vs. Prettier\n\nPrettier is the go-to formatter for most JS projects. It works well, but it's slow on large codebases and offers almost no configuration by design (which can be a plus or a minus depending on who you ask).\n\nBiome's formatter is **~35x faster than Prettier** when formatting large codebases. It also scores 97% compatibility with Prettier's output, so switching is mostly painless. The small differences are mostly edge cases you probably won't hit day-to-day.\n\nOne practical win: Biome can format malformed or incomplete code too. Prettier will just bail out. That matters if you want format-on-save to work mid-edit.\n\n### vs. ESLint\n\nESLint is incredibly powerful and flexible — and that's also its biggest downside. Configuring ESLint from scratch, especially with TypeScript support, plugins like `eslint-plugin-react` or `@typescript-eslint`, and making it all play together, takes time and breaks silently.\n\nBiome ships with 434 lint rules covering JavaScript, TypeScript, JSX, CSS, and GraphQL. A meaningful chunk of those come from ESLint and typescript-eslint directly. You don't need to install separate plugins to get them.\n\nThat said, ESLint's plugin ecosystem is massive. If you rely on niche plugins (custom framework rules, accessibility plugins, etc.), Biome might not cover all of them yet.\n\n### vs. Rome\n\nRome was the original vision for a unified JS toolchain. Development stalled, the project was archived, and Biome was forked from it in 2023 by former contributors. Biome is actively maintained, has a growing community, and is used in production by companies like Cloudflare, Vercel, Canonical, and Discord.\n\nIf you were waiting on Rome, Biome is essentially what that promised to be.\n\n---\n\n## Getting Started\n\nInstall it:\n\n```bash\nnpm install --save-dev --save-exact @biomejs/biome\n```\n\nInitialize a config file:\n\n```bash\nnpx @biomejs/biome init\n```\n\nThis creates a `biome.json` in your project root. The defaults are sensible — you don't *have* to touch it.\n\n### Format your code\n\n```bash\nnpx @biomejs/biome format --write ./src\n```\n\n### Lint your code\n\n```bash\nnpx @biomejs/biome lint --write ./src\n```\n\n### Or do both at once\n\n```bash\nnpx @biomejs/biome check --write ./src\n```\n\nThat's it. No plugins, no peer dependency conflicts, no `.eslintignore` + `.prettierignore` duplication.\n\n### What the config looks like\n\nA minimal `biome.json` might look like this:\n\n```json\n{\n  \"$schema\": \"https://biomejs.dev/schemas/1.9.4/schema.json\",\n  \"organizeImports\": {\n    \"enabled\": true\n  },\n  \"linter\": {\n    \"enabled\": true,\n    \"rules\": {\n      \"recommended\": true\n    }\n  },\n  \"formatter\": {\n    \"indentStyle\": \"space\",\n    \"indentWidth\": 2,\n    \"lineWidth\": 100\n  }\n}\n```\n\nCompare that to a typical ESLint + Prettier + TypeScript setup with separate config files, `.prettierrc`, `eslint.config.js`, and a handful of `devDependencies`. The difference in cognitive overhead is real.\n\n### Error output is actually readable\n\nOne thing worth calling out: Biome's diagnostics are genuinely good. Here's an example of what a lint error looks like:\n\n```js\n// ✖ Biome lint warning: lint/complexity/useFlatMap\n// The call chain .map().flat() can be replaced with .flatMap()\n\n// Before\narray.map(sentence => sentence.split(' ')).flat();\n\n// After (safe fix)\narray.flatMap(sentence => sentence.split(' '));\n```\n\nIt tells you what's wrong, where it is, why it matters, and shows you the fix. Most ESLint errors don't do that — you often end up Googling the rule name to understand what it actually wants.\n\n---\n\n## Editor Integration\n\nBiome has first-party extensions for VS Code, Zed, IntelliJ, Neovim, and Helix. Format-on-save works out of the box after installing the extension and pointing it to your project's `biome.json`.\n\nIf your team uses VS Code, you can commit a `.vscode/settings.json` that sets Biome as the default formatter, so everyone's on the same setup automatically.\n\n---\n\n## When Should You Use Biome?\n\nBiome is a great fit if:\n\n- You're starting a new JS/TS project and want formatting + linting without a bunch of config overhead\n- Your team spends more time configuring tools than writing code\n- You work with large codebases where Prettier's speed is noticeable in CI\n- You want consistent tooling without bikeshedding over ESLint plugin choices\n\nIt's probably *not* the right fit yet if:\n\n- You rely heavily on niche ESLint plugins (think `eslint-plugin-jsx-a11y`, framework-specific rules, etc.) that Biome doesn't have equivalents for\n- Your team has a deeply customized ESLint config that took months to get right and works well\n\n---\n\n## Bottom Line\n\nBiome isn't trying to replace ESLint for every use case. But for a lot of standard JS/TS projects, it covers 90%+ of what you actually need from ESLint and Prettier combined — and it does it faster, with less config, and with better error output.\n\nIf you find yourself re-doing the ESLint + Prettier setup dance on every new project, it's worth giving Biome a shot. Run `npx @biomejs/biome init` in your next project and see how far the defaults get you.\n\nChances are, pretty far.",
      canonical_url:
        "https://coderlegion.com/11386/biome-replace-eslint-prettier-with-one-tool",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxeygxdkb51e9ou11jx3l.png",
      description:
        "If you've spent any time in the JavaScript ecosystem, you know the drill: install ESLint, configure...",
      id: 3246832,
      page_views_count: 83,
      path: "/vishdevwork/biome-replace-eslint-prettier-with-one-tool-3gaa",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2026-02-10T15:25:54.258Z",
      published_timestamp: "2026-02-10T15:25:54Z",
      reading_time_minutes: 4,
      slug: "biome-replace-eslint-prettier-with-one-tool-3gaa",
      tag_list: ["biome", "developertools", "typescript", "codequality"],
      title: "Biome: Replace ESLint + Prettier With One Tool",
      type_of: "article",
      url: "https://dev.to/vishdevwork/biome-replace-eslint-prettier-with-one-tool-3gaa",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "Upload your resume. Get 4-6 strategic career paths. Pick one. Get a month-by-month roadmap to get there.\n\nThat's NextRole. That's it. That's the whole thing.\n\nNo job boards. No generic AI advice. No \"let me tell you about a PM role.\" Just **actual analysis of your specific background** + **a concrete plan forward** that reads like a career strategist made it (because, well, the AI kind of did).\n\n## Show Me Proof\n\n### Step 1: Upload Your Resume\n![NextRole Landing Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6yg3utbeg9rj5oj3v023.png)\n\n\nPaste your resume text or upload a PDF. The AI extracts what matters: your role, experience, tech stack, strengths. Takes 10 seconds.\n\n\n![Resume Upload Interface](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t4ebl5uf4q9tznwarn6w.png)\n\nSee something wrong? Edit it. That's YOUR profile.\n\n\n![Extracted Career Profile](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rvhflm1q9p32m6payrns.png)\n\n### Step 2: See Your Options (This Is The Money Part)\n\n![Career Paths Carousel](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jxhtg2e0h68ycd1i5rtq.png)\n\nFour to six career paths appear. Each one is ranked by:\n- **Market demand** - How many jobs are actually hiring for this?\n- **Fit score** - How well does this match YOU?\n\nThese aren't \"you could *maybe* do this.\" These are \"here's what the market wants + here's what you're ready for.\"\n\nPick the one that excites you.\n\n### Step 3: Get Your Roadmap (The Actual Plan)\n\n![Detailed Career Path Analysis](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l9kc5lsxpkzz5b3t36rq.png)\n\nThis is where it gets real. You get:\n- **Why this path fits you** (specific to your background)\n- **What skills you're missing** (gaps, ranked by priority)\n- **A month-by-month plan for the next 6-12 months** - Not \"learn React.\" Actual projects. Milestones. Certifications. Timelines.\n\nPrint it. Share it. Live by it.\n\n## Why This Beats Everything Else\n\nMost career tools suck because they're either **too generic** (\"you could be a manager\") or **too salesy** (\"check out these 400 jobs\"). NextRole is different:\n\n- **Personalized to you.** Not a template. Not generic advice. Your actual background, your actual options.\n- **Built by vibe.** This is lovingly crafted code, not some enterprise bloatware. It's fast. It's clean. It works.\n- **Tells you what's real.** Market demand scores aren't made up. Skill gaps are specific. Paths are viable.\n\n## Try It Right Now\n\n**No credit card. No sign-up. No BS.**\n\n[Open NextRole →](https://my-next-role.vercel.app/)\n\nCan't decide? Try a sample resume (there are 4). Or use mock mode to test without API keys.\n\nSeriously, you can be done in 3 minutes.\n\n## For The Curious Types\n\nBuilt with Next.js + TypeScript. AI-powered by Gemini or Deepseek. Open source. [Check out the code.](https://github.com/vkondi/next-role)",
      canonical_url: "https://coderlegion.com/9965/your-next-role",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F90yrkaf1euei3gtzglc6.png",
      description:
        "Upload your resume. Get 4-6 strategic career paths. Pick one. Get a month-by-month roadmap to get...",
      id: 3188038,
      page_views_count: 9,
      path: "/vishdevwork/your-next-role-planned-with-clarity-2h6g",
      positive_reactions_count: 1,
      public_reactions_count: 1,
      published: true,
      published_at: "2026-01-21T12:56:55.323Z",
      published_timestamp: "2026-01-21T12:56:55Z",
      reading_time_minutes: 2,
      slug: "your-next-role-planned-with-clarity-2h6g",
      tag_list: ["nextrole", "careerpaths", "ai", "career"],
      title: "Your Next Role, Planned With Clarity",
      type_of: "article",
      url: "https://dev.to/vishdevwork/your-next-role-planned-with-clarity-2h6g",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "Hey there! So you're building a React app with TypeScript and Vite, and you keep hearing people talk about CI/CD and GitHub Actions. What's all the fuss about? Let me break it down for you in plain English.\n\n## What's GitHub Actions Anyway?\n\nThink of GitHub Actions as your automation buddy that lives in your GitHub repo. You tell it \"hey, whenever I push code, run my tests and make sure nothing broke,\" and it just... does it. Automatically. While you grab coffee(or chai) or work on something else.\n\nPretty cool, right? Here's what makes it awesome:\n\n**It's automatic** - No more remembering to run tests before you push. Your automation buddy handles it.\n\n**It's consistent** - Everyone's code gets tested the same way, every single time. No more \"but it works on my machine!\"\n\n**It's free** - GitHub gives you a generous amount of free minutes every month. For most personal projects, you won't pay a dime.\n\n**It's built-in** - Everything happens right in GitHub. No need to sign up for yet another service.\n\n## The Basics (Don't Worry, It's Simple!)\n\nBefore we jump into code, let's get familiar with a few terms:\n\n**Workflows** are like recipes. They're files that tell GitHub Actions what to do. You write them in a language called YAML (it's just a fancy text format, nothing scary).\n\n**Events** are triggers. \"When someone pushes code\" or \"when someone opens a pull request\" - these are events that kick off your workflow.\n\n**Jobs** are the big tasks in your recipe. Like \"build the app\" or \"run tests.\" Each job runs on its own fresh computer in the cloud.\n\n**Steps** are the small tasks inside a job. Things like \"install dependencies\" or \"run the linter.\"\n\n**Actions** are pre-made shortcuts. Instead of writing commands to set up Node.js from scratch, you can use an action someone else already made. It's like using a package from npm, but for your workflows.\n\n## Let's Build Your First Workflow!\n\nAlright, enough theory. Let's make something real. We're going to create a workflow that checks your code every time you push or open a pull request.\n\n### Creating the File\n\nFirst, make a new folder in your project: `.github/workflows/`. Yes, it starts with a dot - that's on purpose!\n\nInside that folder, create a file called `ci.yml`. Here's what goes in it:\n\n```yaml\nname: CI Pipeline\n\non:\n  push:\n    branches: [ main, develop ]\n  pull_request:\n    branches: [ main, develop ]\n\npermissions:\n  contents: read\n\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    \n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v4\n      \n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n          cache: 'npm'\n      \n      - name: Install dependencies\n        run: npm ci\n      \n      - name: Run linter\n        run: npm run lint\n      \n      - name: Type check\n        run: npm run type-check\n      \n      - name: Build project\n        run: npm run build\n      \n      - name: Run tests\n        run: npm test\n```\n\n### What's All This Mean?\n\nLet me walk you through it:\n\n**name: CI Pipeline** - Just a friendly name for your workflow. You'll see it in the GitHub interface.\n\n**on:** - This is where you say \"run this when...\" In our case, we're saying \"run when someone pushes to main or develop, OR when someone opens a pull request.\"\n\n**permissions:** - This is important! We're telling GitHub \"hey, this workflow only needs permission to read our code, nothing else.\" It's like giving someone a library card instead of the keys to the building. Good security practice!\n\n**jobs:** - Here's where the actual work happens. We've got one job called \"build-and-test.\"\n\n**runs-on: ubuntu-latest** - This means \"run on a computer with Ubuntu Linux.\" GitHub provides this for free!\n\n**steps:** - These are the actual commands that run, one after another:\n  - First, we grab the code\n  - Then we install Node.js\n  - Install our dependencies\n  - Run the linter to check code style\n  - Check for TypeScript errors\n  - Build the project\n  - Run our tests\n\n### Setting Up Your package.json\n\nYour `package.json` needs to have these scripts for the workflow to work:\n\n```json\n{\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"tsc && vite build\",\n    \"lint\": \"eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0\",\n    \"type-check\": \"tsc --noEmit\",\n    \"test\": \"vitest run\",\n    \"preview\": \"vite preview\"\n  }\n}\n```\n\nDon't have ESLint or Vitest set up yet? No worries - you can skip those steps in your workflow for now and add them later.\n\n## Want to Deploy Automatically Too?\n\nOnce your tests pass, you might want to deploy your app. Here's a workflow that deploys to GitHub Pages:\n\n```yaml\nname: Deploy to GitHub Pages\n\non:\n  push:\n    branches: [ main ]\n\npermissions:\n  contents: read\n  pages: write\n  id-token: write\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    \n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v4\n      \n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n          cache: 'npm'\n      \n      - name: Install dependencies\n        run: npm ci\n      \n      - name: Build project\n        run: npm run build\n      \n      - name: Upload artifact\n        uses: actions/upload-pages-artifact@v3\n        with:\n          path: ./dist\n  \n  deploy:\n    needs: build\n    runs-on: ubuntu-latest\n    environment:\n      name: github-pages\n      url: ${{ steps.deployment.outputs.page_url }}\n    \n    steps:\n      - name: Deploy to GitHub Pages\n        id: deployment\n        uses: actions/deploy-pages@v4\n```\n\nThis one's a bit different - it has TWO jobs. The second job (deploy) waits for the first one (build) to finish successfully. That `needs: build` line is what makes that happen.\n\n## Making It Faster with Caching\n\nWant your workflows to run faster? Good news - the `actions/setup-node@v4` action we're using already caches your npm packages when you add `cache: 'npm'`. That means the second time your workflow runs, it won't have to download all your dependencies again. Pretty smart!\n\n## Keeping Secrets... Secret\n\nSometimes you need API keys or passwords in your builds. DON'T put them directly in your workflow file - that's like posting your house keys on Instagram.\n\nInstead, use GitHub's secrets feature:\n\n1. Go to your repo's Settings\n2. Click on \"Secrets and variables\" then \"Actions\"\n3. Click \"New repository secret\"\n4. Add your secret (like `VITE_API_KEY`)\n\nThen use it in your workflow like this:\n\n```yaml\n- name: Build project\n  run: npm run build\n  env:\n    VITE_API_KEY: ${{ secrets.VITE_API_KEY }}\n```\n\nGitHub will hide it in the logs automatically. Nice!\n\n## Checking If It's Working\n\nAfter you push your workflow file to GitHub:\n\n1. Click the \"Actions\" tab in your repo\n2. You'll see your workflow running (or done running)\n3. Click on it to see all the details\n4. If something breaks, click on the red X to see what went wrong\n\nThe logs tell you EXACTLY what happened at each step. It's super helpful for debugging.\n\n## Understanding Workflow Permissions\n\nQuick important thing - see that `permissions` block we added? That's like setting up proper door locks for your house. \n\nBy default, workflows might have way more permissions than they need. We're being explicit and saying \"this workflow only needs to READ the code\" with `contents: read`. If later you need to do something like comment on pull requests, you'd add `pull-requests: write`.\n\nIt's just a good habit to be clear about what your workflow can and can't do. Your future self (and your team) will thank you!\n\n## Some Quick Tips\n\nHere are a few things that'll make your life easier:\n\n**Set permissions explicitly** - Like we just talked about, always add that `permissions` block. Start with `contents: read` and only add more when you need it.\n\n**Use version tags** - Notice how we use `@v4` in our actions? That's better than using `@main` because it won't suddenly change on you. Your workflows stay stable.\n\n**Use `npm ci` not `npm install`** - In automated environments, `npm ci` is faster and more reliable. It's designed specifically for CI/CD.\n\n**Run jobs in parallel** - If you have multiple jobs that don't depend on each other, they'll run at the same time. Saves time!\n\n**Add a badge to your README** - In the Actions tab, you can grab a badge that shows if your build is passing. It looks professional!\n\n**Test different Node versions** - You can use something called a matrix to test on Node 18, 20, and 21 all at once. Here's how:\n\n```yaml\nstrategy:\n  matrix:\n    node-version: [18, 20, 21]\n```\n\n**Protect your main branch** - In your repo settings, you can require that all checks pass before merging. No more broken builds!\n\n**Separate your workflows** - Keep your testing workflow separate from your deployment workflow. Makes things easier to understand and manage.\n\n## When Things Go Wrong\n\nDon't panic! Here are common issues and fixes:\n\n**Workflow not running?** - Check that your YAML file is in `.github/workflows/` and that you don't have any syntax errors. YAML is picky about spaces and indentation.\n\n**Works on your computer but not in CI?** - Make sure all your dependencies are listed in `package.json`. Also check that you're not relying on environment variables that only exist on your machine.\n\n**Running out of build minutes?** - Public repos get unlimited minutes! Private repos have limits. Check your usage in Settings → Billing.\n\n## What's Next?\n\nYou now know the basics! Here are some cool things to explore when you're ready:\n\n- Browse the GitHub Marketplace for actions other people have made\n- Set up notifications to Slack or Discord when builds fail\n- Add code coverage reporting\n- Create custom actions for your specific needs\n- Try matrix builds to test across multiple environments\n\nThe key is to start simple - get your basic testing pipeline working - then add more features as you need them. Don't try to do everything at once!\n\n## Wrapping Up\n\nGitHub Actions might seem a bit intimidating at first, but once you get the hang of it, you'll wonder how you lived without it. No more forgetting to run tests. No more \"oops, I broke main.\" Just push your code and let your automation buddy do its thing.\n\nStart with the simple CI workflow we built together, make sure it works, and then gradually add more automation as you get comfortable. Before you know it, you'll be the GitHub Actions expert on your team!\n\nHappy automating! 🚀",
      canonical_url:
        "https://coderlegion.com/8878/hello-world-to-github-actions-your-first-automated-workflow",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcl2ebqrnqqp9g8k16dch.png",
      description:
        "Hey there! So you're building a React app with TypeScript and Vite, and you keep hearing people talk...",
      id: 3126160,
      page_views_count: 59,
      path: "/vishdevwork/hello-world-to-github-actions-your-first-automated-workflow-9fe",
      positive_reactions_count: 1,
      public_reactions_count: 1,
      published: true,
      published_at: "2025-12-25T06:38:02.486Z",
      published_timestamp: "2025-12-25T06:38:02Z",
      reading_time_minutes: 7,
      slug: "hello-world-to-github-actions-your-first-automated-workflow-9fe",
      tag_list: ["githubactions", "cicd", "automation", "devops"],
      title: "Hello World to GitHub Actions: Your First Automated Workflow",
      type_of: "article",
      url: "https://dev.to/vishdevwork/hello-world-to-github-actions-your-first-automated-workflow-9fe",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "After interviewing many React developers, I’ve realized that interviews aren’t about catching people off-guard or seeing what they don’t know. What I really want is to understand how someone thinks, how they approach problems, and how they’ve grown through their experiences.\n\nThese are the areas I naturally pay attention to, not because I expect perfection, but because they give me a clearer picture of someone’s comfort level with real-world frontend development.\n\n---\n\n## **1. JavaScript Fundamentals: The First Filter**\n\nBefore I ask anything about React, I look for solid JavaScript fundamentals.\n\nNot trivia. Not trick questions.\nBut questions that reveal understanding of:\n\n* closures\n* async/await & the event loop\n* immutability\n* objects vs references\n* array/object manipulation\n\nWeak JavaScript always shows up later as weak React.\n\n**Strong JS tells me the candidate can reason about UI behavior without stumbling into guesswork.**\n\n---\n\n## **2. HTML & CSS Mastery: The Underestimated Skill**\n\nA surprising number of candidates can’t structure accessible HTML or reason about CSS specificity.\n\nSo I pay attention to:\n\n* semantic markup\n* flex/Grid awareness\n* responsive thinking\n* accessibility basics\n\nBecause at the end of the day, React renders HTML and CSS—not magic.\n\n**Their approach here reveals whether they can build interfaces that are clean, accessible, and production-ready.**\n\n---\n\n## **3. React Fundamentals: Depth Over Definitions**\n\nWhen I ask about reconciliation, controlled inputs, keys, or component composition, I’m not testing memory.\n\nI’m testing **understanding**.\n\nI want to see if candidates genuinely know why React behaves the way it does—not just that “it re-renders sometimes.”\n\n**Clear reasoning here shows me they can prevent issues before they appear.**\n\n---\n\n## **4. Hooks: The Real Difference-Maker**\n\nHooks expose a developer’s thought process instantly.\n\nSo I probe their understanding of:\n\n* dependency arrays\n* stale closures\n* memoization logic\n* custom hooks for reusability\n\nThe best candidates don’t just know how to use hooks—they know why hooks behave the way they do.\n\n**Good hook explanations show they understand state, side effects, and component lifecycles on a deeper level.**\n\n---\n\n## **5. State Management: Architectural Thinking**\n\nThis is where seniority becomes obvious.\n\nStrong candidates can explain:\n\n* when to use Context vs Redux vs Zustand\n* the difference between server state and client state\n* caching strategies\n* selectors and memoization\n\nAverage candidates choose tools.\nSenior candidates justify them.\n\n**Their choices here reveal their architectural maturity and thoughtfulness.**\n\n---\n\n## **6. Deep Understanding of Their Own Project**\n\nThis is the biggest differentiator.\n\nI don’t want a tour of their GitHub.\nI want to see:\n\n* how data flows in their app\n* what patterns they use\n* how they handle performance challenges\n* how they break down large features\n* why they made architectural decisions\n\nIf someone can’t explain their own application clearly, I can immediately tell they weren’t involved deeply.\n\n**The depth of their explanation tells me how involved they really were and how well they understand complex systems.**\n\n---\n\n## **7. Performance Optimization: The Senior Signal**\n\nI often ask questions like:\n\n* “Why does this component re-render?”\n* “How would you optimize this list?”\n* “Where would memoization help—or hurt?”\n\nGreat engineers don’t jump to `useMemo` blindly.\nThey talk about *causes*, not just *fixes*.\n\n**Their approach here shows whether they can keep an app fast, even at scale.**\n\n---\n\n## **8. Architecture & Design Thinking**\n\nI always look at how candidates:\n\n* structure folders\n* break down components\n* avoid props drilling\n* design for reusability\n* handle side effects\n\nReact is just a UI layer—architecture is the real skill.\n\n**This part reveals how they operate inside large, evolving codebases.**\n\n---\n\n## **9. TypeScript: The Modern Essential**\n\nMost interviews now include TypeScript.\n\nI check whether candidates can:\n\n* type props\n* type hooks\n* use utility types\n* handle API responses safely\n\nI’m not looking for TS gurus.\nI’m looking for engineers who understand how TS reduces runtime bugs.\n\n**Good TS habits tell me they write safer, more predictable UI code.**\n\n---\n\n## **10. Async Logic & Real-World Scenarios**\n\nThis is where many candidates stumble.\n\nI want to hear how they handle:\n\n* loading & error states\n* retries and fallback UI\n* parallel requests\n* data caching (TanStack Query is a big plus)\n* Suspense in modern React\n\n**How they think about async workflows tells me whether they can build resilient user experiences.**\n\n---\n\n## **11. Testing: The Sign of a Mature Engineer**\n\nI listen for:\n\n* understanding of React Testing Library\n* mocking strategies\n* testing asynchronous behavior\n* testing components using context/hooks\n\nTests say a lot about the engineer writing them.\n\n**Their testing mindset shows how much they value long-term stability.**\n\n---\n\n## **12. Awareness of React 19+**\n\nEven if they haven’t used it, awareness of:\n\n* server components\n* actions\n* Suspense improvements\n* transitions\n\n…shows they’re staying relevant.\n\n**Staying updated tells me they’re committed to evolving with the ecosystem—not stuck in old patterns.**\n\n---\n\n## **Final Thoughts: What Truly Stands Out**\n\nWhen you interview someone, you do not expect them to know everything.\nI certainly don’t know everything myself.\n\nWhat I appreciate most is:\n* clarity\n* reasoning\n* technical humility\n* strong fundamentals\n* an ability to explain their decisions\n* and real ownership of the projects they’ve built\n\nThose are the candidates who instantly stand out.\n\n\n----------------",
      canonical_url:
        "https://dev.to/vishdevwork/react-interviews-the-skills-that-really-matter-44pk",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdxi4bfp9fsz961nb76tc.png",
      description:
        "After interviewing many React developers, I’ve realized that interviews aren’t about catching people...",
      id: 3070716,
      page_views_count: 86,
      path: "/vishdevwork/react-interviews-the-skills-that-really-matter-44pk",
      positive_reactions_count: 1,
      public_reactions_count: 1,
      published: true,
      published_at: "2025-11-29T11:14:19.294Z",
      published_timestamp: "2025-11-29T11:14:19Z",
      reading_time_minutes: 4,
      slug: "react-interviews-the-skills-that-really-matter-44pk",
      tag_list: ["react", "interview", "frontend", "typescript"],
      title: "React Interviews: The Skills That REALLY Matter",
      type_of: "article",
      url: "https://dev.to/vishdevwork/react-interviews-the-skills-that-really-matter-44pk",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "Let’s be real: AI coding tools like Copilot, Cursor, and others are *game-changers*. They autocomplete code, suggest fixes, and even write entire functions for you. For new developers, this is like having a senior dev sitting next to you, whispering answers in your ear. But here’s the big question: **Are these tools making us better coders, or are they turning us into button-pushers who don’t understand what’s happening under the hood?**\n\n---\n\n## 🧩 **The Case for Concern: Are We Losing Our Edge?**\n\n\n![confused developer](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/280os06w21wkkw2z6bq5.jpg)\n\n### **1. The Logic Gap**\nBack in the day, if you wanted to write a sorting algorithm, you had to *understand* how sorting works. Now, you can just type `// sort this array` and let Copilot do the rest. That’s convenient, but what happens when the code breaks? If you don’t understand the logic, debugging becomes a game of guesswork.\n\n\n\n### **2. The Dependency Dilemma**\nAI tools are fantastic—until they’re not. What if you’re working on legacy code, or a niche language, or a system where AI suggestions are just *wrong*? Over-reliance on AI might leave developers scrambling when they need to think for themselves.\n\n### **3. The Learning Curve Paradox**\nFor beginners, AI tools can be a double-edged sword. On one hand, they lower the barrier to entry. On the other, they might skip the struggle that *teaches* you how to code. It’s like learning to drive with autopilot—great until you need to take the wheel.\n\n---\n\n## ⚙️ **The Flip Side: Why AI Tools Are a Net Positive**\n\n### **1. Democratizing Coding**\nNot everyone has the time or resources to spend years mastering coding. AI tools let more people build, create, and innovate without needing a PhD in computer science. That’s a win for diversity and accessibility in tech.\n\n### **2. Speed and Efficiency**\nLet’s face it: writing boilerplate code is *boring*. AI handles the repetitive stuff, freeing developers to focus on creative problem-solving and architecture. That’s where the real magic happens.\n\n### **3. Learning with a Safety Net**\nAI tools aren’t just for copying code—they’re for *learning*. Seeing how an AI solves a problem can spark curiosity. “Why did it suggest this?” “How does this function work?” Used right, AI can be a mentor, not just a crutch.\n\n---\n\n## ⚖️ **The Future: What’s Next?**\n\n\n\nAI tools aren’t going away—they’re only getting smarter. The real question isn’t *if* we should use them, but *how*. Here’s what the future could look like:\n\n- **Hybrid Learning:** Coding bootcamps and universities might integrate AI tools into curricula, teaching students *when* to use them and *when* to think for themselves.\n- **Better Debugging Tools:** AI could evolve to not just write code, but explain it—helping developers understand the “why” behind the “what.”\n- **New Kinds of Developers:** The role of a developer might shift from “person who writes code” to “person who designs systems and solves problems,” with AI handling the grunt work.\n\n---\n\n## 🌟 **Final Thoughts: Embrace the Change**\n\nAI coding tools are neither a curse nor a miracle—they’re just tools. Like any tool, their impact depends on how we use them. Will some developers rely too much on AI and miss out on deep learning? Probably. Will others use AI to become *even better* at what they do? Absolutely.\n\nThe key is balance. Use AI to speed up your work, but don’t let it replace your curiosity. Stay hungry, keep learning, and remember: the best developers aren’t the ones who write the most code—they’re the ones who understand it.\n\n---\n\n## 💬 What do you think? \nAre we heading towards a “logic-light” generation of coders, or are we just evolving into more creative builders?",
      canonical_url:
        "https://dev.to/vishdevwork/ai-coding-assistants-boon-or-bane-5h5f",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F14yob9slolkpzxw3nl5q.png",
      description:
        "Let’s be real: AI coding tools like Copilot, Cursor, and others are game-changers. They autocomplete...",
      id: 3003991,
      page_views_count: 40,
      path: "/vishdevwork/ai-coding-assistants-boon-or-bane-5h5f",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2025-11-08T14:18:24.846Z",
      published_timestamp: "2025-11-08T14:18:24Z",
      reading_time_minutes: 3,
      slug: "ai-coding-assistants-boon-or-bane-5h5f",
      tag_list: ["ai", "futureoftech", "codingassistants", "productivity"],
      title: "AI Coding Assistants: Boon or Bane?",
      type_of: "article",
      url: "https://dev.to/vishdevwork/ai-coding-assistants-boon-or-bane-5h5f",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        '_Part 3 of 3: Where Theory Meets Production_\n\nWelcome to the final part of our JSON Schema journey! We\'ve covered the theory and implementation – now let\'s see how JSON Schema solves real problems in production environments. Plus, we\'ll dive into HAL (Hypermedia Application Language) and how it plays beautifully with JSON Schema.\n\n## 1. API Validation Middleware (Your APIs\' Bodyguard)\n\nLet\'s build bulletproof API validation that catches bad data before it causes havoc:\n\n```typescript\nimport express from \'express\';\nimport Ajv from \'ajv\';\nimport addFormats from \'ajv-formats\';\n\nconst ajv = new Ajv({ allErrors: true });\naddFormats(ajv);\n\n// Generic validation middleware\nfunction validateRequest(schema: any, target: \'body\' | \'query\' | \'params\' = \'body\') {\n  const validate = ajv.compile(schema);\n  \n  return (req: any, res: any, next: any) => {\n    const dataToValidate = req[target];\n    \n    if (!validate(dataToValidate)) {\n      return res.status(400).json({\n        error: \'Validation failed\',\n        details: validate.errors?.map(err => ({\n          field: err.instancePath || err.params?.missingProperty,\n          message: err.message,\n          value: err.data\n        }))\n      });\n    }\n    \n    // Store validated data (with defaults applied!)\n    req.validatedData = dataToValidate;\n    next();\n  };\n}\n\n// Define your schemas\nconst createUserSchema = {\n  type: "object",\n  properties: {\n    name: { type: "string", minLength: 1, maxLength: 100 },\n    email: { type: "string", format: "email" },\n    age: { type: "number", minimum: 13, maximum: 120 },\n    role: { enum: ["user", "admin"], default: "user" }\n  },\n  required: ["name", "email", "age"],\n  additionalProperties: false\n};\n\nconst updateUserSchema = {\n  type: "object",\n  properties: {\n    name: { type: "string", minLength: 1, maxLength: 100 },\n    email: { type: "string", format: "email" },\n    age: { type: "number", minimum: 13, maximum: 120 }\n  },\n  minProperties: 1, // At least one field must be provided\n  additionalProperties: false\n};\n\n// Use in your routes\nconst app = express();\napp.use(express.json());\n\napp.post(\'/users\', \n  validateRequest(createUserSchema, \'body\'),\n  (req, res) => {\n    // req.validatedData contains clean, validated data\n    const user = createUser(req.validatedData);\n    res.json(user);\n  }\n);\n\napp.patch(\'/users/:id\', \n  validateRequest(updateUserSchema, \'body\'),\n  (req, res) => {\n    const userId = req.params.id;\n    const updates = req.validatedData;\n    const user = updateUser(userId, updates);\n    res.json(user);\n  }\n);\n\n// Query parameter validation too!\nconst searchSchema = {\n  type: "object",\n  properties: {\n    q: { type: "string", minLength: 1 },\n    page: { type: "string", pattern: "^[1-9]\\\\d*$", default: "1" },\n    limit: { type: "string", pattern: "^(10|25|50|100)$", default: "25" }\n  },\n  required: ["q"],\n  additionalProperties: false\n};\n\napp.get(\'/search\', \n  validateRequest(searchSchema, \'query\'),\n  (req, res) => {\n    const { q, page, limit } = req.validatedData;\n    const results = searchUsers(q, parseInt(page), parseInt(limit));\n    res.json(results);\n  }\n);\n```\n\n## 2. Data Pipeline Validation (ETL with Confidence)\n\nWhen processing large datasets, catching bad data early saves hours of debugging:\n\n```typescript\n// data-pipeline.ts\nimport Ajv from \'ajv\';\nimport addFormats from \'ajv-formats\';\n\nconst ajv = new Ajv({ allErrors: true });\naddFormats(ajv);\n\n// Schema for incoming data records\nconst dataRecordSchema = {\n  type: "object",\n  properties: {\n    id: { \n      type: "string", \n      pattern: "^[A-Z]{2}[0-9]{6}$" // e.g., "AB123456"\n    },\n    timestamp: { \n      type: "string", \n      format: "date-time" \n    },\n    value: { \n      type: "number",\n      minimum: 0\n    },\n    category: { \n      enum: ["sales", "marketing", "support", "development"] \n    },\n    metadata: {\n      type: "object",\n      properties: {\n        source: { type: "string" },\n        confidence: { type: "number", minimum: 0, maximum: 1 }\n      },\n      required: ["source"],\n      additionalProperties: true // Allow extra metadata\n    }\n  },\n  required: ["id", "timestamp", "value", "category"],\n  additionalProperties: false\n};\n\nconst validateRecord = ajv.compile(dataRecordSchema);\n\ninterface ProcessingResult {\n  validRecords: any[];\n  invalidRecords: Array<{\n    record: any;\n    errors: string[];\n  }>;\n  stats: {\n    total: number;\n    valid: number;\n    invalid: number;\n    validationRate: number;\n  };\n}\n\nexport function processDataBatch(records: any[]): ProcessingResult {\n  const validRecords: any[] = [];\n  const invalidRecords: any[] = [];\n  \n  records.forEach((record, index) => {\n    if (validateRecord(record)) {\n      validRecords.push(record);\n    } else {\n      invalidRecords.push({\n        record,\n        errors: validateRecord.errors?.map(err => \n          `${err.instancePath || \'root\'}: ${err.message}`\n        ) || []\n      });\n    }\n  });\n  \n  const total = records.length;\n  const valid = validRecords.length;\n  const invalid = invalidRecords.length;\n  \n  return {\n    validRecords,\n    invalidRecords,\n    stats: {\n      total,\n      valid,\n      invalid,\n      validationRate: (valid / total) * 100\n    }\n  };\n}\n\n// Usage in your ETL process\nasync function runETL(inputFile: string) {\n  const rawData = await loadDataFromFile(inputFile);\n  const result = processDataBatch(rawData);\n  \n  console.log(`Processed ${result.stats.total} records:`);\n  console.log(`✅ Valid: ${result.stats.valid} (${result.stats.validationRate.toFixed(1)}%)`);\n  console.log(`❌ Invalid: ${result.stats.invalid}`);\n  \n  if (result.invalidRecords.length > 0) {\n    console.log(\'\\nInvalid records:\');\n    result.invalidRecords.slice(0, 5).forEach((invalid, i) => {\n      console.log(`Record ${i + 1}:`, invalid.errors.join(\', \'));\n    });\n  }\n  \n  // Process only valid records\n  await saveToDatabase(result.validRecords);\n  \n  // Log invalid records for investigation\n  if (result.invalidRecords.length > 0) {\n    await saveInvalidRecords(result.invalidRecords);\n  }\n}\n```\n\n## 3. HAL (Hypermedia Application Language) Schemas\n\nHAL makes your APIs self-describing with built-in navigation. Think JSON with links that tell clients what actions they can take next.\n\n### Basic HAL Structure & Schema\n\n```typescript\n// HAL link schema\nconst halLinkSchema = {\n  type: "object",\n  properties: {\n    href: { type: "string", format: "uri-reference" },\n    templated: { type: "boolean" },\n    type: { type: "string" }\n  },\n  required: ["href"],\n  additionalProperties: false\n};\n\n// Complete HAL resource schema\nconst halUserSchema = {\n  type: "object",\n  properties: {\n    // Resource data\n    id: { type: "number" },\n    name: { type: "string" },\n    email: { type: "string", format: "email" },\n    \n    // HAL links (required)\n    _links: {\n      type: "object",\n      properties: {\n        self: halLinkSchema,\n        edit: halLinkSchema,\n        delete: halLinkSchema\n      },\n      required: ["self"],\n      additionalProperties: halLinkSchema\n    },\n    \n    // HAL embedded resources (optional)\n    _embedded: {\n      type: "object",\n      properties: {\n        posts: {\n          type: "array",\n          items: {\n            type: "object",\n            properties: {\n              id: { type: "number" },\n              title: { type: "string" },\n              _links: {\n                type: "object",\n                properties: { self: halLinkSchema },\n                required: ["self"]\n              }\n            },\n            required: ["id", "title", "_links"]\n          }\n        }\n      }\n    }\n  },\n  required: ["id", "name", "_links"],\n  additionalProperties: false\n};\n```\n\n### HAL Response Builder\n\n```typescript\nimport Ajv from \'ajv\';\nconst ajv = new Ajv();\nconst validateHalUser = ajv.compile(halUserSchema);\n\nclass HalBuilder {\n  static user(user: any, baseUrl: string) {\n    const halUser = {\n      ...user,\n      _links: {\n        self: { href: `${baseUrl}/users/${user.id}` },\n        edit: { href: `${baseUrl}/users/${user.id}` },\n        posts: { href: `${baseUrl}/users/${user.id}/posts` }\n      }\n    };\n    \n    // Add embedded posts if available\n    if (user.posts?.length) {\n      halUser._embedded = {\n        posts: user.posts.map(post => ({\n          ...post,\n          _links: { self: { href: `${baseUrl}/posts/${post.id}` } }\n        }))\n      };\n    }\n    \n    if (!validateHalUser(halUser)) {\n      throw new Error(\'Invalid HAL resource\');\n    }\n    \n    return halUser;\n  }\n}\n\n// Usage in Express\napp.get(\'/users/:id\', async (req, res) => {\n  const user = await getUserById(req.params.id);\n  const baseUrl = `${req.protocol}://${req.get(\'host\')}`;\n  \n  res.json(HalBuilder.user(user, baseUrl));\n});\n```\n\n## 4. Testing Your Schemas (Because Bugs Hide in Edge Cases)\n\nDon\'t just validate production data – test your schemas themselves:\n\n```typescript\n// schema-tests.ts\nimport { describe, it, expect } from \'vitest\';\nimport Ajv from \'ajv\';\nimport addFormats from \'ajv-formats\';\nimport { halUserSchema, userRegistrationSchema } from \'./schemas\';\n\nconst ajv = new Ajv({ allErrors: true });\naddFormats(ajv);\n\ndescribe(\'User Registration Schema\', () => {\n  const validate = ajv.compile(userRegistrationSchema);\n  \n  it(\'should accept valid user data\', () => {\n    const validUser = {\n      username: "johndoe123",\n      email: "john@example.com",\n      password: "SecurePass123!",\n      age: 25\n    };\n    \n    expect(validate(validUser)).toBe(true);\n  });\n  \n  it(\'should reject invalid email\', () => {\n    const invalidUser = {\n      username: "johndoe123",\n      email: "not-an-email",\n      password: "SecurePass123!",\n      age: 25\n    };\n    \n    expect(validate(invalidUser)).toBe(false);\n    expect(validate.errors).toContainEqual(\n      expect.objectContaining({\n        instancePath: \'/email\',\n        message: \'must match format "email"\'\n      })\n    );\n  });\n  \n  it(\'should reject weak password\', () => {\n    const invalidUser = {\n      username: "johndoe123",\n      email: "john@example.com",\n      password: "weak",\n      age: 25\n    };\n    \n    expect(validate(invalidUser)).toBe(false);\n  });\n  \n  it(\'should apply defaults\', () => {\n    const userData = {\n      username: "johndoe123",\n      email: "john@example.com",\n      password: "SecurePass123!",\n      age: 25\n    };\n    \n    validate(userData);\n    expect(userData.preferences?.newsletter).toBe(false);\n    expect(userData.preferences?.theme).toBe(\'light\');\n  });\n});\n\ndescribe(\'HAL User Schema\', () => {\n  const validate = ajv.compile(halUserSchema);\n  \n  it(\'should accept valid HAL user\', () => {\n    const halUser = {\n      id: 123,\n      name: "Alice",\n      email: "alice@example.com",\n      createdAt: "2023-01-01T00:00:00.000Z",\n      _links: {\n        self: { href: "/users/123" },\n        edit: { href: "/users/123" }\n      }\n    };\n    \n    expect(validate(halUser)).toBe(true);\n  });\n  \n  it(\'should require _links.self\', () => {\n    const invalidHalUser = {\n      id: 123,\n      name: "Alice",\n      email: "alice@example.com",\n      _links: {\n        edit: { href: "/users/123" }\n      }\n    };\n    \n    expect(validate(invalidHalUser)).toBe(false);\n    expect(validate.errors).toContainEqual(\n      expect.objectContaining({\n        instancePath: \'/_links\',\n        message: "must have required property \'self\'"\n      })\n    );\n  });\n});\n```\n\n## 5. Pro Tips for Production Success\n\n### 1. Schema Versioning Strategy\n\n```typescript\n// Keep schemas versioned for backward compatibility\nconst schemas = {\n  \'v1\': {\n    user: userSchemaV1,\n    post: postSchemaV1\n  },\n  \'v2\': {\n    user: userSchemaV2,\n    post: postSchemaV2\n  }\n};\n\nfunction getValidator(resource: string, version: string = \'v2\') {\n  const schema = schemas[version]?.[resource];\n  if (!schema) {\n    throw new Error(`Schema not found: ${resource} v${version}`);\n  }\n  return ajv.compile(schema);\n}\n```\n\n### 2. Performance Monitoring\n\n```typescript\n// Monitor validation performance\nfunction createTimedValidator(schema: any, name: string) {\n  const validate = ajv.compile(schema);\n  \n  return (data: any) => {\n    const start = process.hrtime.bigint();\n    const result = validate(data);\n    const end = process.hrtime.bigint();\n    \n    const duration = Number(end - start) / 1000000; // Convert to milliseconds\n    console.log(`Validation ${name}: ${duration.toFixed(2)}ms`);\n    \n    return result;\n  };\n}\n```\n\n### 3. Schema Documentation Generation\n\n```typescript\n// Generate documentation from your schemas\nfunction generateSchemaDoc(schema: any, title: string) {\n  const doc = {\n    title,\n    properties: {},\n    required: schema.required || []\n  };\n  \n  for (const [prop, definition] of Object.entries(schema.properties || {})) {\n    doc.properties[prop] = {\n      type: definition.type,\n      description: definition.description || `${prop} field`,\n      required: schema.required?.includes(prop) || false,\n      example: generateExample(definition)\n    };\n  }\n  \n  return doc;\n}\n```\n\n## Wrapping Up the Series\n\nCongratulations! You\'ve journeyed from JSON Schema basics to production-ready implementations. Here\'s what you\'ve gained:\n\n- **Part 1**: Understanding JSON Schema fundamentals and YAML compatibility\n- **Part 2**: Mastering AJV implementation with advanced features and TypeScript integration\n- **Part 3**: Real-world patterns including API validation, ETL pipelines, and HAL hypermedia APIs\n\n### Your Next Steps\n\n1. **Start Small**: Pick one use case (maybe API validation) and implement it\n2. **Build Your Schema Library**: Create reusable schemas for your common data structures\n3. **Test Everything**: Write tests for both your schemas and your validation logic\n4. **Monitor Performance**: Keep an eye on validation performance in production\n5. **Document Your Schemas**: Good schemas are self-documenting, but examples help\n\n_You\'re now equipped to bring order to the chaos of unvalidated data. Go forth and validate with confidence!_ :rocket:\n\n---\n\n**Series Navigation:**\n\n- [Part 1: Understanding the Basics](https://dev.to/vishdevwork/update-json-schema-your-datas-new-best-friend-4k8k)\n- [Part 2: Implementation with AJV](https://dev.to/vishdevwork/json-schema-with-ajv-implementation-deep-dive-1cnn)\n- **Part 3: Real-World Applications & HAL** ← You are here',
      canonical_url:
        "https://dev.to/vishdevwork/json-schema-in-the-wild-real-world-applications-hal-3m1l",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxob4z2f4lnix8me3ko88.png",
      description:
        "Part 3 of 3: Where Theory Meets Production  Welcome to the final part of our JSON Schema journey!...",
      id: 2887550,
      page_views_count: 106,
      path: "/vishdevwork/json-schema-in-the-wild-real-world-applications-hal-3m1l",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2025-10-07T18:30:00.000Z",
      published_timestamp: "2025-10-07T18:30:00Z",
      reading_time_minutes: 6,
      slug: "json-schema-in-the-wild-real-world-applications-hal-3m1l",
      tag_list: ["jsonschema", "datavalidation", "ajv", "typescript"],
      title: "JSON Schema in the Wild: Real World Applications & HAL 🌍",
      type_of: "article",
      url: "https://dev.to/vishdevwork/json-schema-in-the-wild-real-world-applications-hal-3m1l",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        '*Part 2 of 3: Getting Your Hands Dirty*\n\nWelcome back! In [Part 1](https://dev.to/vishdevwork/update-json-schema-your-datas-new-best-friend-4k8k), we covered the basics of JSON Schema and why it\'s awesome. Now it\'s time to roll up our sleeves and implement some real validation with AJV (Another JSON Schema Validator) – the Swiss Army knife of JSON validation.\n\n## Why AJV Rules the Validation World\n\nAJV isn\'t just another validation library – it\'s THE validation library. Here\'s why developers love it:\n\n- **Blazingly Fast**: Compiles schemas to optimized JavaScript functions\n- **Fully Compliant**: Supports JSON Schema draft-07 and draft 2019-09\n- **Extensible**: Custom keywords, formats, and error messages\n- **TypeScript Ready**: Excellent TypeScript support out of the box\n\n## Getting Started: Installation and Basic Setup\n\n```bash\n# The essentials\nnpm install ajv\n\n# Optional but recommended additions\nnpm install ajv-formats ajv-errors ajv-keywords\n```\n\n```typescript\nimport Ajv from \'ajv\';\nimport addFormats from \'ajv-formats\';\n\n// Create your AJV instance\nconst ajv = new Ajv({ \n  allErrors: true,        // Collect all errors, not just the first\n  removeAdditional: true, // Remove additional properties\n  useDefaults: true       // Apply default values\n});\n\n// Add common formats (email, date, uri, etc.)\naddFormats(ajv);\n\n// Now you\'re ready to validate!\n```\n\n## Your First Real Validation\n\nLet\'s build something practical – a user registration validator:\n\n```typescript\nconst userRegistrationSchema = {\n  type: "object",\n  properties: {\n    username: {\n      type: "string",\n      minLength: 3,\n      maxLength: 20,\n      pattern: "^[a-zA-Z0-9_]+$"\n    },\n    email: {\n      type: "string",\n      format: "email"\n    },\n    password: {\n      type: "string",\n      minLength: 8,\n      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d)(?=.*[@$!%*?&])[A-Za-z\\\\d@$!%*?&]"\n    },\n    age: {\n      type: "number",\n      minimum: 13,\n      maximum: 120\n    },\n    preferences: {\n      type: "object",\n      properties: {\n        newsletter: { type: "boolean", default: false },\n        theme: { enum: ["light", "dark"], default: "light" }\n      },\n      additionalProperties: false\n    }\n  },\n  required: ["username", "email", "password", "age"],\n  additionalProperties: false\n};\n\n// Compile the schema (do this once, reuse many times)\nconst validateUser = ajv.compile(userRegistrationSchema);\n\n// Test it out\nfunction registerUser(userData: any) {\n  const valid = validateUser(userData);\n  \n  if (!valid) {\n    console.log(\'Validation failed:\');\n    validateUser.errors?.forEach(error => {\n      console.log(`- ${error.instancePath}: ${error.message}`);\n    });\n    return null;\n  }\n  \n  console.log(\'✅ User data is valid!\');\n  return userData; // Now with defaults applied!\n}\n\n// Try it\nconst newUser = {\n  username: "coolguy123",\n  email: "cool@example.com",\n  password: "SuperSecret123!",\n  age: 25\n};\n\nregisterUser(newUser);\n// ✅ User data is valid!\n// Note: preferences.newsletter and preferences.theme get default values\n```\n\n## Advanced AJV Features That\'ll Blow Your Mind\n\n### 1. Custom Keywords\nSometimes the built-in validation isn\'t enough. Let\'s create a custom keyword:\n\n```typescript\n// Add a custom "isAdult" keyword\najv.addKeyword({\n  keyword: \'isAdult\',\n  type: \'number\',\n  schemaType: \'boolean\',\n  compile(schemaVal) {\n    return function validate(data) {\n      if (schemaVal) {\n        return data >= 18;\n      }\n      return true;\n    }\n  },\n  errors: false,\n  metaSchema: {\n    type: "boolean"\n  }\n});\n\n// Use it in a schema\nconst adultSchema = {\n  type: "object",\n  properties: {\n    age: { \n      type: "number", \n      isAdult: true \n    }\n  }\n};\n\nconst validateAdult = ajv.compile(adultSchema);\nconsole.log(validateAdult({ age: 17 })); // false\nconsole.log(validateAdult({ age: 21 })); // true\n```\n\n### 2. Conditional Validation\nReal-world data often has complex relationships. AJV handles this beautifully:\n\n```typescript\nconst conditionalSchema = {\n  type: "object",\n  properties: {\n    userType: { enum: ["admin", "user", "guest"] },\n    permissions: { \n      type: "array",\n      items: { type: "string" }\n    },\n    adminKey: { type: "string" }\n  },\n  required: ["userType"],\n  \n  // If user is admin, they need permissions and adminKey\n  if: { \n    properties: { \n      userType: { const: "admin" } \n    } \n  },\n  then: { \n    required: ["permissions", "adminKey"],\n    properties: {\n      permissions: { minItems: 1 }\n    }\n  },\n  \n  // If user is guest, no additional requirements\n  else: {\n    if: { \n      properties: { \n        userType: { const: "guest" } \n      } \n    },\n    then: {\n      // Guests can\'t have permissions\n      not: {\n        required: ["permissions"]\n      }\n    }\n  }\n};\n```\n\n### 3. Schema Composition with $ref\nKeep your schemas DRY and maintainable:\n\n```typescript\nconst schemas = {\n  // Base address schema\n  address: {\n    $id: "https://example.com/schemas/address.json",\n    type: "object",\n    properties: {\n      street: { type: "string" },\n      city: { type: "string" },\n      zipCode: { \n        type: "string", \n        pattern: "^[0-9]{5}(-[0-9]{4})?$" \n      }\n    },\n    required: ["street", "city", "zipCode"]\n  },\n  \n  // Person schema using address\n  person: {\n    $id: "https://example.com/schemas/person.json",\n    type: "object",\n    properties: {\n      name: { type: "string" },\n      homeAddress: { $ref: "address.json" },\n      workAddress: { $ref: "address.json" }\n    }\n  }\n};\n\n// Add schemas to AJV\najv.addSchema(schemas.address);\najv.addSchema(schemas.person);\n\nconst validatePerson = ajv.getSchema("https://example.com/schemas/person.json");\n```\n\n## Error Handling Like a Pro\n\nDefault AJV errors are... functional. But we can make them much better:\n\n```typescript\nimport addErrors from \'ajv-errors\';\naddErrors(ajv);\n\nconst betterUserSchema = {\n  type: "object",\n  properties: {\n    username: {\n      type: "string",\n      minLength: 3,\n      maxLength: 20,\n      pattern: "^[a-zA-Z0-9_]+$"\n    },\n    password: {\n      type: "string",\n      minLength: 8,\n      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d)"\n    }\n  },\n  required: ["username", "password"],\n  \n  // Custom error messages\n  errorMessage: {\n    properties: {\n      username: "Username must be 3-20 characters long and contain only letters, numbers, and underscores",\n      password: "Password must be at least 8 characters with uppercase, lowercase, and a number"\n    },\n    required: {\n      username: "Username is required",\n      password: "Password is required"\n    }\n  }\n};\n```\n\n## Performance Tips That Actually Matter\n\n### 1. Compile Once, Use Many Times\n```typescript\n// ❌ DON\'T do this\nfunction validateUserData(data: any) {\n  const validate = ajv.compile(userSchema); // Compiling every time!\n  return validate(data);\n}\n\n// ✅ DO this instead\nconst validateUserData = ajv.compile(userSchema); // Compile once\n\nfunction checkUser(data: any) {\n  return validateUserData(data); // Reuse compiled function\n}\n```\n\n### 2. Use removeAdditional for Large Objects\n```typescript\nconst ajv = new Ajv({ \n  removeAdditional: "all" // Strip unknown properties automatically\n});\n\n// Input: { name: "Bob", age: 25, secretHackerData: "evil" }\n// After validation: { name: "Bob", age: 25 }\n```\n\n### 3. Optimize for Your Use Case\n```typescript\n// For APIs - fast validation, detailed errors\nconst apiAjv = new Ajv({ \n  allErrors: true,\n  verbose: true \n});\n\n// For data processing - fastest validation\nconst processingAjv = new Ajv({ \n  allErrors: false,\n  verbose: false,\n  validateSchema: false\n});\n```\n\n## TypeScript Integration (The Cherry on Top)\n\nAJV plays beautifully with TypeScript:\n\n```typescript\nimport { JSONSchemaType } from \'ajv\';\n\n// Define your TypeScript interface\ninterface User {\n  id: string;\n  name: string;\n  age: number;\n  email?: string;\n}\n\n// Create a typed schema\nconst userSchema: JSONSchemaType<User> = {\n  type: "object",\n  properties: {\n    id: { type: "string" },\n    name: { type: "string" },\n    age: { type: "number" },\n    email: { type: "string", nullable: true }\n  },\n  required: ["id", "name", "age"],\n  additionalProperties: false\n};\n\n// Compile with type safety\nconst validateUser = ajv.compile(userSchema);\n\n// TypeScript knows the validated data structure!\nfunction processUser(userData: unknown): User | null {\n  if (validateUser(userData)) {\n    // userData is now typed as User!\n    return userData;\n  }\n  return null;\n}\n```\n\n## Common Gotchas (Learn From My Mistakes)\n\n### 1. Format Validation Needs ajv-formats\n```typescript\n// This won\'t work without ajv-formats\nconst schema = {\n  type: "string",\n  format: "email" // Silently ignored!\n};\n\n// Fix it\nimport addFormats from \'ajv-formats\';\naddFormats(ajv);\n```\n\n### 2. RegExp Patterns Need Double Escaping\n```typescript\n// ❌ Wrong\npattern: "^\\d{3}-\\d{3}-\\d{4}$"\n\n// ✅ Correct\npattern: "^\\\\d{3}-\\\\d{3}-\\\\d{4}$"\n```\n\n### 3. additionalProperties vs Properties\n```typescript\n// This allows ANY additional properties\nconst schema1 = {\n  type: "object",\n  properties: { name: { type: "string" } }\n  // additionalProperties defaults to true\n};\n\n// This blocks additional properties\nconst schema2 = {\n  type: "object",\n  properties: { name: { type: "string" } },\n  additionalProperties: false\n};\n```\n\n## Wrapping Up Part 2\n\nYou now have the power to implement robust, fast, and maintainable validation in your applications! AJV transforms JSON Schema from a simple concept into a validation powerhouse.\n\n## Coming Up in Part 3...\n\nIn the final part of our series, we\'ll explore real-world applications:\n- Building API validation middleware\n- Data pipeline validation patterns\n- HAL (Hypermedia) schemas for self-describing APIs\n- Testing strategies for schema validation\n- Production ready tips\n\n*Ready to put this knowledge to work in production? Part 3 is where the magic happens!* 🎯\n\n---\n\n**Series Navigation:**\n- [Part 1: Understanding the Basics](https://dev.to/vishdevwork/update-json-schema-your-datas-new-best-friend-4k8k)\n- **Part 2: Implementation with AJV** ← You are here  \n- [Part 3: Real-World Applications & HAL](https://dev.to/vishdevwork/json-schema-in-the-wild-real-world-applications-hal-3m1l)',
      canonical_url:
        "https://dev.to/vishdevwork/json-schema-with-ajv-implementation-deep-dive-1cnn",
      comments_count: 1,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh0nssm9zzz3qbanq56da.png",
      description:
        "Part 2 of 3: Getting Your Hands Dirty  Welcome back! In Part 1, we covered the basics of JSON Schema...",
      id: 2873832,
      page_views_count: 256,
      path: "/vishdevwork/json-schema-with-ajv-implementation-deep-dive-1cnn",
      positive_reactions_count: 2,
      public_reactions_count: 2,
      published: true,
      published_at: "2025-10-02T22:30:00.000Z",
      published_timestamp: "2025-10-02T22:30:00Z",
      reading_time_minutes: 5,
      slug: "json-schema-with-ajv-implementation-deep-dive-1cnn",
      tag_list: ["jsonschema", "ajv", "datavalidation", "typescript"],
      title: "JSON Schema with AJV: Implementation Deep Dive ⚡",
      type_of: "article",
      url: "https://dev.to/vishdevwork/json-schema-with-ajv-implementation-deep-dive-1cnn",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        '*Part 1 of 3: Understanding the Basics*\n\nEver had that moment where your API returns `{ age: "twenty-five" }` instead of `{ age: 25 }` and your whole app breaks? Yeah, we\'ve all been there. Let\'s talk about JSON Schema – your new best friend in the fight against unpredictable data.\n\n## What the Heck is JSON Schema Anyway?\n\nJSON Schema is basically a contract for your JSON data. Think of it like TypeScript\'s type definitions, but for runtime validation. It tells your data: "Hey, you better look exactly like this, or we\'re gonna have problems."\n\nThe concept emerged around 2009-2010 when developers got tired of writing custom validation logic for every single API endpoint. Someone smart said, "What if we could describe our data structure using... more JSON?" And boom – JSON Schema was born.\n\n```javascript\n// Instead of this mess:\nif (!data.name || typeof data.name !== \'string\') {\n  throw new Error(\'Name is required and must be a string\');\n}\nif (!data.age || typeof data.age !== \'number\' || data.age < 0) {\n  throw new Error(\'Age must be a positive number\');\n}\n// ... 50 more lines of validation\n\n// You get this beauty:\nconst schema = {\n  type: "object",\n  properties: {\n    name: { type: "string" },\n    age: { type: "number", minimum: 0 }\n  },\n  required: ["name", "age"]\n};\n```\n\n## The Anatomy of a JSON Schema\n\nLet\'s break down what makes a schema tick:\n\n```javascript\nconst userSchema = {\n  // Root type - what kind of data are we expecting?\n  type: "object",\n  \n  // Define the shape of our object\n  properties: {\n    name: { \n      type: "string", \n      minLength: 1,\n      maxLength: 100 \n    },\n    age: { \n      type: "number", \n      minimum: 0, \n      maximum: 150 \n    },\n    email: { \n      type: "string", \n      format: "email"  // Built-in format validation!\n    },\n    hobbies: {\n      type: "array",\n      items: { type: "string" },\n      maxItems: 10,\n      uniqueItems: true\n    },\n    isActive: { \n      type: "boolean" \n    }\n  },\n  \n  // Which fields are mandatory?\n  required: ["name", "age"],\n  \n  // Should we allow extra properties?\n  additionalProperties: false\n};\n```\n\n## Common Schema Patterns You\'ll Love\n\n### 1. Enums (Because Options Are Limited)\n```javascript\nconst statusSchema = {\n  type: "object",\n  properties: {\n    status: { \n      enum: ["active", "inactive", "pending", "banned"] \n    },\n    priority: {\n      type: "string",\n      enum: ["low", "medium", "high", "urgent"]\n    }\n  }\n};\n```\n\n### 2. Nested Objects (Objects All the Way Down)\n```javascript\nconst addressSchema = {\n  type: "object",\n  properties: {\n    street: { type: "string" },\n    city: { type: "string" },\n    country: { type: "string" },\n    zipCode: { \n      type: "string", \n      pattern: "^[1-9][0-9]{5}$" // India ZIP code pattern\n    }\n  },\n  required: ["street", "city", "country"]\n};\n\nconst personSchema = {\n  type: "object",\n  properties: {\n    name: { type: "string" },\n    homeAddress: addressSchema,  // Nested schema\n    workAddress: addressSchema   // Reused!\n  }\n};\n```\n\n### 3. Arrays with Specific Item Types\n```javascript\nconst orderSchema = {\n  type: "object",\n  properties: {\n    orderId: { type: "string" },\n    items: {\n      type: "array",\n      minItems: 1,\n      items: {\n        type: "object",\n        properties: {\n          productId: { type: "string" },\n          quantity: { type: "number", minimum: 1 },\n          price: { type: "number", minimum: 0 }\n        },\n        required: ["productId", "quantity", "price"]\n      }\n    }\n  }\n};\n```\n\n## YAML Schema: JSON Schema\'s Chill Cousin\n\nHere\'s a cool secret – JSON Schema works perfectly with YAML too! Since YAML is essentially JSON\'s more readable sibling, you can use the same schema definitions.\n\n```yaml\n# Your YAML data\nname: "Alice"\nage: 30\nemail: "alice@example.com"\nhobbies:\n  - "coding"\n  - "coffee"\n  - "cats"\n\n# Same schema validates both JSON and YAML!\n```\n\nThe validation logic doesn\'t care if your data started as JSON or YAML – it all becomes the same object structure in memory anyway. This means you can:\n\n- Use JSON Schema to validate YAML config files\n- Accept both JSON and YAML in your APIs\n- Keep one schema definition for multiple data formats\n\n## Why Should You Care?\n\n### 1. Catch Errors Early\n```javascript\n// This will blow up at runtime somewhere deep in your code\nconst user = { name: "Bob", age: "thirty-five" };\ncalculateInsurance(user.age * 1.2); // NaN strikes again!\n\n// This gets caught immediately with schema validation\n// Error: /age: should be number\n```\n\n### 2. Self-Documenting APIs\nYour schema IS your documentation. No more outdated API docs that say `age` is a number when it\'s actually a string.\n\n### 3. Frontend/Backend Agreement\nWhen both sides validate against the same schema, miscommunication becomes impossible. It\'s like having a peace treaty for your data structures.\n\n### 4. Better Error Messages\nInstead of "Something went wrong," you get "Property \'email\' should match format \'email\'." Your users (and your future self) will thank you.\n\n## Coming Up Next...\n\nIn **Part 2**, we\'ll dive deep into implementing JSON Schema validation with AJV, including:\n- Setting up AJV in your project\n- Advanced validation features\n- Custom keywords and error messages\n- Performance optimization tips\n\n*Ready to never debug mysterious data issues at 2 AM again? Let\'s make it happen!* 🚀\n\n---\n\n**Series Navigation:**\n- **Part 1: Understanding the Basics** ← You are here\n- [Part 2: Implementation with AJV](https://dev.to/vishdevwork/json-schema-with-ajv-implementation-deep-dive-1cnn)\n- [Part 3: Real-World Applications & HAL](https://dev.to/vishdevwork/json-schema-in-the-wild-real-world-applications-hal-3m1l)',
      canonical_url:
        "https://dev.to/vishdevwork/update-json-schema-your-datas-new-best-friend-4k8k",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv0yea3ujh61v0w4oxv10.png",
      description:
        "Part 1 of 3: Understanding the Basics  Ever had that moment where your API returns { age:...",
      id: 2872128,
      page_views_count: 124,
      path: "/vishdevwork/update-json-schema-your-datas-new-best-friend-4k8k",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2025-09-27T06:33:23.130Z",
      published_timestamp: "2025-09-27T06:33:23Z",
      reading_time_minutes: 3,
      slug: "update-json-schema-your-datas-new-best-friend-4k8k",
      tag_list: ["jsonschema", "ajv", "datavalidation", "typescript"],
      title: "Update JSON Schema: Your Data's New Best Friend 🛡️",
      type_of: "article",
      url: "https://dev.to/vishdevwork/update-json-schema-your-datas-new-best-friend-4k8k",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "In today's connected world, we all want to access our favorite apps and websites without re-entering our password every two seconds. That's where **authentication tokens**, or \"auth tokens,\" come in. Think of them like a digital VIP pass. When you log in with your username and password, the server checks your credentials and, if everything's good, hands you a special token. Instead of sending your password with every request, your app sends this token. The server then uses the token to confirm you're still you, and you can access all the cool stuff you're supposed to.\n\n-----\n\n## How It Works: A Simple Flow\n\nThe basic process is pretty straightforward:\n\n1.  **Login:** You enter your username and password on an application's login screen.\n2.  **Verification:** The application sends your credentials to its server for verification.\n3.  **Token Generation:** If your credentials are correct, the server generates a unique auth token.\n4.  **Token Received:** The server sends this token back to your application, which stores it, usually in a cookie or local storage.\n5.  **Access:** From now on, whenever you need to access a protected resource, like your profile page or your shopping cart, the application includes the token in the request header.\n6.  **Token Validation:** The server receives the request, validates the token, and grants access if it's valid.\n\n![A Simple Flow](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0lvdmi6yfpav4rk7bt0o.png)\n\nThis system is great for **scalability** because the server doesn't need to remember who is logged in. This makes the server **stateless**, which is a huge plus for performance and building microservice architectures.\n\n-----\n\n## Types of Tokens You'll Encounter\n\nThere are a few different types of tokens, each with its own pros and cons.\n\n### 1\\. JSON Web Tokens (JWTs)\n\nA **JWT** (pronounced \"jot\") is a popular type of token that's **self-contained**. This means all the necessary user information is right inside the token itself. A JWT is made up of three parts, separated by periods:\n\n  * **Header:** Describes the token type and the signing algorithm.\n  * **Payload:** Contains \"claims,\" which are statements about the user and the token. This is where you'd find user ID, roles, and the token's expiration date.\n  * **Signature:** A unique signature created using a secret key. This is what the server uses to verify that the token hasn't been tampered with.\n\nBecause a JWT contains everything the server needs to know, the server doesn't have to perform a database lookup for every request. This makes them really fast and efficient.\n\nHere's a quick Python example using the `PyJWT` library to create a JWT:\n\n```python\nimport jwt\nimport datetime\n\npayload_data = {\n    'sub': '1234567890',\n    'name': 'John Doe',\n    'iat': datetime.datetime.now(datetime.timezone.utc),\n    'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=30)\n}\n\nsecret_key = 'your_super_secret_key' # In a real app, use an environment variable!\n\ntoken = jwt.encode(payload_data, secret_key, algorithm='HS256')\n\nprint(token)\n```\n\nYou can then decode and verify this token on the server side to get the payload data.\n\n### 2\\. Opaque Tokens\n\nUnlike JWTs, opaque tokens are just random strings of characters. The client can't read anything from them. They are essentially a **reference** to a record stored in the server's database. When a server receives an opaque token, it has to go to the database to look up the token and retrieve the associated user data and permissions.\n\n**Pros & Cons:**\n\n  * **JWTs:** Fast, scalable, and don't require database lookups. The downside is that once issued, they can't be easily revoked before they expire.\n  * **Opaque Tokens:** More secure since no information is exposed to the client. They are also easily revocable. The trade-off is that they require a database lookup on every request, which can add overhead.\n\n### 3\\. Hybrid Tokens\n\nA common and secure pattern is to use a **hybrid approach**. This combines the best of both worlds. You'll often see this with OAuth 2.0:\n\n  * **Short-lived Access Token:** This is a JWT, used for accessing resources. It's valid for a short time (e.g., 15 minutes), so if it's stolen, the attacker doesn't have much time to use it.\n  * **Long-lived Refresh Token:** This is an opaque token, used to get a new access token once the old one expires. It's stored securely and can be revoked by the server if needed. This prevents a user from having to log in again every 15 minutes.\n\nThis approach balances the performance benefits of JWTs with the security and revocability of opaque tokens.\n\n-----\n\n## Conclusion: Which One Should You Use?\n\nThe choice of token depends on your application's needs. For a simple app where you want to keep things fast and stateless, a **JWT** might be the perfect fit. For a system that requires a high level of security and granular control over token revocation, a **hybrid model** is often the way to go. No matter which you choose, understanding how they work is a crucial skill for any developer building secure and scalable applications. 💻🔒",
      canonical_url:
        "https://dev.to/vishdevwork/authentication-tokens-your-digital-vip-pass-3cem",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feuap13gzdzslrt2gv7kq.png",
      description:
        "In today's connected world, we all want to access our favorite apps and websites without re-entering...",
      id: 2865728,
      page_views_count: 67,
      path: "/vishdevwork/authentication-tokens-your-digital-vip-pass-3cem",
      positive_reactions_count: 2,
      public_reactions_count: 2,
      published: true,
      published_at: "2025-09-24T13:00:58.925Z",
      published_timestamp: "2025-09-24T13:00:58Z",
      reading_time_minutes: 4,
      slug: "authentication-tokens-your-digital-vip-pass-3cem",
      tag_list: ["tokens", "jwt", "webdev", "authentication"],
      title: "Authentication Tokens: Your Digital VIP Pass 🎫",
      type_of: "article",
      url: "https://dev.to/vishdevwork/authentication-tokens-your-digital-vip-pass-3cem",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "Frontend development moves fast—new frameworks, new tools, new “best practices.” It’s easy to feel behind. In 2025, the focus is shifting. It’s less about chasing the next big thing and more about building things that last, choosing wisely, and solving real user problems.\n\nHere’s what I think matters right now.\n\n---\n\n### 1. React 19 – Practical Changes to How We Ship UI\n\nReact 19 is more than a version bump. It’s stable and brings **Server Components**, **Actions**, and new hooks like `useActionState`, `useFormStatus`, and `useOptimistic`.\n\nEarlier, most logic ran on the client. With server components, more work can move to the server, which means smaller bundles and faster loads. The catch? We need to think clearly about where code runs—server or client. **Actions** also make forms simpler by handling pending and error states for you.\n\nWhen deciding, keep it simple: do we really need a server component here? Is an Action the right fit? Clear, practical choices beat knowing every new feature by heart.\n\n---\n\n### 2. WebGPU – When the Browser Gets Serious Power\n\nWebGPU now has solid support in Chromium-based browsers (Chrome/Edge) and is seeing real-world use for heavy visualization, media, and ML in the browser.\n\nA practical case: an HR dashboard with **10,000 employee records, live charts, and filters**. Rendering that with plain JS is painful; WebGPU can make it smooth. But not every app needs it. Plan fallbacks (Canvas/WebGL) for browsers without full support.\n\nDevelopers should keep projects grounded: use WebGPU where it clearly improves UX for your users.\n\n---\n\n### 3. AI in the UI – Helpful, Transparent, and Correctable\n\nAI is moving into core flows, not just chat. A job portal can surface roles that match your skills. An expense app can auto‑tag transactions.\n\nThis changes UI design. Don’t wait for clicks—guide users. But trust is everything. AI makes mistakes. If my expense is wrongly tagged as “office,” I lose confidence. Design for transparency—show why, allow undo, and make correction easy. Prefer privacy‑friendly approaches when you can.\n\n---\n\n### 4. Zero‑Runtime Styling – CSS without client JS\n\nShipping less JavaScript makes apps feel faster. One easy win in 2025 is using **zero‑runtime styling** so styles are generated at build time, not in the browser.\n\nTools like **Tailwind**, **CSS Modules**, **Vanilla Extract**, or **Pigment CSS** output plain CSS files. That means no styling library code running on the client, which works nicely with React Server Components and reduces bundle size.\n\nYou still get themes and tokens (via **CSS variables**) without extra client work. The result is simpler builds, smaller downloads, and fewer “why is this component a client component?” surprises.\n\n---\n\n### 5. Real User Performance, Edge, and Better Monitoring\n\nPerformance isn’t just saving 10KB. With **edge runtimes** (Vercel, Cloudflare, Netlify), you can get content closer to users. But measure first.\n\nCore Web Vitals now focus on **LCP, CLS, and INP** (INP replaced FID). Use **RUM (Real User Monitoring)** to see real performance by region and device. If your app is fast in Europe but slow in Asia, edge rendering or caching can help. Measure, don’t just rely on a single Lighthouse score.\n\n---\n\n### Wrapping Up\n\nFrontend in 2025 is about making good calls:\n\n* Use React 19’s server components and Actions when they reduce complexity and ship faster UI.\n* Reach for WebGPU only when it truly improves UX—and plan fallbacks.\n* Design AI features that are transparent and easy to correct.\n* Prefer zero‑runtime styling (Tailwind, CSS Modules, Vanilla Extract) to keep CSS fast.\n* Optimize for real users with RUM and edge—not just lab scores.\n\nThe future is less about the tool and more about the decision. We add value by choosing well, not by coding the fastest.\n\nGot questions, ideas, or something I missed? Drop a comment. If you want a deeper dive on any section (React 19 Actions, WebGPU basics, zero‑runtime CSS, or RUM setup), tell me and I’ll write a follow‑up. Your feedback helps make this clearer for everyone.",
      canonical_url:
        "https://dev.to/vishdevwork/frontend-2025-make-it-fast-keep-it-simple-272f",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fo0kaf2zmi0reun9ayfq7.png",
      description:
        "Frontend development moves fast—new frameworks, new tools, new “best practices.” It’s easy to feel...",
      id: 2814294,
      page_views_count: 246,
      path: "/vishdevwork/frontend-2025-make-it-fast-keep-it-simple-272f",
      positive_reactions_count: 1,
      public_reactions_count: 1,
      published: true,
      published_at: "2025-09-02T08:35:22.418Z",
      published_timestamp: "2025-09-02T08:35:22Z",
      reading_time_minutes: 3,
      slug: "frontend-2025-make-it-fast-keep-it-simple-272f",
      tag_list: ["webdev", "frontend", "ai", "react"],
      title: "Frontend 2025: Make It Fast, Keep It Simple",
      type_of: "article",
      url: "https://dev.to/vishdevwork/frontend-2025-make-it-fast-keep-it-simple-272f",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "Hey there! If you’re managing a GitHub repo, you know it’s more than just a place to stash code—it’s your project’s home. I’ve put together a checklist of GitHub settings to keep your repo secure and organized, sticking to the exact options you’ll see in GitHub’s interface. For each section, I’ve added a few tips to make your life easier based on what I’ve learned messing around with repos. Let’s dive in!\n\n## A. General Settings\n- **Repository Visibility**: Set to *Public* (if intended) or *Private* for restricted access.\n- **Repository name**: Keep it clear and descriptive.\n- **Description**: Add a brief description.\n- **Topics**: Add relevant topics for better discoverability.\n- **Default Branch**: Set to *main* (or another preferred default).\n- **Archiving**: Disable if the repo is active.\n\n**Tips**:\n- For the repo name, think about future-proofing—something like `project-v2` can avoid confusion if you iterate later.\n- Use topics strategically (e.g., “javascript”, “open-source”) to attract contributors searching for projects like yours.\n- If archiving, consider leaving a note in the README about why it’s archived and where to find active forks.\n\n## B. Branch Protection Rules\nGo to: `Settings → Branches → Branch protection rules → Add rule`\n\nConfigure for *main* (or default branch):\n- ☑ Require a pull request before merging\n- ☑ Require approvals (at least 1-2)\n- ☑ Dismiss stale pull request approvals\n- ☑ Require review from Code Owners\n- ☑ Require status checks to pass before merging (e.g., CI/CD checks)\n- ☑ Require branches to be up to date before merging\n- ☑ Require conversation resolution before merging\n- ☑ Require linear history (optional but prevents merge commits)\n- ☑ Do not allow bypassing the above settings (even for admins)\n\n**Tips**:\n- Set up a `CODEOWNERS` file in your repo to auto-assign reviewers for specific files or folders.\n- For status checks, integrate tools like GitHub Actions or external CI/CD platforms to catch bugs early.\n\n## C. Actions & Workflows Permissions\nGo to: `Settings → Actions → General`\n\n**Actions permissions**:\n- ☑ Allow all actions (or restrict to only verified actions if security is critical).\n\n**Workflow permissions**:\n- ☑ Read repository contents and packages permissions (least privilege).\n\n**Tip**:\n- If you’re restricting actions, check the GitHub Marketplace for verified actions to avoid reinventing the wheel.\n\n## D. Collaborators & Teams\nGo to: `Settings → Collaborators & Teams`\n- Only grant *Write*/*Admin* access to trusted contributors.\n- Prefer Pull Requests (PRs) over direct commits.\n\n**Tips**:\n- Create teams for different roles (e.g., “Developers”, “Maintainers”) to streamline access management.\n- If you’re open-source, clearly document how contributors can request access in your CONTRIBUTING.md.\n- Regularly review collaborator lists to remove inactive users—trust me, it’s easy to forget!\n\n## E. Security & Moderation\nGo to: `Settings → Advanced Security`\n- ☑ Enable vulnerability alerts (Dependabot).\n- ☑ Enable Dependabot security updates.\n- ☑ Enable secret scanning (GitHub Advanced Security, if available).\n- ☑ Enable push protection (blocks commits with exposed secrets).\n\n**Tips**:\n- Set up Dependabot to auto-update your `dependabot.yml` file for regular dependency checks.\n- If secret scanning catches something, act fast—rotate any exposed keys and check commit history for leaks.\n- Consider enabling Dependabot version updates (not just security) to keep your dependencies fresh.\n\n## F. Merge Button Behavior\nGo to: `Settings → General → Pull Requests`\n- ☑ Allow merge commits / Squash merging / Rebase merging (choose as needed).\n- ☑ Always suggest updating pull request branches.\n- ☑ Allow auto-merge.\n\n**Tips**:\n- Squash merging is great for keeping a clean history, but merge commits can help track context for bigger changes.\n- Auto-merge is a lifesaver for busy repos—just make sure your status checks are robust to avoid bad merges.\n- Encourage contributors to update their PR branches to reduce merge conflicts.\n\n## G. Issue & Discussion Settings\nGo to: `Settings → Features`\n- ☑ Enable Issues (if needed).\n- ☑ Enable Discussions (optional).\n- ☑ Enable Projects (optional).\n\n**Tips**:\n- Use issue templates (via `.github/ISSUE_TEMPLATE`) to guide contributors on reporting bugs or features.\n- Discussions are great for open-ended ideas—pin active threads to keep the community engaged.\n- Projects can help you visualize workflows, but keep them simple to avoid overwhelming new contributors.\n\n## Wrapping Up\nThat’s the rundown! These settings and tips should help you secure your GitHub repo while making it a welcoming spot for collaboration. I’m no expert, but this setup has saved me headaches on my own projects. Got questions about any of these settings or a GitHub hack you want to share? Drop them in the comments below—I’d love to hear your thoughts and help with any setup snags!",
      canonical_url:
        "https://dev.to/vishdevwork/github-repo-security-your-easy-go-to-checklist-2o3d",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Funat6itntwuny9yepgka.png",
      description:
        "Hey there! If you’re managing a GitHub repo, you know it’s more than just a place to stash code—it’s...",
      id: 2777284,
      page_views_count: 248,
      path: "/vishdevwork/github-repo-security-your-easy-go-to-checklist-2o3d",
      positive_reactions_count: 1,
      public_reactions_count: 1,
      published: true,
      published_at: "2025-08-16T13:21:08.990Z",
      published_timestamp: "2025-08-16T13:21:08Z",
      reading_time_minutes: 3,
      slug: "github-repo-security-your-easy-go-to-checklist-2o3d",
      tag_list: ["github", "security", "opensource", "versioncontrol"],
      title: "GitHub Repo Security: Your Easy Go-To Checklist",
      type_of: "article",
      url: "https://dev.to/vishdevwork/github-repo-security-your-easy-go-to-checklist-2o3d",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "Hey, React beginners! React 19, released December 5, 2024, brings features that simplify coding and boost app speed. As a React developer, I’m thrilled to share why these updates are game-changers. Let’s explore the best new features with simple examples to spark your creativity. Ready? Let’s dive in! 🚀\n\n## 1. Actions: Making Forms Super Simple\n\nForms are a staple in web apps—think sign-up pages or to-do lists. In the past, handling form submissions in React meant juggling state for loading, errors, and more. React 19’s **Actions** simplify this by letting you connect a form directly to a function that processes the data.\n\n### What Are Actions?\n\nActions tie a form to a function that handles submission, whether it’s on the client or server. React manages loading states and errors for you, cutting down on boilerplate code. After years of wrestling with form libraries like Formik, I can say this feels like a breath of fresh air.\n\n### Example: A Simple Form with Actions\n\nHere’s a form to update a user’s name in React 19:\n\n```jsx\nimport { useActionState } from 'react';\n\nfunction UpdateNameForm() {\n  const [error, submitAction, isPending] = useActionState(\n    async (previousState, formData) => {\n      const name = formData.get('name');\n      const error = await updateName(name); // Fake API call\n      if (error) return error;\n      return null;\n    },\n    null\n  );\n\n  return (\n    <form action={submitAction}>\n      <input type=\"text\" name=\"name\" placeholder=\"Enter your name\" />\n      <button type=\"submit\" disabled={isPending}>\n        {isPending ? 'Saving...' : 'Save'}\n      </button>\n      {error && <p>Oops! {error}</p>}\n    </form>\n  );\n}\n```\n\n### Why It’s Awesome\n\n- **Less code, fewer bugs**: The `useActionState` hook handles `isPending` and `error`, so you write less and debug less. In my experience, this reduces production issues, especially for teams new to React.\n- **Automatic form reset**: React clears the form after a successful submission—perfect for clean UX.\n- **Beginner-friendly**: Less code means you can focus on building your app instead of wrestling with state.\n\n## 2. useOptimistic: Instant Feedback for Users\n\nEver clicked a button and wondered if it worked? React 19’s **useOptimistic** hook makes your app feel snappy by showing instant updates while the server catches up.\n\n### How Does useOptimistic Work?\n\nThe `useOptimistic` hook lets you show a temporary “optimistic” update (like a new name or a liked post) before the server confirms it. If something goes wrong, React automatically switches back to the original state.\n\n### Example: Optimistic Name Update\n\nHere’s an example updating a name instantly:\n\n```jsx\nimport { useOptimistic } from 'react';\n\nfunction ChangeName({ currentName }) {\n  const [optimisticName, setOptimisticName] = useOptimistic(currentName);\n\n  const submitAction = async (formData) => {\n    const newName = formData.get('name');\n    setOptimisticName(newName); // Show the new name right away\n    const updatedName = await updateName(newName); // Fake API call\n    return updatedName;\n  };\n\n  return (\n    <form action={submitAction}>\n      <p>Your name is: {optimisticName}</p>\n      <input type=\"text\" name=\"name\" />\n      <button type=\"submit\">Update Name</button>\n    </form>\n  );\n}\n```\n\n### Why It’s Awesome\n\n- **Feels lightning-fast**: Users see their changes instantly, even if the server takes a moment.\n- **Error-proof**: If the update fails, React rolls back to the original value.\n- **Simple to use:** One hook does it all. I’ve found it shines in scenarios like social feeds, but test with poor networks—clear feedback like toasts helps avoid confusion during rollbacks.\n\n## 3. useFormStatus: Smarter Form Buttons\n\nWant to disable a submit button or show “Loading…” during form submission? React 19’s **useFormStatus** hook makes this effortless by letting child components check the form’s status.\n\n### Example: A Smart Submit Button\n\nHere’s a button that knows when the form is busy:\n\n```jsx\nimport { useFormStatus } from 'react-dom';\n\nfunction SubmitButton() {\n  const { pending } = useFormStatus();\n  return (\n    <button type=\"submit\" disabled={pending}>\n      {pending ? 'Submitting...' : 'Submit'}\n    </button>\n  );\n}\n\nfunction MyForm() {\n  const submitAction = async (formData) => {\n    await saveData(formData); // Fake API call\n  };\n\n  return (\n    <form action={submitAction}>\n      <input type=\"text\" name=\"data\" />\n      <SubmitButton />\n    </form>\n  );\n}\n```\n\n### Why It’s Awesome\n\n- **No prop drilling**: The button knows the form’s status without passing props around.\n- **Cleaner code**: You don’t need to manage loading states manually.\n- **Polished UX**: It’s a simple way to make forms feel professional. After years of prop-drilling form states, I appreciate how this hook streamlines teamwork and reduces bugs.\n\n## 4. React Compiler: Less Work, More Magic\n\nReact 19’s **React Compiler** (aka React Forget) is like having a performance expert optimize your code automatically. In older versions, I spent hours adding `useMemo` and `useCallback` to prevent slowdowns. The compiler does this for you, so you can focus on building features.\n\n### Example: No More useMemo\n\nBefore React 19, you might write:\n\n```jsx\nimport { useMemo } from 'react';\n\nfunction MyComponent({ count }) {\n  const doubled = useMemo(() => count * 2, [count]);\n  return <div>Doubled: {doubled}</div>;\n}\n```\n\nIn React 19, the compiler optimizes for you:\n\n```jsx\nfunction MyComponent({ count }) {\n  const doubled = count * 2;\n  return <div>Doubled: {doubled}</div>;\n}\n```\n\n### Why It’s Awesome\n\n- **Less code:** No need to add useMemo or useCallback everywhere.\n- **Faster apps**: The compiler ensures performance without extra effort. In my projects, this has freed me to focus on logic rather than optimization.\n- **Beginner-friendly**: You don’t need to learn performance tricks to build smooth apps, though I recommend monitoring bundle size in large apps to avoid over-optimizations.\n\n## 5. Server Components: Faster Apps, Less JavaScript\n\n**React Server Components** let you run parts of your app on the server, sending less JavaScript to the browser. This speeds up load times and boosts SEO. As someone who’s optimized apps for performance, I’m thrilled about this feature.\n\n### Example: A Server Component\n\nHere’s a server component fetching data:\n\n```jsx\n// UserList.server.jsx\nexport default async function UserList() {\n  const users = await fetch('https://api.example.com/users').then(res => res.json());\n  return (\n    <div>\n      <h1>Users</h1>\n      {users.map(user => (\n        <p key={user.id}>{user.name}</p>\n      ))}\n    </div>\n  );\n}\n```\n\n### Why It’s Awesome\n\n- **Faster load times:** Less JavaScript means your app starts up quicker. This make a huge difference for mobile users.\n- **Better SEO**: Search engines see the full content immediately, a win for public-facing apps.\n- **Streamlined development**: Just add “use server” for server-side logic. In my experience, it’s a game-changer for data-heavy apps, but plan your client-server boundaries carefully to avoid complexity.\n\n## 6. The `use` API: Simplifying Data and Context\n\nThe new `use` API is a versatile tool for fetching data or accessing context. It works with promises (like API calls) and integrates with **Suspense** for seamless loading states. Having replaced clunky `useEffect` setups in my apps, I’m a big fan.\n\n### Example: Fetching Data with `use`\n\n```jsx\nimport { use, Suspense } from 'react';\n\nfunction Comments({ commentsPromise }) {\n  const comments = use(commentsPromise);\n  return comments.map(comment => <p key={comment.id}>{comment.text}</p>);\n}\n\nfunction App() {\n  const commentsPromise = fetch('https://api.example.com/comments').then(res => res.json());\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <Comments commentsPromise={commentsPromise} />\n    </Suspense>\n  );\n}\n```\n\n### Why It’s Awesome\n\n- **No more `useEffect` hassle**: Fetch data directly, which I’ve found cuts code complexity in half.\n- **Works with Suspense:** Loading states are handled automatically.\n- **Flexible for pros and newbies**: It’s simple enough for beginners but powerful for advanced use cases. I’ve used it in data-heavy dashboards, though I suggest testing for edge cases like failed promises.\n\n## Wrapping Up\n\nReact 19 is all about making your life as a developer easier and your apps faster. From **Actions** and **useOptimistic** for slick form handling to the **React Compiler** for automatic performance boosts, these features are perfect for beginners and pros alike. Plus, **Server Components** and the `use` API open up new ways to build modern, fast web apps.\n\nWant to try React 19? Update your project with:\n\n```bash\nnpm install react@19 react-dom@19\n```\n\nCheck out the [React 19 Upgrade Guide](https://react.dev) for more details. Have fun coding, and share in the comments what you’re building with React 19! 🎉",
      canonical_url:
        "https://dev.to/vishdevwork/whats-new-in-react-19-a-beginners-guide-to-the-latest-features-3oa3",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwbqisxqk6p2trvie0n0f.png",
      description:
        "Hey, React beginners! React 19, released December 5, 2024, brings features that simplify coding and...",
      id: 2775148,
      page_views_count: 178,
      path: "/vishdevwork/whats-new-in-react-19-a-beginners-guide-to-the-latest-features-3oa3",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2025-08-15T05:43:24.780Z",
      published_timestamp: "2025-08-15T05:43:24Z",
      reading_time_minutes: 5,
      slug: "whats-new-in-react-19-a-beginners-guide-to-the-latest-features-3oa3",
      tag_list: ["react", "tutorial", "reactjsdevelopment", "webdev"],
      title:
        "What’s New in React 19? A Beginner’s Guide to the Latest Features",
      type_of: "article",
      url: "https://dev.to/vishdevwork/whats-new-in-react-19-a-beginners-guide-to-the-latest-features-3oa3",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "*Want to run AI models on your computer without paying for cloud services? Meet Ollama - your new best friend.*\n\n*P.S. This blog was inspired by questions from my previous post about [building a data analysis agent with local AI models](https://dev.to/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al). Many of you asked about setting up Ollama locally, so here's your complete guide!*\n\n---\n\n## 🤔 What's Ollama Anyway?\n\nThink of Ollama as your personal AI helper that runs on your computer. No internet needed, no API keys to worry about, no monthly bills. Just AI that works on your own machine.\n\n*\"But wait, isn't local AI slow and bad?\"* \n\nNope. Modern computers + good models = surprisingly fast performance. Plus, you get to run your own AI server.\n\n*If you've seen my [data analysis agent project](https://dev.to/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al), you know how useful local AI can be for real projects. This guide will get you set up so you can build your own AI tools!*\n\n---\n\n## 🚀 The Setup Saga\n\n### Step 1: Download the Thing\nGo to [ollama.ai](https://ollama.ai) and download the installer for your OS. It's like downloading any other app, but this one can chat with you.\n\n**Windows users:** Ollama now has native Windows support! Simply download the Windows installer from the official site. No WSL2 required - it works directly on your Windows machine. The installation process is just as straightforward as on other platforms.\n\n### Step 2: Install & Pray\n```bash\n# Mac/Linux\ncurl -fsSL https://ollama.ai/install.sh | sh\n\n# Windows (in WSL2)\ncurl -fsSL https://ollama.ai/install.sh | sh\n```\n\nIf you see errors, don't worry. Google is your friend here.\n\n### Step 3: Start the Party\n```bash\nollama serve\n```\n\nThis starts your local AI server. Keep this running in a terminal window. It's like having a small data center on your computer.\n\n---\n\n## 🎯 Model Madness\n\n### The Classics\n```bash\n# The OG - good for everything\nollama pull llama2\n\n# The coding wizard\nollama pull codellama\n\n# The creative one\nollama pull mistral\n```\n\n### The Heavy Hitters\n```bash\n# If you have a good GPU\nollama pull llama2:70b\n\n# The new hotness\nollama pull llama2:13b\n```\n\n*Pro tip: Start with smaller models first. Your computer will thank you.*\n\n---\n\n## 🎮 Let's Play\n\n### Basic Chat\n```bash\nollama run llama2\n```\n\nNow you can chat with your AI! Type your questions, get answers. It's like having a really smart friend who never gets tired.\n\n*Or use OpenWebUI above for a nicer interface!*\n\n---\n\n## 🌐 OpenWebUI: Your Web Interface\n\n*Tired of typing in the terminal? OpenWebUI gives you a nice web interface to chat with your AI models.*\n\n### What is OpenWebUI?\nOpenWebUI is a web interface for Ollama. Think of it as ChatGPT, but running on your computer with your local models.\n\n### Step 1: Install OpenWebUI\n```bash\n# Using Docker (easiest way)\ndocker run -d --network=host --name open-webui --restart always -v open-webui:/app/backend/data openwebui/open-webui:main\n\n# Or using pip\npip install open-webui\n```\n\n### Step 2: Start OpenWebUI\n```bash\n# If you used Docker, it's already running\n# If you used pip, run this:\nopen-webui\n```\n\n### Step 3: Access Your Web Interface\nOpen your browser and go to: `http://localhost:3000`\n\nYou'll see a clean interface where you can:\n- Chat with your models\n- Switch between different models\n- Save conversations\n- Upload files for analysis\n\n*Pro tip: OpenWebUI works with all your Ollama models automatically!*\n\n---\n\n\n\n## 🚨 Common Issues & Solutions\n\n### \"It's so slow!\"\n- **Solution:** Use smaller models or get better hardware\n- **Alternative:** Try quantized models (they're smaller but still good)\n\n### \"It's not working!\"\n- **Check:** Is Ollama running? (`ollama serve`)\n- **Check:** Do you have enough RAM? (8GB minimum, 16GB recommended)\n- **Check:** GPU drivers updated?\n\n### \"Models won't download!\"\n- **Solution:** Check your internet connection\n- **Alternative:** Try downloading during off-peak hours\n\n---\n\n## 🎉 Pro Tips\n\n1. **Model Management:** Use `ollama list` to see what you have\n2. **Clean Up:** Use `ollama rm modelname` to delete unused models\n3. **Custom Models:** You can create your own models with custom prompts\n4. **Performance:** GPU acceleration makes a BIG difference\n\n---\n\n## 🏁 Wrapping Up\n\nOllama is like having a personal AI assistant that runs on your computer. No cloud needed, no privacy worries, no monthly bills. Just AI that works on your own machine.\n\n**The best part?** You can run it offline, customize it, and it's completely free.\n\n**The worst part?** You might spend hours chatting with your local AI instead of doing actual work.\n\nNow that you're set up with Ollama, you can build cool things like my [data analysis agent](https://dev.to/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al) or create your own AI tools!\n\n*Happy coding, AI enthusiasts! 🚀*\n\n---\n\n*P.S. If this helped you, consider sharing it with your fellow developers. Local AI is the future, and the future is now.*",
      canonical_url:
        "https://dev.to/vishdevwork/ollama-openwebui-your-local-ai-setup-guide-fdc",
      comments_count: 0,
      cover_image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F927wghj0tbhyddyxfr0i.jpg",
      description:
        "Want to run AI models on your computer without paying for cloud services? Meet Ollama - your new best...",
      id: 2755944,
      page_views_count: 497,
      path: "/vishdevwork/ollama-openwebui-your-local-ai-setup-guide-fdc",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2025-08-06T12:33:00.943Z",
      published_timestamp: "2025-08-06T12:33:00Z",
      reading_time_minutes: 3,
      slug: "ollama-openwebui-your-local-ai-setup-guide-fdc",
      tag_list: ["ai", "ollama", "programming", "tutorial"],
      title: "🦙 Ollama + OpenWebUI: Your Local AI Setup Guide",
      type_of: "article",
      url: "https://dev.to/vishdevwork/ollama-openwebui-your-local-ai-setup-guide-fdc",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "So I've been working on this project called \"Everyday AI\" for a while now, and I thought it might be interesting to share what it's all about. It's basically a collection of AI tools that are supposed to make regular daily tasks a bit easier. You know, like writing emails, planning trips, and staying on top of the news.\n\n## What Even Is This Thing?\n\nThe idea started pretty simple - I was tired of spending way too much time on things that should be quick. Like writing professional emails that don't sound like a robot wrote them, or trying to figure out what to do on vacation without reading a million travel blogs. So I thought, hey, what if we could get AI to help with this stuff?\n\nEveryday AI is basically a web app with three main tools right now. There's a Smart Email Assistant that looks at your emails and gives you suggestions to make them sound better. Then there's a Travel Itinerary Builder that's supposed to help plan trips (though that one's still in the works). And finally, there's a News Digest tool that summarizes news articles so you don't have to read through everything.\n\n\n![AI Tools](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bj0i6buecjmbbc2lyqso.png)\n\n\n\n## The Tech Stuff (But Not Too Boring)\n\nI built this using Next.js for the frontend, which is this React framework that's pretty popular these days. The backend is Python with Flask, which I chose because it's straightforward and doesn't overcomplicate things. For the AI part, I'm using both DeepSeek's API and Google's Gemini Flash, which are these newer AI models that are supposed to be pretty good at understanding context.\n\n\n![AI Models - Cloud + Local](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v4bbklc3p07v540urvkz.png)\n\nThe cool thing is that it works both ways - you can use the cloud version with either DeepSeek or Gemini APIs, or if you're into that kind of thing, you can run local models with Ollama. I added that option mainly because some people are really into privacy and want everything to run on their own computer.\n\n## What Actually Works Right Now\n\nThe Smart Email Assistant is the one that's fully functional. You paste in an email you're writing, and it gives you feedback on things like tone, clarity, and grammar. It's not perfect, but it's surprisingly helpful. Like, it'll tell you if your email sounds too formal or too casual, and suggest ways to make it clearer.\n\n\n![Smart Email](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jl4icpc8mw8f8ckc6cft.png)\n\nThe interface is pretty clean - just a simple form where you type your email, and then you get this analysis back with suggestions. I tried to make it look nice with Tailwind CSS, which is this utility-first CSS framework that makes styling less of a nightmare.\n\n## The Stuff That's Still Coming\n\nThe Travel Itinerary Builder is supposed to help you plan trips by suggesting destinations, activities, and even budget tips. I've got the basic structure set up, but it's not quite ready yet. The idea is that you tell it what kind of trip you want (adventure, relaxation, cultural, etc.), your budget, and how long you're going, and it gives you a personalized itinerary.\n\nThe News Digest tool is also in progress. The plan is to have the AI pull in the latest news and create summaries that are actually readable, not just regurgitated headlines. I'm letting the AI handle the news gathering, which should give more relevant and up-to-date information.\n\n## Why I Built It This Way\n\nI wanted to keep things simple. A lot of AI tools out there are either too complicated or try to do too much. This one is focused on specific, everyday tasks that people actually struggle with. The interface is clean and doesn't require a PhD to figure out how to use it.\n\nI also wanted to make sure it works on different devices. The responsive design means it looks decent on phones, tablets, and computers. And I added dark mode support because, well, who doesn't like dark mode these days?\n\n## The Challenges I Ran Into\n\nGetting the AI responses to be actually useful was harder than I expected. Sometimes the AI would give really generic advice, or suggestions that didn't make sense in context. I had to spend a lot of time tweaking the prompts and figuring out how to structure the requests to get better results.\n\nThe local model setup was also a bit tricky. Ollama is great, but getting everything to work together smoothly took some trial and error. And making sure the app doesn't break when switching between cloud and local models required some careful planning.\n\n## What I Learned\n\nBuilding this project taught me a lot about how to structure AI applications. The key is making sure the AI has enough context to give useful suggestions, but not so much that it gets confused. I also learned that user experience is really important - even if the AI is working perfectly, if the interface is clunky, people won't use it.\n\nAnother thing I realized is that AI tools work best when they're focused on specific tasks rather than trying to be everything to everyone. The Smart Email Assistant works well because it has a clear, defined purpose.\n\n## Where It's Going\n\nI'm planning to add more tools as I go. An AI code reviewer would be really useful - imagine having an AI look at your code and give you suggestions for improvements, bug fixes, and best practices. That could be a game-changer for developers.\n\nThe goal is to keep expanding the toolkit while keeping everything simple and useful. I want to keep it as a standalone tool that doesn't require any account creation or collaboration features - just simple, focused tools that do one thing well.\n\n## The Bottom Line\n\nEveryday AI is basically my attempt to make AI actually useful for regular daily tasks. It's not perfect, and there's still a lot of work to do, but it's a start. The idea is to take the power of AI and apply it to problems that people actually face every day.\n\nIf you're interested in trying it out or want to see how it works, you can check out the [GitHub repository](https://github.com/vkondi/everyday-ai) or try the [live website](https://everyday-ai-tools.vercel.app/). It's open source, so if you have ideas for improvements or want to contribute, that would be awesome. The whole point is to make AI more accessible and useful for everyday life, not just for tech companies with huge budgets.\n\nAnyway, that's the story of how I ended up building an AI assistant for daily tasks. It's been a fun project to work on, and hopefully it'll actually help people with their day-to-day stuff. We'll see how it goes! ",
      canonical_url:
        "https://dev.to/vishdevwork/so-i-built-this-ai-thing-that-doesnt-suck-inb",
      comments_count: 0,
      cover_image: null,
      description:
        'So I\'ve been working on this project called "Everyday AI" for a while now, and I thought it might be...',
      id: 2753662,
      page_views_count: 90,
      path: "/vishdevwork/so-i-built-this-ai-thing-that-doesnt-suck-inb",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2025-08-05T13:47:40.333Z",
      published_timestamp: "2025-08-05T13:47:40Z",
      reading_time_minutes: 5,
      slug: "so-i-built-this-ai-thing-that-doesnt-suck-inb",
      tag_list: ["ai", "nextjs", "python", "webdev"],
      title: "🎪 So I Built This AI Thing That Doesn't Suck",
      type_of: "article",
      url: "https://dev.to/vishdevwork/so-i-built-this-ai-thing-that-doesnt-suck-inb",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
    {
      body_markdown:
        "## Introduction\n\nI'm learning about data analysis and wanted to find an easier way to work with CSV files. Writing Python code with pandas was taking me a long time to learn, so I thought about using AI to help.\n\nI built a tool called the **Data Analysis Agent** that lets you ask questions about your data in plain English. Instead of writing code, you can just ask things like \"What's the average sales?\" and get an answer.\n\nIn this blog post, I'll show you how I made this tool and how you can use it too.\n\n## What is the Data Analysis Agent?\n\nThe Data Analysis Agent is a tool I built that lets you analyze CSV files by asking questions in plain English. Instead of struggling to write complex pandas code, you can simply ask questions like:\n\n- \"What is the average sales?\"\n- \"Show me the top 5 highest values in the salary column\"\n- \"Count the number of rows\"\n- \"What is the correlation between age and salary?\"\n- \"Group by department and show the mean salary\"\n\nThe system then uses a local AI model to understand your question and generate the appropriate pandas commands to answer it. It's like having a helpful assistant that knows how to work with data!\n\n## Key Features\n\n### 1. **Interactive Natural Language Interface**\nThe coolest thing about this tool is that you can ask questions about your data in plain English. No need to learn complex programming syntax - just ask what you want to know!\n\n### 2. **Local AI Integration with Ollama**\nI chose to use Ollama to run AI models locally on your computer instead of using cloud services. This means:\n- **Privacy**: Your data stays on your computer\n- **Speed**: No waiting for internet connections\n- **Cost**: Completely free to use\n- **Offline**: Works even without internet\n\n### 3. **Multiple AI Model Support**\nYou can use different AI models depending on what you have installed. Some popular ones include:\n- **Llama2**: A good all-around model\n- **CodeLlama**: Great for generating code\n- **Mistral**: Another solid option\n- **Any model**: You can use whatever you have in Ollama\n\n### 4. **Automatic CSV Detection**\nThe tool automatically finds all your CSV files in the `data/` folder and lets you pick which one to analyze. No need to remember file paths!\n\n### 5. **Pandas Integration**\nAll the actual data analysis is done using pandas, which is the standard tool for data analysis in Python. This means you get reliable, well-tested results.\n\n## How It All Works (The Simple Version)\n\nI tried to keep the code organized in a way that makes sense. Here's how the different parts work together:\n\n```\n┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐\n│   You ask a     │───▶│  AI Model       │───▶│  Pandas Code    │\n│   question      │    │  (Ollama)       │    │  gets made      │\n│   in English    │    │                 │    │                 │\n└─────────────────┘    └─────────────────┘    └─────────────────┘\n                                │                        │\n                                ▼                        ▼\n┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐\n│   Pick which    │    │   Load your     │    │   Show you      │\n│   AI model      │    │   CSV file      │    │   the results   │\n└─────────────────┘    └─────────────────┘    └─────────────────┘\n```\n\n## The Code Pieces (What I Built)\n\nI broke the project into smaller pieces to make it easier to understand and work on. Here are the main parts:\n\n### 1. **Main Application (`main.py`)**\nThis is where everything starts. It handles:\n- Letting you pick which AI model to use\n- Loading your dataset\n- The main menu where you ask questions\n- Running the whole show\n\n```python\ndef main():\n    # Pick which AI model to use\n    selected_model = select_model()\n    \n    # Load your dataset\n    file_path, df = select_dataset()\n    \n    # Keep asking questions until you're done\n    while True:\n        query = input(\"Enter your query: \")\n        result = analyze_data(df, query, selected_model)\n        print(result)\n```\n\n### 2. **Data Analyzer (`data_analyzer.py`)**\nThis is the brain of the operation. It:\n- Takes your question and turns it into a prompt for the AI\n- Gets the AI's response\n- Runs the pandas code the AI generates\n- Handles any errors that might happen\n\n```python\ndef analyze_data(df, query, selected_model):\n    prompt = f\"\"\"\n    System: You are a data analysis assistant. The dataset has columns: {list(df.columns)}.\n    The user asked: \"{query}\"\n    \n    Suggest a pandas operation to answer the query. Return only the pandas command.\n    \"\"\"\n    \n    ollama_response = query_ollama(prompt, selected_model)\n    # Run the code the AI gave us\n    result = eval(command, {'df': df, 'pd': pd})\n    return result\n```\n\n### 3. **Ollama Client (`ollama_client.py`)**\nThis talks to the AI model on your computer:\n- Sends your questions to the AI\n- Gets the AI's answers back\n- Handles any connection problems\n\n### 4. **Model Selection (`model_selection.py`)**\nThis helps you pick which AI model to use:\n- Finds all the AI models you have installed\n- Lets you choose which one to use\n- Remembers your choice so it's faster next time\n\n### 5. **Data Management**\n- **CSV Files (`csv_files.py`)**: Finds all your CSV files and lets you pick one\n- **Data Loader (`data_loader.py`)**: Loads your CSV file into pandas\n\n## How It Works: Step-by-Step\n\n### Step 1: Model Discovery\nThe tool looks for AI models you have installed on your computer:\n\n```python\nresponse = requests.get(\"http://localhost:11434/api/tags\")\nmodels = [model['name'] for model in response.json()['models']]\n```\n\n### Step 2: Dataset Loading\nIt finds all your CSV files and loads the one you pick:\n\n```python\ncsv_files = glob.glob(os.path.join(\"data\", \"*.csv\"))\ndf = pd.read_csv(selected_file)\n```\n\n### Step 3: Query Processing\nWhen you ask a question, here's what happens:\n\n1. **Makes a Prompt**: It takes your question and adds information about your dataset\n2. **Asks the AI**: Sends your question to the AI model you picked\n3. **Gets Code**: The AI gives back pandas code to answer your question\n4. **Runs the Code**: It runs the pandas code on your data\n5. **Shows Results**: You get your answer!\n\n### Step 4: Code Generation Example\nIf you ask \"What is the average sales?\", the AI might give you:\n```python\ndf['Sales'].mean()\n```\n\nIf you ask \"Show me the top 5 highest salaries\":\n```python\ndf.nlargest(5, 'Salary')[['Name', 'Salary']]\n```\n\n## What You Can Do With It\n\nI included some sample datasets to help you get started:\n\n1. **Sales Data**: A dataset with sales records (Date, Product, Sales, Region)\n2. **Employee Data**: HR data with employee information (Name, Department, Salary, Experience)\n3. **Voter Information**: Electoral data with demographic details\n4. **Candidate Data**: Information about political candidates by state\n\n### Some Examples of What You Can Ask\n\n**You ask**: \"What is the average salary by department?\"\n**The AI generates**: `df.groupby('Department')['Salary'].mean()`\n\n**You ask**: \"Show me the top 3 highest sales\"\n**The AI generates**: `df.nlargest(3, 'Sales')`\n\n**You ask**: \"How many employees are in each department?\"\n**The AI generates**: `df['Department'].value_counts()`\n\n## Some Technical Stuff I Learned\n\n### Security Considerations\nI made sure the tool is safe to use by controlling what code can run:\n\n```python\nlocal_vars = {'df': df, 'pd': pd}\nresult = eval(command, local_vars)\n```\n\nThis means only pandas operations can run, so nothing dangerous can happen to your computer.\n\n### Error Handling\nI tried to handle common problems that might come up:\n- If Ollama isn't running\n- If your CSV file is corrupted\n- If the AI gives a weird response\n- If the generated code has an error\n\n### Performance Optimizations\nI made a few small improvements:\n- The tool remembers which AI models you have so it doesn't have to ask every time\n- It loads data efficiently using pandas\n- It doesn't use much memory\n\n\n## Things to Keep in Mind\n\n### 1. **AI Model Quality**\n- Different AI models give different results\n- Some models are better at generating code than others\n- You might need to try different models to see which works best for you\n\n### 2. **Computer Requirements**\n- AI models need quite a bit of RAM to run\n- Having a good graphics card helps with larger models\n- Downloading models can take a while the first time\n\n### 3. **Question Complexity**\n- Simple questions work best\n- Very complex analysis might confuse the AI\n- You might need to break down complicated questions into simpler ones\n\n\n## Want to Try It Yourself?\n\nThe project is open-source and available on [GitHub](https://github.com/vkondi/data_analysis_agent). \n\nTo get started:\n1. Install Ollama and download at least one AI model\n2. Put your CSV files in the `data/` folder\n3. Start with simple questions and work your way up to more complex ones\n\nI'm still learning and improving this tool, so feel free to try it out and let me know what you think!\n\n---\n\n*This project shows how local AI models can make data analysis more accessible to everyone. By keeping everything on your own computer, you get privacy and control while still getting the benefits of AI assistance.* ",
      canonical_url:
        "https://dev.to/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al",
      comments_count: 0,
      cover_image: null,
      description:
        "Introduction   I'm learning about data analysis and wanted to find an easier way to work...",
      id: 2753487,
      page_views_count: 703,
      path: "/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al",
      positive_reactions_count: 0,
      public_reactions_count: 0,
      published: true,
      published_at: "2025-08-05T12:54:36.968Z",
      published_timestamp: "2025-08-05T12:54:36Z",
      reading_time_minutes: 5,
      slug: "my-journey-building-a-data-analysis-agent-with-local-ai-models-26al",
      tag_list: ["ai", "python", "nlp"],
      title: "My Journey Building a Data Analysis Agent with Local AI Models",
      type_of: "article",
      url: "https://dev.to/vishdevwork/my-journey-building-a-data-analysis-agent-with-local-ai-models-26al",
      user: {
        github_username: "vkondi",
        name: "Vishwajeet Kondi",
        profile_image:
          "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        profile_image_90:
          "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1854239%2F16eee82d-690b-44bc-90e8-0faea8d8f61b.jpg",
        twitter_username: null,
        user_id: 1854239,
        username: "vishdevwork",
        website_url: "https://vishwajeetkondi.vercel.app/",
      },
    },
  ],
};
