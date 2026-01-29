import React from "react";

/**
 * Contact and footer component converted from Svelte to React. It
 * displays a contact section with a description and a message box
 * listing ways to reach out, followed by a footer containing
 * branding and social links. The layout is responsive, stacking
 * items on small screens and aligning them horizontally on larger
 * displays.
 */
const Contact = () => {
    // Contact methods: icon and contact value
    const contactInfo = [
        {
            icon: "💬",
            title: "Discord",
            value: "humam97",
        },
        {
            icon: "📧",
            title: "Email",
            value: "humam.h.mohsin@gmail.com",
        },
    ];

    // Social links for the footer
    const socialLinks = [
        { name: "GitHub", icon: "💻", url: "https://github.com" },
        { name: "Figma", icon: "🎨", url: "https://figma.com" },
        { name: "Discord", icon: "💬", url: "https://discord.com" },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <div className="min-h-screen flex flex-col">
            {/* Contact Section */}
            <section
                id="contact"
                className="grow py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-[171px]"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-8">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white whitespace-nowrap">
                            <span className="text-[#c778dd]">#</span>contacts
                        </h2>
                        <div className="h-0.5 bg-[#c778dd] grow max-w-xs"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Left Side - Description */}
                        <div className="flex-1">
                            <p className="text-[#ABB2BF] text-base md:text-lg leading-relaxed">
                                I'm interested in freelance opportunities. However,
                                if you have other requests or questions, don't hesitate
                                to contact me.
                            </p>
                        </div>

                        {/* Right Side - Contact Box */}
                        <div className="flex justify-start lg:justify-end">
                            <div className="border border-[#ABB2BF] max-w-sm p-4">
                                <h3 className="text-white font-semibold mb-4 text-base md:text-lg">
                                    Message me here
                                </h3>

                                {/* Contact Info */}
                                <div className="space-y-2">
                                    {contactInfo.map((info, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <span className="text-base md:text-2xl">{info.icon}</span>
                                            <span className="text-[#ABB2BF] text-sm md:text-lg break-all">
                                                {info.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#ABB2BF] py-6 md:py-8 mt-auto px-4 sm:px-6 md:px-12 lg:px-[171px]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8 md:mb-12">
                        {/* Left - Brand */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 md:w-4 md:h-4 bg-white shrink-0"></div>
                                <h3 className="text-white font-bold text-base md:text-lg">
                                    Humam
                                    <span className="text-[#ABB2BF] font-normal block sm:inline sm:ml-2">
                                        humam.h.mohsin.com
                                    </span>
                                </h3>
                            </div>
                            <p className="text-[#f3f3f3] text-sm md:text-base lg:text-lg">
                                Web designer and front-end developer
                            </p>
                        </div>

                        {/* Right - Media */}
                        <div>
                            <h4 className="text-white font-medium mb-3 text-lg md:text-xl lg:text-2xl">
                                Media
                            </h4>
                            <div className="flex gap-2 md:gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ABB2BF] hover:text-white transition-colors text-xl md:text-2xl"
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-[#ABB2BF] text-sm md:text-base">
                            © Copyright {currentYear}.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
