import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA15_4() {
    let answer1 = "The driving age is set to rise."
    let answer2 = ">> Answer: The driving age is about to go up."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
