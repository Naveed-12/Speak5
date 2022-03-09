import React from 'react'
import './Price.css'
import tick from '../pictures/tick.png'
import cross from '../pictures/cross.png'

export default function PriceTable() {

    return (
    <div className='container pricetable'>
        <h1>SPEAK 5 HANDLES DIFFERENT PLANS TO FIT YOU</h1>
        <p className='p'>The Premium Plan includes 5 live classes 1 to 1 and unlimited and unrestricted access to the multimedia course</p>
        <div className="row premiumbtns">
            <div className="col-sm-3 mx-auto">
            </div>
            <div className="col-sm-3 mx-auto"><div className="red">Primium Plan</div></div>
            <div className="col-sm-3 mx-auto"><div className="yellow">Free Plan</div></div>
            <div className="col-sm-3 mx-auto"><div className="green">Standard Plan</div></div>
        </div>
        <div className="row premiumbtns">
            <div className="col-sm-3 mx-auto">
                <h2>IT INCLUDES</h2>
            </div>
            <div className="col-sm-3 mx-auto"><div className="blue"><h3>$139USD</h3><p>Per Month</p> </div></div>
            <div className="col-sm-3 mx-auto"><div className="blue"><h3>FREE</h3><p>Undefined</p></div></div>
            <div className="col-sm-3 mx-auto"><div className="blue"><h3>$99USD</h3><p>By Year</p></div></div>
        </div>
        <div className="table">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 mx-auto">lives classes 1 to 1</div>
                    <div className="col-sm-3 mx-auto">5 live classes per week of 30 minutes each</div>
                    <div className="col-sm-3 mx-auto close"><img src={cross} alt=""  width={"30px"}/></div>
                    <div className="col-sm-3 mx-auto close"><img src={cross} alt=""  width={"30px"}/></div>
                </div>
                <div className="row">
                    <div className="col-sm-3 mx-auto">5 levels of learning 100 units of content</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close">Only 8 Units</div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                </div>
                <div className="row">
                    <div className="col-sm-3 mx-auto">Instant pronunciation correction	</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                </div>
                
                <div className="row">
                    <div className="col-sm-3 mx-auto">Certificate for each level completed	</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={cross} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                </div>
                <div className="row">
                    <div className="col-sm-3 mx-auto">personalized study plan</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={cross} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={cross} alt="" width={"30px"} /></div>
                </div>
                <div className="row">
                    <div className="col-sm-3 mx-auto">24/7 access</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                </div>
                
                <div className="row">
                    <div className="col-sm-3 mx-auto">Learning with real world topics</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                </div>
                <div className="row">
                    <div className="col-sm-3 mx-auto">Video course Job interview</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={cross} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={cross} alt="" width={"30px"} /></div>
                </div>
                <div className="row">
                    <div className="col-sm-3 mx-auto">Video course Phrasal Verbs</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={cross} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={cross} alt="" width={"30px"} /></div>
                </div>
                <div className="row">
                    <div className="col-sm-3 mx-auto">Business English</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={cross} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                </div>
                <div className="row">
                    <div className="col-sm-3 mx-auto">Preparation for official exams</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={cross} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                </div>
                <div className="row">
                    <div className="col-sm-3 mx-auto">progress tracking</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                </div>
                
                <div className="row">
                    <div className="col-sm-3 mx-auto">NO FORCED DEADLINES</div>
                    <div className="col-sm-3 mx-auto approve"> <img src={tick} alt="" width={"30px"} /></div>
                    <div className="col-sm-3 mx-auto ">It's free and you'll never pay</div>
                    <div className="col-sm-3 mx-auto close"><img src={tick} alt="" width={"30px"} /></div>
                </div>
            </div>
        </div>
        <div className="row premiumbtns">
            <div className="col-sm-3 mx-auto">
            </div>
            <div className="col-sm-3 mx-auto"><div className="red">SIGNUP FOR PREMIUM</div></div>
            <div className="col-sm-3 mx-auto"><div className="yellow">SIGNUP FOR FREE</div></div>
            <div className="col-sm-3 mx-auto"><div className="green">SIGNUP FOR STANDARD</div></div>
        </div>
    </div>
  )
}
