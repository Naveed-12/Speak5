import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn to use the past continuous. Let us study
          the following situation:
        </p>
        <b>Yesterday Mark and Vicky played basketball.</b>
        <br />
        <b>They started playing at 10 am and finished at 12 pm.</b>
        <br />
        <b>
          They were playing basketball between 11 and 12 pm; they were in the
          middle of the game, they were still playing and they weren't finished
          before 12 pm. This is the past continuous.
        </b>
        <br />
        <p>
          We use the past continuous to express the idea that we were in the
          middle of something at some point in the past. The action or situation
          had already started, but it was not over.
        </p>
        <p>The structure of the past continuous is as follows:</p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <b>
            Subject + <span onClick={() => speak({ text: "was" })}>was</span>/
            <span onClick={() => speak({ text: "were" })}>were</span>+ verb in
            gerund + complement
          </b>
          <br />
        </div>
        <p>Let's look at some examples:</p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " I was living in Wales this time last month" })
            }
          >
            I was living in Wales this time last month
          </span>
          <p> I was living in Wales this time last month</p>
          <span
            onClick={() =>
              speak({
                text: "You were playing football last Saturday at 9 pm ",
              })
            }
          >
            You were playing football last Saturday at 9 pm
          </span>
          <p> You were playing football last Saturday at 9 pm</p>
          <span
            onClick={() => speak({ text: " She was working a lot last night" })}
          >
            She was working a lot last night
          </span>
          <p>She was working a lot last night </p>
          <span
            onClick={() => speak({ text: "He was reading in the afternoon " })}
          >
            He was reading in the afternoon
          </span>
          <p> He was reading in the afternoon</p>
          <span onClick={() => speak({ text: " It was eating when I saw it" })}>
            It was eating when I saw it
          </span>
          <p>It was eating when I saw it </p>
          <span
            onClick={() =>
              speak({ text: " We were driving last night at 10 o'clock" })
            }
          >
            We were driving last night at 10 o'clock
          </span>
          <p> We were driving last night at 10 o'clock</p>
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
          If we want to talk about something we agreed to do, or something
          someone expected us to do, but didn't, we use the following structure:
        </p>

        <p>The structure of the past continuous is as follows:</p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <b>
            Subject / personal pronoun +{" "}
            <span onClick={() => speak({ text: "was" })}>was</span>/
            <span onClick={() => speak({ text: "were" })}>were</span>+
            <span onClick={() => speak({ text: "supposed to" })}>
              supposed to{" "}
            </span>{" "}
            + present simple verb + complement
          </b>
          <br />
        </div>
        <p>
          The literal translation of the above structure is "I was supposed to
          do something." Let's look at these examples:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " Jim was supposed to give you a present, but he forgoth",
              })
            }
          >
            Jim was supposed to give you a present, but he forgot
          </span>
          <p> Jim was supposed to give you a present, but he forgot</p>
          <span
            onClick={() =>
              speak({
                text: "You were supposed to take me home ",
              })
            }
          >
            You were supposed to take me home
          </span>
          <p> You were supposed to take me home</p>
          <span
            onClick={() =>
              speak({ text: " She was supposed to call me at 2 pm" })
            }
          >
            She was supposed to call me at 2 pm
          </span>
          <p>She was supposed to call me at 2 pm </p>
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
          If the two actions were long, and they were happening at exactly the
          same time, then we use the past continuous together with the past
          continuous. Let's look at these examples:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " You were playing soccer while we were listening to our music",
              })
            }
          >
            You were playing soccer while we were listening to our music
          </span>
          <p> You were playing soccer while we were listening to our music</p>
          <span
            onClick={() =>
              speak({
                text: "She was knitting when you were dancing ",
              })
            }
          >
            She was knitting when you were dancing
          </span>
          <p> She was weaving while you were dancing</p>
          <span
            onClick={() =>
              speak({
                text: " He was buying insurance when I was buying my department",
              })
            }
          >
            He was buying insurance when I was buying my department
          </span>
          <p>He was buying insurance when I was buying my apartment. </p>
          <span
            onClick={() =>
              speak({
                text: "They were completing their homework when I was taking a shower",
              })
            }
          >
            They were completing their homework when I was taking a shower
          </span>
          <p>They were completing their homework when I was taking a shower.</p>
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
          To convert the past continuous to its negative form, we add not after
          was / were , or its contractions: wasn't / weren't :
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " I was not living in Wales this time last month",
              })
            }
          >
            I was not living in Wales this time last month
          </span>
          <p> I wasn't living in Wales at this time last month</p>
          <span
            onClick={() =>
              speak({
                text: "You were not playing football last Saturday at 9 pm ",
              })
            }
          >
            You were not playing football last Saturday at 9 pm
          </span>
          <p> You weren't playing soccer last Saturday at 9pm.</p>
          <span
            onClick={() =>
              speak({
                text: " She wasn't working a lot last night",
              })
            }
          >
            {" "}
            She wasn't working a lot last night
          </span>
          <p>She wasn't working a lot last night </p>
          <span
            onClick={() =>
              speak({
                text: "He wasn't reading in the afternoon",
              })
            }
          >
            He wasn't reading in the afternoon
          </span>
          <p>He was not reading in the afternoon.</p>
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
          To use the past continuous in interrogative sentences, all we have to
          do is put was / were before the subject. Let's look at the following
          examples with the most common ways to respond:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " Were you playing soccer last night? - Yes, I was",
              })
            }
          >
            Were you playing soccer last night? - Yes, I was
          </span>
          <p>Were you playing soccer last night? - Yes, yes I was</p>
          <span
            onClick={() =>
              speak({
                text: "Was I talking while I was sleeping? - Yes, you were ",
              })
            }
          >
            Was I talking while I was sleeping? - Yes, you were
          </span>
          <p> Was I talking while you were sleeping? - Yes, yes you were</p>
          <span
            onClick={() =>
              speak({
                text: " Was she singing that song? -No, she was not",
              })
            }
          >
            {" "}
            Was she singing that song? -No, she was not
          </span>
          <p>Was she singing that song? -No she was not</p>
          <span
            onClick={() =>
              speak({
                text: "Was he dancing yesterday at 3 pm? - No, I wasn't",
              })
            }
          >
          Was he dancing yesterday at 3 pm? - No, I wasn't
          </span>
          <p>Was he dancing yesterday at 3 pm? -No, he wasn't.</p>
        </div>
      </div>
    </div>
  );
};
