import React from 'react'
import * as MUI from '@mui/material'
import * as ICON from '@mui/icons-material'
import NavBar from '../navbar'
function Contact() {
    return (
        <>
            <NavBar />
            <MUI.Stack
                spacing={2}
                justifyContent={"center"}
                className='ms-1 me-1 mt-20 text-2xl'
                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
            >
                <MUI.Paper sx={{ width: { lg: "70%", md: "70%" } }}>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"center"}
                        className='ms-1 me-1 mt-3 text-2xl'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        Education Details
                    </MUI.Stack>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"center"}
                        className='ms-1 me-1 mt-10 text-sm'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        <MUI.Card sx={{width:{lg:"100%", md:"100%"}}}>
                        <MUI.Stack
                                spacing={1}
                                justifyContent={"left"}
                                className='text-sm'
                                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                            >
                                <MUI.Box className='text-left' sx={{width:{lg:"15%", md:'15%'}}}>
                                    <img src='b.tech.jpg' alt="React Logo" width="100%" />
                                </MUI.Box>
                                <MUI.Box className='text-left text-lg font-mono'>
                                    <b>Bachlor Of Technology</b><br/>
                                    <b>Collage Name:-</b>Shambhunath Institute of Engineering And Technology<br/>
                                    <b>Trade:-</b> Computer Science And Enginnering<br/>
                                    <b>Percentage:-</b> 79.99% With Honours<br/>
                                    <b>University Name:-</b> Dr. A. P. J. Abdul Kalam Technical University, Lucknow
                                </MUI.Box>
                            </MUI.Stack>
                        </MUI.Card>

                    </MUI.Stack>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"center"}
                        className='ms-1 me-1 mt-14 text-sm'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        <MUI.Card sx={{width:{lg:"100%", md:"100%"}}}>
                        <MUI.Stack
                                spacing={1}
                                justifyContent={"flex-start"}
                                className='text-sm'
                                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                            >
                                <MUI.Box className='text-left' sx={{width:{lg:"15%", md:'15%'}}}>
                                    <img src='diploma.jpg' alt="React Logo" width="100%" />
                                </MUI.Box>
                                <MUI.Box className='text-left text-lg font-mono'>
                                    <b>Diploma</b><br/>
                                    <b>Collage Name:-</b>Government Polytechnic Jaunpur<br/>
                                    <b>Trade:-</b> Computer Science And Enginnering<br/>
                                    <b>Percentage:-</b> 79.99% With Honours <br/>
                                    <b>University Name:-</b> Board Of Technical Education Uttar Pradesh
                                </MUI.Box>
                            </MUI.Stack>
                        </MUI.Card>

                    </MUI.Stack>
                    <MUI.Stack className='mt-14 text-2xl'></MUI.Stack>
                </MUI.Paper>
            </MUI.Stack>
        </>
    )
}

export default Contact