import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ReviewItem from './ReviewItem';
import Title from './Title';

const ReviewsSection = () => {
    return (
        
            <ReviewsStyledSection>
                <Title title={'Reviews'} span="Reviews"/>
                <InnerLayout>
                    <div className="reviews">
                        <ReviewItem 
                            text={ 'lorem ipsum dolor sit amet, consectetur adipiscing'}
                            author={'Fulano de Tal'}
                        />
                        <ReviewItem 
                            text={ 'lorem ipsum dolor sit amet, consectetur adipiscing'}
                            author={'Mengano de Tal'}
                        />
                    </div>
                </InnerLayout>
            </ReviewsStyledSection>
        
    )
}

const ReviewsStyledSection = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export default ReviewsSection
