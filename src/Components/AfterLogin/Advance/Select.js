import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import { beginnerData, preIntermediate, intermediate,intermediateAdvanced, advanceBusiness } from './Data';
import SmallProgressBar from './SmallProgressBar';


export function BeginnerSelect(props) {
    return (
        <select name="navel" id="sub_lesson_id" className="select-box" onChange={(e) => props.setSelect20(e.target.value)}>
            <option value="0">1. Elegant Party</option>
            <option value="1">2. The New Girl</option>
            <option value="2">3. The Gift</option>
            <option value="3">4. A New Earth</option>
            <option value="4">5. Make A Move</option>
            <option value="5">6. Rockstar</option>
            <option value="6">7. Study Appointment</option>
            <option value="7">8. Anniversary</option>
            <option value="8">9. Sensitive Boy</option>
            <option value="9">10. Study Date 2</option>
            <option value="10">11. Math Quiz</option>
            <option value="11">12. Jealousy Boy</option>
            <option value="12">13. Secret Admirer</option>
            <option value="13">14. On Time</option>
            <option value="14">15. Lost Wallet</option>
            <option value="15">16. Aliens Exist</option>
            <option value="16">17. Flirt Artist</option>
            <option value="17">18. Men or Women</option>
            <option value="18">19. Fear of Flying</option>
            <option value="19">20. Interesting Men</option>
        </select>
    )
}

export function PreIntermediateSelect(props) {
    return (
        <select name="navel" id="sub_lesson_id" className="select-box" onChange={(e) => props.setSelect20(e.target.value)}>
            <option value="0">1. You are perfect</option>
            <option value="1">2. Worried</option>
            <option value="2">3. Boring</option>
            <option value="3">4. Reconciliation</option>
            <option value="4">5. Moving</option>
            <option value="5">6. The Secret</option>
            <option value="6">7. Victoria's Cousin</option>
            <option value="7">8. Ben and Vicky</option>
            <option value="8">9. Young Padawan</option>
            <option value="9">10. My New Car</option>
            <option value="10">11. The Seduction</option>
            <option value="11">12. The Diary</option>
            <option value="12">13. Tony's Party</option>
            <option value="13">14. Sexy Brunette</option>
            <option value="14">15. Paranormal</option>
            <option value="15">16. Sweet Tip</option>
            <option value="16">17. Euphemisms</option>
            <option value="17">18. Sexiest Man</option>
            <option value="18">19. The Future</option>
            <option value="19">20. Home Alone</option>
        </select>
    )
}




export function IntermediateSelect(props) {
    return (
        <select name="navel" id="sub_lesson_id" className="select-box" onChange={(e) => props.setSelect20(e.target.value)}>
            <option value="0">1. eCommerce</option>
            <option value="1">2. Sexy Neighbour</option>
            <option value="2">3. Great Imagination</option>
            <option value="3">4. The Coma</option>
            <option value="4">5. The Artist</option>
            <option value="5">6. Celebrity</option>
            <option value="6">7. Don't Cry</option>
            <option value="7">8. Balance</option>
            <option value="8">9. Clairvoyant</option>
            <option value="9">10. Grandma</option>
            <option value="10">11. Memories</option>
            <option value="11">12. Mommy</option>
            <option value="12">13. Trick or Treat</option>
            <option value="13">14. Scary Night</option>
            <option value="14">15. Loch Ness</option>
            <option value="15">16. In Love</option>
            <option value="16">17. Millions</option>
            <option value="17">18. Breaking</option>
            <option value="18">19. Funny Moments</option>
            <option value="19">20. Periodic Table</option>
        </select>
    )
}

export function IntermediateAdvanceSelect(props) {
    return (
        <select name="navel" id="sub_lesson_id" className="select-box" onChange={(e) => props.setSelect20(e.target.value)}>
            <option value="0">1. The Message</option>
            <option value="1">2. Philospher</option>
            <option value="2">3. Bad Friend</option>
            <option value="3">4. Angry Victory</option>
            <option value="4">5. Girl Band</option>
            <option value="5">6. The Survey</option>
            <option value="6">7. Brown Jacket</option>
            <option value="7">8. Emotion</option>
            <option value="8">9. Metal Music</option>
            <option value="9">10. The Proposal</option>
            <option value="10">11. The Waiter</option>
            <option value="11">12. Moving</option>
            <option value="12">13. Feeling Sick</option>
            <option value="13">14. Vegetables</option>
            <option value="14">15. Movie Time</option>
            <option value="15">16. What a Girl</option>
            <option value="16">17. Pharaoh</option>
            <option value="17">18. Kidnapped</option>
            <option value="18">19. The Universe</option>
            <option value="19">20. Manly Admirer</option>
        </select>
    )
}

