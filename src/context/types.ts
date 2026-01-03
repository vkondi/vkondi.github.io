export interface ArticleUser {
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

export interface DataContextType {
  generalDetails: {
    name: string;
    email: string;
    mobile: string;
    dob: string;
  };
  aboutMe: string[];
  skills: {
    title: string;
    skills: string[];
  }[];
  rolesAndResponsibilities: string[];
  workExperience: {
    jobTitle: string;
    employer: string;
    city: string;
    country: string;
    startDate: string;
    endDate: string;
    isCurrentEmployer: boolean;
    logo: string;
  }[];
  projects: {
    tags?: string[];
    title: string;
    startDate: string;
    endDate: string;
    isCurrentProject: boolean;
    descriptions?: string[];
  }[];
  education: {
    degree: string;
    school: string;
    startDate: string;
    endDate: string;
    city: string;
    country: string;
    gpa: string;
  }[];
  socialMedia: {
    name: string;
    url: string;
    icon: string;
  }[];
  previewWebsites: {
    name: string;
    description: string;
    previewUrl: string;
    repoUrl: string;
    tags: string[];
  }[];
  blogs: Article[];
}
