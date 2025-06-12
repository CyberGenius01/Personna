import { ArrowRight, ExternalLink, Github } from "lucide-react";
import {cn} from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "Virtual Hiring Assistant",
    description: "A virtual assistant that generates follow-up questions like an interviewer.",
    image: "/projects/project1.png",
    tags: ["Hugging face", "Streamlit", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/CyberGenius01/Virtual-Hiring-Assistant",
  },
  {
    id: 2,
    title: "MERN Website",
    description:
      "Full-stack B2C website offering AI and software development services.",
    image: "/projects/project2.png",
    tags: ["Raect.js", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Java Music Player",
    description:
      "A feature-rich music player using Java Applet swith a modular design.",
    image: "/projects/project3.png",
    tags: ["Java", "Swift"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Movie Recommendation",
    description:
      "Multi-threaded Python web app with AI-powered movie recommendation engine.",
    image: "/projects/project4.jpeg",
    tags: ["Python", "Flask-MVC"],
    demoUrl: "#",
    githubUrl: "https://github.com/CyberGenius01/Updated-Movie-Recommendation-Model",
  },
  {
    id: 5,
    title: "AI Gym trainer",
    description:
      "A Constrastive learning based AI agent that gives a score of correct gym posture.",
    image: "/projects/project5.png",
    tags: ["CNN", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/CyberGenius01/Siamese-Constrative-Learning",
  },
  {
    id: 6,
    title: "Admission Chatbot",
    description:
      "An AI chatbot with capability of answering frequent FAQs for Student Admissions.",
    image: "/projects/project6.png",
    tags: ["Transformer", "NLP"],
    demoUrl: "#",
    githubUrl: "https://github.com/CyberGenius01/AIML-Project-Series",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className={cn(
                        "text-foreground/80 hover:text-primary transition-colors duration-300",
                        project.demoUrl === "#"? "cursor-not-allowed": "cusor-pointer"
                      )}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className={cn(
                        "text-foreground/80 hover:text-primary transition-colors duration-300",
                        project.githubUrl === "#"? "cursor-not-allowed": "cusor-pointer"
                      )}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/CyberGenius01"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};