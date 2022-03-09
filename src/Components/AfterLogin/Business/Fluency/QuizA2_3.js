import React from 'react'
import Quiz_1 from './Quiz_1'
export default function QuizA2_3() {
  let sentence = "It's nice to meet you, Ben."
  let answer = "It's a pleasure meeting you, Ben."

  return (
    <>
      <Quiz_1 image={"http://www.speak5.com/upload_images/1507785552sarahcircle.png"} sentence={sentence} answer={answer} />
    </>
  )
}
