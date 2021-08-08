import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Box, Grid } from '@chakra-ui/layout'
import CardPelis from '../movies/CardPelis.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { activeMovie } from '../../actions/movieAction'
import M from "materialize-css";
import { FaPlay } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { Avatar, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import actor1 from '../../images/MeganFox.jpg'
import actor2 from '../../images/AdamDeacon.jpg'
import actor3 from '../../images/BrandonAuret.jpg'
import actor4 from '../../images/IsabelBassett.jpg'
import actor5 from '../../images/JessicaSutton.jpg'
import actor6 from '../../images/KennethFok.jpg'
import actor7 from '../../images/PhilipWinchester.jpg'
import actor8 from '../../images/SisandaHenna.jpg'
import actor9 from '../../images/TamerBurjaq.jpg'
import { AddVerMasTarde } from '../../actions/VerDespuesActions.js'

import Swal from 'sweetalert2'
import NavBar from '../../components/home/NavBar.jsx'
import Header from '../../components/home/Header.jsx'

import { Link } from 'react-router-dom'

const StyledBoxPeli = styled(Box)`
    width: 220px;
    height: 330px;
    margin-bottom:48px;
`

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

const StyledImagePeli = styled.img`
    width: 220px;
    height: 330px;
`

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
`
const StyledDivModal = styled.div`
    display: flex;
    background: #0f0e17ba;
    height: 100vh;
    color: white;
    border-radius: 20px;
`
// , display: "flex", flexWrap: "wrap" 
export const MenosValoradas = () => {
    const { movies } = useSelector(state => state.movies)
    const dispatch = useDispatch()
    const handleClickMovie = (movie) => {
        dispatch(
            activeMovie(movie.id, {
                ...movie
            })
        );
    }

    movies.sort(function (a, b) {
        return (b.qualification - a.qualification)
    })

    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {
            opacity: "0.93"
        });
    }, [])

    const { active } = useSelector(state => state.movies)

    const { movies: moviesVerMasTarde } = useSelector(state => state.verMasTarde)

    const agregarVerMasTarde = (e) => {
        e.preventDefault()

        const found1 = moviesVerMasTarde.find(element => element.title === active.title);

        if (found1 === undefined) {
            dispatch(AddVerMasTarde(active.title, active.description, active.category, active.date, active.duration, active.image, active.qualification, active.trailer))

            Swal.fire({
                icon: 'success',
                title: 'Pelicula agregada a ver despues',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <>
            <NavBar />
            <Header />
            <StyledTitulo>Menos valoradas</StyledTitulo>
            <Grid templateColumns="repeat(5, 1fr)" gap={5} style={{ marginLeft: "83px", marginRight: "83px", marginTop: "48px" }}>
                {movies.map(m => {
                    if (m.qualification < 4) {
                        return (<>
                            <StyledBoxPeli key={`menosValoradas-${m.id}`} onClick={() =>
                                handleClickMovie(m)} >
                                <CardPelis movie={m} />
                            </StyledBoxPeli>
                        </>
                        )
                    }
                })}
            </Grid>
            <StyledDivModal id="modal1" className="modal">
                <a className="btn-floating btn-small modal-close" style={{ display: "flex", justifyContent: "center", background: "black", float: "right" }}><AiOutlineCloseCircle style={{ fontSize: "32px" }} /></a>
                <div className="modal-content" style={{ display: "flex", flexDirection: "row-reverse" }}>
                    <div style={{ padding: "20px" }}>
                        <Heading style={{ marginBottom: "10px" }}>{active.title}</Heading>
                        <p>{active.description}</p>
                        <br />
                        <p style={{ color: "gray" }}>{active.date} - {active.category} - {active.duration}</p>
                        <div>
                            <Heading style={{ fontSize: "23px", marginTop: "20px", marginBottom: "20px" }}>Actores</Heading>
                            <Wrap spacing="1rem">
                                {/* {active.actors.map(a => { */}
                                {/* return ( */}
                                <WrapItem>
                                    <Avatar name="actor1" src={actor1} />
                                </WrapItem>
                                <WrapItem>
                                    <Avatar name="actor2" src={actor2} />
                                </WrapItem>
                                <WrapItem>
                                    <Avatar name="actor3" src={actor3} />
                                </WrapItem>
                                {/* ) */}
                                {/* })} */}

                                {/* <WrapItem>
                                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                            </WrapItem> */}
                            </Wrap>
                        </div>
                    </div>

                    <StyledImagePeli src={active.image} />
                </div>
                <div className="modal-footer" style={{ display: "flex", marginBottom: "20px", background: "#0f0e17ba" }}>
                    <Link to="/verAhora" >
                        <StyledButtom onClick={() => {
                            setTimeout(() => {
                                window.location.reload()
                            }, 1000);
                        }} className="btn" style={{ width: "195px", marginLeft: "24px", background: "#FED941", color: "#000000" }}
                        ><FaPlay style={{ marginRight: "8px", marginTop: "3px" }} />Ver ahora</StyledButtom>
                    </Link>
                    <StyledButtom onClick={(e) => agregarVerMasTarde(e)} className="btn " style={{ width: "213px", marginLeft: "16px", background: "#0C0E16", color: "#FED941" }}><IoMdAdd style={{ marginRight: "8px", marginTop: "3px" }} />Ver después</StyledButtom>
                    {/* <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a> */}
                </div>
            </StyledDivModal>
        </>
    )
}
