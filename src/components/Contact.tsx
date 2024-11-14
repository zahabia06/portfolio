import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { MdAddCall } from "react-icons/md";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='font-bold text-5xl'data-aos="zoom-in-up">Get in touch</h2>
                <p className='text-white-600 text-[18px] pt-2'data-aos="zoom-in-up">
                    Drop me a line, give me a call or send me a message by submitting the form.
                </p>
                <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                    <MdOutlineMailOutline size={30} className="shadow-lg shadow-purple-500" /> zahabiamurad2oo1@gmail.com
                </div>
                <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                    <MdAddCall size={30} className="shadow-lg shadow-purple-500" /> 0330-3190616
                </div>

            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-purple-500'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-purple-500'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea
                    className='bg-transparent border border-purple-500'
                    id='msg' rows={8} >
                    </textarea>
                </div>
                <button className="bg-purple-500 p-2 px-6 text-white rounded-full hover:bg-purple-600 transition duration-300" data-aos="zoom-in-up">
                    Send
                </button>
            </div>
        </div>
    </div>
  )
}

export default Contact

