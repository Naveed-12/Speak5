import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>In this lesson we will learn to use the zero conditional.</p>
        <p>
          Usually, we add prefixes and suffixes to an existing word to get a
          derivative word.
        </p>
        <p>
          We use the zero conditional to talk about things that are always true,
          that is, things that are facts or general truths.
        </p>
        <p>The structure of the zero conditional is as follows:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <b>
            <span onClick={() => speak({ text: "if" })}>if</span>+ subject +
            verb in present simple, + subject + verb in present simple
          </b>
          <br />
        </div>
        <p>Here are some examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: " If you study, your grades go up" })}
          >
            {" "}
            If you study, your grades go up
          </span>
          <p> If you study, your grades go up</p>
          <span
            onClick={() =>
              speak({ text: " If you turn on the TV, the screen lights up" })
            }
          >
            If you turn on the TV, the screen lights up
          </span>
          <p> If you turn on the TV, the screen turns on</p>
          <span
            onClick={() =>
              speak({
                text: " If she  dances , all the boys in the room watch ",
              })
            }
          >
            If she dances , all the boys in the room watch{" "}
          </span>
          <p> If she dances , all the boys in the room watch</p>
          <span
            onClick={() =>
              speak({ text: "  If Jim Carrey tells a joke, everybody laughs" })
            }
          >
            If Jim Carrey tells a joke, everybody laughs{" "}
          </span>
          <p> If Jim Carrey tells a joke, everybody laughs</p>
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
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "  " })}> </span>
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
          We can also make these sentences in a negative way. All we have to do
          is add don´t before the verb; we add doesn´t instead of don´t if we
          use he , she or it . Let's look at these examples:
        </p>
        <p>Here are some examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: " If you don't study, you fail" })}
          >
            If you don't study, you fail
          </span>
          <p> If you don't study, you fail</p>
          <span
            onClick={() =>
              speak({
                text: " If we don't turn on the TV, we see a black screen",
              })
            }
          >
            If we don't turn on the TV, we see a black screen
          </span>
          <p> If we don't turn on the TV, we see a black screen</p>
          <span
            onClick={() =>
              speak({
                text: " If she  dances , all the boys in the room watch ",
              })
            }
          >
            If she dances , all the boys in the room watch{" "}
          </span>
          <p> If she dances , all the boys in the room watch</p>
          <span
            onClick={() =>
              speak({
                text: " If she don't dance, all the boys in the room watch ",
              })
            }
          >
            If she don't dance, all the boys in the room watch
          </span>
          <p> If she don't dance, all the boys in the room watch </p>
          <span
            onClick={() =>
              speak({
                text: "  If Jim Carrey doesn't tell a joke, everyone is silent          ",
              })
            }
          >
            {" "}
            If Jim Carrey doesn't tell a joke, everyone is silent
          </span>
          <p> If Jim Carrey doesn't tell a joke, everyone is silent</p>
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
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
        </div>
        <p>
          We can reverse the order of the sentence without altering its meaning.
          However, when we do this, we no longer have to put a comma in the
          middle of the sentence. Let's see some examples with the previous
          sentences inverted:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: "  We see a black screen if we do not turn on the TV        ",
              })
            }
          >
            We see a black screen if we do not turn on the TV
          </span>
          <p>We see a black screen if we do not turn on the TV</p>
          <span
            onClick={() =>
              speak({
                text: "  All the boys in the room watch if she doesn't dance          ",
              })
            }
          >
            All the boys in the room watch if she doesn't dance
          </span>
          <p> </p>
          <span
            onClick={() =>
              speak({
                text: "  Everyone is silent if Jim Carrey doesn't tell a joke          ",
              })
            }
          >
            {" "}
            Everyone is silent if Jim Carrey doesn't tell a joke
          </span>
          <p> Everyone is silent if Jim Carrey doesn't tell a joke</p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "  " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "  " })}> </span>
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
          To convert the zero conditional to a question, we simply use the rules
          we already know for converting affirmative to interrogative sentences.
          Let's look at these examples to understand clearly:
        </p>
        <div className="row ">
          <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
            <p>Affirmation:</p>
            <span
              onClick={() => speak({ text: " If I talk, everybody laughs " })}
            >
              {" "}
              If I talk, everybody laughs
            </span>
            <p> If I talk, everybody laughs</p>
            <span
              onClick={() => speak({ text: "  When you study, you are happy" })}
            >
              {" "}
              When you study, you are happy
            </span>
            <p> When you study, you are happy</p>
            <span onClick={() => speak({ text: "  " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: "  " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: "  " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: "  " })}> </span>
            <p> </p>
          </div>
          <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
            <p>Question 1):</p>
            <span
              onClick={() =>
                speak({ text: " Does everybody laugh if I talk? " })
              }
            >
              Does everybody laugh if I talk?{" "}
            </span>
            <p> Does everyone laugh if I speak?</p>
            <span
              onClick={() => speak({ text: "  Are you happy when you study?" })}
            >
              Are you happy when you study?{" "}
            </span>
            <p> Are you happy when you study?</p>
            <span onClick={() => speak({ text: "  " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: "  " })}> </span>
            <p> </p>
          </div>
          <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
            <p>Question (2):</p>
            <span onClick={() => speak({ text: "  If I talk, does everybody laugh?" })}> If I talk, does everybody laugh?</span>
            <p> If I talk, does everybody laugh?</p>
            <span onClick={() => speak({ text: " When you study, are you happy? " })}> When you study, are you happy?</span>
            <p>When you study, are you happy? </p>
          </div>
        </div>
      </div>
    </div>
  );
};
