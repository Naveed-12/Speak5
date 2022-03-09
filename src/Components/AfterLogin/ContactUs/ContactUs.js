import React from 'react'

export default function ContactUs() {
    let userName = "Chico"
    return (
        <div className="contactus">
        <div className='container'>
            <div className=" my-5 shadow c-background p-0">
                <div className='bg-blue'>
                    <h5 className='fw-bold text-light'>Send a Message</h5>
                </div>
                <div className="container p-0">
                    <div className="col-md-8 col-12 c-input">
                        <label>From</label>
                        <div className='mb-3'>
                            <input type="text" className='c-input-1' placeholder={userName} readOnly />
                        </div>
                        <label>For</label>
                        <div className='mb-3'>
                            <select className='my-select-style'>
                                <option value="James" selected>Kimbely Jones</option>
                            </select>
                        </div>
                        <label>Qualification</label>
                        <div className='mb-3'>
                            <input type="text" className='c-input-1' placeholder='Write the title of your message' />
                        </div>
                        <label >Message</label>
                        <div>
                            <textarea col="60" rows="10" className='c-input-1' placeholder='Write your message'></textarea>
                        </div>
                        <div className='mt-4'>
                            <button className='c-button'>To Send</button>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: "4%" }}>
                        <div className="col-md-4 col-12 mb-3 mb-md-0">
                            <button className='my-b'>
                                <img src="http://www.speak5.com/images/chat-icon.png" style={{ maxWidth: "34px", border: "0px" }} />
                                <span className='text-uppercase mx-3'>recieved message</span>

                            </button>
                        </div>
                        <div className="col-md-4 col-12 mb-3 mb-md-0">
                            <button className='my-b'>
                                <img src="http://www.speak5.com/images/kite-icon.png" style={{ maxWidth: "25px", border: "0px" }} />
                                <span className='text-uppercase mx-3'>sent message</span>

                            </button>
                        </div>
                        <div className="col-md-4 col-12 mb-3 mb-md-0">
                            <button className='my-b'>
                                <img src="http://www.speak5.com/images/chat-icon-2.png" style={{ maxWidth: "32px", border: "0px" }} />
                                <span className='text-uppercase mx-3'>send a message</span>

                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
