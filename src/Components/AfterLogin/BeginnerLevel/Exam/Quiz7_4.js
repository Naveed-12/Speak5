import React, {useState}from 'react';

import Quiz_2 from './Quiz_2';

export default function Quiz7_4() {
    let answer1 = "Give me some coins."
    let answer2 = ">> Answer: Give me some coins."
    return (
      <>
        <Quiz_2 image={'http://www.speak5.com/images/student1.png'} answer1={answer1} answer2 = {answer2}/>
      </>
    )
}
