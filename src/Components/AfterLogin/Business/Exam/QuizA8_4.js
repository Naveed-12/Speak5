import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA8_4() {
    let answer1 = "Salt is bad for your health."
    let answer2 = ">> Answer: Salt is bad for your health."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
