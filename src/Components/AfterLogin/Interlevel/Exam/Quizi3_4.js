import React from 'react'
import Quiz_2 from './Quiz_2'

export default function Quizi3_4() {
    let answer1 = "I won't have sung this song ten times."
    let answer2 = ">> Answer:I will not have sung this song ten times."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
