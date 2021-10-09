import React from 'react'
import styled from 'styled-components'
import ImageSection from '../Components/ImageSection'
import ReviewsSection from '../Components/ReviewsSection'
import ServicesSection from '../Components/ServicesSection'
import Title from '../Components/Title'
import { Mainlayout } from "../styles/Layouts"
import 'animate.css';

const AboutPage = () => {
    return (
        <Mainlayout className="animate__animated animate__fadeIn animate__delay-0.7s">
            <AboutStyled>
                <Title title={'About me'} span={'About me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
            </AboutStyled>
        </Mainlayout>
    )
}

const AboutStyled = styled.section`
    
`

export default AboutPage
