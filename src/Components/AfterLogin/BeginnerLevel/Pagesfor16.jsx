import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>In this lesson we will look at activity verbs and state verbs.</p>
        <p>
          As its name says, activity verbs ({" "}
          <span onClick={() => speak({ text: "activity verbs" })}>
            activity verbs
          </span>{" "}
          ) are used to talk about activities and actions. The following are
          some examples of activity verbs, because they express an action:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Play" })}>Play</span>
          <p> Play</p>
          <span onClick={() => speak({ text: "Talk" })}>Talk</span>
          <p> Talked</p>
          <span onClick={() => speak({ text: "Run" })}>Run</span>
          <p>I Run</p>
          <span onClick={() => speak({ text: "wait" })}>wait</span>
          <p> wait</p>
          <span onClick={() => speak({ text: "study" })}>study</span>
          <p>study </p>
        </div>
        <p>Let’s see some examples of these activity verbs in action:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I study every day" })}>
            I study every day
          </span>
          <p> study every day</p>
          <span
            onClick={() => speak({ text: "We play football on Saturdays" })}
          >
            We play football on Saturdays
          </span>
          <p> We play soccor on Saturdays</p>
          <span onClick={() => speak({ text: "I'm waiting at the station " })}>
            I'm waiting at the station
          </span>
          <p>I'm waiting at the station</p>
          <span onClick={() => speak({ text: "They're running in the park" })}>
            They're running in the park
          </span>
          <p> They're running in the park</p>
        </div>
        <p>
          As we have seen, activity verbs can be used with simple tenses (such
          as the present simple) or with continuous tenses (such as the present
          continuous).
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
          State verbs ({" "}
          <span onClick={() => speak({ text: "state verbs" })}>
            {" "}
            state verbs
          </span>{" "}
          ) talk about feelings, opinions and states.
        </p>
        <p>Some of the most common stative verbs are the following:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "know" })}>know</span>
          <p>He</p>
          <span onClick={() => speak({ text: "Believe" })}>Believe</span>
          <p> Believe</p>
          <span onClick={() => speak({ text: "Understand" })}>Understand</span>
          <p>I Understand</p>
          <span onClick={() => speak({ text: "Remember" })}>Remember</span>
          <p>I Remember</p>
          <span onClick={() => speak({ text: "forget" })}>forget</span>
          <p> I forget </p>
          <span onClick={() => speak({ text: "Recognize" })}>Recognize</span>
          <p> I Recognize </p>
          <span onClick={() => speak({ text: "Suspect" })}>Suspect</span>
          <p> I Suspect </p>
          <span onClick={() => speak({ text: "Realize" })}>Realize</span>
          <p> I Realize </p>
          <span onClick={() => speak({ text: "Doubt " })}>Doubt </span>
          <p> I Doubt </p>
          <span onClick={() => speak({ text: "imagine" })}>imagine</span>
          <p> I imagine </p>
          <span onClick={() => speak({ text: "Assume" })}>Assume</span>
          <p> I Assume </p>
          <span onClick={() => speak({ text: "Like" })}>Like</span>
          <p> I Like </p>
          <span onClick={() => speak({ text: "Hate" })}>Hate</span>
          <p> I Hate </p>
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
        <p>Let's look at a couple of examples of stative verbs:</p>

        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I love dogs" })}>
            I love dogs
          </span>
          <p>I love dogs</p>
          <span
            onClick={() => speak({ text: "We don't understand this subject" })}
          >
            We don't understand this subject
          </span>
          <p> We don't understand this subject</p>
          <span onClick={() => speak({ text: "They have three dogs" })}>
            They have three dogs
          </span>
          <p>They have three dogs</p>
        </div>
        <p>As we could see, we normally use stative verbs with simple tenses (such as the present simple) but NOT WITH CONTINUOUS TENSES .

        </p>
      </div>
    </div>
  );
};
