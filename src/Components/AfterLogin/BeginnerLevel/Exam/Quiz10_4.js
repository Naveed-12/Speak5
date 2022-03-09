import React, {useState}from 'react';

import Quiz_2 from './Quiz_2';

export default function Quiz10_4() {
    let answer1 = "I need some water."
    let answer2 = ">> Answer: I need some water."
    return (
      <>
        <Quiz_2 image={'http://www.speak5.com/images/student1.png'} answer1={answer1} answer2 = {answer2}/>
      </>
    )
}
