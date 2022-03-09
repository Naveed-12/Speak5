import React from 'react'
import Quiz_1 from './Quiz_1'

export default function Quizi4_3() {
    let sentence = "I'm not kidding. You only slept one day."
    let answer = " No, I'm joking. You only sleep one day."
    return (
        <>
            <Quiz_1 image={"http://www.speak5.com/upload_images/1507785908finalc.png"} sentence = {sentence} answer={answer} /> 
        </>
    )
}
