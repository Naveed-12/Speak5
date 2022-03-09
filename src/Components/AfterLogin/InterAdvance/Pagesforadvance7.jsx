import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn how to use the present simple and the
          present continuous to talk about the future.
        </p>
        <p>
          We use the present simple to talk about events or actions that will
          take place at some time in the future (timetables of cinemas,
          theaters, trains, billboards, events, etc.) as well as to talk about
          things that usually happen. Let's look at some examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: " Our bus arrives at 7 o´clock" })}
          >
            {" "}
            Our bus arrives at 7 o´clock
          </span>
          <p> Our bus arrives at 7 o´clock</p>
          <span
            onClick={() =>
              speak({ text: "Your plane leaves at 3:35          " })
            }
          >
            Your plane leaves at 3:35
          </span>
          <p> Your plane leaves at 3:35</p>
          <span
            onClick={() => speak({ text: " The movie starts at 9 o'clock." })}
          >
            {" "}
            The movie starts at 9 o'clock.
          </span>
          <p>The movie starts at 9 o'clock. </p>
          <span
            onClick={() =>
              speak({
                text: " I leave at 2:15 to arrive early at the theater.",
              })
            }
          >
            I leave at 2:15 to arrive early at the theater.{" "}
          </span>
          <p>I leave at 2:15 to get to the movies early. </p>
          <span
            onClick={() =>
              speak({ text: " The band starts playing at night. " })
            }
          >
            {" "}
            The band starts playing at night.{" "}
          </span>
          <p> The band starts playing at night.</p>
          <span onClick={() => speak({ text: " Our freedom starts at 10 pm" })}>
            Our freedom starts at 10 pm{" "}
          </span>
          <p> Our freedom starts at 10 pm</p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
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
          We can use the present continuous to talk about definite plans in the
          future, that is, to talk about something that we have already planned
          and scheduled to do in the future. If we use the present continuous in
          this way, it translates into Spanish as if it were going to ( voy a…
          ). To understand clearly, let's see some examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "I'm playing basketball tomorrow in the morning " })
            }
          >
            {" "}
            I'm playing basketball tomorrow in the morning
          </span>
          <p>I'm playing basketball tomorrow in the morning </p>
          <span
            onClick={() =>
              speak({ text: "They're flying to Brazil next Sunday " })
            }
          >
            {" "}
            They're flying to Brazil next Sunday
          </span>
          <p>They're flying to Brazil next Sunday </p>
          <span
            onClick={() => speak({ text: " We're having lunch on Friday" })}
          >
            We're having lunch on Friday{" "}
          </span>
          <p> We're having lunch on Friday</p>
          <span
            onClick={() =>
              speak({ text: "He 's traveling to England next year " })
            }
          >
            {" "}
            He 's traveling to England next year
          </span>
          <p> He 's traveling to England next year </p>
        </div>
        <p>
          When we use the present continuous to talk about the future, we
          usually know when the future event will occur. Let's look at these
          examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: " We're going on a date at 7:30" })}
          >
            {" "}
            We're going on a date at 7:30
          </span>
          <p>We're going on a date at 7:30 </p>
          <span
            onClick={() =>
              speak({ text: " She 's watching the film till 10 o'clock" })
            }
          >
            {" "}
            She 's watching the film till 10 o'clock
          </span>
          <p>She 's watching the film till 10 o'clock </p>
          <span
            onClick={() =>
              speak({ text: "We're going on strike tomorrow at 6 am" })
            }
          >
            We're going on strike tomorrow at 6 am
          </span>
          <p> We will be on strike tomorrow at 6 am</p>
        </div>
        <p>
          Also, we can use the present continuous to ask about someone's future
          plans. Let's look at this example:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: " What are you doing next Friday?" })}
          >
            {" "}
            What are you doing next Friday?
          </span>
          <p>What are you going to do next Friday? </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
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
          The words till and until mean "until". The only difference between the
          two is that until is used in more formal situations.
        </p>
        <p>
          Also, we use the present continuous to say that we are going to do
          something just before we start doing it. Let's look at these examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: "I'm tired, I'm going to bed now " })}
          >
            {" "}
            I'm tired, I'm going to bed now
          </span>
          <p> I'm tired, I'm going to bed now</p>
          <span
            onClick={() =>
              speak({ text: " Son, Come here -  Yes, I'm coming" })
            }
          >
            {" "}
            Son, Come here - Yes, I'm coming
          </span>
          <p>
            {" "}
            Son, Come here - YES, there I go (The phrase I'm coming literally
            translates into Spanish as " here I go / I'm going ")
          </p>
          <span onClick={() => speak({ text: " It's late, I'm leaving now" })}> It's late, I'm leaving now

          </span>
          <p> It's late, I'm going to go now</p>

          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>

          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};
