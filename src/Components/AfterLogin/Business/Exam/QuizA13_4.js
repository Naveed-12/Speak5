import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA13_4() {
    let answer1 = "There are four notebooks on the desk. Each notebook is blue."
    let answer2 = ">> Answer: There are four notebooks on the desk. Each notebook is blue."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
