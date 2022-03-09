import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA14_4() {
    let answer1 = "I love Princess Caroline."
    let answer2 = ">> Answer: I love Princess Caroline."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
