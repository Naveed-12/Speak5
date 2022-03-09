import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will see the adverbs of frequency, probability and
          conjunction:
        </p>
        <p>
          Let's start with adverbs of frequency : these adverbs tell us how
          often something happens.
        </p>
        <p>
          If we order the adverbs of frequency from most frequent to least
          frequent, then we have:
        </p>
        <p>There are 7 types of adverbs:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Always " })}>Always</span>
          <p>Always </p>
          <span onClick={() => speak({ text: "Frequently " })}>Frequently</span>
          <p> Frequently</p>
          <span onClick={() => speak({ text: " More often than not" })}>
            {" "}
            More often than not
          </span>
          <p> often</p>
          <span onClick={() => speak({ text: "Usually " })}>Usually</span>
          <p> Usually</p>
          <span onClick={() => speak({ text: " normally" })}> normally</span>
          <p> normally</p>
          <span onClick={() => speak({ text: " Generally" })}>Generally</span>
          <p> Generally</p>
          <span onClick={() => speak({ text: "Often " })}> Often</span>
          <p> Often</p>
          <span onClick={() => speak({ text: " Frequently" })}>Frequently</span>
          <p> Frequently</p>
          <span onClick={() => speak({ text: " Sometimes" })}> Sometimes</span>
          <p> Sometimes</p>
          <span onClick={() => speak({ text: " Once in a while" })}>
            {" "}
            Once in a while
          </span>
          <p> Once in a while</p>
        </div>
        <p>
          In this lesson, we will look at adverbs of manner, place, and time.
        </p>
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
          To use adverbs of frequency correctly, we must place them just before
          the main verb of the sentence. Here are some fun examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "She always wakes up late " })}>
            She always wakes up late
          </span>
          <p> She always wakes up late</p>
          <span
            onClick={() =>
              speak({ text: "They usually go to the theater on Saturdays " })
            }
          >
            They usually go to the theater on Saturdays
          </span>
          <p> </p>
          <span
            onClick={() =>
              speak({ text: " He normally does his homework every day" })
            }
          >
            {" "}
            He normally does his homework every day
          </span>
          <p> He normally does his homework every day</p>
          <span onClick={() => speak({ text: " You generally sleep a lot" })}>
            {" "}
            You generally sleep a lot
          </span>
          <p> You generally sleep a lot</p>
          <span
            onClick={() =>
              speak({ text: " He often goes out with his girlfriend" })
            }
          >
            {" "}
            He often goes out with his girlfriend
          </span>
          <p> He often goes out with his girlfriend</p>
          <span
            onClick={() =>
              speak({ text: "We frequently play football on Saturdays " })
            }
          >
            {" "}
            We frequently play football on Saturdays
          </span>
          <p> We frequently play football on Saturdays</p>
          <span onClick={() => speak({ text: " I rarely drink milk" })}>
            I rarely drink milk{" "}
          </span>
          <p> I rarely drink milk</p>
          <span onClick={() => speak({ text: "I seldom feel alone " })}>
            {" "}
            I seldom feel alone
          </span>
          <p>I seldom feel alone </p>
          <span onClick={() => speak({ text: "I hardly ever watch TV " })}>
            {" "}
            I hardly ever watch TV
          </span>
          <p> I hardly ever watch TV</p>
          <span onClick={() => speak({ text: "You never miss school " })}>
            You never miss school
          </span>
          <p> You never miss school</p>
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
          Some adverbs of frequency can be placed at the beginning or end of a
          sentence, especially the following: every so often (from time to
          time), every now and again (from time to time), every now and then
          (from time to time ), more often than not (from time to time), most of
          the time (most of the time), once in a while (from time to time) ,
          occasionally (occasionally), very often (very often) and sometimes
          (sometimes).
        </p>
        <p>
          As we could see, almost all the previous phrases mean "from time to
          time".
        </p>
        <p>Let's look at these examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: " Every so often I go to the gym" })}
          >
            Every so often I go to the gym{" "}
          </span>
          <p> Every so often I go to the gym</p>
          <span
            onClick={() => speak({ text: " I drink tea every now and again" })}
          >
            I drink tea every now and again{" "}
          </span>
          <p> I drink tea every now and again</p>
          <span
            onClick={() =>
              speak({ text: " Every now and then I feel insecure" })
            }
          >
            {" "}
            Every now and then I feel insecure
          </span>
          <p> Every now and then I feel insecure</p>
          <span
            onClick={() =>
              speak({ text: "I eat ice cream more often than not " })
            }
          >
            I eat ice cream more often than not{" "}
          </span>
          <p> I eat ice cream more often than not</p>
          <span
            onClick={() =>
              speak({ text: "Most of the time I think about my girlfriend " })
            }
          >
            {" "}
            Most of the time I think about my girlfriend
          </span>
          <p> Most of the time I think about my girlfriend</p>
          <span
            onClick={() => speak({ text: "I lend my books once in a while" })}
          >
            I lend my books once in a while{" "}
          </span>
          <p>I lend my books once in a while </p>
          <span
            onClick={() =>
              speak({ text: " Occasionally I teach Literature at college" })
            }
          >
            {" "}
            Occasionally I teach Literature at college
          </span>
          <p> Occasionally I teach Literature at college</p>
          <span
            onClick={() =>
              speak({ text: " Sometimes I do my homework on Fridays" })
            }
          >
            Sometimes I do my homework on Fridays{" "}
          </span>
          <p> Sometimes I do my homework on Fridays</p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
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
          When we use the verb to be in a sentence that has adverbs of
          frequency, we put the adverb of frequency AFTER the verb to be . Let's
          look at some examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I am usually happy at work " })}>
            {" "}
            I am usually happy at work
          </span>
          <p>I am usually happy at work </p>
          <span onClick={() => speak({ text: "She is always angry " })}>
            She is always angry
          </span>
          <p>We live happily in the country </p>
          <span onClick={() => speak({ text: "They're writing easily " })}>
            {" "}
            They're writing easily
          </span>
          <p>They're writing easily </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
        </div>
        <b>
          When an adjective in English ends with the letters “ble”, we turn it
          into an adverb by simply omitting the final “e” and adding the letter
          “y”:
        </b>
        <br />

        <div className="greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " Terrible - Terribly" })}>
            Terrible - Terribly{" "}
          </span>
          <p> Terrible - Terribly</p>
          <span onClick={() => speak({ text: "Likely - Likely " })}>
            Likely - Likely{" "}
          </span>
          <p> Likely - Likely</p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
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
        <p>
          When we use the adverbs of frequency in negations or in questions, we
          follow the same rules that we already mentioned. Let's look at some
          examples:
        </p>

        <div className="row">
          <div
            className="greybox col-md-2 mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span
              onClick={() => speak({ text: "don't usually go out at night " })}
            >
              {" "}
              don't usually go out at night
            </span>
            <p>I usually don't go out at night </p>
            <span
              onClick={() =>
                speak({ text: "Do you usually go out at night? " })
              }
            >
              Do you usually go out at night?{" "}
            </span>
            <p>Do you usually go out at night? </p>
            <span
              onClick={() =>
                speak({ text: "She doesn't usually do her homework " })
              }
            >
              {" "}
              She doesn't usually do her homework
            </span>
            <p> She doesn't usually do her homework</p>
            <span
              onClick={() =>
                speak({ text: " Does she usually do her homework?" })
              }
            >
              {" "}
              Does she usually do her homework?
            </span>
            <p>Does she usually do her homework? </p>

            <span
              onClick={() => speak({ text: "They don't usually feel tired " })}
            >
              {" "}
              They don't usually feel tired
            </span>
            <p> They don't usually feel tired</p>
            <span
              onClick={() => speak({ text: " Do they usually feel tired?" })}
            >
              {" "}
              Do they usually feel tired?
            </span>
            <p>Do they usually feel tired? </p>
          </div>
          <div
            className="greybox col-md-2 mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span
              onClick={() =>
                speak({ text: "Mark says he won't be late, but he always is " })
              }
            >
              {" "}
              Mark says he won't be late, but he always is
            </span>
            <p>Mark says he won't be late, but he always is </p>
            <span
              onClick={() =>
                speak({ text: "She's never drunk coffee and she never will " })
              }
            >
              She's never drunk coffee and she never will{" "}
            </span>
            <p>She's never drunk coffee and she never will </p>
          </div>
        </div>
        <p>
          We can use the verbs to be , will , do , etc., after the adverb of
          frequency, so as not to repeat what we have already said. In this
          sense, most of the verbs that we use to not repeat what we have
          already said are translated as I do (and its variations). Let's look
          at these examples to understand clearly:
        </p>
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
          If we want to ask how often or how often we do something, we simply
          have to use the following structure. Let's see:
        </p>

        <div className="greybox mx-auto" style={{ marginLeft: "30%" }}>
          <b>
            <span onClick={() => speak({ text: " How often" })}>
              â€‹â€‹â€‹â€‹How often + do / does{" "}
            </span>
            + subject + infinitive verb without{" "}
            <span onClick={() => speak({ text: "to" })}>to </span>+?
          </b>
        </div>
        <p>To understand clearly, here are some examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " How often do you exercise? – I generally exercise every morning",
              })
            }
          >
            How often do you exercise? – I generally exercise every morning{" "}
          </span>
          <p>
            {" "}
            How often do you exercise? – I generally exercise every morning
          </p>
          <span
            onClick={() =>
              speak({
                text: " How often do you go to school? – We go to school every day",
              })
            }
          >
            {" "}
            How often do you go to school? – We go to school every day
          </span>
          <p> How often do you go to school? – We go to school every day</p>
          <span
            onClick={() =>
              speak({
                text: "How often does she see her boyfriend? – She usually sees her boyfriend every Monday ",
              })
            }
          >
            {" "}
            How often does she see her boyfriend? – She usually sees her
            boyfriend every Monday
          </span>
          <p>
            How often does she see her boyfriend? – She usually sees her
            boyfriend every Monday{" "}
          </p>
          <span
            onClick={() =>
              speak({
                text: " How often does he brush his teeth? – He always brushes his teeth three times a day",
              })
            }
          >
            {" "}
            How often does he brush his teeth? – He always brushes his teeth
            three times a day
          </span>
          <p>
            {" "}
            How often does he brush his teeth? – He always brushes his teeth
            three times a day
          </p>

          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
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
          We use adverbs of probability to indicate how confident we are that
          something will happen. The most common adverbs of probability are the
          following:
        </p>

        <div className="greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Certainly " })}>
            {" "}
            Certainly
          </span>
          <p>Certainly </p>
          <span onClick={() => speak({ text: "definitely  " })}>
          definitely
          </span>
          <p>definitely </p>
          <span onClick={() => speak({ text: "Maybe " })}>
            {" "}
            Maybe
             </span>
          <p>Maybe </p>
          <span onClick={() => speak({ text: " Possibly" })}> Possibly</span>
          <p> Possibly</p>
          <span onClick={() => speak({ text: "clearly " })}>clearly </span>
          <p> clearly</p>
          <span onClick={() => speak({ text: " obviously" })}>obviously </span>
          <p>obviously </p>
        </div>
      </div>
    </div>
  );
};
