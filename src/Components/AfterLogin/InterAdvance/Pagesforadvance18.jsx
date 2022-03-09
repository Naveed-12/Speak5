import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>In this lesson we will learn to use the following expressions:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "By " })}>By</span>
          <p>For / before (a certain time)</p>

          <span onClick={() => speak({ text: "By the time " })}>
            By the time
          </span>
          <p> For the moment that / before the moment that</p>

          <span onClick={() => speak({ text: " WHile" })}>while</span>
          <p>while </p>
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
          We use by + some time (hour, day, week, month, year, etc.) to say that
          something will happen at that time or before. Let's look at these
          examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "  I´ll be back by 10 pm" })}>
            I´ll be back by 10 pm{" "}
          </span>
          <p>I'll be back by 10 pm (at or before 10 pm) </p>
          <span
            onClick={() =>
              speak({ text: "  The report will be ready by Monday" })
            }
          >
            The report will be ready by Monday
          </span>
          <p> This butter must be used by 2019 (on or before 2019)</p>
          <span
            onClick={() => speak({ text: " This butter must be used by 2019" })}
          >
            {" "}
            This butter must be used by 2019 This butter must be used by 2019
          </span>
          <p> </p>
          <span
            onClick={() =>
              speak({
                text: " My dad said the door will be repaired by December    ",
              })
            }
          >
            {" "}
            My dad said the door will be repaired by December
          </span>
          <p>
            My dad said the door will be repaired by December (December or
            sooner)
          </p>
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
          The expression by the time means "for the moment that / before the
          moment that"; We use this phrase to indicate that “by the time we do
          something, something will already have happened”.
        </p>
        <p>This estructure is the next one:</p>
        <b>
          By the time + subject / personal pronoun / noun + verb in present
          simple
        </b>
        <p>Let's look at these examples to understand clearly:</p>
        <br />
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " By the time we arrive at the theater, it will be closed",
              })
            }
          >
            By the time we arrive at the theater, it will be closed
          </span>
          <p>I'll be back by 10 pm (at or before 10 pm) </p>
          <span
            onClick={() =>
              speak({ text: "  The report will be ready by Monday" })
            }
          >
            The report will be ready by Monday
          </span>
          <p>By the time we get to the movie theater, it'll be closed.</p>
          <span
            onClick={() =>
              speak({
                text: "I think that by the time you receive this package, I´ll be in France",
              })
            }
          >
            I think that by the time you receive this package, I´ll be in France
          </span>
          <p>
            {" "}
            I think that by the time you receive this package, I will be in
            France.
          </p>
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
        <p>While means "while". We use while in the following way:</p>
        <b>while + subject + verb</b>
        <br />
        <p>Let's look at these examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " You can bake some cookies while I fry some bacon",
              })
            }
          >You can bake some cookies while I fry some bacon</span>
          <p> You can bake some cookies while I fry some bacon</p>
          <span
            onClick={() =>
              speak({
                text: "I met Chris Martin while I was at Coldplay´s concert ",
              })
            }
          >I met Chris Martin while I was at Coldplay´s concert</span>
          <p> </p>
          <span
            onClick={() =>
              speak({
                text: "I hurt my ankle while I was playing football ",
              })
            }
          ></span>
          <p> I hurt my ankle while I was playing football</p>
          <span
            onClick={() =>
              speak({
                text: "I hurt my ankle while I was playing football ",
              })
            }
          >I hurt my ankle while I was playing football</span>
          <p> We hope to see you while we are here</p>
        </div>
      </div>
    </div>
  );
};
