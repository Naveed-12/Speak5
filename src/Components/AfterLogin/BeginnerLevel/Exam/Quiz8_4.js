import React, {useState}from 'react';

import Quiz_2 from './Quiz_2';

export default function Quiz8_4() {
    let answer1 = "Fifth."
    let answer2 = ">> Answer: Fifth."
    return (
      <>
        <Quiz_2 image={'http://www.speak5.com/images/student1.png'} answer1={answer1} answer2 = {answer2}/>
      </>
    )
}
