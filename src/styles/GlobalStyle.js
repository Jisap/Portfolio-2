import { createGlobalStyle  } from "styled-components";
import 'animate.css'


const GlobalStyle = createGlobalStyle`
/* :root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
} */

    .light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    }

    .dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family:'Nunito', sans-serif;
        font-size: 1.2rem;
    }

    body{
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }

    body::-webkit-scrollbar{
        width: 9px;
        background-color: #383838;
    }

    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: #6b6b6b;
    }

    body::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #383838;
    }

    text-area{
        max-width: 100%;
    }

    a{
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        font-size: 1rem;
    }
    h1{
        font-size: 4rem;
        color: var(--white-color);
        span{
            font-size: 4rem;
             @media screen and (max-width: 502px){
                font-size: 3rem
             }
        }
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }

    span{
        color: var(--primary-color);
    }

    /* Flotin Toggler  */
    
    .ligth-dark-mode{
      position: fixed;
      right:0;
      top:10%;
      background-color: var(--background-light-color-2);
      width: 6.5rem;
      height: 2.5rem;
      z-index: 15;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        display: flex;
        align-items: center;
        font-size: 1.7rem;
        color: var(--white-color);
      }
    }

    /* Nav Toggler */
    .ham-burger-menu{           /* Posición del menu con display: none */
      position: absolute;
      right: 5%;
      top: 3%; 
      display: none;
      z-index: 25;
      svg{
          font-size: 3rem;
      }
    }
    .nav-toggle{                        /* Cuando se active esta clase aparecera lo que contenga */
        transform: translateX(0);
        z-index: 20;
    }
    @media screen and (max-width:1200px){   /* En este tamaño aparece el menu */
    .ham-burger-menu{
        display: block;
    }
  }
`;

export default GlobalStyle;