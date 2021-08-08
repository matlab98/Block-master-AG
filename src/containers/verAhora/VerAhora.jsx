import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/home/Header'
import NavBar from '../../components/home/NavBar'
import styled from 'styled-components'
import { useEffect } from 'react'
const StyledTitulo = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
    text-align: left;
    letter-spacing: -0.005em;
    color: #FFFFFE;
    margin-left: 83px;
    margin-top: 56px;
`
const VerAhora = () => {

    const { active } = useSelector(state => state.movies)
    // useEffect(() => {
    //     setTimeout(() => {
    //         window.location.reload()
    //     }, 1000);
    // }, [])
    
    return (
        <div>
            <NavBar />
            <Header />
            <StyledTitulo>{active.title}</StyledTitulo>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>

                <iframe width="670" height="425" src={active.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default VerAhora
