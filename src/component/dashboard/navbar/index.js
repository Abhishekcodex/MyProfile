import React, { useState } from 'react'
import * as MUI from '@mui/material'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    let fromValue = {
        MenuFlag: ""
    }
    const navigate = useNavigate();
    const [fromValueObj, setFromValueObj] = useState(fromValue)
    const onShowMenu = () => {
        if (fromValueObj?.MenuFlag === "Y") {
            setFromValueObj((pre) => {
                return ({
                    ...pre,
                    MenuFlag: ""
                })
            })
        } else {
            setFromValueObj((pre) => {
                return ({
                    ...pre,
                    MenuFlag: "Y"
                })
            })
        }
    }
    const onNevigetPage=(newValue)=>{
        navigate('/'+newValue)   
    }
    return (
        <>
            <MUI.Stack
                spacing={2}
                className='ms-1 me-5 mt-1'
                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
            >
                <MUI.Box className='ms-2 mt-2 text-white' sx={{ width: { lg: "20%", md: "20%", sm: "40%", xs: "40%" } }}>
                    <MUI.Stack
                        spacing={2}
                        className='ms-1 me-5 mt-1 animate-fade-down animate-once animate-duration-[600ms] animate-delay-[600ms] animate-ease-linear'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                    >
                        <img src='../image/secondlogo.png' height={"150px"} width="150px" alt="Logo"/>
                    </MUI.Stack>
                </MUI.Box>
                <MUI.Box sx={{ width: { lg: "80%", md: "80%", sm: "60%", xs: "60%" } }}>
                    <MUI.Stack
                        spacing={2}
                        justifyContent={"right"}
                        className='ms-1 me-5 mt-1 text-white'
                        direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
                        sx={{ display: { lg: "none", md: "none" } }}
                    >
                        <MUI.Box ><ViewHeadlineIcon onClick={onShowMenu} /></MUI.Box>
                    </MUI.Stack>
                    <MUI.Stack
                        spacing={2}
                        className='ms-1 me-5 mt-1 animate-fade-down animate-once animate-duration-[600ms] animate-delay-[600ms] animate-ease-linear'
                        justifyContent={fromValueObj?.MenuFlag !== "Y" ? "right" : "center"}
                        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
                        sx={{ display: fromValueObj?.MenuFlag !== "Y" ? { sm: "none", xs: "none", lg: "flex", md: "flex" } : { lg: "none", md: "none", sm: "block", xs: "block" } }}
                    >
                        <MUI.Box className='text-white md:hover:underline cursor-pointer'>
                            <MUI.Link onClick={()=>onNevigetPage("home")} style={{ textDecoration: "none", color:"white"}}>
                                Home
                            </MUI.Link>
                        </MUI.Box>
                        <MUI.Box className='text-white md:hover:underline cursor-pointer' >
                            <MUI.Link  onClick={()=>onNevigetPage("about")} 
                                style={{ textDecoration: "none", color:"white"}}>
                                About
                            </MUI.Link>
                        </MUI.Box>
                        <MUI.Box className='text-white md:hover:underline cursor-pointer' >
                            <MUI.Link onClick={()=>onNevigetPage("contact")}
                             style={{ textDecoration: "none", color:"white"}}>Contact</MUI.Link>
                        </MUI.Box>
                        <MUI.Box className='text-white md:hover:underline cursor-pointer' >
                            <MUI.Link onClick={()=>onNevigetPage("skill")}
                            style={{ textDecoration: "none", color:"white" }}>Skill</MUI.Link>
                        </MUI.Box>
                        <MUI.Box className='text-white md:hover:underline cursor-pointer' >
                            <MUI.Link onClick={()=>onNevigetPage("education")}
                             style={{ textDecoration: "none", color:"white" }}>Education</MUI.Link>
                        </MUI.Box>
                        <MUI.Box className='text-white md:hover:underline cursor-pointer'>
                            <MUI.Link  onClick={()=>onNevigetPage("experience")}
                             style={{ textDecoration: "none", color:"white" }}>Experience</MUI.Link>
                        </MUI.Box>
                    </MUI.Stack>
                </MUI.Box>
            </MUI.Stack >
            {/* {
                fromValueObj?.MenuFlag === "Y" ? (
                    <MUI.Stack
                        spacing={2}
                        className='ms-1 me-5 mt-1 text-center'
                        justifyContent="center"
                        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
                        sx={{ display: { lg: "none", md: "none", sm: "block", xs: "block" } }}
                    >
                        <MUI.Box className='text-white md:hover:underline cursor-pointer'>Home</MUI.Box>
                        <MUI.Box className='text-white md:hover:underline cursor-pointer'>Abount</MUI.Box>
                        <MUI.Box className='text-white md:hover:underline cursor-pointer'>Contact</MUI.Box>
                        <MUI.Box className='text-white md:hover:underline cursor-pointer'>Education</MUI.Box>
                        <MUI.Box className='text-white md:hover:underline cursor-pointer'>Skill</MUI.Box>
                        <MUI.Box className='text-white md:hover:underline cursor-pointer'>Experience</MUI.Box>
                    </MUI.Stack>
                ) : null
            } */}
        </>
    )
}

export default NavBar
