import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA6_4() {
    let answer1 = "Will she have been waiting for an hour when we arrive at the restaurant?"
    let answer2 = ">> Answer: Will she have been waiting for an hour when we get to the restaurant?"
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
