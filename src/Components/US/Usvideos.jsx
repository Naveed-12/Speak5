import React from "react";
import ReactPlayer from "react-player";

export default function Usvideos() {
  const vedios = [
    {
      url: "https://www.youtube.com/watch?v=snb-h8zKE6M",
      head: "Mariana Dominguez - Colombia",
      info: "Mariana managed to speak English fluently with the help of Speak 5. See and hear for yourself the results and fluency that our course helped her achieve, and convince yourself once and for all that Speak 5 is the best way to learn English.",
    },
    {
      url: "https://www.youtube.com/watch?v=snb-h8zKE6M",
      head: "Jorge Herraes - Spain",
      info: "The truth is that Speak 5, since I started, has done nothing but help me. Not only with his exhaustive personal monitoring, but also with the classes with his native teachers, who have undoubtedly helped my pronunciation and grammar to be at a good level in the personal and work spheres...",
    },
    {
      url: "https://www.youtube.com/watch?v=FVPdfPhXmR0",
      head: "Stephanie Naranjo - Mexico",
      info: "Since I found them, this has become one of the most fun activities, not only because of the availability of schedules throughout the day, but also because I can learn English from anywhere, and with teachers who are native speakers. .",
    },
    {
      url: "https://www.youtube.com/watch?v=eOBuY89RjAs",
      head: "Blas Delfino - Argentina",
      info: "“This is the first time that I have done a review for a course because this is the first time that I actually have fun when I learn… I am very happy that I found Speak 5 because it is a course that has everything you need to learn English...",
    },
  ];
  return (
    <div className="speak">
      <div className="container">
      <h1>TESTIMONIALS FROM OUR STUDENTS</h1>
        {
            vedios.map((video)=>(
                <div className="row">
            <div className="col-sm-4 mx-auto btext2">
              <h3>{video.head}</h3>
              <p>{video.info}</p>
             </div>
            <div className="col-sm-4 mx-auto usvideo">
              <ReactPlayer
                width={"80%"}
                height= {"120%"}
                url={video.url}
              />
            </div>
          </div>
            ))
          
        }
      </div>
    </div>
  );
}
