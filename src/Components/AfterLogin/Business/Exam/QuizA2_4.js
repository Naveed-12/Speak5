import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA2_4() {
    let answer1 = "What time will you get to school?"
    let answer2 = ">> Answer: What time will you arrive at school?"
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
