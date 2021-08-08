import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { activeMovie } from '../../actions/movieAction'
import { useDispatch } from 'react-redux'

const StyledImagePeli = styled.img`
    width: 220px;
    height: 330px;
`
const StyledEtiquetaPEli = styled.span`
    background: #000000 !important;
    opacity: 0.64 !important;
    border: 3px solid #0E3FA9 !important;
    box-sizing: border-box !important;
    backdrop-filter: blur(130px) !important;
    bottom: 240px !important;
    height: 64px !important; 
    width: 114px !important;
`

const CardPelis = ({ movie }) => {

    const dispatch = useDispatch()
    const handleClickMovie = (movie) => {
        dispatch(
            activeMovie(movie.id, {
                ...movie
            })
        );

    }

    return (
        <a className="modal-trigger" href="#modal1">
            <div className="row">
                <div className="col s12 m7" style={{ width: "220px", height: "330px" }}>
                    <div className="card" style={{ borderRadius: "8px" }}>
                        <div className="card-image" >

                            <StyledImagePeli src={movie.image} />

                            <span className="card-title" style={{
                                background: "#000000",
                                opacity: "0.64",
                                borderRadius: "0px 30px 30px 0px",
                                border: "solid #0E3FA9",
                                // border: "solid #FED941",
                                boxSizing: "border-box",
                                backdropFilter: "blur(130px)",
                                bottom: "240px",
                                height: "64px",
                                width: "114px",

                                fontFamily: "Montserrat",
                                fontStyle: "normal",
                                fontWeight: "bold",
                                fontSize: "28px",
                                lineHeight: "34px",
                                textAlign: "center",
                                letterSpacing: "0.01em",
                                color: "#FFFFFE",

                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "0px"
                            }}> <FaStar style={{ color: "#FED941", marginRight: "8px" }} />{movie.qualification}</span>
                        </div>
                    </div>
                </div>
            </div >
        </a>

    )
}

export default CardPelis
