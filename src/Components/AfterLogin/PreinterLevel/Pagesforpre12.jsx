import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson, we will learn about possessive pronouns, which are the
          following:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "mine " })}> mine </span>
          <p> mine/mine/mine/mine</p>
          <span onClick={() => speak({ text: "yours " })}> yours </span>
          <p> yours/yours/yours/yours</p>
          <span onClick={() => speak({ text: "His" })}> His</span>
          <p> His/hers/theirs/theirs (his)</p>
          <span onClick={() => speak({ text: "hers " })}> hers </span>
          <p> Yours/ hers/ theirs/ theirs (hers)</p>
          <span onClick={() => speak({ text: "It's " })}> It's </span>
          <p> Yours/ theirs/ theirs/ theirs (theirs)</p>
          <span onClick={() => speak({ text: "ours " })}> ours </span>
          <p> ours/ours/ours/ours/ours</p>
          <span onClick={() => speak({ text: "ours " })}> ours </span>
          <p> Yours/ yours/ theirs/ theirs (yours)</p>
          <span onClick={() => speak({ text: "T heirs  " })}> T heirs </span>
          <p> Yours/ theirs/ theirs/ theirs (theirs)</p>
        </div>
        <p>
          Possessive pronouns are very similar to possessive adjectives ( my ,
          your , his , her ,â€‹â€‹â€‹â€‹â€‹â€‹â€‹ its â€‹â€‹â€‹
          â€‹â€‹â€‹â€‹,â€‹â€‹â€‹â€‹â€‹â€‹â€‹ our ,â€‹â€‹â€‹â€‹â€ ‹â€‹â€‹ their
          ). The only difference is that possessive adjectives must be
          accompanied by a noun, and possessive pronouns stand alone
          (unaccompanied), and usually come at the end of the sentence. Let's
          see some examples to understand very well:
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
          As we could see, to have a possessive pronoun, you only need to add an
          “ s ” at the end of the possessive adjective. The only exceptions are
          <span onClick={() => speak({ text: "mine" })}>mine</span> and{" "}
          <span onClick={() => speak({ text: "his" })}>his</span>.
        </p>
        <p>
          If we want to ask "whose is something?" we use the word{" "}
          <span onClick={() => speak({ text: "whose" })}>whose</span> . When we
          ask questions with{" "}
          <span onClick={() => speak({ text: "whose" })}>whose</span> , we
          usually answer with possessive pronouns. The structure to ask with
          <span onClick={() => speak({ text: "whose" })}>whose</span> correctly
          is the following:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <p>
            <span onClick={() => speak({ text: "whose" })}>whose</span>
            <b>+ noun + verb</b>{" "}
            <span onClick={() => speak({ text: "to be" })}>to be </span>
            <b>+ demonstrative pronoun (</b>{" "}
            <span onClick={() => speak({ text: "this" })}>this </span>
            <b>/</b>
            <span onClick={() => speak({ text: "that" })}>that </span>
            <b>/</b>
            <span onClick={() => speak({ text: "these" })}>these </span>
            <b>/</b>
            <span onClick={() => speak({ text: "those" })}>those </span>
            <b>)</b>
          </p>
        </div>
        <p>Here we have several examples to understand clearly:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " Whose apples are these? - They're mine " })
            }
          >
            Whose apples are these? - They're mine{" "}
          </span>
          <p> Whose apples are these? - They're mine </p>
          <span
            onClick={() => speak({ text: " Whose car is this? - It's yours" })}
          >
            Whose car is this? - It's yours
          </span>
          <p>Whose car is this? - It's yours </p>
          <span
            onClick={() => speak({ text: " Whose pizza is this? - It's his" })}
          >
            Whose pizza is this? - It's his
          </span>
          <p> Whose pizza is this? - It's his</p>
          <span
            onClick={() =>
              speak({ text: " Whose keys are those? - They're hers" })
            }
          >
            Whose keys are those? - They're hers
          </span>
          <p>Whose keys are those? - They're hers</p>
          <span
            onClick={() =>
              speak({ text: "Whose oranges are these? - They're ours " })
            }
          >
            Whose oranges are these? - They're ours
          </span>
          <p> Whose oranges are these? - They're ours</p>
          <span
            onClick={() =>
              speak({ text: " Whose table is this? - It's yours" })
            }
          >
            Whose table is this? - It's yours
          </span>
          <p>Whose table is this? - It's yours </p>
          <span
            onClick={() =>
              speak({ text: " Whose muffins are these? - They're theirs" })
            }
          >
            Whose muffins are these? - They're theirs
          </span>
          <p> Whose muffins are these? - They're theirs</p>
          <span onClick={() => speak({ text: " " })}></span>
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
        <p>Let's look at a couple more examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "Whose car is this? -  It´s my dad's (It's his) " })
            }
          >
            Whose car is this? - It´s my dad's (It's his)
          </span>
          <p> Whose car is this? - It belongs to my dad (It belongs to him) </p>
          <span
            onClick={() =>
              speak({
                text: " Whose kids are those? - They're Jenny's (They're hers)",
              })
            }
          >
            Whose kids are those? - They're Jenny's (They're hers)
          </span>
          <p>
            Whose children are these? - They are from Jenny (They are from her){" "}
          </p>
          <span
            onClick={() =>
              speak({ text: " Whose cereal is this? - It's John's (It's his)" })
            }
          >
            Whose cereal is this? - It's John's (It's his)
          </span>
          <p> Whose cereal is this? - It's from John (It's from him)</p>
          <span
            onClick={() =>
              speak({
                text: " Whose party is that? - It's Jerry and Katy's (It's theirs)",
              })
            }
          >
            Whose party is that? - It's Jerry and Katy's (It's theirs)
          </span>
          <p>Whose party is that? - It's Jerry and Katy's (It's theirs)</p>
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
          If we want to express the idea that “something is mine”, we use the
          phrase <span onClick={() => speak({ text: "of mine" })}>of mine</span>{" "}
          . Similarly, we use:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " of yours" })}>of yours</span>
          <p> yours </p>
          <span onClick={() => speak({ text: " of his" })}>of his</span>
          <p> his </p>
          <span onClick={() => speak({ text: "of hers " })}>of hers</span>
          <p> hers</p>
          <span onClick={() => speak({ text: "of ours " })}>of ours</span>
          <p> ours</p>
          <span onClick={() => speak({ text: "of theirs " })}>of theirs</span>
          <p> his/her(theirs) </p>
        </div>
        <p>
          We can also use the name of the person instead of possessive pronouns:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " Jessica is a friend of mine" })}>Jessica is a friend of mine</span>
          <p> Jessica is a friend of mine </p>
          <span onClick={() => speak({ text: " Katia is a neighbor of hers" })}>Katia is a neighbor of hers</span>
          <p> Katia is a neighbor of hers </p>
          <span onClick={() => speak({ text: "It's a good idea of ​​ours " })}>It's a good idea of ​​ours</span>
          <p> It's a good idea of ​​ours</p>
        </div>
      </div>
    </div>
  );
};
