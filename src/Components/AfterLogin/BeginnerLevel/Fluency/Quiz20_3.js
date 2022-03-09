import React from 'react'

import Quiz_1 from './Quiz_1';

export default function Quiz20_3() {
    let answer = "I like reading romantic novels."
    let sentence = "I like to read romantic novels."
    return (
        <div>
            <Quiz_1 image={'http://www.speak5.com/upload_images/1507786330bencircle.png'} answer={answer} sentence={sentence}/>
        </div>
    )
}
