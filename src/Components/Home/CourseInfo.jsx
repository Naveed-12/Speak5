import React from 'react'
import './courseinfo.css';
import { Link } from 'react-router-dom';

export default function CourseInfo() {
  return (
    <div className='container coursecontainer'>
        <h1>WITH SPEAK 5, YOU'LL GET THE TOOLS YOU NEED TO SPEAK FLUENT ENGLISH:</h1>
        <div className="courses">
            <ul>
                <li><b>5 1-on-1 classes per week, live, with native teachers, online <span>($400 USD)</span></b></li>
                <li><b>2 group classes per week with native teachers, live, online <span> ($100 USD)</span></b></li>
                <li><b>Multimedia course with 5 levels and 100 units <span>($499 USD)</span></b> </li>
                <li><b>Immediate pronunciation correction <span>($399USD)</span></b> </li>
                <li><b>Complete video course of phrasal verbs <span>($299USD)</span></b> </li>
                <li><b>Complete job interview video course <span>($299USD)</span></b> </li>
                <li><b>Level that includes business English <span>($399USD)</span></b> </li>
                <li><b>Learning course with real-world topics <span>($499 USD)</span></b> </li>
            </ul>
            <h1>MONTHLY VALUE OF THE COURSE = <span>$2867 USD</span></h1>
            <Link className="link" to = "/signup"><button className='btn offerbtn'> <h1>TODAY ONLY OFFER = $139 USD PER MONTH</h1> <p>Over 90% off original value of $2,894</p></button></Link>
            <p className='text-center'>For the price you spend every day on a Starbucks Venti frappe, you could be learning English fluently with the best method and the best native English teachers.</p>
        </div>
    </div>
  )
}
