import React from 'react'
import Quiz_2 from './Quiz_2'

export default function Quizi18_4() {
    let answer1 = "How long had you played guitar with your band before you split? -Like two years."
    let answer2 = ">> Answer: How long had you been playing guitar with your band before they split up? –About two years."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
