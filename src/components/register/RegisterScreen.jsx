import { Box, Button, FormControl, FormHelperText, Heading, Input, InputGroup, InputRightElement, Link, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsFillLockFill } from 'react-icons/bs'
const RegisterScreen = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <Box w="100%" h="400px" padding="5%" borderTop="solid #ffa903">
            <Heading color="#0f0e17">Register</Heading>
            <FormControl id="email">
                {/* <FormLabel>Email address</FormLabel> */}
                <Input type="email" placeholder="Email address" />
                <FormHelperText textAlign="left">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
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
            <Stack direction="row" spacing={4} align="center" justifyContent="space-around">
                <Button colorScheme="yellow" background="#ffa903" variant="solid" w="100%">
                    Login
                </Button>
                <Button colorScheme="yellow" color="#ffa903" borderColor="#ffa903" variant="outline" w="100%">
                    New register
                </Button>
            </Stack>
        </Box>
    )
}

export default RegisterScreen
