import { ChakraProvider, Spinner } from "@chakra-ui/react";
import Home from "../containers/home/Home";
import styled from "styled-components";
import AuthRouter from "./AuthRouter";
import DetailPelis from "../containers/movies/DetailPelis";
import Profile from "../containers/profile/Profile";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import firebase from "firebase";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { startLoadingMovies } from "../actions/movieAction";
import { login } from "../actions/authActions";
import { MasValoradas } from "../containers/masValoradas/MasValoradas";
import { MenosValoradas } from "../containers/menosValoradas/MenosValoradas";
import NavBar from "../components/home/NavBar";
import Header from "../components/home/Header";
import { startLoadingVerMasTarde } from "../actions/VerDespuesActions";
import { VerMasTarde } from "../containers/verMasTarde/VerMasTarde";
import Search from "../containers/search/Search";
import VerAhora from "../containers/verAhora/VerAhora";

const Carga = styled(Spinner)`
     display:block;
     margin-left:auto;
     margin-right:auto;
`

export const App = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      dispatch(startLoadingMovies())
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber))
        dispatch(startLoadingVerMasTarde(user.uid))
        setIsLoggedIn(true)
        // dispatch(startLoadingUsers(user.uid))
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false);

    })

  }, [dispatch, setChecking, setIsLoggedIn])

  if (checking) {
    return (
      <div>
        <Carga animation="border" role="status">
          <span className='sr-only'>Loading...</span>
        </Carga>
      </div>
    )
  }

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/masValoradas' component={MasValoradas} />
          <Route exact path='/menosValoradas' component={MenosValoradas} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/verAhora' component={VerAhora} />
          <PublicRouter path='/auth' component={AuthRouter}
            isAuthenticated={isLoggedIn} />
          <PrivateRouter path='/profile' component={Profile}
            isAuthenticated={isLoggedIn} />
          {/* <Route path='/description/:peliId' component={DetailPelis} /> */}
          <PrivateRouter path='/verMasTarde' component={VerMasTarde} isAuthenticated={isLoggedIn} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
