import React from 'react'


export default function SmallProgressBar(props) {
    let smallProgressBarStyle = {
        width: props.wi,
        backgroundColor: '#97afc0',
        borderRadius: '3px',
        height: '10px'
    }
    return (
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <div className="row total_complete_div style-1">
                    <div className="col-md-10 col-md-offset-1 style-2">
                        <div className="col-md-12 col-sm-12 col-xs-12 bg-gredient style-3" >
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <p className="style-4">TOTAL</p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <p>
                                    <div className="mggg style-5" >
                                        <div style={smallProgressBarStyle}>
                                        </div>
                                    </div>
                                    <span className='style-6'>
                                        {props.wi}
                                    </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
