import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA12_4() {
    let answer1 = "She'd better not compete in the race."
    let answer2 = ">> Answer: It is better that she does not compete in the race."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
