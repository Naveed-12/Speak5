import React, { useState } from 'react'
import './advance.css'
import Column from './Column';
import SmallProgressBar from './SmallProgressBar';
import { BeginnerSelect, PreIntermediateSelect, IntermediateSelect, IntermediateAdvanceSelect, AdvanceBusinessSelect } from './Select';
import { BeginnerGraph, PreIntermediateGraph, IntermediateGraph, IntermediateAdvancedGraph, AdvanceBusinessGraph } from './Select';
import { beginnerData, preIntermediate, intermediate, intermediateAdvanced, advanceBusiness } from './Data';
import { BeginnerSmallBar, PreIntermediateSmallBar, IntermediateSmallBar, IntermediateAdvacedSmallBar, AdvanceBusinessSmallBar } from './Select'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AdvancePage() {
    const history = useHistory()
    let [select20, setSelect20] = useState(0)
    let [select5, setSelect5] = useState('B')
    let tableName = [{
        name: 'BEGINNER'
    }, {
        name: 'PRE INTERMEDIATE'
    }, {
        name: 'INTERMEDIATE'
    }, {
        name: 'INTERMEDIATE-ADVANCED'
    }, {
        name: 'ADVANCED/BUSINESS'
    }]
    const goback= ()=>{
        history.goBack()
    }
    return (
        <div className="container-fluid changeback">
        <button className="btn returnbtn" onClick={() => goback()}>
        <i className="bi bi-caret-left"></i>To Return
      </button>
                <div className="container p-0 advancecontainer shadow">
                    <div className='bg-blue'>
                        <h5 className='fw-bold text-light'>ADVANCES</h5>
                    </div>
                    <div className='col-md-9 col-sm-12 paragraph'>
                        <p className="mt-5 text-center">In the table on the left, you can see how many lessons of the course you have successfully completed (in green). In the right panel, you can individually select each lesson to see the detailed progress you have made in it.</p>
                    </div>
                    <section className='container p-5 mt-3'>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="table-responsive">
                                    <table width={'100%'} border={'1'} cellPadding={'0'} cellSpacing={'0'} className='myTable'>
                                        {tableName.map((data, index) => {
                                            return <Column name={data.name} key={index} />
                                        })}
                                    </table>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-12 col-md-6 mt-3 mt-md-0 mr-2">
                                        <select name="navel" className='select-box' onChange={(e) => setSelect5(e.target.value)}>
                                            <option value="B">BEGINNER</option>
                                            <option value="P">PRE INTERMEDIATE</option>
                                            <option value="I">INTERMEDIATE</option>
                                            <option value="ID">INTERMEDIATE-ADVANCED</option>
                                            <option value="AB">ADVANCED/BUSINESS</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6 mt-3 mt-md-0">
                                        {
                                            select5 === 'B' && <BeginnerSelect setSelect20={setSelect20} />
                                        }
                                        {
                                            select5 === 'P' && <PreIntermediateSelect setSelect20={setSelect20} />
                                        }
                                        {
                                            select5 === 'I' && <IntermediateSelect setSelect20={setSelect20} />
                                        }
                                        {
                                            select5 === 'ID' && <IntermediateAdvanceSelect setSelect20={setSelect20} />
                                        }
                                        {
                                            select5 === 'AB' && <AdvanceBusinessSelect setSelect20={setSelect20} />
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        select5 === 'B' && <BeginnerGraph select20={select20} />
                                    }
                                    {
                                        select5 === 'P' && <PreIntermediateGraph select20={select20} />
                                    }
                                    {
                                        select5 === 'I' && <IntermediateGraph select20={select20} />
                                    }
                                    {
                                        select5 === 'ID' && <IntermediateAdvancedGraph select20={select20} />
                                    }
                                    {
                                        select5 === 'AB' && <AdvanceBusinessGraph select20={select20} />
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            select5 === 'B' && <BeginnerSmallBar select20={select20} />
                        }
                        {
                            select5 === 'P' && <PreIntermediateSmallBar select20={select20} />
                        }
                        {
                            select5 === 'I' && <IntermediateSmallBar select20={select20} />
                        }
                        {
                            select5 === 'ID' && <IntermediateAdvacedSmallBar select20={select20} />
                        }
                        {
                            select5 === 'AB' && <AdvanceBusinessSmallBar select20={select20} />
                        }

                    </section>
                </div>
        </div>
    )
}
