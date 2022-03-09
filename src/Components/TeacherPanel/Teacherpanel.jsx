import React from "react";
import "./Teacher.css";
import img from "../pictures/girl.jpg";
import Booking from './Booking'
import TeacherCalender from './TeacherCalender'

export default function Teacherpanel() {
  const info = [
    {
      personalinfo:
        "It may seem an obvious thing to say, but the Personal Details section of your CV is your first opportunity to introduce yourself to a potential employer. Get the basics wrong at this stage and you can wave goodbye to the chances of getting an interview.",
        lessons:"22",
        earned:"135",
        completedlessondate:"June 1 to June7"
    },
  ];
  return (
      <div>
        <div className="conatainer-fluid teacherpanel">
      <div className="container">
        <h4 className="text-center">
          Here you'll be able to see and change your personal and teaching
          information,payment info,etc{" "}
        </h4>
        <div className="row my-row">
          <div className="col-md-6 col-12 mx-auto">
            <img src={img} alt="" width={400} className = "img" />
            <p>uploaded picture</p>
            <div className="pinfo">
              <p>{info[0].personalinfo}</p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <form>
              <div className="form-group row mb-2">
                <label
                  for="colFormLabel"
                  className="col-sm-2 col-form-label text-uppercase"
                >
                  timezone
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="colFormLabel"
                    placeholder="Maxico City XXX - 1"
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label
                  for="colFormLabel"
                  className="col-sm-2 col-form-label text-uppercase"
                >
                  teacher's name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="colFormLabel"
                    placeholder="Anna"
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label
                  for="colFormLabel"
                  className="col-sm-2 col-form-label text-uppercase"
                >
                  nationality
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="colFormLabel"
                    placeholder="American"
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label
                  for="colFormLabel"
                  className="col-sm-2 col-form-label text-uppercase"
                >
                  skype id
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="colFormLabel"
                    placeholder="username50"
                  />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label
                  for="colFormLabel"
                  className="col-sm-2 col-form-label text-uppercase"
                >
                  e-mail
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="colFormLabel"
                    placeholder="anna@gmail.com"
                  />
                </div>
                
              </div>
              <div className="form-group row mb-2">
              <label
                for="colFormLabel"
                className="col-sm-2 col-form-label text-uppercase"
              >
                phone number
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="colFormLabel"
                  placeholder="+44 234 2345 234"
                />
              </div>
              
            </div>
              <div className="form-group row mb-2">
                <label
                  for="colFormLabel"
                  className="col-sm-2 col-form-label text-uppercase"
                >
                  password
                </label>
                <div className="col-sm-10">
                 <button className="btn btn-primary">change current password</button>
                </div>
                
              </div>
              <div className="form-group row mb-2">
                <label
                  for="colFormLabel"
                  className="col-sm-2 col-form-label text-uppercase"
                >
                  paypal address
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="colFormLabel"
                    placeholder=""
                  />
                </div>
                
              </div>
              <div className="form-group row mb-2">
                <label
                  for="colFormLabel"
                  className="col-sm-2 col-form-label text-uppercase"
                >
                  add intro video
                </label>
                <div className="col-sm-10">
                  <button className="btn btn-outline-dark">Upload Video</button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
        <Booking info = {info}/>
        <TeacherCalender/>
    </div>


  );
}
