import React from 'react'
import Quiz_2 from './Quiz_2'

export default function Quizi17_4() {
    let answer1 = "The car wouldn't start."
    let answer2 = ">> Answer: The car refused to start."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
