import React, {useState}from 'react';

import Quiz_2 from './Quiz_2';

export default function Quiz12_4() {
    let answer1 = "We worked until the afternoon."
    let answer2 = ">> Answer: We work until the afternoon."
    return (
      <>
        <Quiz_2 image={'http://www.speak5.com/images/student1.png'} answer1={answer1} answer2 = {answer2}/>
      </>
    )
}
