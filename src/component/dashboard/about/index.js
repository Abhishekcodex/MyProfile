import React from 'react'
import NavBar from '../navbar'
import * as MUI from '@mui/material'
function About() {
    return (
        <>
            <NavBar />
            <MUI.Paper style={{ width: "100%" }} className='text-center font-mono'>
                <MUI.Stack
                    spacing={2}
                    justifyContent={"center"}
                    className='ms-1 me-1 mt-3 text-2xl'
                    direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                >
                    About Profile
                </MUI.Stack>
                <MUI.Stack
                    spacing={2}
                    justifyContent={"center"}
                    className='ms-1 me-1 mt-2'
                    direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                >
                    I'm a Creative Full Stack Developer
                </MUI.Stack>
                <MUI.Stack
                    spacing={2}
                    justifyContent={"center"}
                    className='ms-1 me-1'
                    direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                >
                    <MUI.Box>
                        <MUI.Stack
                            spacing={2}
                            justifyContent={"center"}
                            className='font-bold'                            
                            direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                        >
                            About Me
                        </MUI.Stack>
                        <MUI.Stack
                            spacing={2}
                            justifyContent={"center"}                            
                            direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                        >
                           I am Abhishek Kumar
                        </MUI.Stack>
                    </MUI.Box>
                    <MUI.Box>
                        <img src='' alt=''/>
                    </MUI.Box>
                    <MUI.Box></MUI.Box>
                </MUI.Stack>
            </MUI.Paper>
        </>
    )
}

export default About
