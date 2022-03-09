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
          Also, we use{" "}
          <span onClick={() => speak({ text: "to do" })}>to do</span>
          with the following phrases:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "do karate " })}>do karate</span>
          <p>do karate </p>
          <span onClick={() => speak({ text: "do yoga " })}>do yoga</span>
          <p> do yoga</p>
          <span onClick={() => speak({ text: "do sports " })}>do sports</span>
          <p>do sports </p>
          <span onClick={() => speak({ text: " do judo" })}>do judo</span>
          <p> do judo</p>
          <span onClick={() => speak({ text: "do aerobics " })}>
            do aerobics
          </span>
          <p> do aerobics </p>
          <span onClick={() => speak({ text: "learn how to do something " })}>
            learn how to do something
          </span>
          <p> learn how to do something</p>
        </div>
        <p>Let's look at these examples:</p>
        <div className=" greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "I have to do aerobics every friday" })
            }
          >
            {" "}
            I have to do aerobics every friday
          </span>
          <p> I have to do aerobics every day </p>
          <span onClick={() => speak({ text: "We need to do sports today" })}>
            {" "}
            We need to do sports today
          </span>
          <p>We need to do sports today </p>
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
        <p>Let's see the above sentences in action:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " I have to do the sweeping before I can leave the house",
              })
            }
          >
            I have to do the sweeping before I can leave the house{" "}
          </span>
          <p>I have to sweep before leaving the house</p>

          <span
            onClick={() =>
              speak({ text: "Yesterday, I had to do the washing-up " })
            }
          >
            {" "}
            Yesterday, I had to do the washing-up
          </span>
          <p>Yesterday, I had to wash the dishes</p>

          <span
            onClick={() => speak({ text: " We need to do the cooking today" })}
          >
            We need to do the cooking today
          </span>
          <p>we need to cook today</p>

          <span
            onClick={() =>
              speak({ text: " I'm so tired that I can't do the cleaning" })
            }
          >
            {" "}
            I'm so tired that I can't do the cleaning
          </span>
          <p>I'm so tired I can't clean</p>

          <span
            onClick={() => speak({ text: " Would you do the ironing for me?" })}
          >
            Would you do the ironing for me?{" "}
          </span>
          <p>Would you iron for me?</p>

          <span
            onClick={() =>
              speak({ text: "Let´s do the painting this Sunday " })
            }
          >
            Let´s do the painting this Sunday{" "}
          </span>
          <p>let's paint this sunday</p>

          <span
            onClick={() => speak({ text: " I relax when I do the gardening" })}
          >
            I relax when I do the gardening{" "}
          </span>
          <p>I relax when I garden</p>

          <span onClick={() => speak({ text: " " })}> </span>
          <p></p>

          <span onClick={() => speak({ text: " " })}> </span>
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
          We use the verb to make when we want to talk about the creation of
          something, including food and drinks. Let's look at the following
          examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: "Let's make coffee this morning",
              })
            }
          >
            Let's make coffee this morning
          </span>
          <p>Let's make coffee this morning</p>

          <span onClick={() => speak({ text: "My company makes cars" })}>
            {" "}
            My company makes cars
          </span>
          <p>My company makes cars</p>

          <span
            onClick={() => speak({ text: " We need to make a new project" })}
          >
            We need to make a new project
          </span>
          <p>We need to make a new project</p>

          <span
            onClick={() => speak({ text: " She makes cakes for a living" })}
          >
            {" "}
            She makes cakes for a living
          </span>
          <p>She makes cakes for a living</p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p></p>

          <span onClick={() => speak({ text: " " })}> </span>
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
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "To make an effort " })}>
            {" "}
            To make an effort
          </span>
          <p>Make an effort</p>
          <span onClick={() => speak({ text: "To make an excuse" })}>
            To make an excuse
          </span>
          <p> make an excuse</p>
          <span onClick={() => speak({ text: "To make a joke " })}>
            {" "}
            To make a joke
          </span>
          <p> To joke</p>
          <span onClick={() => speak({ text: "to make love " })}>
            {" "}
            to make love
          </span>
          <p>to make love</p>
          <span onClick={() => speak({ text: " To make an impression " })}>
            {" "}
            To make an impression{" "}
          </span>
          <p>To make an impression </p>
          <span onClick={() => speak({ text: " To make friends" })}>
            {" "}
            To make friends
          </span>
          <p> make friends</p>
          <span onClick={() => speak({ text: " To make a profit" })}>
            {" "}
            To make a profit
          </span>
          <p>Get benifits</p>
          <span onClick={() => speak({ text: " To make a loss" })}>
            {" "}
            To make a loss
          </span>
          <p>have a loss</p>
          <span onClick={() => speak({ text: "To make a mistake " })}>
            {" "}
            To make a mistake
          </span>
          <p>Make a mistake</p>

          <span onClick={() => speak({ text: "  To make money " })}>
            {" "}
            To make money{" "}
          </span>
          <p>make/earn money </p>
        </div>
      </div>
    </div>
  );
};
