import React from 'react'
import Quiz_2 from './Quiz_2'

export default function Quizi11_4() {
    let answer1 = "She couldn't win the beauty contest because she's ugly."
    let answer2 = ">> Answer: She couldn't win the beauty pageant because she's ugly."
    return (
        <>
            <Quiz_2 image={"http://www.speak5.com/images/student1.png"} answer1={answer1} answer2={answer2} />
        </>
    )
}
