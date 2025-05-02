import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Nguyen Kien Trung",
    role: "Fullstack Software Engineer",
    contact: {
      mobile: "+84-986-312-202",
      email: "ktrung.it.contact@gmail.com",
    },
  },
  education: [
    {
      institution: "University of Technology - Vietnam National University",
      degree: "Information Technology, Honors Program",
      location: "Hanoi, Vietnam",
      period: "Mar. 2020 – 2024",
      gpa: 3.46,
    },
  ],
  experience: [
    {
      company: "MindX Technology School",
      role: "Software Engineer",
      location: "Hanoi, Vietnam",
      period: "Sep 2024 – Present",
      projects: [
        {
          name: "Internal Systems Development",
          description: "Internal platforms designed to reduce manual operations and automate key processes, supporting the technical needs of departments such as Sales (CRM), Finance (FAM), and providing data-driven insights for decision-making through the Reporting system.",
          specificWork: [
            "Collaborated with a team of 9–12 engineers to deliver scalable internal systems for multiple business units",
            "Primarily involved in requirement intake, feature development, and incident resolution",
            "Provided technical support to ensure smooth system operations",
            "Assisted in the migration of legacy components to a microservices-based architecture",
            "Designed data models following the Star Schema and Kimball methodology",
            "Built data pipelines and implemented ETL processes into the lakehouse architecture using Apache Spark"
          ],
          techStack: [
            "NestJS", "GraphQL", "MongoDB", "PostgreSQL", "Redis", "Kafka", "Docker", "K8S",
            "NextJS", "Spark", "PowerBI", "ELK Stack", "Grafana", "Prometheus", "Azure Pipelines",
            "Firebase", "SonarQube"
          ]
        }
      ],
      architectureAndMethodologies: [
        "Agile Scrum",
        "Domain-Driven Design (DDD)",
        "Microservices",
        "Event-Driven Architecture",
        "MoSCoW Prioritization",
        "ICE Scoring"
      ],
      productivityTools: ["Cursor IDE"]
    },
    {
      company: "CMC Research Institute for Applied Technology",
      role: "Software Engineer",
      location: "Hanoi, Vietnam",
      period: "Apr 2023 - Sep 2024",
      projects: [
        {
          name: "SmartDoc",
          description: "AI project using OCR technology to provide services for extracting information from photos and PDFs, digitizing and managing documents.",
          specificWork: [
            "Led user interface development process",
            "Upgraded page loading performance with service worker implementation",
            "Implemented lazy loading for multi-page documents",
            "Developed basic backend modules"
          ],
          techStack: [
            "Angular", "Bootstrap", "Django Rest Framework", "Docker",
            "RabbitMQ", "Celery", "Postgres", "Redis"
          ]
        },
        {
          name: "Chatbot from file",
          description: "AI project for managing files to create chatbots capable of responding with content extracted from files and connecting them to Telegram.",
          specificWork: [
            "Developed backend and frontend modules for user chatting",
            "Implemented statistical analysis",
            "Integrated AI services for file processing"
          ],
          techStack: [
            "React", "Bootstrap", "Django Rest Framework", "Python Socketio",
            "Docker", "Postgres", "Redis"
          ]
        }
      ]
    },
    {
      company: "CHT Lab",
      role: "Software Engineer",
      location: "Hanoi, Vietnam",
      period: "Aug 2022 - Feb 2023",
      projects: [
        {
          name: "Bybet",
          description: "Betting game project using blockchain technology.",
          specificWork: [
            "Developed backend modules: Authentication, User Management, Transaction Management"
          ],
          techStack: ["TypeScript", "Nestjs", "Firebase", "Google Pub/Sub", "grpc"]
        },
        {
          name: "Drago",
          description: "In-house project to manage employee data from various repositories for employee recognition.",
          specificWork: [
            "Developed Authentication and User modules",
            "Wrote raw queries for employee streak tracking"
          ],
          techStack: ["TypeScript", "Nestjs"]
        }
      ]
    },
    {
      company: "Phong Linh Tech",
      role: "Intern",
      location: "Hanoi, Vietnam",
      period: "Feb 2021 - Feb 2022",
      projects: [
        {
          name: "VirtualMC",
          description: "AI project creating virtual MC from photos/videos and scripts with clone voice and text-to-speech features.",
          specificWork: [
            "Developed video editing interface similar to Canva",
            "Implemented asset management for text, image, video background, and music"
          ],
          techStack: ["ReactJs", "Konva", "Bootstrap"]
        },
        {
          name: "AnyGoNow",
          description: "Home care services system for the American market",
          specificWork: [
            "Developed homepage",
            "Implemented user information management module"
          ],
          techStack: ["ReactJs", "Tailwindcss"]
        }
      ]
    }
  ],
  skills: {
    technologies: [
      {
        name: "Frontend",
        items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Bootstrap"]
      },
      {
        name: "Backend",
        items: ["Node.js", "NestJS", "Django", "GraphQL", "REST"]
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MongoDB", "Redis"]
      },
      {
        name: "DevOps & Cloud",
        items: ["Docker", "Kubernetes", "Azure Pipelines", "Firebase"]
      },
      {
        name: "Data Engineering",
        items: ["Apache Spark", "ETL", "Star Schema", "Kimball Methodology"]
      },
      {
        name: "Monitoring & Analytics",
        items: ["ELK Stack", "Grafana", "Prometheus", "PowerBI"]
      }
    ],
    methodologies: [
      "Agile Scrum",
      "Domain-Driven Design",
      "Microservices Architecture",
      "Event-Driven Architecture",
      "MoSCoW Prioritization",
      "ICE Scoring"
    ],
    tools: [
      "Cursor IDE",
      "Git",
      "SonarQube",
    ]
  }
}; 