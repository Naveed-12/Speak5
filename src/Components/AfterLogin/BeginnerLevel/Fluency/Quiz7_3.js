import React from 'react'

import Quiz_1 from './Quiz_1';

export default function Quiz7_3() {
    let answer = "I hate The Scarlet Letter."
    let sentence = "I hate the Scarlet Letter."
    return (
        <div>
            <Quiz_1 image={'http://www.speak5.com/upload_images/1507785325victoriacircle.png'} answer={answer} sentence={sentence}/>
        </div>
    )
}
