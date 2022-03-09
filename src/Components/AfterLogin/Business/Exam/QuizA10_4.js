import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA10_4() {
    let answer1 = "A compelling slogan was created by our company."
    let answer2 = ">> Answer:  A compelling slogan was created by our company."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
