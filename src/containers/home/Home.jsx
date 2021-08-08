import React from 'react'
import Header from '../../components/home/Header.jsx'
import NavBar from '../../components/home/NavBar.jsx'
import { ContainerMovies } from '../movies/ContainerMovies.jsx'
const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <ContainerMovies />
        </div>
    )
}

export default Home
