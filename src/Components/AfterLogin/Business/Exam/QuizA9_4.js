import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA9_4() {
    let answer1 = "She told me the truth."
    let answer2 = ">> Answer: She told me the truth."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
