import React from 'react'
import Quiz_2 from './Quiz_2'

export default function Quizi2_4() {
    let answer1 = "I stayed at the Sherry Hotel, which my friend Jim recommended."
    let answer2 = ">> Answer: I stayed at the Sherry Hotel, which my friend Jim recommended."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
