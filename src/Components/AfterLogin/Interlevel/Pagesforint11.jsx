import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn more about the modal verb could . As we
          already know, could is the past tense of can :
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: "I could understand what she said" })}
          >
            I could understand what she said{" "}
          </span>
          <p>I could understand what she said </p>
          <span onClick={() => speak({ text: "yet" })}>
            {" "}
            She could go to the concert
          </span>
          <p>She was able to go to the concert </p>
          <span onClick={() => speak({ text: "We could see your expression" })}>
            We could see your expression{" "}
          </span>
          <p>We could see your expression </p>
        </div>
        <p>
          Also, we can use could to say that something could be, that is, to
          express something that “could be or be done now or in the future”. In
          this sense, could translates as “ might ”. Let's look at some
          examples:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "I could play with you if you help me first" })
            }
          >
            I could play with you if you help me first{" "}
          </span>
          <p>I could play with you if you help me first </p>
          <span
            onClick={() => speak({ text: "You could be my date for the prom" })}
          >
            You could be my date for the prom{" "}
          </span>
          <p> You could be my date for the prom</p>
          <span onClick={() => speak({ text: "She could stay with me" })}>
            She could stay with me{" "}
          </span>
          <p>She could stay with me </p>
          <span
            onClick={() => speak({ text: "He could come with us next Friday" })}
          >
            He could come with us next Friday{" "}
          </span>
          <p>He could come with us next Friday </p>
          <span onClick={() => speak({ text: "The story could be true" })}>
            {" "}
            The story could be true
          </span>
          <p>The story could be true </p>
          <span
            onClick={() =>
              speak({ text: "We could go to the cinema tomorrow" })
            }
          >
            We could go to the cinema tomorrow{" "}
          </span>
          <p> We could go to the cinema tomorrow</p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: "" })}> </span>
          <p> </p>
        </div>
        <p>
          It is also possible to use can with the examples above. However, when
          we use could , we want to express a slightly more remote probability.
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
          As we already know, if we want to use could in a negative sentence, we
          just add not after could , or we can use its contraction: couldn't .
          Let's look at these examples:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>no shrinkage</p>
            <span
              onClick={() =>
                speak({
                  text: "I could not play with you if you help me first",
                })
              }
            >
              I could not play with you if you help me first
            </span>
            <p> I could not play with you if you help me first</p>
            <span
              onClick={() =>
                speak({ text: "You could not be my date for the prom" })
              }
            >
              You could not be my date for the prom{" "}
            </span>
            <p> You could not be my date for the prom</p>
            <span onClick={() => speak({ text: "She could not stay with me" })}>
              {" "}
              She could not stay with me
            </span>
            <p> She could not stay with me</p>
            <span
              onClick={() =>
                speak({ text: "He could not come with us next Friday" })
              }
            >
              {" "}
              He could not come with us next Friday
            </span>
            <p>He could not come with us next Friday </p>
            <span
              onClick={() => speak({ text: "The story could not be true" })}
            >
              {" "}
              The story could not be true
            </span>
            <p>The story could not be true</p>
            <span
              onClick={() =>
                speak({ text: "We could not go to the cinema tomorrow" })
              }
            >
              We could not go to the cinema tomorrow{" "}
            </span>
            <p> We could not go to the cinema tomorrow</p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <p>With contraction:</p>
            <span
              onClick={() =>
                speak({ text: "I couldn't play with you if you help me first" })
              }
            >
              {" "}
              I couldn't play with you if you help me first
            </span>
            <p> I couldn't play with you if you help me first</p>
            <span
              onClick={() =>
                speak({ text: "You couldn't be my date for the prom" })
              }
            >
              {" "}
              You couldn't be my date for the prom
            </span>
            <p>You couldn't be my date for the prom </p>
            <span onClick={() => speak({ text: "She couldn't stay with me" })}>
              {" "}
              She couldn't stay with me
            </span>
            <p>She couldn't stay with me </p>
            <span
              onClick={() =>
                speak({ text: "He couldn't come with us next Friday" })
              }
            >
              He couldn't come with us next Friday{" "}
            </span>
            <p> He couldn't come with us next Friday</p>
            <span onClick={() => speak({ text: "The story couldn't be true" })}>
              The story couldn't be true{" "}
            </span>
            <p> The story couldn't be true</p>
            <span
              onClick={() =>
                speak({ text: "We couldn't go to the cinema tomorrow" })
              }
            >
              We couldn't go to the cinema tomorrow{" "}
            </span>
            <p>We couldn't go to the cinema tomorrow </p>
            <span onClick={() => speak({ text: "" })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: "" })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: "" })}> </span>
            <p> </p>
          </div>
        </div>
        <p>
          It is also possible to use can with the examples above. However, when
          we use could , we want to express a slightly more remote probability.
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
          However, as we already know, could is also used to talk about actions
          or situations that "could" happen now or in the future. When we use
          could in this way, we can say that it is in the present. If we want to
          use could with the past, we must use the following structure:
        </p>
        <p>
          To use could have in negative sentences, we just have to put not after
          could , or use its contraction: couldn't have :
        </p>
        <div className="row">
          <div className="col-md-2 greybox mx-auto">
            <p>With contraction:</p>
            <span
              onClick={() =>
                speak({ text: "I couldn't play with you if you help me first" })
              }
            >
              {" "}
              I couldn't play with you if you help me first
            </span>
            <p> I couldn't play with you if you help me first</p>
            <span
              onClick={() =>
                speak({ text: "You couldn't be my date for the prom" })
              }
            >
              {" "}
              You couldn't be my date for the prom
            </span>
            <p>You couldn't be my date for the prom </p>
            <span onClick={() => speak({ text: "She couldn't stay with me" })}>
              {" "}
              She couldn't stay with me
            </span>
            <p>She couldn't stay with me </p>
            <span
              onClick={() =>
                speak({ text: "He couldn't come with us next Friday" })
              }
            >
              He couldn't come with us next Friday{" "}
            </span>
            <p> He couldn't come with us next Friday</p>
            <span onClick={() => speak({ text: "The story couldn't be true" })}>
              The story couldn't be true{" "}
            </span>
            <p> The story couldn't be true</p>
            <span
              onClick={() =>
                speak({ text: "We couldn't go to the cinema tomorrow" })
              }
            >
              We couldn't go to the cinema tomorrow{" "}
            </span>
            <p>We couldn't go to the cinema tomorrow </p>
            <span onClick={() => speak({ text: "" })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: "" })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: "" })}> </span>
            <p> </p>
          </div>
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>no shrinkage</p>
            <span
              onClick={() =>
                speak({
                  text: "I could not play with you if you help me first",
                })
              }
            >
              I could not play with you if you help me first
            </span>
            <p> I could not play with you if you help me first</p>
            <span
              onClick={() =>
                speak({ text: "You could not be my date for the prom" })
              }
            >
              You could not be my date for the prom{" "}
            </span>
            <p> You could not be my date for the prom</p>
            <span onClick={() => speak({ text: "She could not stay with me" })}>
              {" "}
              She could not stay with me
            </span>
            <p> She could not stay with me</p>
            <span
              onClick={() =>
                speak({ text: "He could not come with us next Friday" })
              }
            >
              {" "}
              He could not come with us next Friday
            </span>
            <p>He could not come with us next Friday </p>
            <span
              onClick={() => speak({ text: "The story could not be true" })}
            >
              {" "}
              The story could not be true
            </span>
            <p>The story could not be true</p>
            <span
              onClick={() =>
                speak({ text: "We could not go to the cinema tomorrow" })
              }
            >
              We could not go to the cinema tomorrow{" "}
            </span>
            <p> We could not go to the cinema tomorrow</p>
          </div>
          
        </div>
        <p>
          It is also possible to use can with the examples above. However, when
          we use could , we want to express a slightly more remote probability.
        </p>
      </div>
    </div>
  );
};
