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

export const Page6 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>In this lesson we will learn to use the third conditional.</p>
        <p>
          We use the third conditional to talk about something that could happen
          in the future, that is, when we want to indicate that IT IS POSSIBLE
          THAT WE WILL GET a result in the future as a consequence of something.
          The structure of the third conditional is as follows:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <b>
            <span onClick={() => speak({ text: "if" })}>if</span>+ subject +
            infinitive verb without{" "}
            <span onClick={() => speak({ text: "to" })}>to</span>
            (+ complement), + subject +{" "}
            <span onClick={() => speak({ text: "will" })}>will</span>
            (or its contraction ´ll) + infinitive verb without{" "}
            <span onClick={() => speak({ text: "to" })}>to</span>
            (+ complement)
          </b>
          <br />
        </div>
        <p>Here are some examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " If I drive fast, I will arrive early " })
            }
          >
            {" "}
            If I drive fast, I will arrive early
          </span>
          <p> If I drive fast, I'll be early</p>
          <span
            onClick={() =>
              speak({ text: " If you read more, you will be smart " })
            }
          >
            {" "}
            If you read more, you will be smart
          </span>
          <p> If you read more, you will be smart</p>
          <span
            onClick={() =>
              speak({ text: "  If she sings loud, she will hurt her throat" })
            }
          >
            If she sings loud, she will hurt her throat{" "}
          </span>
          <p> If she sings loud, her throat will be damaged.</p>
          <span
            onClick={() => speak({ text: " If we run, we'll be thirsty " })}
          >
            If we run, we'll be thirsty{" "}
          </span>
          <p> If we run, we'll be thirsty</p>
          <span
            onClick={() =>
              speak({ text: "  If they fight, they'll get in trouble" })
            }
          >
            {" "}
            If they fight, they'll get in trouble
          </span>
          <p>If they fight, they'll get in trouble </p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};

export const Page7 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          To use the third conditional in negation, we just have to add don't
          after the subject ( doesn't if we are talking about he , she , or it )
          in the third part of the sentence (before the comma), and not after
          will (we can also use its won't contraction ).
        </p>
        <p>Let's look at these examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "  If we don't hurry, we will not arrive early" })
            }
          >
            If we don't hurry, we will not arrive early{" "}
          </span>
          <p> If we don't hurry, we won't be early </p>
          <span
            onClick={() =>
              speak({ text: "  If you don't read, you won't be smart" })
            }
          >
            {" "}
            If you don't read, you won't be smart
          </span>
          <p>If you don't read, you won't be smart </p>
          <span
            onClick={() =>
              speak({
                text: " If she doesn't sing, she will not hurt her throat ",
              })
            }
          >
            If she doesn't sing, she will not hurt her throat{" "}
          </span>
          <p> If she doesn't sing, it won't hurt her throat</p>
          <span
            onClick={() =>
              speak({ text: "  If we don't run, we won't be thirsty" })
            }
          >
            {" "}
            If we don't run, we won't be thirsty
          </span>
          <p> If we don't run, we won't be thirsty</p>
          <span
            onClick={() =>
              speak({
                text: " If they don't fight, they will not get in trouble ",
              })
            }
          >
            If they don't fight, they will not get in trouble{" "}
          </span>
          <p>If they don't fight, they will not get in trouble </p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
        </div>
        <p>
          We can change the order of the sentence without changing its meaning.
          As we saw in the previous lesson, if we change the order, it is no
          longer necessary to write a comma in the middle of the sentence. As
          examples, let's look at the previous sentences, but this time
          inverted:
        </p>
      </div>
    </div>
  );
};

export const Page8 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          We can ask questions with the third conditional in various ways. The
          most common is putting will at the beginning of the sentence. Let's
          look at some examples:
        </p>
        <p>Let's look at these examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " Will we arrive early if we don't hurry? " })
            }
          >
            {" "}
            Will we arrive early if we don't hurry?
          </span>
          <p> Will we arrive early if we don't hurry?</p>
          <span
            onClick={() =>
              speak({ text: " Will I be smart if I don't read? " })
            }
          >
            {" "}
            Will I be smart if I don't read?
          </span>
          <p> Am I smart if I don't read?</p>
          <span
            onClick={() =>
              speak({ text: " Will she hurt her throat if she sings? " })
            }
          >
            {" "}
            Will she hurt her throat if she sings?
          </span>
          <p>Will your throat hurt if you sing? </p>
          <span
            onClick={() =>
              speak({ text: "  Will we be thirsty if we don't run? " })
            }
          >
            Will we be thirsty if we don't run?
          </span>
          <p> Will we be thirsty if we don't run?</p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
        </div>
        <p>
          However, we can ask questions with the third conditional in other ways
          (usually using question words followed by will ).
        </p>
      </div>
    </div>
  );
};

