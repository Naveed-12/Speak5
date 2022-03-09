import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
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

export const Page2 = () => {
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

export const Page3 = () => {
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
