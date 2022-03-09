import React from 'react'
import Quiz_2 from './Quiz_2';

export default function QuizA1_4() {
    let answer1 = "They prefer to live in the city rather than live in the countryside."
    let answer2 = ">> Answer: They prefer to live in the city instead of living in the country."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
