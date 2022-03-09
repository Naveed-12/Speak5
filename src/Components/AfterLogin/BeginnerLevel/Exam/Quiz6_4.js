import React, {useState}from 'react';

import Quiz_2 from './Quiz_2';

export default function Quiz6_4() {
    let answer1 = "She was kicked."
    let answer2 = ">> Answer: She was kicked."
    return (
      <>
        <Quiz_2 image={'http://www.speak5.com/images/student1.png'} answer1={answer1} answer2 = {answer2}/>
      </>
    )
}
