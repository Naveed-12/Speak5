import React, {useState}from 'react';

import Quiz_2 from './Quiz_2';

export default function Quiz19_4() {
    let answer1 = "I believe in being your own boss"
    let answer2 = ">> Answer: I believe in being your own boss"
    return (
      <>
        <Quiz_2 image={'http://www.speak5.com/images/student1.png'} answer1={answer1} answer2 = {answer2}/>
      </>
    )
}
