import React from "react";

const Hero = () => {
    // Scrolls smoothly to the contact section by ID
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center bg-[#282C33] pt-16 px-4 sm:px-6 md:px-12 lg:px-[171px]"
        >
            <div className="flex flex-col lg:flex-row items-center w-full gap-8 md:gap-12 lg:gap-28">
                {/* Text Content */}
                <div className="w-full lg:w-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        I am a <span className="bg-[#C778DD] bg-clip-text text-transparent">web designer</span> and
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                        <span className="bg-[#C778DD] bg-clip-text text-transparent">front‑end developer</span>
                    </h1>

                    <p className="text-base sm:text-lg text-[#ABB2BF] mb-6 md:mb-8 max-w-xl">
                        I craft responsive websites where technologies meet creativity
                    </p>

                    <button
                        onClick={scrollToContact}
                        className="px-4 md:px-6 py-2 text-sm md:text-base text-white border border-[#C778DD] hover:bg-[#C778DD]/20 transition-all duration-300 transform hover:scale-105"
                    >
                        Contact me !!
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex flex-col items-center w-full lg:w-auto max-w-md">
                    <img
                        src="/images/Group 47.png"
                        alt="Portfolio illustration"
                        className="w-full h-auto"
                    />
                    <div className="border border-[#ABB2BF] px-2 py-1 flex items-center justify-start w-full">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-[#C778DD] mr-2 md:mr-3 shrink-0"></div>
                        <p className="text-sm md:text-base text-[#ABB2BF]">
                            Currently working on <span className="text-white">ITS</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
