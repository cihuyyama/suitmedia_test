import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineInstagram
} from "react-icons/ai";

function Footer() {
    return (
        <footer className='w-full px-20 bg-gray-800 text-white'>
            <div className='mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between items-center'>
                <div>© 2023 Muhammad Iqbal Al Habib</div>
                <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
                    <a href="https://github.com/cihuyyama" rel="noreferrer" target="_blank">
                        <AiOutlineGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-white"
                            size={30}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/iqbalal.habib/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineInstagram
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-white"
                            size={30}
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/iqbalalhabib/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineLinkedin
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-white"
                            size={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer