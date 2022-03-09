import React, {useState}from 'react';

import Quiz_2 from './Quiz_2';

export default function Quiz13_4() {
    let answer1 = "See you."
    let answer2 = ">> Answer: See you."
    return (
      <>
        <Quiz_2 image={'http://www.speak5.com/images/student1.png'} answer1={answer1} answer2 = {answer2}/>
      </>
    )
}
