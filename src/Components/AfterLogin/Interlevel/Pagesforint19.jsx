import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>In this lesson we will learn about the past perfect continuous.</p>
        <p>Let's study the following example:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <p>
            Yesterday, Sarah looked out her window. The sun was shining but the
            grass was wet.
          </p>
          <p>it had been raining</p>
          <p>
            It wasn't raining when Sarah looked out her window, but it had been
            raining before.
          </p>
        </div>
        <p>
          The sentence “ it had been raining ” is in the past perfect
          continuous. ).
        </p>
        <p>
          In English, this sentence (it had been raining ), we would say it like
          this:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span onClick={() => speak({ text: "It had been raining" })}>
              {" "}
              It had been raining
            </span>
            <p>It had been raining</p>
          </div>
          <div
            className="col-md-2  greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <b>
              Subject + <span onClick={() => speak({ text: "had" })}>had</span>{" "}
              + <span onClick={() => speak({ text: "been" })}>been</span>+ verb
              in gerund + object
            </b>
            <br />
          </div>
        </div>
        <p>
          We use the past perfect continuous to say that something had been
          going on for a period of time in the past, before something else
          happened afterwards.
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
          To convert the past perfect continuous to negation, all we need to do
          is add not after had , or its contraction: hadn't . Let's look at
          these examples:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>No shrinkage:</p>
            <span
              onClick={() =>
                speak({ text: "They had not been playing in the mud " })
              }
            >
              They had not been playing in the mud
            </span>
            <p>They had not been playing in the mud </p>
            <span
              onClick={() =>
                speak({ text: " You had not been feeling ill.            " })
              }
            >
              You had not been feeling ill.
            </span>
            <p> You had not been feeling ill.</p>
            <span
              onClick={() =>
                speak({
                  text: "I had not been working all dayI had not been working all day ",
                })
              }
            >
              I had not been working all day
            </span>
            <p> I had not been working all day </p>
            <span
              onClick={() =>
                speak({ text: "She had not been living there for two months" })
              }
            >
              She had not been living there for two months
            </span>
            <p> She had not been living there for two months </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
          <div
            className="col-md-2  greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>With contraction:</p>
            <span
              onClick={() =>
                speak({ text: " They hadn't been playing in the mud " })
              }
            >
              They hadn't been playing in the mud{" "}
            </span>
            <p>They hadn't been playing in the mud </p>{" "}
            <span
              onClick={() => speak({ text: "You hadn't been feeling ill. " })}
            >
              You hadn't been feeling ill.
            </span>
            <p> You hadn't been feeling ill.</p>{" "}
            <span
              onClick={() => speak({ text: " I hadn't been working all day" })}
            >
              I hadn't been working all day
            </span>
            <p>I hadn't been working all day </p>{" "}
            <span
              onClick={() =>
                speak({ text: " She hadn't been living there for two months" })
              }
            >
              She hadn't been living there for two months
            </span>
            <p>She hadn't been living there for two months </p>{" "}
          </div>
        </div>
        <p>
          We use the past perfect continuous to say that something had been
          going on for a period of time in the past, before something else
          happened afterwards.
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
          To use the present perfect continuous in questions, we simply put had
          before the subject. Let’s see these examples with their possible
          answers:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "Had They not been playing in the mud? " })
            }
          ></span>
          <p>Had They not been playing in the mud ?</p>
          <span
            onClick={() =>
              speak({
                text: " Had she been feeling ill? - No, she hadn't       ",
              })
            }
          >
            Had she been feeling ill? - No, she hadn't
          </span>
          <p> Had she been feeling ill? - No, she hadn't.</p>
          <span
            onClick={() =>
              speak({
                text: "Had they been working all day? -Yes, they had",
              })
            }
          >
            Had they been working all day? -Yes, they had
          </span>
          <p>Had they been working all day? -Yes, they had </p>
          <span
            onClick={() =>
              speak({ text: "Had we been living there for two months? - I think so" })
            }
          >
          Had we been living there for two months? - I think so
          </span>
          <p> Had we been living there for two months? - I think so </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};
