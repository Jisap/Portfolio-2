import React from 'react'
import Particle from '../Components/Particles'; // yarn add tsparticles
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon from '@material-ui/icons/YouTube'
import 'animate.css';

const HomePage = () => {
    return (
        <HomePageStyled className="animate__animated animate__fadeIn animate__delay-0.7s">
            <div className="p-particles-js">
                <Particle />
            </div>
            <div className="typography">
                <h1>
                    Hi I´m 
                    <span> Lorem ipsum</span>
                </h1>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet
                    </p>
                    <div className="icons">
                        <a href="https://facebook.com" className="icon i-facebook">
                            <FacebookIcon />
                        </a>
                        <a href="https://github.com" className="icon i-github">
                            <GithubIcon />
                        </a>
                        <a href="https://youtube" className="icon i-youtube">
                            <YoutubeIcon />
                        </a>
                    </div>
                
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
   width: 100%;
   height:100vh;
   position: relative;
   
   .p-particles-js{
       position: absolute;
       top:0;
       left: 0;
   }

   .typography{
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate( -50%, -50%);
       text-align: center;
       width: 80%;

       .icons{
           display:flex;
           justify-content: center;
           margin-top: 1rem;
           .icon{
               border: 2px solid var(--border-color);
               display:flex;
               align-items: center;
               justify-content: center;
               border-radius:50%;
               transition: all .4s ease-in-out;
               cursor: pointer;

               &:hover{
                   border: 2px solid var(--primary-color);
                   color: var(--primary-color);
               }

               &:not(:last-child){
                   margin-right: 1rem;
                   
               }

               svg{
                   margin: .5rem;
               }
           }

           .i-youtube{
               &:hover{
                  border: 2px solid red;
                   color: red; 
               }
           }
           .i-github{
               &:hover{
                  border: 2px solid #5F4687;
                   color: #5F4687; 
               }
           }
           .i-facebook{
               &:hover{
                  border: 2px solid white;
                   color: white; 
               }
           }
       }
   }
`

export default HomePage
