import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA7_4() {
    let answer1 = "Why don't we go to the cinema?"
    let answer2 = ">> Answer: Why don't we go to the cinema?"
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
