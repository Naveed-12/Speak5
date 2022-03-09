import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn how to use in , at and on as prepositions
          of time. All of these prepositions mean “in”, but they are used
          differently in different situations.
        </p>
        <p>
          We use the preposition in ({" "}
          <span onClick={() => speak({ text: "preposition" })}>
            preposition
          </span>{" "}
          in â€‹â€‹â€‹â€‹â€‹) to refer to months, years, centuries, seasons of
          the year, times and periods of time. Let's look at these examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " In June" })}> In June </span>
          <p> In July</p>
          <span onClick={() => speak({ text: "In 2017 " })}>In 2017 </span>
          <p>In 2017 </p>
          <span onClick={() => speak({ text: "In the first century " })}>
            {" "}
            In the first century{" "}
          </span>
          <p> In the first century</p>
          <span onClick={() => speak({ text: "in the summer " })}>
            {" "}
            in the summer{" "}
          </span>
          <p> in the summer</p>
          <span onClick={() => speak({ text: " In the Middle Ages" })}>
            In the Middle Ages{" "}
          </span>
          <p>In the Middle Ages </p>
          <span onClick={() => speak({ text: " in the past " })}>
            {" "}
            in the past{" "}
          </span>
          <p> in the past </p>
          <span onClick={() => speak({ text: " in the future" })}>
            in the future{" "}
          </span>
          <p> in the future</p>
          <span
            onClick={() => speak({ text: " In the morning – In the mornings" })}
          >
            {" "}
            In the morning – In the mornings
          </span>
          <p>In the morning – In the mornings </p>
          <span
            onClick={() =>
              speak({ text: " In the afternoon – In the afternoons" })
            }
          >
            {" "}
            In the afternoon – In the afternoons{" "}
          </span>
          <p> In the afternoon – In the afternoons</p>
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
        <p>Let's see some examples of the preposition in in action:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: " I never wake up in the morning" })}
          >
            {" "}
            I never wake up in the morning{" "}
          </span>
          <p> I never wake up in the morning</p>
          <span
            onClick={() =>
              speak({ text: "We always play guitar in the afternoon " })
            }
          >
            We always play guitar in the afternoon{" "}
          </span>
          <p>We always play guitar in the afternoon </p>
          <span
            onClick={() => speak({ text: "We eat together in the evening  " })}
          >
            {" "}
            We eat together in the evening
          </span>
          <p>We eat together in the evening </p>
          <span onClick={() => speak({ text: "The meeting is in 2017 " })}>
            {" "}
            The meeting is in 2017
          </span>
          <p>The meeting is in 2017</p>
          <span onClick={() => speak({ text: " In the Middle Ages" })}>
            In the Middle Ages{" "}
          </span>
          <p>In the Middle Ages </p>
          <span
            onClick={() =>
              speak({ text: " I would have loved to live in the Middle Ages " })
            }
          >
            {" "}
            I would have loved to live in the Middle Ages
          </span>
          <p> I would have loved to live in the Middle Ages </p>
        </div>
        <p>
          We also use in to say how long it takes to do something or how long it
          takes for something to happen. Let's look at these examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " I play football in six days" })}>
            I play football in six days
          </span>
          <p> I play football in six days</p>
          <span
            onClick={() => speak({ text: " They get married in three months" })}
          >
            They get married in three months
          </span>
          <p> They get married in three months</p>
        </div>
        <p>Did we understand correctly? Great.</p>
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
          Although the preposition{" "}
          <span onClick={() => speak({ text: "at" })}>at</span> means “in”, it
          can also be translated as “at(s), at, in the, in the, in the, the”
          when we talk about the hours of the day or some moments of the day
          (such as “at noon”, “at five o'clock”, “at night”, “on weekends”, “at
          midnight”, etc.). We use the preposition{" "}
          <span onClick={() => speak({ text: "at" })}>at</span> to talk about
          the time, holidays and the moment of an event.
        </p>
        <p>Let's look at some examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "At seven o'clock" })}>
            At seven o'clock
          </span>
          <p> At seven o'clock</p>
          <span onClick={() => speak({ text: " At 22:15 " })}>At 22:15</span>
          <p>At 22:15 </p>
          <span onClick={() => speak({ text: " At Christmas " })}>
            At Christmas
          </span>
          <p> At Christmas</p>
          <span onClick={() => speak({ text: " at midnight " })}>
            at midnight
          </span>
          <p> at midnight</p>
          <span onClick={() => speak({ text: " At lunchtime " })}>
            At lunchtime
          </span>
          <p> At lunchtime</p>
        </div>
        <p>Let's look at some fun examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "  We watch TV at seven o'clock every day" })
            }
          >
            We watch TV at seven o'clock every day
          </span>
          <p> We watch TV at seven o'clock every day</p>
          <span
            onClick={() => speak({ text: "We meet every year at Christmas  " })}
          >
            We meet every year at Christmas
          </span>
          <p> We meet every year at Christmas</p>
          <span
            onClick={() => speak({ text: " I go to her place at midnight " })}
          >
            I go to her place at midnight
          </span>
          <p> I go to her place at midnight</p>
          <span
            onClick={() => speak({ text: " The meeting is at lunchtime " })}
          >
            The meeting is at lunchtime
          </span>
          <p>The meeting is at lunchtime </p>
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
          We also use <span onClick={() => speak({ text: "at" })}>at</span> in
          the following expressions:
        </p>

        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " At night" })}>At night</span>
          <p> At night</p>
          <span
            onClick={() => speak({ text: "At weekends / at the weekends " })}
          >
            At weekends / at the weekends
          </span>
          <p> On weekends / on weekends</p>
          <span
            onClick={() => speak({ text: " On weekends / on the weekends" })}
          >
            On weekends / on the weekends
          </span>
          <p>On weekends / on the weekends </p>
          <span onClick={() => speak({ text: "At the moment / at present " })}>
            At the moment / at present
          </span>
          <p> At the moment / at present</p>
          <span onClick={() => speak({ text: "At the same time " })}>
            At the same time
          </span>
          <p> At the same time</p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
        </div>
        <p>Here are some examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: " Let's go to her party at night" })}
          >
            Let's go to her party at night
          </span>
          <p>Let's go to her party at night </p>
          <span
            onClick={() =>
              speak({ text: "We play basketball at the weekends " })
            }
          >
            We play basketball at the weekends
          </span>
          <p>We play basketball at the weekends </p>
          <span
            onClick={() => speak({ text: "I feel amazing at the moment " })}
          >
            I feel amazing at the moment
          </span>
          <p> I feel amazing at the moment</p>
          <span
            onClick={() => speak({ text: " We need to sing at the same time" })}
          >
            We need to sing at the same time
          </span>
          <p>We need to sing at the same time </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
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
          In addition to meaning “in”, the preposition{" "}
          <span onClick={() => speak({ text: "on" })}>on</span> is also
          translated as “the, the” for sentences like “on Friday”, “on
          Saturdays”, etc. We use the preposition{" "}
          <span onClick={() => speak({ text: "on" })}>on</span> to talk about
          specific days and dates. Let's see these examples:
        </p>

        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "On Monday - On Mondays " })}>
            {" "}
            On Monday - On Mondays
          </span>
          <p>On Monday - On Mondays </p>
          <span onClick={() => speak({ text: "On Tuesday - On Tuesdays " })}>
            On Tuesday - On Tuesdays{" "}
          </span>
          <p> On Tuesday - On Tuesdays</p>
          <span onClick={() => speak({ text: "On Fridays - On Fridays " })}>
            {" "}
            On Fridays - On Fridays
          </span>
          <p> On Fridays - On Fridays</p>
          <span onClick={() => speak({ text: "On Saturdays - On Saturdays " })}>
            On Saturdays - On Saturdays{" "}
          </span>
          <p>On Saturdays - On Saturdays </p>
          <span
            onClick={() =>
              speak({ text: " On Sunday morning - On Sunday mornings" })
            }
          >
            {" "}
            On Sunday morning - On Sunday mornings
          </span>
          <p>On Sunday morning - On Sunday mornings </p>
          <span
            onClick={() =>
              speak({ text: " On Thursday morning - On Thursday morning" })
            }
          >
            On Thursday morning - On Thursday morning{" "}
          </span>
          <p> On Thursday morning - On Thursday morning</p>
          <span onClick={() => speak({ text: "On April 20th, 2016 " })}>
            On April 20th, 2016{" "}
          </span>
          <p> On April 20th, 2016</p>
          <span onClick={() => speak({ text: "on my birthday " })}>
            on my birthday{" "}
          </span>
          <p> on my birthday</p>
          <span onClick={() => speak({ text: " On Christmas Day" })}>
            {" "}
            On Christmas Day
          </span>
          <p> On Christmas Day</p>
          <span
            onClick={() => speak({ text: "On weekends / on the weekends" })}
          >
            On weekends / on the weekends
          </span>
          <p> On weekends / on the weekends</p>
        </div>
      </div>
    </div>
  );
};

