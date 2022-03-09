import React from 'react'
import Quiz_1 from './Quiz_1'
export default function QuizA5_3() {
  let sentence = "I am planning to start my own business and become my own boss, and I want you to be a part of it."
  let answer = " I'm planning to set up my own business and become my own boss, and I want you to be part of it."
  return (
    <>
      <Quiz_1 image={"http://www.speak5.com/upload_images/1507786330bencircle.png"} sentence={sentence} answer={answer} />
    </>
  )
}
