import React from 'react'
import Resume from '../Components/Resume'
import Skills from '../Components/Skills'
import { Mainlayout } from '../styles/Layouts'
import 'animate.css';

const ResumePage = () => {
    return (
        <Mainlayout className="animate__animated animate__fadeIn animate__delay-0.7s">
            <Skills />
            <Resume />
        </Mainlayout>
    )
}

export default ResumePage
