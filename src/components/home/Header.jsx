import React, { useEffect } from 'react'
import M from "materialize-css";
import styled from 'styled-components'
import img1 from '../../images/mulan.png'
import img2 from '../../images/raya.png'
import img3 from '../../images/unidos.png'

import { FaPlay } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { AddVerMasTarde } from '../../actions/VerDespuesActions.js'

import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const StyledButtom = styled.a`
    padding: 10px 24px 10px 24px;
    height: 48px;
    margin-bottom: 62px;
    border-radius: 4px;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    display: flex;

    /* @media(max-width:460px){
        position: absolute;
        top:"0";
    } */
`

const StyledContainerCarousel = styled.div`
    margin-left: 78px;
    margin-right: 54px;
    margin-top: 24px;
    
    border-radius: 8px !important;
    @media(max-width:460px){
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
    }
`

const StyledCarouserSlider = styled.div`
    height: 365px !important;
    @media(max-width:460px){
        height: 150px !important;
    }
`

const peliculaMulan = {
    category: "Acción/Aventura",
    date: "2020",
    description: "Mulan es una película estadounidense de acción y aventura dirigida por Niki Caro. Es una adaptación en imagen real de la película animada homónima de 1998, que a su vez está basada en la leyenda china de Hua Mulan.",
    duration: "2 horas",
    id: "zpoWcdnxumxIVQv6x0m4",
    image: "https://i.ibb.co/QXVgj1m/mulan-Portada.jpg",
    qualification: 6.3,
    title: "Mulan",
    trailer: "https://www.youtube.com/embed/1dnaQjFL67k"
}

const peliculaRaya = {
    id: "5KGkO0wkEIGjVnpCap3y",
    qualification: 6.7,
    title: "Raya y el último dragón",
    duration: "1h 57m",
    image: "https://i.ibb.co/bmRr1PL/raya-Portado.jpg",
    description: "Raya, una guerrera solitaria, debe localizar a un dragón legendario para restaurar su tierra fracturada y a su gente dividida.",
    category: "Infantil/Fantasía",
    date: "2021",
    trailer: ""
}

const peliculaUnidos = {
    category: "Infantil/Comedia",
    date: "2020",
    description: "Dos hermanos elfos adolescentes, Ian y Barley, hacen un viaje en busca de un poco de magia para pasar un último día con su padre fallecido, pero cuando su madre se entera de que no están, se une a la legendaria mantícora para traerlos de regreso.",
    duration: "1h 42m",
    id: "gVi1xa7BvhEAptOAsN2O",
    image: "https://i.ibb.co/KLpr0XH/unidos-Portada.jpg",
    qualification: 6.8,
    title: "Unidos",
    trailer: "https://www.youtube.com/embed/_9ULoCgJ3-E"
}
const Header = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        // document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {
            fullWidth: true,
            indicators: true,
            shift: -1200,
        })
        // })
    }, [])

    const { active } = useSelector(state => state.movies)

    const { movies: moviesVerMasTarde } = useSelector(state => state.verMasTarde)

    const agregarVerMasTarde = (e, pelicula) => {
        e.preventDefault()

        const found1 = moviesVerMasTarde.find(element => element.title === pelicula.title);

        if (found1 === undefined) {
            dispatch(AddVerMasTarde(pelicula.title, pelicula.description, pelicula.category, pelicula.date, pelicula.duration, pelicula.image, pelicula.qualification, pelicula.trailer))

            Swal.fire({
                icon: 'success',
                title: 'Pelicula agregada a ver despues',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }


    return (
        <StyledContainerCarousel>
            <StyledCarouserSlider className="carousel carousel-slider" data-indicators="true">
                <div className="carousel-item active" style={{ borderRadius: "8px" }}>
                    <img src={img1} />
                    <div className="carousel-fixed-item" style={{ display: "flex" }}>
                        <Link to={'/verAhora/'}>
                            <StyledButtom className="btn" style={{ width: "195px", marginLeft: "24px", background: "#FED941", color: "#000000" }}
                            ><FaPlay style={{ marginRight: "8px", marginTop: "3px" }} />Ver ahora</StyledButtom>
                        </Link>
                        <StyledButtom
                            onClick={(e) =>
                                agregarVerMasTarde(e, peliculaMulan)
                            }
                            className="btn " style={{ width: "213px", marginLeft: "16px", background: "#0C0E16", color: "#FED941" }}><IoMdAdd style={{ marginRight: "8px", marginTop: "3px" }} />Ver después</StyledButtom>
                    </div>
                </div>
                <div className="carousel-item" href="#two!" style={{ borderRadius: "8px" }}>
                    <img src={img2} />
                    <div className="carousel-fixed-item " style={{ display: "flex" }}>
                        <Link to={'/verAhora/'}>
                            <StyledButtom className="btn" style={{ width: "195px", marginLeft: "24px", background: "#FED941", color: "#000000" }}
                            ><FaPlay style={{ marginRight: "8px", marginTop: "3px" }} />Ver ahora</StyledButtom>
                        </Link>
                        <StyledButtom onClick={(e) => agregarVerMasTarde(e, peliculaRaya)} className="btn " style={{ width: "213px", marginLeft: "16px", background: "#0C0E16", color: "#FED941" }}><IoMdAdd style={{ marginRight: "8px", marginTop: "3px" }} />Ver después</StyledButtom>
                    </div>
                </div>
                <div className="carousel-item" href="#three!" style={{ borderRadius: "8px" }}>
                    <img src={img3} />
                    <div className="carousel-fixed-item " style={{ display: "flex" }}>
                        <Link to={'/verAhora/'}>
                            <StyledButtom className="btn" style={{ width: "195px", marginLeft: "24px", background: "#FED941", color: "#000000" }}
                            ><FaPlay style={{ marginRight: "8px", marginTop: "3px" }} />Ver ahora</StyledButtom>
                        </Link>
                        <StyledButtom onClick={(e) => agregarVerMasTarde(e, peliculaUnidos)} className="btn " style={{ width: "213px", marginLeft: "16px", background: "#0C0E16", color: "#FED941" }}><IoMdAdd style={{ marginRight: "8px", marginTop: "3px" }} />Ver después</StyledButtom>
                    </div>
                </div>
            </StyledCarouserSlider>
        </StyledContainerCarousel>
    )
}

export default Header