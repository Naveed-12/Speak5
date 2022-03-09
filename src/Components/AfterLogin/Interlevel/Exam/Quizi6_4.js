import React from 'react'
import Quiz_2 from './Quiz_2'

export default function Quizi6_4() {
    let answer1 = "En donde Vives?"
    let answer2 = ">> Answer: Where do you live?"
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
