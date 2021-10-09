import React, { useState } from 'react'
import { InnerLayout, Mainlayout } from '../styles/Layouts';
import Title from '../Components/Title';
import portfolios from '../Data/portfolios';
import Menu from '../Components/Menu';
import Button from '../Components/Button';
import 'animate.css';

// ...New crea una instancia de un objeto definido en este caso cada unos de los elementos contenidos en portfolio y en concreto el item.category
// El objeto Set permite almacenar valores únicos de cualquier tipo.

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]; // [] con todos los títulos de todos los botones corresp a los portfolios
                                                                               // Se añade All como un boton más. 
const PortfoliosPage = () => {

    const [menuItem, setMenuItems] = useState(portfolios);      // Estado para el conjunto de portfolios a mostrar
    const [button, setButtons] = useState(allButtons);          // Estado para el boton pulsado

    const filter = (button) => {                                // Establecemos una función para filtrar lo que los botones mostrarán.

        if(button === 'All'){                                   // Si el boton = 'All' se mostrara el total de botones de portfolios
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);   // Función que define que se muestra segun el estado del boton
        setMenuItems(filteredData);
    }

    return (
        <Mainlayout className="animate__animated animate__fadeIn animate__delay-0.7s">
            <Title title={'Portfolios'} span={'portfolios'} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </Mainlayout>
    )
}

export default PortfoliosPage
