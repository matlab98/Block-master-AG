import React, { useEffect, useState } from 'react'
import logo from '../../images/logo-blockBuster.png'
import styled from 'styled-components'
import { Button, Input } from '@chakra-ui/react'
import { IoMdSearch } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/authActions'
import firebase from 'firebase'
import { Link } from 'react-router-dom'
import { RiLoginBoxLine, RiLogoutBoxLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'

import M from "materialize-css";
import { starCleanSearch, startSearch } from '../../actions/movieAction'
const StyledNavLogo = styled.img`
    width: 106.81px;
    height: 64px;
    margin-left: 83px;
    margin-top: 24px;
    margin-bottom: 24px;
`

const StyledNavLinks = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin-top: 46px;
    margin-bottom: 46px;
    margin-left:48px;
    &:active{
        color: #FED941;
        text-decoration-line: underline;
    }
    
`

const NavBar = () => {

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(startLogout())
    }

    const [isLoogedIn, setsIsLoogedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                // dispatch(login(user.uid, user.displayName))
                setsIsLoogedIn(true)
            } else {
                setsIsLoogedIn(false)
            }
        })

    }, [dispatch])
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    });

    const [filter, setFilter] = useState('')

    const handleDataSearch = (e) => {
        e.preventDefault()
        dispatch(startSearch(filter.toLowerCase()))
        console.log(filter);
    }

    const handleLimpiar = () => {
        dispatch(starCleanSearch())
    }

    return (
        <>
            <nav style={{ height: "112px", background: "#0F0E17", border: "none" }}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><StyledNavLogo src={logo} /></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><StyledNavLinks to="/home">Todas</StyledNavLinks></li>
                        <li><StyledNavLinks to="/masValoradas">Más valoradas</StyledNavLinks></li>
                        <li><StyledNavLinks to="/menosValoradas" style={{ marginRight: "48px" }}>Menos valoradas</StyledNavLinks></li>
                        <li>
                            <form onSubmit={handleDataSearch}>
                                <div className="input-field" style={{ display: "flex", marginTop: "34px", marginBottom: "34px", height: "22px" }}>
                                    <Input variant="outline" placeholder="Busca tu pelicula favorita" type='search' style={{ background: "white", padding: "11px 12px", width: "235px", borderRadius: "8px 0px 0px 8px", color: "black" }} name="search" onChange={(e) => {
                                        setFilter(e.target.value)
                                    }} />
                                    {/* <Link to="/search"> */}
                                        <Button type="submit" style={{ marginRight: "48px", background: "#FED941", width: "72px", height: "44px", borderRadius: "0px 4px 4px 0px" }}><IoMdSearch style={{ color: "black", fontSize: "24px" }} /></Button>
                                    {/* </Link> */}
                                </div>
                            </form>
                        </li>
                        <li>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px", marginRight: "83px" }}>{
                                isLoogedIn ?
                                    <div style={{ display: 'flex' }}>
                                        <Link to='/verMasTarde'>
                                            <div style={{ fontSize: '25px', opacity: '0.3' }}>
                                                <CgProfile color="#ffa903" />
                                            </div>

                                        </Link>
                                        {/* <Link to="/carrito" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ margin: '0 30px' }}>
                                                <img src="https://i.ibb.co/ChmcXxb/vector-shop-cart.png" alt="vector-shop-cart" border="0" />
                                            </div>
                                        </Link> */}
                                    </div>
                                    :
                                    <p></p>
                            }
                                {
                                    !isLoogedIn
                                        ?
                                        <Link to='/auth/login'>
                                            <div style={{ fontSize: '25px', opacity: '0.3' }}>
                                                <RiLoginBoxLine color="#ffa903" />
                                            </div>
                                        </Link>
                                        :
                                        <div onClick={handleLogout} style={{ fontSize: '25px', opacity: '0.3' }}> <RiLogoutBoxLine color="#ffa903" />
                                        </div>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </>
    )
}

export default NavBar
