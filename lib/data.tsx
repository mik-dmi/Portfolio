import {martialGearScreenShot, diveRightScreenShot,caliBrunchScreenShot , rag_chatbot , ssh_chatbot} from "../app/assets/projects_images"



export  const linksDropDownMenu = [
    { name: "Home", href: "/#home-section" },
    { name: "About", href: "/#about-section" },
    { name: "Skills", href: "/#skills-section" },
    { name: "Projects", href: "/#projects-section" }, 
    { name: "Contact", href: "/#contact-section" },
 ] as const;


export const projectsData = [
    {
        title:"RAG Restful API For Documentation",
        description:"Developed a Retrieval-Augmented Generation AI System on a RESTful API that allows you to easily populate the system with your own documents and effortlessly retrieve any specific information by simply asking a question.",   
        features:["Fast & Secured", "Repository Design Pattern", "Self-Hosted"],
        tags: ["Golang","Weaviate","Redis", "Docker", "LangChain" ],
        imageUrl: rag_chatbot,
        demoButtonText: "Project Details",
        demoUrl: "https://github.com/mik-dmi/rag_chatbot/blob/master/readme.md",
        codeUrl:"https://github.com/mik-dmi/rag_chatbot",
    },
    {
        title: "Secure Communication Over SSH - CLI Tool",
        description: "A command-line SSH chat application that enables users to create and join chat rooms for secure, real-time communication using the SSH protocol.",
        features: ["Fast & Secure", "Concurrency-Safe", "Self-Hosted"],
        tags: ["Golang", "SSH", "Docker"],
        imageUrl: ssh_chatbot,
        demoButtonText: "Project Details",
        demoUrl: "https://github.com/mik-dmi/secure_chat_over_ssh/blob/main/readme.md",
        codeUrl: "https://github.com/mik-dmi/secure_chat_over_ssh",
    },
    {
        title:"Martial Gear",
        description:"Developed a Martial Arts E-commerce Shop. The shop features an AI Chatbot connected to OpenAI to assist customers, a shopping cart, advanced product filtering and sorting, and is powered by a CMS (Sanity.io).",
        features:["Shopping Card", "Product Filtering", "Product Sorting", "AI Chatbot" ,"Fetching Data", "Responsive"],
        tags: ["Next.js","Tailwind CSS","TypeScript","OpenAI","Sanity" , "Shadcn/UI" ],
        imageUrl: martialGearScreenShot,
        demoButtonText: "Live Demo",
        demoUrl: "https://martial-art-ecommerce-shop.vercel.app/",
        codeUrl:"https://github.com/mik-dmi/Martial-Arts-Ecommerce-Shop-",
    },
    {
        title:"CaliBrunch",
        description:"It's a brunch restaurant website that showcases my skills in the fundamentals of Web Development. All components, animations, and styles were created using JavaScript and CSS, and no libraries were used.",
        features:[ "CSS Flexbox", "CSS Grid", "Responsive","Modern Design"],
        tags: ["JavaScript","CSS", "HTML" ],
        imageUrl: caliBrunchScreenShot,
        demoButtonText: "Live Demo",
        demoUrl: "https://mik-dmi.github.io/Restaurant_Page_Project/",
        codeUrl:"https://github.com/mik-dmi/Restaurant_Page_Project",
    },
    {
        title:"DiveRight",
        description:"It's a diving center website that shows my design and implementation skills using React.js and Tailwind CSS. This project was inspired by my passion for scuba diving.",
        features:["Responsive", "Typewriter Effect","Custom Animations",  "Modern Design"],
        tags: ["React.js","JavaScript","Tailwind CSS", "Framer Motion" ],
        imageUrl: diveRightScreenShot,
        demoButtonText: "Live Demo",
        demoUrl: "https://diving-center-website.vercel.app/",
        codeUrl:"https://github.com/mik-dmi/Scuba-Diving-Website",
    },
  
    
] as const;