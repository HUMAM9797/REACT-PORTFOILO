import React from "react";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "ChertNodes",
            description: "Minecraft servers hosting",
            technologies: ["HTML", "SCSS", "Python", "Flask"],
            img: "/images/project1.jpg",
            link: "#",
        },
        {
            id: 2,
            title: "ProtectX",
            description: "Discord anti-crash bot",
            technologies: ["React", "Express", "Discord.js", "Node.js"],
            img: "/images/project2.jpg",
            link: "#",
        },
        {
            id: 3,
            title: "Kahoot Answers Viewer",
            description: "Get answers to your Kahoot quiz",
            technologies: ["CSS", "Express", "Node.js"],
            img: "/images/project3.jpg",
            link: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-[171px] bg-[#282C33]"
        >
            <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4" data-aos="fade-up" data-aos-duration="800">
                    <div className="flex items-center gap-3 md:gap-6 w-full sm:w-auto">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#C778DD] font-semibold whitespace-nowrap">
                            #<span className="bg-white bg-clip-text text-transparent">projects</span>
                        </h2>
                        <div className="h-0.5 bg-[#C778DD] grow sm:w-32 md:w-64 lg:w-[530px] my-3"></div>
                    </div>

                    <div className="text-white hover:text-[#ABB2BF] text-base md:text-lg cursor-pointer whitespace-nowrap">
                        View all →
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="border border-[#ABB2BF] bg-[#282C33] flex flex-col"
                            data-aos="zoom-in"
                            data-aos-duration="800"
                            data-aos-delay={project.id * 100}
                        >
                            <div className="h-32 md:h-48 bg-[#282C33] flex items-center justify-center">
                                <img src={project.img} alt="" className="h-full w-full object-cover" />
                            </div>

                            <div className="border-y border-[#ABB2BF] px-2 py-1 bg-[#282C33]">
                                <div className="flex flex-wrap gap-1 text-sm md:text-base lg:text-lg text-[#ABB2BF]">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="px-1 py-0.5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="px-1 mx-2">
                                <h3 className="text-2xl text-white my-2">{project.title}</h3>
                                <p className="text-[#ABB2BF] text-sm md:text-base lg:text-lg">
                                    {project.description}
                                </p>
                            </div>

                            <div className="p-3 md:p-4">
                                <a
                                    href={project.link}
                                    className="inline-block px-5 py-1 border border-[#C778DD] text-white text-lg hover:bg-[#C778DD]/20 transition"
                                >
                                    Live →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
