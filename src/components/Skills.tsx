import React from 'react'

const skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='font-bold text-4xl md:text-5xl'>Technologies i work with</h2>
                <p className='text-white pt-2'>
                    As a dedicated professional with a unique blend of expertise in pharmacy and web development, I bring a well-rounded perspective to my work. My proficiency in HTML, CSS, and JavaScript, combined with my advanced knowledge of Tailwind CSS, enables me to create dynamic, responsive, and visually appealing web applications. My background as a pharmacist enriches my approach to problem-solving and attention to detail, allowing me to bridge creativity and precision in both technical and healthcare-focused projects. I am committed to delivering high-quality digital solutions and continually expanding my skill set in the ever-evolving tech landscape. I stay updated on the latest technologies to enhance my skills and make new projects
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-purple-500 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">Css</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default skills