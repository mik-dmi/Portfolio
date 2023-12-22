import React from 'react'
import {martialGearScreenShot, diveRightScreenShot,caliBrunchScreenShot , gotScreenShot } from "../app/assets/projects_images"

export const projectsData = [
    {
        title:"Martial Gear",
        description:"It's a dynamic Martial Arts E-commerce Web Shop where users can add products to a shopping cart. Built with Next.js for the frontend and powered by Sanity.io in the backend.",
        features:["Shopping Card", "Product Filtering", "Product Sorting", "Fetching Data", "Responsive for all screen sizes"],
        tags: ["Next.js","TypeScript","Tailwind CSS", "Sanity" , "Stripe", "Shadcn UI" ],
        imageUrl: martialGearScreenShot,
    },
    {
        title:"CaliBrunch",
        description:"It's a brunch restaurant website that show my skills in the fundamentals of Web Development, vanilla JavaScript and CSS. No libraries or frameworks or used",
        features:[ "CSS Flexbox", "CSS Grid", "Responsive for all screen sizes","Simple and Modern Design", "Custom Forms and Transitions effects"],
        tags: ["JavaScript","CSS", "HTML" ],
        imageUrl: caliBrunchScreenShot,
    },
    {
        title:"DiveRight",
        description:"It's a diving center website that show cases my design and implementation skills using React.js. This project was inspired by my passion for scuba diving.",
        features:["Simple and Modern Design", "Framer Motion Animations", "Typewriter Effect", "Responsive for all screen sizes"],
        tags: ["React.js","Tailwind CSS", "Framer Motion" ],
        imageUrl: diveRightScreenShot,
    },
    {
        title:"GOT Quotes",
        description:"Developed a web application centered around a Game of Thrones Quotes API. The goal was to show that i could fetch data from an API and display it in a efficient way.",
        features:["API Fetching", "Searchable list", "Responsive for all screen sizes"],
        tags: ["React.js","Tailwind CSS", "Framer Motion" ],
        imageUrl: gotScreenShot,
    },

    
] as const;