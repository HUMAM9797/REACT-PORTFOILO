import React from "react";

const Skills = () => {
    const skillCategories = [
        {
            category: "Languages",
            icon: "🎨",
            skills: ["TypeScript", "Lua", "Python", "JavaScript"],
        },
        {
            category: "Databases",
            icon: "💾",
            skills: ["SQLite", "PostgreSQL", "Mongo"],
        },
        {
            category: "Tools",
            icon: "🛠️",
            skills: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch"],
        },
        {
            category: "Other",
            icon: "⚙️",
            skills: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
        },
        {
            category: "Frameworks",
            icon: "🔧",
            skills: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"],
        },
    ];

    return (
        <section
            id="skills"
            className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-[171px] bg-[#282C33]"
        >
            <div>
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-4xl text-[#C778DD] whitespace-nowrap">
                        #<span className="text-white">skills</span>
                    </h2>
                    <div className="h-0.5 bg-[#C778DD] w-24 sm:w-32 md:w-48 lg:w-[220px] my-5"></div>
                </div>

                <div className="absolute">
                    <img src="/images/Group 36.png" alt="" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-auto max-w-xl items-start">
                    {skillCategories.map((category) => (
                        <div
                            key={category.category}
                            className="border border-[#ABB2BF]"
                        >
                            <div className="px-3 md:px-4 py-2 border-b border-[#ABB2BF]">
                                <h3 className="text-base md:text-lg text-white">
                                    {category.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-1 p-2 text">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="text-sm md:text-base lg:text-lg text-[#ABB2BF]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
