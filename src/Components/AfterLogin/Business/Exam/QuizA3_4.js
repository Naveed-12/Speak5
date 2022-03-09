import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA3_4() {
    let answer1 = "Mary and Jemima will go to the post office.."
    let answer2 = ">> Answer: Mary and Jemima are going to the post office."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
