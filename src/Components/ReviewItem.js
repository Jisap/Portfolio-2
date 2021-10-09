import React from 'react'
import styled from 'styled-components'

const ReviewItem = ({ text,author }) => {
    return (
        <>
        <ReviewItemStyle>
            <p>{ text }</p>
        </ReviewItemStyle> 
        <span>{ author }</span>   
        </>
    )
}

const ReviewItemStyle = styled.div`
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width:100%;
    &:not(:first-child){
        
    }
    &::after{                 /* Pseudoelemento que crea un triangulito despues de la caja de texto */
        content:"";
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top:100%;
        border-style: solid;/*  arriba               derecha       abajo             izda   */
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
    p{
        padding: 1rem 0;
    }
`


export default ReviewItem
