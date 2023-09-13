import React, { useEffect, useState } from 'react'
import * as MUI from '@mui/material'
import NavBar from '../navbar'
function Home() {
    const [text, setText] = useState("")
    const fullText="Abhishek Kumar !"
    const [index, setIndex] = useState(0)
    useEffect(() => {
        onTextChange()
    })
    const onTextChange=()=>{
        if (index < fullText.length+1) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 400)
        } else {
            setText("")
            setIndex(0)

        }
    }
    return (
        <>
            <NavBar />
            <MUI.Stack
                spacing={2}
                className='ms-1 me-5 mt-36 text-5xl'
                direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
            >
                <MUI.Box>
                    <h1 className='text-5xl text-white font-mono'>Hi, I'm</h1>
                    <h1 className='text-5xl text-orange-500 ms-20 font-mono'>{text}</h1>
                </MUI.Box>
                
            </MUI.Stack>
        </>
    )
}

export default Home