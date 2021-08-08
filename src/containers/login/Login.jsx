import { Box, Flex, Heading, Button, FormControl, FormHelperText, Input, InputGroup, InputRightElement, Link, Stack, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsFillLockFill } from 'react-icons/bs'
import { Link as LinkR } from 'react-router-dom'
import fondo from '../../images/fondo7.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startFacebookLogin, startGoogleLogin, startLoginEmailPassword } from '../../actions/authActions'
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookFill } from 'react-icons/ri';
import styled from 'styled-components'

const StyledButton = styled(Button)`
    background: #FAF8F7;
    color: black;
    width: 100% !important;
    border: none;
    box-shadow: 0px 4px 8px rgb(89 73 30 / 16%) !important;
    font-weight: bold;
    font-size: 15px;
    margin-bottom:10px;
`

const Login = () => {
    // , backgroundRepeat: "noRepeat", backgroundAttachment: "fixed", backgroundSize: "cover"
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    // Autenticación
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const handleFacebook = () => {
        dispatch(startFacebookLogin())
    }



    return (
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", width: "100vw", backgroundImage: `url(${fondo})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
            <div style={{
                background: "rgb(238 237 243 / 93%)", textAlign: "-webkit-center", marginLeft: "10%",
                marginRight: "10%", borderRadius: "15px", width: "100%"
            }}>
                {/* <Heading color="#0f0e17" padding="2%">Block Master</Heading> */}
                <Flex color="white" >
                    <Box w="100%" h="400px" bg="#ffa903b3" borderRadius=" 15px 0 0 15px">
                        <div style={{ borderRadius: "60%", background: "#0f0e17", width: "250px", height: "250px", marginTop: "10%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Image src="https://i.ibb.co/mFhx8Xs/logo-block-Buster.png" width="200px" style={{ height: "40%" }} />
                        </div>
                        {/* <Heading fontSize="5xl" color="#0f0e17">Welcome</Heading> */}
                    </Box>
                    <Box w="100%" h="400px" padding="5%" >
                        <Heading color="#0f0e17">Sign in</Heading>
                        <form onSubmit={handleSubmit}>
                            <FormControl id="email">
                                {/* <FormLabel>Email address</FormLabel> */}
                                <Input type="email" placeholder="Email address" name="email" value={email} onChange={handleInputChange} />
                                <FormHelperText textAlign="left">We'll never share your email.</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <InputGroup size="md">
                                    <Input
                                        pr="4.5rem"
                                        type={show ? "text" : "password"}
                                        placeholder="Enter password" name="password" value={password} onChange={handleInputChange}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick} background="gray.600">
                                            {show ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Link href="#" display="flex" textAlign="right" color="black" margin="10px">
                                <BsFillLockFill mx="2px" />Forgot Password?
                            </Link>

                            <Stack direction="row" spacing={4} align="center" justifyContent="space-around" mb="5%">
                                <Button colorScheme="yellow" background="#ffa903b3" variant="solid" type="submit" w="100%" >
                                    Login
                                </Button>
                                <LinkR to="/auth/register" style={{ width:"100%"}}>
                                    <Button colorScheme="yellow" color="#ffa903b3" borderColor="#ffa903b3" variant="outline" w="100%">
                                        Register
                                    </Button>
                                </LinkR>
                            </Stack>
                        </form>
                        <Stack direction="row" spacing={4} align="center" justifyContent="space-around" >
                            <StyledButton variant="primary" type='submit' style={{ margin: "0" }}
                                onClick={handleGoogleLogin}
                            >
                                <div style={{ padding: '10px' }}>
                                    <FcGoogle />
                                </div>
                                Continuar con Google
                            </StyledButton>
                            <StyledButton variant="primary" type='submit'
                                onClick={handleFacebook}
                            >
                                <div style={{ padding: '10px' }}>
                                    <RiFacebookFill />
                                </div>
                                Continuar con Facebook
                            </StyledButton>
                        </Stack>
                    </Box>

                </Flex>
            </div>
        </div>
    )
}

export default Login
