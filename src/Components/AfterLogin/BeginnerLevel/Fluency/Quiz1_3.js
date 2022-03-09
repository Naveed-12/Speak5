import React from 'react'

import Quiz_1 from './Quiz_1';


export default function Quiz1_3() {
    let answer = "That's a strange last name"
    let sentence = "That's a weird last name"
    return (
        <div>
            <Quiz_1 image={'http://www.speak5.com/upload_images/1507785898michaelcircle.png'} answer={answer} sentence={sentence}/>
        </div>
    )
}
