import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA5_4() {
    let answer1 = "You have been running cause you're out of breath."
    let answer2 = ">> Answer: You have been running because you ran out of breath."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
