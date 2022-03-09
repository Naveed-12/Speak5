import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page2 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          As we already know, when we use the gerund after a preposition, this
          gerund is usually translated into Spanish as the infinitive (see
          lesson 18 ). .
        </p>
        <p>
          In addition, we can use the structure " adjective + preposition +
          gerund " with the following expressions:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Terrified of / by" })}>
            Terrified of / by
          </span>
          <p> afraid of / for</p>
          <span onClick={() => speak({ text: "Fascinated by / with" })}>
            Fascinated by / with
          </span>
          <p> Fascinated by / with</p>
          <span onClick={() => speak({ text: "Satisfied with / by" })}>
            Satisfied with / by
          </span>
          <p>Satisfied with / by</p>
          <span onClick={() => speak({ text: "Shocked by / at" })}>
            Shocked by / at
          </span>
          <p> Shocked by / at</p>
          <span onClick={() => speak({ text: "Disappointed by / with / in" })}>
            Disappointed by / with / in
          </span>
          <p> Disappointed by / with / of</p>
          <span onClick={() => speak({ text: "Impressed by / with / at" })}>
            Impressed by / with / at
          </span>
          <p>Impressed by / with / of </p>
          <span onClick={() => speak({ text: "aware of" })}>aware of</span>
          <p> Mindfull</p>
          <span onClick={() => speak({ text: "Famous for" })}>Famous for</span>
          <p> Famous for</p>
          <span onClick={() => speak({ text: "Sure about / of" })}>
            Sure about / of
          </span>
          <p> Sure of</p>
          <span onClick={() => speak({ text: "Tired of" })}>Tired of</span>
          <p> Tired of</p>
          <span onClick={() => speak({ text: "sick of" })}>sick of</span>
          <p> sick of</p>
          <span onClick={() => speak({ text: "fed up with" })}>
            fed up with
          </span>
          <p> tired of</p>
          <span onClick={() => speak({ text: "happy about" })}>
            happy about
          </span>
          <p> happy about</p>
          <span onClick={() => speak({ text: "Excited about  by  at" })}>
            Excited about / by / at
          </span>
          <p>excited about/from </p>
          <span onClick={() => speak({ text: "bored with" })}>bored with</span>
          <p> bored with</p>
        </div>
      </div>
    </div>
  );
};
export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          We can use "the gerund after a verb + preposition". For this reason,
          we write the gerund after the following sentences:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "talk about" })}>talk about</span>
          <p> talk about</p>
          <span onClick={() => speak({ text: "Succeeded in" })}>
            Succeeded in
          </span>
          <p> Succeeded in</p>
          <span onClick={() => speak({ text: "insist on" })}>insist on</span>
          <p>insist on</p>
          <span onClick={() => speak({ text: "Think of" })}>Think of</span>
          <p> Think of</p>
          <span onClick={() => speak({ text: " Dream of" })}>Dream of</span>
          <p>Dream of </p>
          <span onClick={() => speak({ text: "Believe in " })}>Believe in</span>
          <p> Believe in</p>
          <span onClick={() => speak({ text: "worry about " })}>
            worry about
          </span>
          <p> worry about</p>
          <span onClick={() => speak({ text: " Approve of" })}>Approve of</span>
          <p> Pass</p>
          <span onClick={() => speak({ text: "decide against " })}>
            decide against
          </span>
          <p> decide not to</p>
          <span onClick={() => speak({ text: " feel like" })}>feel like</span>
          <p> feel like </p>
          <span onClick={() => speak({ text: "Look forward to " })}>
            Look forward to
          </span>
          <p> Look forward to </p>
          <span onClick={() => speak({ text: "Apologize for " })}>
            Apologize for
          </span>
          <p> Apologize for </p>
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
        <p>Let's look at the following examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "I was terrified of dropping my glass " })
            }
          >
            {" "}
            I was terrified of dropping my glass
          </span>
          <p> I was afraid to drop my glass</p>
          <span
            onClick={() =>
              speak({ text: " I'm fascinated by being your friend" })
            }
          >
            I'm fascinated by being your friend{" "}
          </span>
          <p> I am fascinated to be your friend</p>
          <span
            onClick={() =>
              speak({ text: " We're satisfied by finding precious stones" })
            }
          >
            We're satisfied by finding precious stones{" "}
          </span>
          <p>We're satisfied by finding precious stones </p>
          <span
            onClick={() =>
              speak({ text: "We're satisfied by finding precious stones " })
            }
          >
            {" "}
            We're satisfied by finding precious stones
          </span>
          <p> We're satisfied by finding precious stones</p>
          <span
            onClick={() =>
              speak({
                text: "Melanie is famous for preparing delicious milk shakes ",
              })
            }
          >
            Melanie is famous for preparing delicious milk shakes{" "}
          </span>
          <p> Melanie is famous for preparing delicious milk shakes</p>
          <span
            onClick={() =>
              speak({ text: "We're tired of being your servants " })
            }
          >
            We're tired of being your servants{" "}
          </span>
          <p> We're tired of being your servants</p>
          <span
            onClick={() => speak({ text: " She's sick of going out with you" })}
          >
            {" "}
            She's sick of going out with you
          </span>
          <p> She's sick of going out with you</p>
          <span
            onClick={() => speak({ text: " I'm fed up with arguing with you" })}
          >
            {" "}
            I'm fed up with arguing with you
          </span>
          <p>I'm fed up with arguing with you </p>
          <span
            onClick={() =>
              speak({ text: "They're happy about traveling to England " })
            }
          >
            They're happy about traveling to England{" "}
          </span>
          <p>They're happy about traveling to England </p>
          <span
            onClick={() =>
              speak({ text: "He's excited about flying to Las Vegas " })
            }
          >
            {" "}
            He's excited about flying to Las Vegas
          </span>
          <p> He's excited about flying to Las Vegas</p>
          <span
            onClick={() => speak({ text: " I'm bored with playing with you" })}
          >
            I'm bored with playing with you{" "}
          </span>
          <p>I'm bored with playing with you </p>
          <span
            onClick={() =>
              speak({ text: "We're fond of running in the park " })
            }
          >
            {" "}
            We're fond of running in the park
          </span>
          <p> We're fond of running in the park</p>
          <span
            onClick={() => speak({ text: " She's proud of feeling strong" })}
          >
            She's proud of feeling strong{" "}
          </span>
          <p>She's proud of feeling strong </p>
          <span
            onClick={() =>
              speak({ text: " I'm keen on listening to new singers" })
            }
          >
            I'm keen on listening to new singers{" "}
          </span>
          <p> I'm keen on listening to new singers</p>
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
          Additionally, we can use the verbs{" "}
          <span onClick={() => speak({ text: "affraid" })}>affraid</span> ,{" "}
          <span onClick={() => speak({ text: "interested" })}>interested</span>{" "}
          , and <span onClick={() => speak({ text: "Sorry" })}>Sorry</span> with
          the gerund or with the infinitive. However, their meanings will vary
          depending on whether they are used with the gerund or the infinitive.
          Let's see:
        </p>
        <b>
          <span onClick={() => speak({ text: "Afraid" })}>Afraid</span> +
          infinitive : when we use “{" "}
          <span onClick={() => speak({ text: "Afraid" })}>Afraid</span> +
          infinitive”, we want to express that we do not want to do something
          because it is dangerous and the result of doing that action may be
          unfavorable for us. We use this structure when we can choose to do or
          not do what we are afraid of. Let's look at these examples:
        </b>
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
          <span onClick={() => speak({ text: "interested in" })}>
            interested in
          </span>{" "}
          + gerund : we use this structure when we would like to do something
          because we are interested in doing it :
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "I'm interested in joining this club" })
            }
          >
            I'm interested in joining this club
          </span>
          <p> I am interested in joining this club</p>
          <span
            onClick={() =>
              speak({ text: "We're interested in buying this house" })
            }
          >
            We're interested in buying this house
          </span>
          <p> We are interested in buying this house</p>
        </div>
        <p>
          We use “ sorry + infinitive” when we regret something that happens:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "I'm sorry to hear that you were fired" })
            }
          >
            I'm sorry to hear that you were fired
          </span>
          <p> I am sorry to hear that you were fired</p>
          <span
            onClick={() =>
              speak({
                text: "I'm sorry to leave this job, but I can't do it anymore",
              })
            }
          >
            I'm sorry to leave this job, but I can't do it anymore
          </span>
          <p> I'm sorry to leave this job, but I can't do it anymore</p>
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
        <p>
          In this lesson's miniseries, we talk about travel. For this reason, we
          will learn essential travel vocabulary right now:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "isolate seat" })}>
            isolate seat
          </span>
          <p> Aisle seat (the seat facing the aisle on an airplane)</p>
          <span onClick={() => speak({ text: "boarding card" })}>
            boarding card
          </span>
          <p> boarding card</p>
          <span onClick={() => speak({ text: "check-in desk" })}>
            check-in desk
          </span>
          <p>
            {" "}
            Check-in counter (where you show your ticket at the airport to be
            told where to sit)
          </p>
          <span onClick={() => speak({ text: "Flight" })}>Flight</span>
          <p> Flight</p>
          <span onClick={() => speak({ text: "flight number" })}>
            flight number
          </span>
          <p>flight number </p>
          <span onClick={() => speak({ text: "Gate" })}>Gate</span>
          <p>Door </p>
          <span onClick={() => speak({ text: "hand luggage" })}>
            hand luggage
          </span>
          <p>hand luggage </p>
          <span onClick={() => speak({ text: "Luggage" })}>Luggage</span>
          <p>Luggage </p>
          <span onClick={() => speak({ text: "middle-seat" })}>
            middle-seat
          </span>
          <p>middle-seat </p>
          <span onClick={() => speak({ text: "passport" })}>passport</span>
          <p>passport </p>
          <span onClick={() => speak({ text: "passenger" })}>passenger</span>
          <p>passenger </p>
          <span onClick={() => speak({ text: "Sharp items" })}>
            Sharp items
          </span>
          <p>Sharp items </p>
          <span onClick={() => speak({ text: "ticket" })}>ticket</span>
          <p>ticket </p>
          <span onClick={() => speak({ text: "window-seat" })}>
            window-seat
          </span>
          <p>Seat by the window (on the plane) </p>
        </div>
        <p>
          A phrase that we use a lot in English is no kidding ; its translation
          into Spanish is "seriously?". Let's look at these couple of examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I went out with Ben - No kidding? He's so cute! " })}>
          I went out with Ben - No kidding? He's so cute!
          </span>
          <p> I went out with Ben - Realy? He's so cute!</p>
          <span onClick={() => speak({ text: "We have to go now? - Not kidding? I thought you were going to stay " })}>
          We have to go now? - Not kidding? I thought you were going to stay
          </span>
          <p> We have to go now - Really? I thought they were going to stay</p>
        </div>
      </div>
    </div>
  );
};
