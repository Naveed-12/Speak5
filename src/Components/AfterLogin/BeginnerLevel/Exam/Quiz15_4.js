import React, {useState}from 'react';

import Quiz_2 from './Quiz_2';

export default function Quiz15_4() {
    let answer1 = "I've played football all afternoon."
    let answer2 = ">> Answer: I have played soccer all afternoon."
    return (
      <>
        <Quiz_2 image={'http://www.speak5.com/images/student1.png'} answer1={answer1} answer2 = {answer2}/>
      </>
    )
}
