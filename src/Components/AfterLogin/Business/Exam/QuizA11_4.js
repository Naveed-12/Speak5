import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA11_4() {
    let answer1 = "Sodas are said to cause cancer."
    let answer2 = ">> Answer: Sodas are said to cause cancer."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
