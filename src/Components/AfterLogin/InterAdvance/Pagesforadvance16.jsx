import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn to use the verbs to{" "}
          <span onClick={() => speak({ text: "make" })}>make</span> and to do .
          The verbs to <span onClick={() => speak({ text: "make" })}>make</span>{" "}
          and to do have the same meaning: to do.
        </p>
        <p>
          Mainly, we use to do to talk about non-specific tasks and activities,
          as well as activities related to school, such as studying, taking an
          exam / a course, etc. Let's look at these examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " I have to do my homework" })}>
            I have to do my homework
          </span>
          <p> I have to do my homework</p>
          <span
            onClick={() =>
              speak({ text: " We're bored. We want to do something" })
            }
          >
            We're bored. We want to do something
          </span>
          <p>We're bored. We want to do something</p>

          <span onClick={() => speak({ text: " She needs to do exercise" })}>
            She needs to do exercise
          </span>
          <p>She needs to do exercise </p>

          <span onClick={() => speak({ text: "I'd like to do nothing now " })}>
            I'd like to do nothing now
          </span>
          <p>I would like to do anything now </p>

          <span
            onClick={() =>
              speak({
                text: "We need to do the housework and clean the carpet ",
              })
            }
          >
            We need to do the housework and clean the carpet
          </span>
          <p> We need to do the housework and clean the carpet</p>

          <span
            onClick={() =>
              speak({
                text: " I have to do a degree in medicine if I want to live abroad",
              })
            }
          >
            I have to do a degree in medicine if I want to live abroad
          </span>
          <p> I have to do a medical degree if I want to live abroad</p>

          <span
            onClick={() => speak({ text: " I want to do a computer course" })}
          >
            I want to do a computer course
          </span>
          <p> I want to do a computer course</p>
          <span
            onClick={() => speak({ text: " I have to do my exam tomorrow" })}
          >
            I have to do my exam tomorrow
          </span>
          <p> I have to do my exam tomorrow</p>
          <span onClick={() => speak({ text: "Can you do me please ? " })}>
            Can you do me please ?
          </span>
          <p> Can you do me please ?</p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>

          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};

export const Page2 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          We use yet in negative and interrogative sentences. Yet tells us that
          we are still waiting for something to happen. Usually, we put yet at
          the end of the sentence. Let's look at these examples:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: "She hasn't felt the letter yet " })}
          >
            She hasn't felt the letter yet{" "}
          </span>
          <p>She hasn't felt the letter yet </p>
          <span
            onClick={() =>
              speak({ text: "I haven't listened to the song yet" })
            }
          >
            {" "}
            I haven't listened to the song yet
          </span>
          <p>I haven't heard the song yet</p>
          <span
            onClick={() =>
              speak({
                text: "We've talked a lot on the phone, but I haven't seen her yet",
              })
            }
          >
            We've talked a lot on the phone, but I haven't seen her yet{" "}
          </span>
          <p>We've talked a lot on the phone, but I haven't seen her yet </p>
          <span
            onClick={() =>
              speak({
                text: "Have you finished your homework yet ? - I haven't finished yet",
              })
            }
          >
            Have you finished your homework yet ? - I haven't finished yet
          </span>
          <p>Have you finished your homework yet? - I'm not done yet</p>
          <span
            onClick={() =>
              speak({ text: "Have you fixed the car yet ? -Not  yet" })
            }
          >
            Have you fixed the car yet ? -Not yet{" "}
          </span>
          <p> Have you fixed the car yet? - Not yet</p>
          <span
            onClick={() =>
              speak({
                text: "Have you talked to your parents yet ? - And it is",
              })
            }
          >
            {" "}
            Have you talked to your parents yet ? - And it is
          </span>
          <p> Have you talked to your parents yet? - Yes</p>
        </div>
        <p>
          We use already to say that something happened earlier than expected.
          As with still , we put already after the verb to be , after a modal or
          auxiliary verb, or between the subject and the main verb. Let's look
          at these examples:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: "What time is Mike leaving? - He has already left",
              })
            }
          >
            What time is Mike leaving? - He has already left{" "}
          </span>
          <p> What time is Mike leaving? - He is already gone</p>
          <span
            onClick={() =>
              speak({
                text: "Have you talked to Ben? - Yes, I've already talked to him",
              })
            }
          >
            {" "}
            Have you talked to Ben? - Yes, I've already talked to him
          </span>
          <p> Have you talked to Ben? - Yes, I've already talked to him</p>
          <span
            onClick={() =>
              speak({ text: "I just ate breakfast and I'm already hungry" })
            }
          >
            I just ate breakfast and I'm already hungry{" "}
          </span>
          <p> I just ate breakfast and I'm already hungry</p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};

