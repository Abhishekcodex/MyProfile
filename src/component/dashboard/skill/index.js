import React from 'react'
import * as MUI from '@mui/material'
import * as ICON from '@mui/icons-material'
import NavBar from '../navbar'
function Skill() {
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
                        Web Development Skill
                    </MUI.Stack>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"center"}
                        className='ms-1 me-1 mt-14 text-sm'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        <MUI.Card sx={{width:{lg:"20%", md:"20%"}}}>
                        <MUI.Stack
                                spacing={1}
                                justifyContent={"center"}
                                className='text-sm'
                                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                            >
                                <MUI.Box className='text-center' sx={{width:{lg:"15%", md:'15%'}}}>
                                    <img src='html.png' alt="React Logo" width="100%" />
                                </MUI.Box>
                                <MUI.Box className='text-center text-2xl font-mono'>HTML</MUI.Box>
                            </MUI.Stack>
                        </MUI.Card>
                        <MUI.Card sx={{width:{lg:"20%", md:"20%"}}}>
                            <MUI.Stack
                                spacing={1}
                                justifyContent={"center"}
                                className='text-sm'
                                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                            >
                                <MUI.Box className='text-center' sx={{width:{lg:"15%", md:'15%'}}}>
                                    <img src='cssjpg.jpg' alt="React Logo" width="100%" />
                                </MUI.Box>
                                <MUI.Box className='text-center text-2xl font-mono'>CSS</MUI.Box>
                            </MUI.Stack>
                        </MUI.Card>
                        <MUI.Card sx={{width:{lg:"20%", md:"20%"}}}>
                            <MUI.Stack
                                spacing={1}
                                justifyContent={"center"}
                                className='text-sm'
                                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                            >
                                <MUI.Box className='text-center' sx={{width:{lg:"15%", md:'15%'}}}>
                                    <img src='javascript.png' alt="React Logo" width="100%" />
                                </MUI.Box>
                                <MUI.Box className='text-center text-2xl font-mono'>JavaScript</MUI.Box>
                            </MUI.Stack>
                        </MUI.Card>
                    </MUI.Stack>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"center"}
                        className='ms-1 me-1 mt-14 text-sm'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        <MUI.Card sx={{width:{lg:"20%", md:"20%"}}}>
                        <MUI.Stack
                                spacing={1}
                                justifyContent={"center"}
                                className='text-sm'
                                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                            >
                                <MUI.Box className='text-center' sx={{width:{lg:"15%", md:'15%'}}}>
                                    <img src='bootstrap.jpg' alt="React Logo" width="100%" />
                                </MUI.Box>
                                <MUI.Box className='text-center text-2xl font-mono'>Bootstrap</MUI.Box>
                            </MUI.Stack>
                        </MUI.Card>
                        <MUI.Card sx={{width:{lg:"20%", md:"20%"}}}>
                        <MUI.Stack
                                spacing={1}
                                justifyContent={"center"}
                                className='text-sm'
                                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                            >
                                <MUI.Box className='text-center' sx={{width:{lg:"15%", md:'15%'}}}>
                                    <img src='Material.png' alt="React Logo" width="100%" />
                                </MUI.Box>
                                <MUI.Box className='text-center text-2xl font-mono'>Material UI</MUI.Box>
                            </MUI.Stack>
                        </MUI.Card>
                        <MUI.Card sx={{width:{lg:"20%", md:"20%"}}}>
                            <MUI.Stack
                                spacing={1}
                                justifyContent={"center"}
                                className='text-sm'
                                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                            >
                                <MUI.Box className='text-center' sx={{width:{lg:"15%", md:'15%'}}}>
                                    <img src='logo192.png' alt="React Logo" width="100%" />
                                </MUI.Box>
                                <MUI.Box className='text-center text-2xl font-mono'>React</MUI.Box>
                            </MUI.Stack>
                        </MUI.Card>
                    </MUI.Stack>
                    <MUI.Stack className='mt-14 text-2xl'></MUI.Stack>
                </MUI.Paper>
            </MUI.Stack>
        </>
    )
}

export default Skill