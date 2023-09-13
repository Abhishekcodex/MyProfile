import React from 'react'
import * as MUI from '@mui/material'
import NavBar from '../navbar'
function Contact() {
    return (
        <>
            <NavBar />
            <MUI.Stack            
                    spacing={2}
                    justifyContent={"center"}
                    className='ms-1 me-1 mt-3 text-2xl'
                    direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
            >
                <MUI.Paper sx={{width:{lg:"50%", md:"50%"}}}>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"center"}
                        className='ms-1 me-1 mt-3 text-2xl'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        Contact Us
                    </MUI.Stack>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"center"}
                        className='ms-1 me-1 mt-3 text-2xl'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        <MUI.TextField
                            variant='outlined'
                            name='Name'
                            size='small'
                            label="Name"
                            sx={{
                                "& > :not(style)": {
                                    fontSize: "12px",
                                    color: "black",
                                    height: "32px",
                                },
                                width: { lg: "30%", md: "30%" }
                            }}
                        />
                        <MUI.TextField
                            variant='outlined'
                            name='email'
                            size='small'
                            label="Email Address"
                            sx={{
                                "& > :not(style)": {
                                    fontSize: "12px",
                                    color: "black",
                                    height: "32px",
                                },
                                width: { lg: "50%", md: "50%" }
                            }}
                        />
                    </MUI.Stack>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"center"}
                        className='ms-1 me-1 mt-3 text-2xl'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        <MUI.Box>
                            <textarea className='text-sm border border-cyan-950'
                                style={{ width: "560px" }}
                                placeholder='Enter Your Message'
                                rows={10}
                            >
                                
                            </textarea>
                        </MUI.Box>
                    </MUI.Stack>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"center"}
                        className='ms-1 me-1 mt-3 text-2xl'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        <MUI.Button variant='contained'>Submit</MUI.Button>
                        <MUI.Button variant='contained' color='error'>Clear</MUI.Button>
                    </MUI.Stack>
                    <MUI.Stack className='mt-3 text-2xl'></MUI.Stack>
                </MUI.Paper>
            </MUI.Stack>
        </>
    )
}

export default Contact