'use client';
import React, { useEffect } from 'react';
import SectionHeadings from './SectionHeadings';
import Image from 'next/image';
import { profilePic } from '../assets';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import ReactCountryFlag from 'react-country-flag';

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('About');
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section
            ref={ref}
            id="about-section"
            className="flex lg:flex-row flex-col w-full sm:pt-[14rem] pt-[7rem] lg:mb-60 mb-[12rem]  sm:scroll-mt-28 scroll-mt-15 px-[1rem] "
        >
            <div className=" lg:w-[50%] sm:w-full  w-fit flex items-start justify-center lg:order-1 order-2 lg:mt-0 mt-10">
                <Image
                    src={profilePic}
                    alt="Profile picture"
                    quality={95}
                    width={400}
                    placeholder="blur"
                    priority={true}
                    className="profilePic "
                />
            </div>

            <div className=" lg:w-[50%] w-full sm:px-[2rem] px-[1rem]  pb-[2rem] lg:order-2 order-1">
                <div className="lg:w-full w-fit">
                    <SectionHeadings subHeader={'What I do'} header={'About me'} />
                </div>
                <p className="paragraphColor leading-relaxed">
                    I'm a <span className="font-medium">Software Engineer</span> with a{' '}
                    <span className="font-medium">
                        Master's degree in Computer Science and Engineering{' '}
                    </span>{' '}
                    with a specialization in{' '}
                    <span className="font-medium">AI and Machine Learning. </span>
                    Over the past few years, I've worked across several companies with clients all
                    over Europe: building <span className="font-medium">RESTful APIs</span>,{' '}
                    <span className="font-medium"> RAG AI chatbots</span>,{' '}
                    <span className="font-medium">data migration integrations</span>, and other{' '}
                    <span className="font-medium">AI solutions</span>.
                    <span className="sm:block">
                        {' '}
                        I strive to develop <span className="font-medium">reliable</span> and{' '}
                        <span className="font-medium">scalable </span>software that has{' '}
                        <span className="font-medium">real business impact</span>.{' '}
                    </span>
                </p>

                <p className="hidden sm:block paragraphColor leading-relaxed pt-2 pb-4">
                    Beyond Coding and Web Development, I'm also passionate about{' '}
                    <span className="font-medium">KickBoxing</span>,{' '}
                    <span className="font-medium">Scuba Diving</span> and{' '}
                    <span className="font-medium">Learning Languages</span>
                    (I'm fluent in <span className="font-medium">Portuguese</span>{' '}
                    <ReactCountryFlag countryCode="PT" svg style={{ marginBottom: '0.2rem' }} />,{' '}
                    <span className="font-medium">English</span>{' '}
                    <ReactCountryFlag countryCode="Gb" style={{ marginBottom: '0.2rem' }} svg /> and{' '}
                    <span className="font-medium">Swedish</span>{' '}
                    <ReactCountryFlag countryCode="SE" svg style={{ marginBottom: '0.2rem' }} />
                    ){' '}
                </p>
            </div>
        </section>
    );
};

export default About;
