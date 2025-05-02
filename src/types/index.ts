export type PersonalInfo = {
  name: string;
  role: string;
  contact: {
    mobile: string;
    email: string;
  };
};

export type Education = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa?: number;
};

export type TechStack = {
  name: string;
  items: string[];
};

export type WorkExperience = {
  company: string;
  role: string;
  location: string;
  period: string;
  projects: Array<{
    name: string;
    description: string;
    specificWork: string[];
    techStack?: string[];
  }>;
  architectureAndMethodologies?: string[];
  productivityTools?: string[];
};

export type PortfolioData = {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: WorkExperience[];
  skills: {
    technologies: TechStack[];
    methodologies: string[];
    tools: string[];
  };
}; 