export function AdvanceBusinessSelect(props) {
    return (
        <select name="navel" id="sub_lesson_id" className="select-box" onChange={(e) => props.setSelect20(e.target.value)}>
            <option value="0">1. Psychology</option>
            <option value="1">2. Ben and Sarah</option>
            <option value="2">3. Feeling sad</option>
            <option value="3">4. Fired</option>
            <option value="4">5. Busniessman</option>
            <option value="5">6. Happiness</option>
            <option value="6">7. Ben and Emily</option>
            <option value="7">8. The Spinster</option>
            <option value="8">9. The Fee</option>
            <option value="9">10. Horoscope</option>
            <option value="10">11. CEO or CFO</option>
            <option value="11">12. Time Travel</option>
            <option value="12">13. Funny Lies</option>
            <option value="13">14. Foreign Work</option>
            <option value="14">15. The Concert</option>
            <option value="15">16. Superman</option>
            <option value="16">17. The Big Day</option>
            <option value="17">18. Pretty</option>
            <option value="18">19. New Boyfriend</option>
            <option value="19">20. My Girlfriend</option>
        </select>
    )
}

export function BeginnerGraph(props) {
    return (
        beginnerData[(props.select20)].map((data, index) => {
            return (
                <div className="col-12 col-lg-4 col-md-6 mt-3 p-0 m-auto">
                    {
                        data.name == 'Live Class' ? <ProgressBar
                            progress={100}
                            size={140}
                            strokeWidth={10}
                            circleOneStroke='#e0f6d0'
                            circleTwoStroke='#60c3cd'
                            name={data.name}
                            key={index}
                        /> : <ProgressBar
                            progress={data.progress}
                            size={140}
                            strokeWidth={10}
                            circleOneStroke='#e0f6d0'
                            circleTwoStroke='#99e265'
                            name={data.name}
                            key={index}
                        />
                    }
                </div>
            )
        })
    )
}

export function PreIntermediateGraph(props) {
    return (
        preIntermediate[(props.select20)].map((data, index) => {
            return (
                <div className="col-12 col-lg-4 col-md-6 mt-3 p-0 m-auto">
                    {
                        data.name == 'Live Class' ? <ProgressBar
                            progress={100}
                            size={140}
                            strokeWidth={10}
                            circleOneStroke='#e0f6d0'
                            circleTwoStroke='#60c3cd'
                            name={data.name}
                            key={index}
                        /> : <ProgressBar
                            progress={data.progress}
                            size={140}
                            strokeWidth={10}
                            circleOneStroke='#e0f6d0'
                            circleTwoStroke='#99e265'
                            name={data.name}
                            key={index}
                        />
                    }
                </div>
            )
        })
    )
}

export function IntermediateGraph(props) {
    return (
        intermediate[(props.select20)].map((data, index) => {
            return (
                <div className="col-12 col-lg-4 col-md-6 mt-3 p-0 m-auto">
                    {
                        data.name == 'Live Class' ? <ProgressBar
                            progress={100}
                            size={140}
                            strokeWidth={10}
                            circleOneStroke='#e0f6d0'
                            circleTwoStroke='#60c3cd'
                            name={data.name}
                            key={index}
                        /> : <ProgressBar
                            progress={data.progress}
                            size={140}
                            strokeWidth={10}
                            circleOneStroke='#e0f6d0'
                            circleTwoStroke='#99e265'
                            name={data.name}
                            key={index}
                        />
                    }
                </div>
            )
        })
    )
}

export function IntermediateAdvancedGraph(props) {
    return (
        intermediateAdvanced[(props.select20)].map((data, index) => {
            return (
                <div className="col-12 col-lg-4 col-md-6 mt-3 p-0 m-auto">
                    {
                        data.name == 'Live Class' ? <ProgressBar
                            progress={100}
                            size={140}
                            strokeWidth={10}
                            circleOneStroke='#e0f6d0'
                            circleTwoStroke='#60c3cd'
                            name={data.name}
                            key={index}
                        /> : <ProgressBar
                            progress={data.progress}
                            size={140}
                            strokeWidth={10}
                            circleOneStroke='#e0f6d0'
                            circleTwoStroke='#99e265'
                            name={data.name}
                            key={index}
                        />
                    }
                </div>
            )
        })
    )
}

export function AdvanceBusinessGraph(props) {
    return (
        advanceBusiness[(props.select20)].map((data, index) => {
            return (
                <div className="col-12 col-lg-4 col-md-6 mt-3 p-0 m-auto">
                    {
                        data.name == 'Live Class' ? <ProgressBar
                            progress={100}
                            size={140}
                            strokeWidth={10}
                            circleOneStroke='#e0f6d0'
                            circleTwoStroke='#60c3cd'
                            name={data.name}
                            key={index}
                        /> : <ProgressBar
                            progress={data.progress}
                            size={140}
                            strokeWidth={10}
                            circleOneStroke='#e0f6d0'
                            circleTwoStroke='#99e265'
                            name={data.name}
                            key={index}
                        />
                    }
                </div>
            )
        })
    )
}

export function BeginnerSmallBar(props) {
    return (
        <SmallProgressBar wi={beginnerData[props.select20][0].width} />
    )
}

export function PreIntermediateSmallBar(props) {
    return (
        <SmallProgressBar wi={preIntermediate[props.select20][0].width} />
    )
}

export function IntermediateSmallBar(props) {
    return (
        <SmallProgressBar wi={intermediate[props.select20][0].width} />
    )
}

export function IntermediateAdvacedSmallBar(props) {
    return (
        <SmallProgressBar wi={intermediateAdvanced[props.select20][0].width} />
    )
}

export function AdvanceBusinessSmallBar(props) {
    return (
        <SmallProgressBar wi={advanceBusiness[props.select20][0].width} />
    )
}