import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import blogs from '../Data/blogs'
import { Mainlayout, InnerLayout } from '../styles/Layouts'
import 'animate.css';


const BlogsPage = () => {
    return (
        <Mainlayout className="animate__animated animate__fadeIn animate__delay-0.7s">
            <BlogsStyled>
                <Title  title={ 'Blogs' } span={ 'Blogs' }/>
                    <InnerLayout className={'blog'}>
                    {
                        blogs.map((blog) => {
                            return <div key={ blog.id } className={'blog-item'} >
                                <div className="image">
                                    <img src={ blog.image} alt=""/>
                                    <div className="title">
                                        <a href={'blog.link'}>
                                            { blog.title }
                                        </a>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    </InnerLayout>
            </BlogsStyled>
        </Mainlayout>
    )
}

const BlogsStyled = styled.div`
    .blog{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }
        .blog-item{
            background-color: var(--background-dark-grey); ;
            padding: 1rem 1rem;
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
            }
        }
        .title{
            a{
                font-size: 1.8rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    color: var(--primary-color)
                }
            }
        }
    }
`

export default BlogsPage
