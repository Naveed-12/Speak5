import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA16_4() {
    let answer1 = "I'll turn my phone off in case Sarah calls."
    let answer2 = ">> Answer: I will turn off my phone in case Sarah calls."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
