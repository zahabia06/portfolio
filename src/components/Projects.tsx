import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: 'Todo List',
        desc: "A React and TypeScript-based app for managing and organizing tasks and activities by listing them in sequential order",
        img: "/todo.webp",
        tags: ["React", "Node", "CSS", "TypeScript"],
    },
    {
        id: 1,
        title: 'Countdown Timer',
        desc: "A Next.js and TypeScript powered website for counting down from a specified time to zero, commonly used for tracking time until an event or deadline",
        img: "/countdown.png",
        tags: ["Next.js", "Node", "CSS", "TypeScript"],
    },
    {
        id: 3,
        title: 'Currency Converter Project',
        desc: "A simple HTML and TypeScript-based tool that allows users to quickly convert one currency to another using real-time exchange rates",
        img: "/weather.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 4,
        title: 'Static Interactive Resume',
        desc: "A TypeScript-based static interactive resume built with HTML is a structured and visually engaging web page that presents a resume while incorporating TypeScript for enhanced interactivity and error-free code",
        img: "/static.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 5,
        title: 'Dynamic Resume Builder',
        desc: "A TypeScript-based dynamic resume builder built with HTML is an interactive web application that allows users to create, customize, and download their resume in real-time",
        img: "/dynamic.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 6,
        title: 'Simple Calculator Project',
        desc: "An HTML, CSS, and TypeScript-based calculator is a web application that allows users to perform mathematical operations directly from their browser",
        img: "/calculator.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-40 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  );
}

export default Projects
