import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn to use the following words. Let's see:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Still" })}>Still </span>
          <p>Yet </p>
          <span onClick={() => speak({ text: "yet" })}> yet</span>
          <p>still / until now / still / already </p>
          <span onClick={() => speak({ text: "Already" })}>Already </span>
          <p>Already </p>
          <span onClick={() => speak({ text: "anymore" })}>anymore </span>
          <p>no longer / no more </p>
          <span onClick={() => speak({ text: "any longer" })}>any longer </span>
          <p> any longer</p>
          <span onClick={() => speak({ text: "no longer" })}> no longer</span>
          <p> no longer</p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
        </div>
        <p>
          We use still to say that a situation or action continues, that is,
          that it has not changed or finished. We put still after the verb to be
          , after a modal or auxiliary verb or between the subject and the main
          verb, Let's see some examples:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "It's 12 o'clock and my brother is still in bed" })
            }
          >
            It's 12 o'clock and my brother is still in bed{" "}
          </span>
          <p> It's 12 o'clock and my brother is still in bed</p>
          <span
            onClick={() =>
              speak({ text: "Do you still want to go with us to the party?" })
            }
          >
            Do you still want to go with us to the party?{" "}
          </span>
          <p> Do you still want to go with us to the party?</p>
          <span
            onClick={() =>
              speak({ text: "When I went to bed, Chris was still working" })
            }
          >
            {" "}
            When I went to bed, Chris was still working
          </span>
          <p> When I went to bed, Chris was still working</p>
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
