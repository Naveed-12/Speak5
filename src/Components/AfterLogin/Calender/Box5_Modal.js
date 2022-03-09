import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function Box5_Modal() {
  let [date, setDate] = useState(new Date())

  return (
    <div className='calender'>
      <div className="box-container  shadow">
        <div className="row">
          <div className="col-md-8 col-12 m-0">
            <p className='text-light p-3 h4'>Select the time of your private class</p>
          </div>
          <div className="col-md-4 col-12">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="my-width">
                  <div className="progress">
                    <div className="progress-bar bg-success" role={"progressbar"} style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-3">
                <div className="my-width">
                  <p className='text-white' style={{ fontSize: "20px" }}>1 / 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-light'>
          <div className="row p-md-5 p-0">
            <div className="col-7">
              <Calendar onChange={() => setDate(date)} value={date} />
            </div>
            <div className="col-5">
              <label>choose a teacher</label>
              <div className='mb-4 '>
                <select className='my-form'>
                  <option value="Any">Any Teacher Available</option>
                  <option value="Albert">Albert Didier (Bilingual)</option>
                  <option value="Greg">Greg Seebregts</option>
                  <option value="Felipe">Felipe Souza (Bilingual)</option>
                  <option value="Jessica">Jessica Ruby</option>
                  <option value="Sami">Sami Delijero</option>
                  <option value="Michelle">Michelle Clappers</option>
                  <option value="Sheryl">Sheryl Ramos</option>
                </select>
              </div>
              <label>choose the time</label>
              <div>
                <select className='my-form'>
                  <option value="Horarios">Horarios disponibles</option>
                  <option value="H20">20:30</option>
                  <option value="H21">21:00</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
