import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>The reflexive pronouns are the following:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <b>Singular:</b>
          <br />
          <span onClick={() => speak({ text: " myself" })}> myself </span>
          <p> (A) myself / With yourself</p>
          <span onClick={() => speak({ text: "yourself " })}> yourself </span>
          <p>
            (A) yourself / Yourself / Yourself / With yourself / With yourself{" "}
          </p>
          <span onClick={() => speak({ text: "himself " })}> himself</span>
          <p> (A) himself / Himself / With himself</p>
          <span onClick={() => speak({ text: "herself" })}> herself</span>
          <p> (A) herself / Herself / With herself</p>
          <span onClick={() => speak({ text: " Itself " })}>Itself</span>
          <p>(A) himself / With himself </p>
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
        <p>We do not use reflexive pronouns with the following verbs:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "  To feel" })}>To feel </span>
          <p> To sense</p>
          <span onClick={() => speak({ text: " To relax" })}>To relax</span>
          <p>To relax</p>
          <span onClick={() => speak({ text: "To concentrate  " })}>
            {" "}
            To concentrate
          </span>
          <p> To concentrate</p>
          <span onClick={() => speak({ text: " To concentrate " })}>
            To concentrate{" "}
          </span>
          <p> To concentrate</p>
          <span onClick={() => speak({ text: " To wash " })}>To wash </span>
          <p> To wash</p>
          <span onClick={() => speak({ text: " To shave" })}> To shave </span>
          <p> To shave</p>
          <span onClick={() => speak({ text: "To dress  " })}> To dress</span>
          <p> To dress</p>
          <span
            onClick={() =>
              speak({ text: " To take a shower / To have a bath " })
            }
          >
            {" "}
            To take a shower / To have a bath
          </span>
          <p>
            {" "}
            Take a shower / Take a bath ( to have a bath ) is used more in
            British English)
          </p>
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
          Emphatic pronouns are exactly the same as reflexive pronouns ( myself
          , yourself , himself , etc.) and are used to emphasize that the person
          did the activity or action they are talking about. The Spanish
          translation of emphatic pronouns is slightly different from that of
          reflexive pronouns. Let's see: 
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <b>Singular:</b>
          <br />
          <span onClick={() => speak({ text: " myself" })}> myself </span>
          <p> (A) myself / With yourself</p>
          <span onClick={() => speak({ text: "yourself " })}> yourself </span>
          <p>
            (A) yourself / Yourself / Yourself / With yourself / With yourself{" "}
          </p>
          <span onClick={() => speak({ text: "himself " })}> himself</span>
          <p> (A) himself / Himself / With himself</p>
          <span onClick={() => speak({ text: "herself" })}> herself</span>
          <p> (A) herself / Herself / With herself</p>
          <span onClick={() => speak({ text: " Itself " })}>Itself</span>
          <p>(A) himself / With himself </p>
        </div>
      </div>
    </div>
  );
};
