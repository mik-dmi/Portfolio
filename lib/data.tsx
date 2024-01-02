import {martialGearScreenShot, diveRightScreenShot,caliBrunchScreenShot , gotScreenShot } from "../app/assets/projects_images"



export  const linksDropDownMenu = [
    { name: "Home", href: "/#home-section" },
    { name: "About", href: "/#about-section" },
    { name: "Skills", href: "/#skills-section" },
    { name: "Projects", href: "/#projects-section" }, 
    { name: "Contact", href: "/#contact-section" },
 ] as const;


export const projectsData = [
    {
        title:"Martial Gear",
        description:"It's a Martial Arts E-commerce Shop where users can add/remove products to a shopping cart. The project showcases my understanding of Next.js and my ability to connect a Frontend to a CMS on the backend.",
        features:["Shopping Card", "Product Filtering", "Product Sorting", "Fetching Data", "Responsive"],
        tags: ["Next.js","Tailwind CSS","TypeScript", "Sanity" , "Shadcn/UI" ],
        imageUrl: martialGearScreenShot,
        demoUrl: "https://martial-art-ecommerce-shop.vercel.app/",
        codeUrl:"https://github.com/mik-dmi/Martial-Arts-Ecommerce-Shop-",
    },
    {
        title:"CaliBrunch",
        description:"It's a brunch restaurant website that showcases my skills in the fundamentals of Web Development. All components, animations, and styles were created using JavaScript and CSS, and no libraries were used.",
        features:[ "CSS Flexbox", "CSS Grid", "Responsive","Modern Design"],
        tags: ["JavaScript","CSS", "HTML" ],
        imageUrl: caliBrunchScreenShot,
        demoUrl: "https://mik-dmi.github.io/Restaurant_Page_Project/",
        codeUrl:"https://github.com/mik-dmi/Restaurant_Page_Project",
    },
    {
        title:"DiveRight",
        description:"It's a diving center website that shows my design and implementation skills using React.js and Tailwind CSS. This project was inspired by my passion for scuba diving.",
        features:["Responsive", "Typewriter Effect","Custom Animations",  "Modern Design"],
        tags: ["React.js","JavaScript","Tailwind CSS", "Framer Motion" ],
        imageUrl: diveRightScreenShot,
        demoUrl: "https://diving-center-website.vercel.app/",
        codeUrl:"https://github.com/mik-dmi/Scuba-Diving-Website",
    },
    {
        title:"GOT Quotes",
        description:"Developed a web application centered around a Game of Thrones Quotes API. The goal was to showcase my understanding of fetching and displaying data from an API.",
        features:["API Fetching", "Searchable list", "Responsive"],
        tags: ["React.js","JavaScript","Tailwind CSS", "Framer Motion" ],
        imageUrl: gotScreenShot,
        demoUrl: "https://got-quotes-web-application.vercel.app/",
        codeUrl:"https://github.com/mik-dmi/GOT-API-Fetching-Website",
    },

    
] as const;