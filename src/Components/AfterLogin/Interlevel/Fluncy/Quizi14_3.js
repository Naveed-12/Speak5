import React from 'react'
import Quiz_1 from './Quiz_1'

export default function Quizi14_3() {
    let sentence = "I'm going to tell you a horror story that could scare you to death."
    let answer = " I'm going to tell you a horror story that might scare you to death."
    return (
        <>
            <Quiz_1 image={"http://www.speak5.com/upload_images/1507786330bencircle.png"} sentence = {sentence} answer={answer} /> 
        </>
    )
}