export const Page3 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          We use any more , any longer , no longer to express that a situation
          has changed. Any more and any longer go at the end of a negative
          sentence (which leads doesn't , don't , isn't , aren't , etc.). Let's
          look at the following examples:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: " Mike doesn't work here any more" })}
          >
            Mike doesn't work here any more
          </span>
          <p>Mike doesn't work here any more </p>
          <span
            onClick={() =>
              speak({ text: "Mike doesn't work here any longer " })
            }
          >
            Mike doesn't work here any longer
          </span>
          <p> Mike doesn't work here any longer </p>
          <span
            onClick={() => speak({ text: "Jessica isn't my friend any more " })}
          >
            Jessica isn't my friend any more
          </span>
          <p> Jessica isn't my friend any more </p>
          <span
            onClick={() =>
              speak({ text: " Jessica isn't my friend any longer" })
            }
          >
            Jessica isn't my friend any longer
          </span>
          <p> Jessica isn't my friend any longer</p>
          <span
            onClick={() => speak({ text: "We're not welcome here any more " })}
          >
            We're not welcome here any more
          </span>
          <p> We're not welcome here any more</p>
          <span onClick={() => speak({ text: " We're not welcome here any longer" })}>We're not welcome here any longer</span>
          <p> We're not welcome here any longer</p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};

export const Page4 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In previous lessons, we learned how to use the first, second, and
          third conditionals (as well as the zero conditional). In this lesson,
          we will learn to use conditional sentences by mixing all the ones we
          learned before. It's not as difficult as it sounds!
        </p>
        <p>
          If we recall, the zero conditional is used with the present simple
          like this:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: "If you study harder, you can pass your final exam",
              })
            }
          >
            If you study harder, you can pass your final exam
          </span>
          <p> If you study harder, you can pass your final exam</p>
        </div>
        <p>
          As we could see, both parts of the previous sentence are in the
          present simple:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p>
            <span onClick={() => speak({ text: " If you study harder " })}>
              If you study harder{" "}
            </span>{" "}
            (this sentence is in the present simple because the verb{" "}
            <span onClick={() => speak({ text: " study" })}> study</span>
            is in the present simple){" "}
          </p>
          <p>
            {" "}
            <span
              onClick={() => speak({ text: " you can pass your final exam " })}
            >
              {" "}
              you can pass your final exam
            </span>
            (this sentence is in the present simple because the verb{" "}
            <span onClick={() => speak({ text: " pass " })}> pass</span>
            is in the present simple)
          </p>
        </div>
        <p>
          However, sometimes we can mix the conditionals. Let's look at these
          examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p>
            <span onClick={() => speak({ text: "  If your were tired" })}>
              If your were tired{" "}
            </span>
            (it is a sentence with the second conditional, because the verb is
            in the past simple =
            <span onClick={() => speak({ text: "were " })}> were</span> )
          </p>
          <p>
            <span
              onClick={() =>
                speak({ text: " You would havehave stay in bed " })
              }
            >
              {" "}
              You would havehave stay in bed
            </span>
            (it is a sentence with the third conditional, because the second
            part of the sentence has{" "}
            <span onClick={() => speak({ text: " would " })}>would </span>+{" "}
            <span onClick={() => speak({ text: " jhave " })}>have </span>+ verb
            in the past participle ({" "}
            <span onClick={() => speak({ text: "stayed" })}>stayed</span>){" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Page5 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          We can also mix the other conditionals that we have seen. Let's see
          several examples mixing the tenses of the conditionals:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " If I had a stronger arm, I would hit you " })
            }
          >
            {" "}
            If I had a stronger arm, I would hit you
          </span>
          <p>If I had a stronger arm, I'd hit you</p>
          <span
            onClick={() =>
              speak({ text: "If I were you, I would have punched that guy" })
            }
          >
            If I were you, I would have punched that guy
          </span>
          <p>If I were you I would have hit that guy</p>
          <span
            onClick={() =>
              speak({
                text: " If I didn´t speak Spanish, I wouldn´t have got this job",
              })
            }
          >
            If I didn´t speak Spanish, I wouldn´t have got this job
          </span>
          <p>If I didn't speak Spanish, I wouldn't have gotten this job.</p>
          <span
            onClick={() =>
              speak({
                text: "If I didn't have a guitar, I wouldn't have played in the band",
              })
            }
          >
            {" "}
            If I didn't have a guitar, I wouldn't have played in the band
          </span>
          <p>If I didn't have a guitar, I wouldn't have played in the band.</p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p></p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p></p>
        </div>
      </div>
    </div>
  );
};
