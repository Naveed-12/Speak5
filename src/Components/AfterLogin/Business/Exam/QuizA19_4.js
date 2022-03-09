import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA19_4() {
    let answer1 = "You're always losing your keys."
    let answer2 = ">> Answer: You are always losing your keys."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
