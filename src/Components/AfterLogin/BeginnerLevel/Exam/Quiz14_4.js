import React, {useState}from 'react';

import Quiz_2 from './Quiz_2';

export default function Quiz14_4() {
    let answer1 = "What time is it?"
    let answer2 = ">> Answer: What time is it?"
    return (
      <>
        <Quiz_2 image={'http://www.speak5.com/images/student1.png'} answer1={answer1} answer2 = {answer2}/>
      </>
    )
}