export const Page9 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          We use the future continuous to express that something will be
          happening at some point in the future.
        </p>
        <p>The structure we use for the future continuous is as follows:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <b>
            Subject + <span onClick={() => speak({ text: "will" })}>will</span>{" "}
            ( ´ll ) + <span onClick={() => speak({ text: "be" })}>be</span>+
            verb in gerund (“ing”)
          </b>
          <br />
        </div>
        <p>Let's look at some examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " This time next month, I´ll be swimming in Cancun",
              })
            }
          >
            This time next month, I´ll be swimming in Cancun
          </span>
          <p> This time next month, I'll be swimming in Cancun</p>
          <span
            onClick={() =>
              speak({
                text: "They´ll be getting married at this same time tomorrow",
              })
            }
          >
            They´ll be getting married at this same time tomorrow
          </span>
          <p>They will be getting married at this same time tomorrow</p>
          <span
            onClick={() =>
              speak({ text: "We´ll be rehearsing all day tomorrow " })
            }
          >
            We´ll be rehearsing all day tomorrow
          </span>
          <p> We´ll be rehearsing all day tomorrow</p>
          <span
            onClick={() =>
              speak({
                text: " Next year , I´ll be flying all around the world",
              })
            }
          >
            Next year , I´ll be flying all around the world{" "}
          </span>
          <p> Next year, I'll be flying around the world</p>
          <span
            onClick={() =>
              speak({
                text: "This time next month , I´ll be fighting against your Turkey troops",
              })
            }
          >
            This time next month , I´ll be fighting against your Turkey troops
          </span>
          <p> This time next month, I'll be fighting your Turkish troops.</p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
        </div>
        <p>
          We can also use the future continuous to talk about the present, when
          we assume that something is happening at the moment we say it. Let's
          look at some examples:{" "}
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: "Don´t call Sarah now, she´ll be having breakfast ",
              })
            }
          >
            Don´t call Sarah now, she´ll be having breakfast
          </span>
          <p>Don´t call Sarah now, she´ll be having breakfast </p>
          <span
            onClick={() =>
              speak({
                text: "This house is really quiet, I'm sure our kids will be doing something wrong now ",
              })
            }
          >
            This house is really quiet, I'm sure our kids will be doing
            something wrong now
          </span>
          <p>
            {" "}
            This house is very quiet, I'm sure our children are doing something
            wrong now
          </p>
          <span
            onClick={() =>
              speak({
                text: "Don't knock on his door, he'll be discussing with his dad",
              })
            }
          >
            Don't knock on his door, he'll be discussing with his dad
          </span>
          <p>Don't knock on his door, he'll be arguing with his dad </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};

export const Page10 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          To use the future continuous in its negative form, we just put{" "}
          <span onClick={() => speak({ text: "not" })}>not</span>
          after <span onClick={() => speak({ text: "will" })}>will</span>, or
          use its contraction:{" "}
          <span onClick={() => speak({ text: "won't" })}>won't</span> :
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p> No shrinkage: </p>
            <span
              onClick={() =>
                speak({
                  text: "She will not be sleeping tomorrow when you come home ",
                })
              }
            >
              {" "}
              She will not be sleeping tomorrow when you come home
            </span>
            <p>She won't be sleeping tomorrow when you come home </p>
            <span
              onClick={() =>
                speak({
                  text: "We will not be dancing tomorrow during the play            ",
                })
              }
            >
              We will not be dancing tomorrow during the play
            </span>
            <p>We won't be dancing tomorrow during the play </p>
          </div>
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p> With contraction:</p>
            <span
              onClick={() =>
                speak({
                  text: "She won't be sleeping tomorrow when you come home ",
                })
              }
            >
              {" "}
              She won't be sleeping tomorrow when you come home
            </span>
            <p>She won't be sleeping tomorrow when you come home</p>
            <span
              onClick={() =>
                speak({ text: " We won´t be dancing tomorrow during the play" })
              }
            >
              {" "}
              We won´t be dancing tomorrow during the play
            </span>
            <p>We won't be dancing tomorrow during the play</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Page11 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          We can convert the future continuous to a question just by putting
          will before the subject. Let’s see these examples with their possible
          answers:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " Will they be getting married at this same time tomorrow? – Yes, they will",
              })
            }
          >
            {" "}
            Will they be getting married at this same time tomorrow? – Yes, they
            will
          </span>
          <p>
            {" "}
            Will they be getting married at this same time tomorrow? – Yes, they
            will be
          </p>

          <span
            onClick={() =>
              speak({
                text: " Will we be rehearsing all day tomorrow? – No, we won´t",
              })
            }
          >
            {" "}
            Will we be rehearsing all day tomorrow? – No, we won´t
          </span>
          <p>Will we be rehearsing all day tomorrow? – No, we will not be</p>

          <span
            onClick={() =>
              speak({
                text: " Will she be sleeping tomorrow when you come home? – Yes, she will",
              })
            }
          >
            {" "}
            Will she be sleeping tomorrow when you come home? – Yes, she will
          </span>
          <p>
            {" "}
            Will she be sleeping tomorrow when you come home? – Yes, she will be
          </p>

          <span
            onClick={() =>
              speak({
                text: "Will you be swimming in Cancun at this time next month? – No, I will not be ",
              })
            }
          >
            Will you be swimming in Cancun at this time next month? – No, I will
            not be{" "}
          </span>
          <p>
            Will you be swimming in Cancun at this time next month? – No, I will
            not be{" "}
          </p>

          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};
