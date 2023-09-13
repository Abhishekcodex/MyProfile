import React from 'react'
import * as MUI from '@mui/material'
// import * as ICON from '@mui/icons-material'
import NavBar from '../navbar'
function Skill() {
    return (
        <>
            <NavBar />
            <MUI.Stack
                spacing={2}
                justifyContent={"center"}
                className='ms-1 me-1 mt-10'
                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
            >
                <MUI.Paper sx={{ width: { lg: "100%", md: "100%" } }}>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"center"}
                        className='text-center'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        <b className='underline text-lg'>Project Details</b>
                    </MUI.Stack>
                </MUI.Paper>
                <MUI.Paper sx={{ width: { lg: "100%", md: "100%" } }}>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"center"}
                        className='text-center'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        <b className='underline text-lg'>Experience Details</b>
                    </MUI.Stack>
                </MUI.Paper>
            </MUI.Stack>
        </>
    )
}

export default Skill