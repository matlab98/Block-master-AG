import { Box, Flex, Heading, Button, FormControl, FormHelperText, Input, InputGroup, InputRightElement, Link, Stack, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsFillLockFill } from 'react-icons/bs'
import { Link as LinkR } from 'react-router-dom'
import fondo from '../../images/fondo7.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startRegisterWithEmailPasswordName } from '../../actions/authActions'
import { removeError, setError } from '../../actions/uiError'

const Register = () => {
    // , backgroundRepeat: "noRepeat", backgroundAttachment: "fixed", backgroundSize: "cover"
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const dispatch = useDispatch();
    const { msjError } = useSelector(state => state.error);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const formValid = () => {

        if (name.trim().length === 0) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error',
            //     text: 'Rellena todos los campos',
            // })
            dispatch(setError(''))
            return false
            // } else if (!validator.isEmail(email)) {
            //     // Swal.fire({
            //     //     icon: 'error',
            //     //     title: 'Error',
            //     //     text: 'Se requiere un email',
            //     // })
            //     dispatch(setError(''))
            //     return false
        } else if (password.trim().length === 0) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error',
            //     text: 'Ingresa una contraseña',
            // })
            dispatch(setError(''))
            return false
        }

        dispatch(removeError())
        return true
    }



    return (
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", width: "100vw", backgroundImage: `url(${fondo})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
            <div style={{
                background: "rgb(238 237 243 / 93%)", textAlign: "-webkit-center", marginLeft: "10%",
                marginRight: "10%", borderRadius: "15px", width: "100%"
            }}>
                {/* <Heading color="#0f0e17" padding="2%">Block Master</Heading> */}
                <Flex color="black" >
                    <Box w="100%" h="400px" bg="#ffa903b3" borderRadius=" 15px 0 0 15px">
                        <div style={{ borderRadius: "60%", background: "#0f0e17", width: "250px", height: "250px", marginTop: "10%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Image src="https://i.ibb.co/mFhx8Xs/logo-block-Buster.png" width="200px" style={{ height: "40%" }} />
                        </div>
                        {/* <Heading fontSize="5xl" color="#0f0e17">Welcome</Heading> */}
                    </Box>
                    <Box w="100%" h="400px" padding="5%" >
                        <Heading color="#0f0e17">Sign up</Heading>
                        <form onSubmit={handleSubmit} >
                            <FormControl id="name">
                                {/* <FormLabel>name address</FormLabel> */}
                                <Input type="text" placeholder="Full name" name="name" value={name} onChange={handleInputChange} />
                            </FormControl>
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
                                        <Button h="1.75rem" size="sm" onClick={handleClick} background="gray.400">
                                            {show ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup size="md">
                                    <Input
                                        pr="4.5rem"
                                        type={show ? "text" : "password"}
                                        placeholder="Confirm password" name="password2" value={password2} onChange={handleInputChange}
                                    />
                                </InputGroup>
                            </FormControl>
                            <Stack direction="row" spacing={4} align="center" justifyContent="space-around">
                                <Button colorScheme="yellow" background="#ffa903b3" variant="solid" w="100%" type="submit">
                                    Register
                                </Button>
                                <LinkR to="/auth/login" style={{ width:"100%"}}>
                                    <Button colorScheme="yellow" color="#ffa903b3" borderColor="#ffa903b3" variant="outline" w="100%">
                                    Already have an account?
                                    </Button>
                                </LinkR>
                            </Stack>
                        </form>
                    </Box>

                </Flex>
            </div>
        </div>
    )
}

export default Register
