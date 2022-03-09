import React from 'react'
import Quiz_1 from './Quiz_1'
export default function QuizP8_3() {
    let sentence = "The new girl is amazing: she's cute and determined."
    let answer = "The new girl is incredible: She's cute and decisive."
  return (
    <>
        <Quiz_1 image={"http://www.speak5.com/upload_images/1507786330bencircle.png"} sentence={sentence} answer={answer} />
    </>
  )
}
