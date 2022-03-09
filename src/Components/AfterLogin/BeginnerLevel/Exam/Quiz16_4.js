import React, {useState}from 'react';

import Quiz_2 from './Quiz_2';

export default function Quiz16_4() {
    let answer1 = "Are you eating cake? - No, I'm not."
    let answer2 = ">> Answer: Are you eating cake? - No, I'm not here."
    return (
      <>
        <Quiz_2 image={'http://www.speak5.com/images/student1.png'} answer1={answer1} answer2 = {answer2}/>
      </>
    )
}
