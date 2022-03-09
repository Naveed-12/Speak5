import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>In this lesson we will learn to use the third conditional.</p>
        <p>
          We use the third conditional to talk about something that could happen
          in the future, that is, when we want to indicate that IT IS POSSIBLE
          THAT WE WILL GET a result in the future as a consequence of something.
          The structure of the third conditional is as follows:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <b>
            <span onClick={() => speak({ text: "if" })}>if</span>+ subject +
            infinitive verb without{" "}
            <span onClick={() => speak({ text: "to" })}>to</span>
            (+ complement), + subject +{" "}
            <span onClick={() => speak({ text: "will" })}>will</span>
            (or its contraction ´ll) + infinitive verb without{" "}
            <span onClick={() => speak({ text: "to" })}>to</span>
            (+ complement)
          </b>
          <br />
        </div>
        <p>Here are some examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " If I drive fast, I will arrive early " })
            }
          >
            {" "}
            If I drive fast, I will arrive early
          </span>
          <p> If I drive fast, I'll be early</p>
          <span
            onClick={() =>
              speak({ text: " If you read more, you will be smart " })
            }
          >
            {" "}
            If you read more, you will be smart
          </span>
          <p> If you read more, you will be smart</p>
          <span
            onClick={() =>
              speak({ text: "  If she sings loud, she will hurt her throat" })
            }
          >
            If she sings loud, she will hurt her throat{" "}
          </span>
          <p> If she sings loud, her throat will be damaged.</p>
          <span
            onClick={() => speak({ text: " If we run, we'll be thirsty " })}
          >
            If we run, we'll be thirsty{" "}
          </span>
          <p> If we run, we'll be thirsty</p>
          <span
            onClick={() =>
              speak({ text: "  If they fight, they'll get in trouble" })
            }
          >
            {" "}
            If they fight, they'll get in trouble
          </span>
          <p>If they fight, they'll get in trouble </p>
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
          To use the third conditional in negation, we just have to add don't
          after the subject ( doesn't if we are talking about he , she , or it )
          in the third part of the sentence (before the comma), and not after
          will (we can also use its won't contraction ).
        </p>
        <p>Let's look at these examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "  If we don't hurry, we will not arrive early" })
            }
          >
            If we don't hurry, we will not arrive early{" "}
          </span>
          <p> If we don't hurry, we won't be early </p>
          <span
            onClick={() =>
              speak({ text: "  If you don't read, you won't be smart" })
            }
          >
            {" "}
            If you don't read, you won't be smart
          </span>
          <p>If you don't read, you won't be smart </p>
          <span
            onClick={() =>
              speak({
                text: " If she doesn't sing, she will not hurt her throat ",
              })
            }
          >
            If she doesn't sing, she will not hurt her throat{" "}
          </span>
          <p> If she doesn't sing, it won't hurt her throat</p>
          <span
            onClick={() =>
              speak({ text: "  If we don't run, we won't be thirsty" })
            }
          >
            {" "}
            If we don't run, we won't be thirsty
          </span>
          <p> If we don't run, we won't be thirsty</p>
          <span
            onClick={() =>
              speak({
                text: " If they don't fight, they will not get in trouble ",
              })
            }
          >
            If they don't fight, they will not get in trouble{" "}
          </span>
          <p>If they don't fight, they will not get in trouble </p>
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
          We can change the order of the sentence without changing its meaning.
          As we saw in the previous lesson, if we change the order, it is no
          longer necessary to write a comma in the middle of the sentence. As
          examples, let's look at the previous sentences, but this time
          inverted:
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
          We can ask questions with the third conditional in various ways. The
          most common is putting will at the beginning of the sentence. Let's
          look at some examples:
        </p>
        <p>Let's look at these examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " Will we arrive early if we don't hurry? " })
            }
          >
            {" "}
            Will we arrive early if we don't hurry?
          </span>
          <p> Will we arrive early if we don't hurry?</p>
          <span
            onClick={() =>
              speak({ text: " Will I be smart if I don't read? " })
            }
          >
            {" "}
            Will I be smart if I don't read?
          </span>
          <p> Am I smart if I don't read?</p>
          <span
            onClick={() =>
              speak({ text: " Will she hurt her throat if she sings? " })
            }
          >
            {" "}
            Will she hurt her throat if she sings?
          </span>
          <p>Will your throat hurt if you sing? </p>
          <span
            onClick={() =>
              speak({ text: "  Will we be thirsty if we don't run? " })
            }
          >
            Will we be thirsty if we don't run?
          </span>
          <p> Will we be thirsty if we don't run?</p>
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
          However, we can ask questions with the third conditional in other ways
          (usually using question words followed by will ).
        </p>
      </div>
    </div>
  );
};
