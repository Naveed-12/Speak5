import React from 'react'
import Quiz_1 from './Quiz_1';


export default function Quiz3_3() {
    let answer = "Do you remember Mrs. Pool?"
    let sentence = 'Do you remember Mrs Pool?'
    return (
        <div>
            <Quiz_1 image={'http://www.speak5.com/upload_images/1507785908finalc.png'} answer={answer} sentence={sentence}/>
        </div>
    )
}
