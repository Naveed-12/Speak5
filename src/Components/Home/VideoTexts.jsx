import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default function VideoTexts() {
  return (
    <div className="coursecontainer">
      <h1>BUT DON'T BELIEVE OUR WORD BLINDLY SEE WHAT OUR STUDENTS SAY</h1>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-sm-4 mx-auto">
            <p className="head">Mariana Dominguez - Colombia</p>
            <p>
              Mariana managed to speak English fluently with the help of Speak
              5. See and hear for yourself the results and fluency that our
              course helped Mariana achieve and convince yourself once and for
              all that Speak 5 is the best way to learn English.
            </p>
          </div>
          <div className="col-sm-2 mx-auto"></div>
          <div className="col-sm-4 mx-auto marg">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              url={
                "https://www.youtube.com/watch?v=Q-SRyoGMVAE&list=RDQ-SRyoGMVAE&start_radio=1"
              }
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-5 mx-auto">
            <p className="head">Jorge Herraes - Spain</p>
            <p>
              “The truth is that Speak 5, since I started, has done nothing but
              help me. Not only with his exhaustive personal monitoring, but
              also with the classes with his native teachers, who have
              undoubtedly helped my pronunciation and grammar to be at a good
              level in the personal and work spheres..."
            </p>
          </div>
          <div className="col-sm-2 mx-auto"></div>
          <div className="col-sm-4 mx-auto marg">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              url={
                "https://www.youtube.com/watch?v=Q-SRyoGMVAE&list=RDQ-SRyoGMVAE&start_radio=1"
              }
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-5 mx-auto">
            <p className="head">Stephanie Naranjo - Mexico</p>
            <p>
              Since I found them, this has become one of the most fun
              activities, not only because of the availability of schedules
              throughout the day, but also because I can learn English from
              anywhere, and with teachers who are native speakers. .”
            </p>
          </div>
          <div className="col-sm-2 mx-auto"></div>
          <div className="col-sm-4 mx-auto marg">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              url={
                "https://www.youtube.com/watch?v=Q-SRyoGMVAE&list=RDQ-SRyoGMVAE&start_radio=1"
              }
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-5 mx-auto">
            <p className="head">Blas Delfino - Argentina</p>
            <p>
              “This is the first time that I have made a review for a course
              because this is the first time that I actually have fun when I
              learn… I am very happy that I found Speak 5 because it is a course
              that has everything you need to learn English ”
            </p>
          </div>
          <div className="col-sm-2 mx-auto"></div>
          <div className="col-sm-4 mx-auto marg">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              url={
                "https://www.youtube.com/watch?v=Q-SRyoGMVAE&list=RDQ-SRyoGMVAE&start_radio=1"
              }
            />
          </div>
        </div>
        <Link className="link" to = "/signup"> <button className="btn offerbtn2">
          {" "}
          <h1>TODAY ONLY OFFER = $139 USD PER MONTH</h1>{" "}
          <p>Over 90% off original value of $2,894</p>
        </button></Link>
        <p>
          This offer will be available for a very short time, as we will then
          increase the price for those who have not signed up with this offer.
          <span> Other schools like Berlitz charge more than $200 USD per month</span> and
          <span> only give you 2 live classes per week .</span> Speak 5 is your best option to
          learn English
        </p>
      </div>
    </div>
  );
}
