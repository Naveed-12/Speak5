import React, {useState}from 'react';

import Quiz_2 from './Quiz_2';

export default function Quiz1_4() {
  let answer1 = 'White'
  let answer2 = '>> Answer: White'
  return (
    <>
      <Quiz_2 image={'http://www.speak5.com/images/student1.png'} answer1={answer1} answer2 = {answer2}/>
    </>
  )
}
