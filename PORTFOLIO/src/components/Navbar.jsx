import React, { useState } from "react";

/**
 * A navigation bar component converted from the original Svelte
 * implementation. It features a desktop and mobile navigation layout,
 * and smooth scrolling to page sections. The component tracks the
 * currently active section and whether the mobile menu is open using
 * React state hooks. When a navigation button is clicked, the
 * corresponding section scrolls into view, and the mobile menu (if
 * open) closes automatically.
 */
const Navbar = () => {
    // State to track the current section and whether the mobile menu is open
    const [currentSection, setCurrentSection] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    /**
     * Scrolls smoothly to a page section by its ID, sets the current
     * section, and closes the mobile menu if it is open.
     *
     * @param {string} section - The section ID to scroll to.
     */
    const scrollToSection = (section) => {
        setCurrentSection(section);
        setMobileMenuOpen(false);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-[#282C33] z-50">
            <div  className="px-4 sm:px-6 md:px-12 lg:px-[171px]">
                <div className="flex items-center justify-between h-14">
                    {/* Logo area: clicking returns to the home section */}
                    <div 
                        onClick={() => scrollToSection("home")}
                        className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white truncate"
                        aria-label="Go to home"
                    >
                        Humam Haidar Mohsin
                    </div>

                    {/* Desktop navigation links */}
                    <ul className="hidden md:flex items-center gap-4 lg:gap-8">
                        {[
                            "home",
                            "projects",
                            "skills",
                            "about",
                            "contact",
                        ].map((section) => (
                            <li data-aos="fade-down" key={section}>
                                <button
                                    onClick={() => scrollToSection(section)}
                                    className={
                                        `relative font-medium text-sm lg:text-base ` +
                                        (currentSection === section
                                            ? "text-white"
                                            : "text-[#C778DD]")
                                    }
                                >
                                    <span className="text-[#C778DD]">#</span>
                                    {section}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile menu toggle button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-[#ABB2BF] p-2"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                // Close icon when menu is open
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                // Hamburger icon when menu is closed
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile navigation menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-[#ABB2BF]/50">
                        <ul className="flex flex-col gap-4">
                            {[
                                "home",
                                "projects",
                                "skills",
                                "about",
                                "contact",
                            ].map((section) => (
                                <li key={section}>
                                    <button
                                        onClick={() => scrollToSection(section)}
                                        className={
                                            `w-full text-left font-medium ` +
                                            (currentSection === section
                                                ? "text-white"
                                                : "text-[#C778DD]")
                                        }
                                    >
                                        <span className="text-[#C778DD]">#</span>
                                        {section}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
