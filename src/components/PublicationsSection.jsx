import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CNN Optimization",
    description: "Cat-dog image classification using CNNs with high accuracy, low complexity.",
    image: "publications/pub1.png",
    tags: ["CNN", "R&D", "Python"],
    demoUrl: "https://doi.org/10.1109/AIC61668.2024.10730855",
  },
  {
    id: 2,
    title: "Financial Hypothesis",
    description:
      "Comparative analysis with hypothesis using ML to predict inter-firm stock influence.",
    image: "publications/pub2.png",
    tags: ["ML", "scikit-learn", "z-test"],
    demoUrl: "https://doi.org/10.1109/IC3I61595.2024.10828598",
  },
  {
    id: 3,
    title: "GLCM-VGG19 Model",
    description:
      "Deep learning model using VGG19 and GLCM for brain tumor classification with 93.4% accuracy.",
    image: "publications/pub3.png",
    tags: ["CNN", "VGG19", "GLCM"],
    demoUrl: "https://doi.org/10.1016/j.procs.2025.04.428",
  },
];

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Online <span className="text-primary"> Publications </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent publications over IEEE Scopus Indexed Conferences
          and Procedia Science Journal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={`/Personna/${project.image}`}
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
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
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
            href="https://orcid.org/0009-0005-0935-3966"
          >
            Check My Researchs <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};