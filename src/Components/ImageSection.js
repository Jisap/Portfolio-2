import React from 'react'
import styled from 'styled-components'
import resume from '../img/resume.jpg'
import PrimaryButton from './PrimaryButton'

const ImageSection = () => {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={ resume } alt="" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am<span> Lorem ipsum</span></h4>
                </div>
                <p className="paragraph">
                    lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Lorem ipsum</p>
                        <p>: 36</p>
                        <p>: Spanish</p>
                        <p>: Spanish, French, English </p>
                        <p>: London, UNited Kingdom</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={ 'Donwload Cv' } />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width:90%;
            object-fit: cover;
            @media screen and (max-width:997px){
                width:100%;
            }
        }
    }
    .right-content{
        width: 100%;
         @media screen and (max-width:633px){
                font-size: .8rem;
                font-weight: 400;
        }
        
        h4{
            font-size:2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
            
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                    
                }   
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                    @media screen and (max-width:633px){
                        font-size: 1rem;
                        font-weight: 400;
                    }
                    @media screen and (max-width:453px){
                        font-size: .8rem;
                        font-weight: 400;
                    }
                }
            }
            
        }
    }
`

export default ImageSection
