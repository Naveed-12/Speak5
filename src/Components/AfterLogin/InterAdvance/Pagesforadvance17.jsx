import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          We already know that the words{" "}
          <span onClick={() => speak({ text: "either" })}>either</span> and
          <span onClick={() => speak({ text: "neither" })}>neither</span> are
          used to say "neither". Let us remember some examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " I don´t want to go - Neither do I" })
            }
          >
            I don´t want to go - Neither do I
          </span>
          <p>I don't want to go - me neither</p>
          <span onClick={() => speak({ text: " I can´t swim – Me neither" })}>
            I can´t swim – Me neither
          </span>
          <p>I can´t swim – Me neither </p>
          <span
            onClick={() =>
              speak({ text: "We don´t want ice cream – I don´t either" })
            }
          >
            We don´t want ice cream – I don´t either
          </span>
          <p>We don't want ice cream - Me neither </p>

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
          We can also use{" "}
          <span onClick={() => speak({ text: "both" })}>both</span> ,{" "}
          <span onClick={() => speak({ text: "neither" })}>neither</span> and
          <span onClick={() => speak({ text: "either" })}>either</span> with the
          preposition <span onClick={() => speak({ text: "OF" })}>of</span> +
          <span onClick={() => speak({ text: "the" })}>the</span> /{" "}
          <span onClick={() => speak({ text: "that" })}>that</span> /{" "}
          <span onClick={() => speak({ text: "these" })}>these</span> /{" "}
          <span onClick={() => speak({ text: "those" })}>those</span>/
          <span onClick={() => speak({ text: "us" })}>us</span> /{" "}
          <span onClick={() => speak({ text: "you" })}>you</span> /{" "}
          <span onClick={() => speak({ text: "them" })}>them</span> , etc. Let's
          look at some examples:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span
              onClick={() =>
                speak({ text: "Both of the restaurants are fancy" })
              }
            >
              Both of the restaurants are fancy
            </span>
            <p>Both restaurants are fancy</p>
            <span
              onClick={() => speak({ text: "Neither of my friends is pretty" })}
            >
              Neither of my friends is pretty
            </span>
            <p>none of my friends are pretty</p>
            <span
              onClick={() =>
                speak({ text: "We can choose either of these two colors " })
              }
            >
              We can choose either of these two colors
            </span>
            <p>We can choose any of these two colors</p>
            <span onClick={() => speak({ text: "" })}></span>
            <p></p>
            <span onClick={() => speak({ text: "" })}></span>
            <p></p>
            <span onClick={() => speak({ text: "" })}></span>
            <p></p>
          </div>
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span onClick={() => speak({ text: "Both of them are fancy" })}>
              Both of them are fancy
            </span>
            <p>both are luxurious</p>
            <span onClick={() => speak({ text: "Neither of them is pretty" })}>
              Neither of them is pretty
            </span>
            <p>none of them are pretty</p>
            <span
              onClick={() => speak({ text: "We can choose either of them" })}
            >
              We can choose either of them
            </span>
            <p>We can choose any of them</p>
            <span onClick={() => speak({ text: "" })}></span>
            <p></p>
            <span onClick={() => speak({ text: "" })}></span>
            <p></p>
            <span onClick={() => speak({ text: "" })}></span>
            <p></p>
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
          Also, we can use{" "}
          <span onClick={() => speak({ text: "either" })}>either</span> ,{" "}
          <span onClick={() => speak({ text: "neither" })}>neither</span> and
          both as follows:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <p>
            <span onClick={() => speak({ text: "Both" })}>Both</span> + subject
            / noun + <span onClick={() => speak({ text: "and" })}>and</span> +
            subject / noun (the Spanish translation of this structure is “both
            ….. and …”)
          </p>
          <p>
            <span onClick={() => speak({ text: "neither" })}>Neither</span> +
            subject / noun +{" "}
            <span onClick={() => speak({ text: "nor" })}>nor</span> + subject /
            noun (the Spanish translation of this structure is “neither …… nor
            ………”)
          </p>
          <p>
            <span onClick={() => speak({ text: "either" })}>Either</span> +
            subject / noun +{" "}
            <span onClick={() => speak({ text: "or" })}>or</span> +
            subject / noun (the Spanish translation of this structure is “either
            one thing or another”)
          </p>
        </div>
      </div>
    </div>
  );
};
