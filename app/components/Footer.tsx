import Link from 'next/link';
import React, { useEffect } from 'react';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { linksDropDownMenu } from '@/lib/data';

const Footer = () => {
    const { ref, inView } = useInView({ threshold: 0.75 });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('Contact');
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <footer
            ref={ref}
            id="contact-section"
            className="flex scroll-mt-0 text-secondary flex-col h-[100vh] w-full justify-between items-center sm:pt-[8rem] pt-[10rem] pb-6 relative"
        >
            <div className="flex flex-col items-center justify-center gap-8 text-center">
                {/* Headline */}
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold headersColorHero tracking-wider">
                        Let&apos;s build something
                    </h1>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider"
                        style={{ color: '#e33078' }}
                    >
                        great together
                    </h2>
                </div>

                {/* Subtitle */}
                <p className="paragraphColorHero text-base sm:text-lg md:text-2xl max-w-2xl leading-relaxed">
                    Full-time, freelance, or just an idea you want to explore, let's talk about
                    it{' '}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="mailto:miguel.caridade.work@gmail.com"
                        className="flex items-center gap-2 px-6 py-4 rounded-xl text-base font-semibold tracking-wider text-white transition-opacity hover:opacity-80"
                        style={{ backgroundColor: '#e33078' }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        Say hello
                    </a>

                    <a
                        href="https://www.linkedin.com/in/mig-caridade/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-4 rounded-xl text-base font-semibold tracking-wider text-white border border-slate-500/50 transition-opacity hover:opacity-80"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>

            {/* Bottom nav */}
            <ul className="flex sm:gap-10 gap-5 tracking-wider sm:text-base text-sm">
                {linksDropDownMenu.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href}>
                            <span className="hover:text-[#e33078] underline underline-offset-4">
                                {link.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;
