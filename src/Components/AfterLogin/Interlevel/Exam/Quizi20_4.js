import React from 'react'
import Quiz_2 from './Quiz_2'

export default function Quizi20_4() {
    let answer1 = "I'm right, aren't I?"
    let answer2 = ">> Answer:  I'm right, right?"
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
