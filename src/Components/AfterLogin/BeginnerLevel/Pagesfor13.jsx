import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();

  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will see how to tell and ask the time correctly.
        </p>
        <p>If we want to ask “what time is it?” We can say it in two ways:</p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "What time is it?" })}>
            What time is it?
          </span>
          <p>What time is it?</p>
          <span onClick={() => speak({ text: "What's the time?" })}>
            What's the time?
          </span>
          <p>What is the time?</p>
        </div>
        <p>
          If we are observant, we can notice that in these questions the word
          <span onClick={() => speak({ text: "time" })}>time</span> means
          "hour". Generally, however, in English, the word “hora” is said to be{" "}
          <span onClick={() => speak({ text: "hour" })}>hour</span> .
        </p>
        <p>
          To answer these questions, we must always use the pronoun "{" "}
          <span onClick={() => speak({ text: "it" })}>it</span> +{" "}
          <span onClick={() => speak({ text: "is" })}>is</span> + the hour". The
          literal translation into Spanish of "{" "}
          <span onClick={() => speak({ text: "it" })}>it</span> +{" "}
          <span onClick={() => speak({ text: "is" })}>is</span> + the hour" is:
          "<b> they are the</b> ... ". Let's see these examples:
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span
            onClick={() =>
              speak({ text: "What time is it? - It is eight o'clock" })
            }
          >
            What time is it? - It is eight o'clock
          </span>
          <p>What time is it?</p>
          <span
            onClick={() =>
              speak({ text: "What's the time? - It is seven o'clock?" })
            }
          >
            What's the time? - It is seven o'clock
          </span>
          <p>What is the time? - It's seven o'clock</p>
        </div>
        <p>We can also use the contraction it's + the hour:</p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "It's eight o'clock" })}>
            It's eight o'clock
          </span>
          <p>It's eight o'clock</p>
          <span onClick={() => speak({ text: "It's seven o'clock?" })}>
            It's seven o'clock
          </span>
          <p>It's seven o'clock</p>
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
          When we want to express that some minutes have passed after a certain
          hour, we say the minutes that have elapsed +{" "}
          <span onClick={() => speak({ text: "past" })}>past</span> + the hour
          after which those minutes have elapsed.
        </p>
        <p>Let's look at these examples:</p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "It's twenty past five" })}>
            It's twenty past five
          </span>
          <p>It's twenty past five</p>
          <span onClick={() => speak({ text: "It's ten past three" })}>
            It's ten past three
          </span>
          <p>It's ten past three</p>
          <span onClick={() => speak({ text: "It's forty past eleven" })}>
            It's forty past eleven
          </span>
          <p>It's twenty to twelve</p>
        </div>
        <p>
          If we want to express that a certain hour is a few minutes away, we
          say the minutes until the hour that is about to start +{" "}
          <span onClick={() => speak({ text: "to" })}>to</span> + the hour that
          is about to start. Let's look at some examples:
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "It's ten to twelve" })}>
            It's ten to twelve
          </span>
          <p>It's ten to twelve</p>
          <span onClick={() => speak({ text: "It's thirteen  to eleven" })}>
            It's thirteen to eleven
          </span>
          <p>It's thirteen to eleven</p>
          <span onClick={() => speak({ text: "It's forty  to six" })}>
            It's forty to six
          </span>
          <p>It's forty to six</p>
        </div>
        <p>
          If we give the time after 12 noon, we say "the hour + PM "; PM stands
          for Post Meridiem , which translates to after noon . If we give the
          time from midnight to 11:59 in the morning, then we say "the hour + AM
          "; AM means Ante Meridiem whatever translates as before noon.
        </p>
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
          Utilizamos <span onClick={() => speak({ text: "half" })}>half</span>{" "}
          para hablar de “media hora” y{" "}
          <span onClick={() => speak({ text: "quarter" })}>quarter</span> para
          hablar de “un cuarto de hora”. Veamos estos ejemplos:
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "It's quarter past two" })}>
            It's quarter past two
          </span>
          <p>It's a quarter past two</p>
          <span onClick={() => speak({ text: "It's half past two" })}>
            It's half past two
          </span>
          <p>It's half past two</p>
          <span onClick={() => speak({ text: "It's quarter to four" })}>
            It's quarter to four
          </span>
          <p>It's quarter to four</p>
          <span onClick={() => speak({ text: "It's half past four" })}>
            It's half past four
          </span>
          <p>It's half past four</p>
          <span onClick={() => speak({ text: "It's quarter to eight" })}>
            It's quarter to eight
          </span>
          <p>It's quarter to eight</p>
          <span onClick={() => speak({ text: "It's half past eight" })}>
            It's half past eight
          </span>
          <p>It's half past eight</p>
        </div>
      </div>
    </div>
  );
};
