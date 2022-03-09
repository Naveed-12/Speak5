import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn the different ways in which we can modify
          words to build a good vocabulary.
        </p>
        <p>
          Usually, we add prefixes and suffixes to an existing word to get a
          derivative word.
        </p>
        <p>
          A prefix is ​​a "word" that is added to the beginning of another to
          make a new word. For example, in Spanish, the suffix “ pre ” means “
          before ”, and we can use it with the word “ school ”, to create the
          derived word “ pre-school (before school)”
        </p>
        <p>
          A suffix is ​​a "word" that is added to the end of another to make a
          new word. For example, the prefix " mente " can be added to the word "
          normal " to create the derived word " normally ".
        </p>
        <p>
          In English, we can use the following suffixes to convert some verbs to
          nouns: ment, ion, ence, ation . Let's look at these examples:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>Verb:</p>
            <span onClick={() => speak({ text: "attraction " })}>
              attraction
            </span>
            <p> I attract</p>
            <span onClick={() => speak({ text: " Care" })}>Care</span>
            <p>Care </p>
            <span onClick={() => speak({ text: " Disappoint" })}>
              Disappoint
            </span>
            <p>I Disappoint </p>
            <span onClick={() => speak({ text: " enjoy" })}>enjoy</span>
            <p>I enjoy</p>
            <span onClick={() => speak({ text: " Entertain" })}>Entertain</span>
            <p> I Entertain </p>
            <span onClick={() => speak({ text: " Prefer" })}>Prefer</span>
            <p>I Prefer </p>
            <span onClick={() => speak({ text: " Protect" })}>Protect</span>
            <p>I Protect</p>
            <span onClick={() => speak({ text: " relaxation" })}>
              relaxation
            </span>
            <p> relax</p>
          </div>
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>Noun:</p>
            <span onClick={() => speak({ text: "attraction " })}>
              attraction
            </span>
            <p> Attraction </p>
            <span onClick={() => speak({ text: " Care" })}>Care</span>
            <p>Look After </p>
            <span onClick={() => speak({ text: " Disappoint" })}>
              Disappointment
            </span>
            <p>Disappointment </p>
            <span onClick={() => speak({ text: " enjoy mind" })}>
              enjoy mind
            </span>
            <p>Pleasure / Enjoy</p>
            <span onClick={() => speak({ text: " entertainment " })}>
              entertainment{" "}
            </span>
            <p> entertainment </p>
            <span onClick={() => speak({ text: " prefer " })}>prefer </span>
            <p>preference </p>
            <span onClick={() => speak({ text: " Protection _" })}>
              Protection _
            </span>
            <p>Protection _</p>
            <span onClick={() => speak({ text: " Relaxation" })}>
              Relaxation
            </span>
            <p> Relaxation</p>
          </div>
        </div>
        <p>
          As we have seen, some verbs like care do not need suffixes to become
          nouns.
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
          We can use the following suffixes to convert some verbs to adjectives:
          ing, ed, able, ive, ful, less . Let's look at these examples:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>Verb:</p>
            <span onClick={() => speak({ text: "attraction " })}>
              attraction
            </span>
            <p> I attract</p>
            <span onClick={() => speak({ text: " Care" })}>Care</span>
            <p>Care </p>
            <span onClick={() => speak({ text: " Disappoint" })}>
              Disappoint
            </span>
            <p>I Disappoint </p>
            <span onClick={() => speak({ text: " enjoy" })}>enjoy</span>
            <p>I enjoy</p>
            <span onClick={() => speak({ text: " Entertain" })}>Entertain</span>
            <p> I Entertain </p>
            <span onClick={() => speak({ text: " Prefer" })}>Prefer</span>
            <p>I Prefer </p>
            <span onClick={() => speak({ text: " Protect" })}>Protect</span>
            <p>I Protect</p>
            <span onClick={() => speak({ text: " relaxation" })}>
              relaxation
            </span>
            <p> relax</p>
          </div>
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>Adjective:</p>
            <span onClick={() => speak({ text: "Attract ive / Attract ed " })}>
              Attract ive / Attract ed
            </span>
            <p> Attractive / Attracted </p>
            <span
              onClick={() => speak({ text: " Disappointing / Dissapointing" })}
            >
              Disappointing / Dissapointing
            </span>
            <p>Disappointing / Dissapointing </p>
            <span onClick={() => speak({ text: " Enjoy able" })}>
              Enjoy able
            </span>
            <p>Enjoy able </p>
            <span onClick={() => speak({ text: " enjoy mind" })}>
              enjoy mind
            </span>
            <p>Pleasure / Enjoy</p>
            <span
              onClick={() => speak({ text: " Entertaining / Entertaining  " })}
            >
              Entertaining / Entertaining{" "}
            </span>
            <p> Entertaining </p>
            <span onClick={() => speak({ text: " preferable  " })}>
              preferable{" "}
            </span>
            <p>preferable </p>
            <span onClick={() => speak({ text: " protect ive _" })}>
              protect ive _
            </span>
            <p>protect ive _</p>
            <span onClick={() => speak({ text: " Relaxing / Relaxing _" })}>
              Relaxing / Relaxing _
            </span>
            <p> Relaxation</p>
          </div>
        </div>
        <p>
          As we have seen, some verbs like care do not need suffixes to become
          nouns.
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
          Generally, we use the following prefixes to convert a word to its
          opposite: dis, im, in, ir, un . Let's look at these examples:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <p>Verb:</p>
          <span onClick={() => speak({ text: "Appear - Disappear " })}>
            Appear - Disappear
          </span>
          <p>I Appear - I Disappear</p>
          <span onClick={() => speak({ text: " Honest - Dis honest" })}>
            Honest - Dis honest
          </span>
          <p>Honest dishonest </p>
          <span onClick={() => speak({ text: " Organized - Disorganized" })}>
            Organized - Disorganized
          </span>
          <p>Organized - Disorganized </p>
          <span onClick={() => speak({ text: " Loyal - Disloyal" })}>
            Loyal - Disloyal
          </span>
          <p>Loyal - Disloyal</p>
          <span onClick={() => speak({ text: " Similar - Dis similar" })}>
            Similar - Dis similar
          </span>
          <p> Similar - Dis similar </p>
          <span onClick={() => speak({ text: " Possible - Impossible" })}>
            Possible - Impossible
          </span>
          <p>Possible - Impossible </p>
          <span onClick={() => speak({ text: " Patient - Im patient" })}>
            Patient - Im patient
          </span>
          <p>Patient - Im patient</p>
          <span onClick={() => speak({ text: " Mature - Im mature" })}>
            Mature - Im mature
          </span>
          <p> Mature - Im mature</p>
          <span onClick={() => speak({ text: " Correct - Incorrect" })}>
            Correct - Incorrect
          </span>
          <p> Correct - Incorrect</p>
          <span
            onClick={() =>
              speak({ text: " Consider yourself - In considerate" })
            }
          >
            Consider yourself - In considerate
          </span>
          <p> Consider yourself - In considerate</p>
          <span onClick={() => speak({ text: " Formal - Informal" })}>
            Formal - Informal
          </span>
          <p> Formal - Informal</p>
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
          <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
            <p>Verb:</p>
            <span onClick={() => speak({ text: "Appear - Disappear " })}>
              Appear - Disappear
            </span>
            <p>I Appear - I Disappear</p>
            <span onClick={() => speak({ text: " Honest - Dis honest" })}>
              Honest - Dis honest
            </span>
            <p>Honest dishonest </p>
            <span onClick={() => speak({ text: " Organized - Disorganized" })}>
              Organized - Disorganized
            </span>
            <p>Organized - Disorganized </p>
            <span onClick={() => speak({ text: " Loyal - Disloyal" })}>
              Loyal - Disloyal
            </span>
            <p>Loyal - Disloyal</p>
            <span onClick={() => speak({ text: " Similar - Dis similar" })}>
              Similar - Dis similar
            </span>
            <p> Similar - Dis similar </p>
            <span onClick={() => speak({ text: " Possible - Impossible" })}>
              Possible - Impossible
            </span>
            <p>Possible - Impossible </p>
            <span onClick={() => speak({ text: " Patient - Im patient" })}>
              Patient - Im patient
            </span>
            <p>Patient - Im patient</p>
            <span onClick={() => speak({ text: " Mature - Im mature" })}>
              Mature - Im mature
            </span>
            <p> Mature - Im mature</p>
            <span onClick={() => speak({ text: " Correct - Incorrect" })}>
              Correct - Incorrect
            </span>
            <p> Correct - Incorrect</p>
            <span
              onClick={() =>
                speak({ text: " Consider yourself - In considerate" })
              }
            >
              Consider yourself - In considerate
            </span>
            <p> Consider yourself - In considerate</p>
            <span onClick={() => speak({ text: " Formal - Informal" })}>
              Formal - Informal
            </span>
            <p> Formal - Informal</p>
          </div>
        </div>
      </div>
    );
  };
  