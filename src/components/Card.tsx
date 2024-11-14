import React from 'react'
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className='border border-purple-500 w-[350px] h-[450px] sm:w-[350px] sm:h-[500px] flex flex-col' data-aos="zoom-in-up">
        {/* Image Container */}
        <div className='flex-shrink-0 h-[200px] w-full relative'>
            <Image
                src={img}
                alt={title}
                layout="fill"             // Ensures the image fills the div
                objectFit="contain"       // Fits the entire image within the area without cropping
                className='rounded-t-lg'  // Optional: Adds a rounded top to the image
            />
        </div>

        {/* Card Content */}
        <div className='p-4 space-y-4 flex flex-col justify-between flex-grow'>
            <div className='text-2xl font-bold'>{title}</div>
            <div className='text-sm'>{desc}</div>
            <div className="flex flex-wrap gap-2">
                {tags.map((el, index) => {
                    const backgroundColor = index === 0 ? 'bg-[#bc275e]' : 
                    index === 1 ? 'bg-[#a55eea]' : 
                    index === 2 ? 'bg-[#1e90ff]' : 
                    'bg-[#bc275e]';
                    return (
                    <div className={`${backgroundColor} text-xs px-2 py-1 rounded-full text-white font-bold`} key={el}>
                        {el}
                        </div>
                        );
                        })}
                    </div>
            </div>
        </div>
  )
}

export default Card;
