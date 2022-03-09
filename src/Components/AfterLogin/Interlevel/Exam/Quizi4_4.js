import React from 'react'
import Quiz_2 from './Quiz_2'

export default function Quizi4_4() {
    let answer1 = "Is it your cat? - Yes, it's my cat."
    let answer2 = ">> Answer:  Is it your cat? - Yes, it's my cat."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