export const Page6 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>Let's look at some examples:</p>

        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "  We have English class on Mondays" })}>
          We have English class on Mondays
          </span>
          <p> We have English class on Mondays</p>
          <span onClick={() => speak({ text: "I work as a volunteer on Tuesdays   " })}>
          I work as a volunteer on Tuesdays 
          </span>
          <p> I work as a volunteer on Tuesdays </p>
          <span onClick={() => speak({ text: " We have a meeting on Wednesday  " })}>
          We have a meeting on Wednesday 
          </span>
          <p>We have a meeting on Wednesday  </p>
          <span onClick={() => speak({ text: " They go to parties on Fridays  " })}>
          They go to parties on Fridays 
          </span>
          <p> They go to parties on Fridays </p>
          <span onClick={() => speak({ text: " I have a date on Saturday " })}>
          I have a date on Saturday
          </span>
          <p> I have a date on Saturday</p>
          <span onClick={() => speak({ text: "We eat out on Sunday mornings  " })}>
          We eat out on Sunday mornings
          </span>
          <p> We eat out on Sunday mornings</p>
          <span onClick={() => speak({ text: "Everything is happiness on my birthday  " })}>
          Everything is happiness on my birthday
          </span>
          <p> Everything is happiness on my birthday</p>

          <span onClick={() => speak({ text: " I'm meeting my grandson on Christmas Day " })}>
          I'm meeting my grandson on Christmas Day
          </span>
          <p> I'm meeting my grandson on Christmas Day</p>
        </div>
      </div>
    </div>
  );
};
