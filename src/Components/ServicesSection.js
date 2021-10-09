import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ServiceCard from './ServiceCard'
import Title from './Title'
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/gamedev.svg';


const ServicesSection = () => {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web design'} 
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adip'}/>
                   
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Artificial Intelligence'} 
                            paragraph={'Lorem ipsum dolor sit amet, consectetur adip'}/>
                    </div>

                    <ServiceCard 
                        image={gamedev} 
                        title={'Game Development'} 
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adip'}/>
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export default ServicesSection
