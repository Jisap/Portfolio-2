import { useState } from "react";
import { useEffect } from "react";
import { Route, Switch as Switching } from "react-router";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import AboutPage from "./Pages/AboutPage";
import BlogsPage from "./Pages/BlogsPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ResumePage from "./Pages/ResumePage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from "@material-ui/core/Switch";
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
//yarn add react-intersection-observer
//yarn add react-particles-js
//yarn add react-router-domain
//yarn add styled-components
//yarn add @material-ui/core
//yarn add @material-ui/icons


function App() {

  const [ theme, setTheme ] = useState( 'dark-theme' ); // Estado para theme
  const [ checked, setChecked ] = useState( false );    // Estado para checked
  const [ navToggle, setNavToggle ] = useState(false);  // Estado de aparición del sidebar

  useEffect(()=> {
    document.documentElement.className = theme;     // Obtiene la clase del elemento raíz de cualquier documento.
  },[ theme ]);                                     // Cada vez que cambie theme la clase del estilo global aplicada será igual dicho theme.

  const themeToggler = () => {
    if( theme === 'light-theme' ){  // Se cambia al theme contrario y el checked tambien
      setTheme( 'dark-theme' );
      setChecked( false )
    }else{
      setTheme( 'light-theme' );
      setChecked( true );
    }
  };

  return (
    
    <div className="App">
      <Sidebar navToggle={ navToggle }/>

      <div className="theme">
        <div className="ligth-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="rigth-content">
            <Switch
              value=""
              checked={ checked }
              inputProps={{ 'aria-label':'' }}
              size="medium"
              onClick={ themeToggler }
              />
          </div>
        </div>
      </div>

      {/* Aquí esta el boton del menu hamburguer, cuando se hace click cambia la prop navToggle al contrario de su valor */}
      {/* esta prop se pasa al componente sideBar y según sea true o false se muestra o no*/}
      <div className="ham-burger-menu"> 
          <IconButton onClick={() => setNavToggle(!navToggle)}> 
              <MenuIcon />
          </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switching>

          <Route path="/" exact >
            <HomePage />
          </Route>
          <Route path="/about" exact >
            <AboutPage />
          </Route>
          <Route path="/resume" exact >
            <ResumePage />
          </Route>
          <Route path="/portfolios" exact >
            <PortfoliosPage />
          </Route>
          <Route path="/blogs" exact >
            <BlogsPage />
          </Route>
          <Route path="/contact" exact >
            <ContactPage />
          </Route>
          
        </Switching>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
    .lines{
      position:absolute;
      min-height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      opacity: 0.4;
      z-index: -1;
      
      .line-1, .line-2, .line-3, .line-4{
        width: 1px;
        min-height: 100vh;
        background-color: var(--border-color);
      } 
    }
`;

export default App;
