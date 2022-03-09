import React from 'react'
import Quiz_2 from './Quiz_2'

export default function Quizi19_4() {
    let answer1 = "When I saw you, you were pale. You had been feeling ill."
    let answer2 = ">> Answer:  When I saw you, you were pale. You had been feeling sick."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
