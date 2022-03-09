import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn about the modal verb{" "}
          <span onClick={() => speak({ text: "would" })}>would</span> .
        </p>
        <p>
          <span onClick={() => speak({ text: "would" })}>would</span> does not
          have a literal translation into Spanish and is usually accompanied by
          a verb.
        </p>
        <p>
          If the verb{" "}
          <span onClick={() => speak({ text: "would" })}>would</span> is
          accompanied by a verb, the Spanish meaning of this verb ends with the
          endings “ -ría, -rías, -rías, -riamos ”, depending on the pronoun
          used. Let's look at some examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <p>
            If we add{" "}
            <span onClick={() => speak({ text: "would" })}>would</span> before
            the verb <span onClick={() => speak({ text: "do" })}>do</span> (I
            do), we have{" "}
            <span onClick={() => speak({ text: "would do" })}>would do</span> =
            would would
          </p>
          <p>
            If we add{" "}
            <span onClick={() => speak({ text: "would" })}>would</span> before
            the verb <span onClick={() => speak({ text: "Go" })}>go</span> , we
            have{" "}
            <span onClick={() => speak({ text: "would go" })}>would go</span> =
            i would laugh
          </p>
          <p>
            If we add{" "}
            <span onClick={() => speak({ text: "would" })}>would</span> before
            the verb <span onClick={() => speak({ text: "dance" })}>dance</span>{" "}
            (bailo), we have{" "}
            <span onClick={() => speak({ text: "would dance" })}>
              would dance
            </span>{" "}
            = baila ría
          </p>
        </div>
        <p>
          When we use{" "}
          <span onClick={() => speak({ text: "would " })}>would</span> , the
          verb that accompanies it is in the present simple (without to ).
        </p>
        <p>
          Generally, we use{" "}
          <span onClick={() => speak({ text: "would " })}>would</span> when we
          imagine a situation or an action. We can also use its contraction “' d
          ”. Let's look at the following examples:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>No shrinkage:</p>
            <span
              onClick={() => speak({ text: "I would love to live in London" })}
            >
              {" "}
              I would love to live in London
            </span>
            <p>
              I would love to live in London (but I don't live in London, I'm
              just imagining the situation){" "}
            </p>
            <span
              onClick={() =>
                speak({ text: "You would love to be my girlfriend" })
              }
            >
              {" "}
              You would love to be my girlfriend
            </span>
            <p>
              {" "}
              You would love to be my girlfriend (but you're not, I'm just
              imagining the situation)
            </p>
            <span
              onClick={() =>
                speak({ text: "She would love to have a luxurious car" })
              }
            >
              {" "}
              She would love to have a luxurious car
            </span>
            <p>
              She would love to have a fancy car (but she doesn't, she's just
              imagining the situation)
            </p>
            <span
              onClick={() =>
                speak({ text: "They would love to have more time" })
              }
            >
              They would love to have more time{" "}
            </span>
            <p>
              {" "}
              They would love to have more time (but they don't, they are just
              imagining the situation)
            </p>
            <span onClick={() => speak({ text: "" })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: "" })}> </span>
            <p> </p>
          </div>
          <div
            className="col-md-2  greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>With contraction:</p>
            <span onClick={() => speak({ text: "I'd love to live in London" })}>
              {" "}
              I'd love to live in London
            </span>
            <p>
              I would love to live in London (but I don't live in London, I'm
              just imagining the situation){" "}
            </p>
            <span
              onClick={() => speak({ text: "You'd love to be my girlfriend" })}
            >
              {" "}
              You'd love to be my girlfriend
            </span>
            <p>
              You would love to be my girlfriend (but you're not, I'm just
              imagining the situation){" "}
            </p>
            <span
              onClick={() =>
                speak({ text: "She'd love to have a luxurious car" })
              }
            >
              {" "}
              She'd love to have a luxurious car
            </span>
            <p>
              She would love to have a fancy car (but she doesn't, she's just
              imagining the situation){" "}
            </p>
            <span
              onClick={() => speak({ text: "They'd love to have more time" })}
            >
              They'd love to have more time{" "}
            </span>
            <p>
              They would love to have more time (but they don't, they are just
              imagining the situation){" "}
            </p>
            <span onClick={() => speak({ text: "" })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: "" })}> </span>
            <p> </p>
          </div>
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
          We can use would to talk about past habits or activities that happened
          often in the past. Its meaning is very similar to that of used to
          (used to). Let's look at these examples:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span
              onClick={() =>
                speak({
                  text: " I would walk out of the room whenever I saw her",
                })
              }
            >
              I would walk out of the room whenever I saw her
            </span>
            <p>I used to walk out of the room whenever I saw her</p>
            <span
              onClick={() =>
                speak({ text: " They would get up when their dad came home" })
              }
            >
              They would get up when their dad came home
            </span>
            <p> They used to get up when their daddy came home</p>
            <span
              onClick={() =>
                speak({
                  text: "At night, we would gather to tell exciting adventures about our trip ",
                })
              }
            >
              At night, we would gather to tell exciting adventures about our
              trip
            </span>
            <p>
              {" "}
              At night, we used to get together to tell exciting adventures
              about our travels
            </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span
              onClick={() =>
                speak({ text: "I 'd like to try these gloves on" })
              }
            >
              I 'd like to try these gloves on
            </span>
            <p> I would like to try on these gloves</p>
            <span
              onClick={() =>
                speak({ text: "I 'd like to buy a ticket to Vancouver" })
              }
            >
              I 'd like to buy a ticket to Vancouver
            </span>
            <p>I'd like to buy a ticket to Vancouver </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
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
          To use would in negative sentences, we simply add not after would , or
          use its contraction: wouldn't . Let's look at these examples:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>No shrinkage:</p>
            <span onClick={() => speak({ text: "I would not go with you " })}>
              I would not go with you
            </span>
            <p>I wouldn't go with you </p>
            <span
              onClick={() =>
                speak({ text: " You would not like to dry your hair" })
              }
            >
              You would not like to dry your hair
            </span>
            <p> You wouldn't like to dry your hair</p>
            <span onClick={() => speak({ text: " She would not jump here" })}>
              She would not jump here
            </span>
            <p> She wouldn't jump here</p>
            <span
              onClick={() =>
                speak({
                  text: " They would not raise their hands in this situation",
                })
              }
            >
              They would not raise their hands in this situation
            </span>
            <p>They wouldn't raise their hands in this situation</p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>With contraction:</p>
            <span onClick={() => speak({ text: "I wouldn't go with you" })}>
              I wouldn't go with you
            </span>
            <p> I wouldn't go with you</p>
            <span
              onClick={() =>
                speak({ text: " You wouldn't like to dry your hair" })
              }
            >
              You wouldn't like to dry your hair
            </span>
            <p> You wouldn't like to dry your hair</p>
            <span onClick={() => speak({ text: " She wouldn't jump here" })}>
              She wouldn't jump here
            </span>
            <p>She wouldn't jump here</p>
            <span
              onClick={() =>
                speak({
                  text: "They wouldn't raise their hands in this situation ",
                })
              }
            >
              They wouldn't raise their hands in this situation
            </span>
            <p> They wouldn't raise their hands in this situation</p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
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
          If we want to use would in questions, we simply put it before the
          subject. When we use would in this way, it is usually to offer or
          invite something.
        </p>
        <p>Let’s see these examples with their possible answers:</p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " Would you like a cup of tea? - Yes, I would  " })
            }
          >
            Would you like a cup of tea? - Yes, I would{" "}
          </span>
          <p> Do you like a cup of tea? - Yes, I would like</p>
          <span
            onClick={() =>
              speak({
                text: " Would she like to join the team? - No, she wouldn't",
              })
            }
          >
            Would she like to join the team? - No, she wouldn't
          </span>
          <p> Would she like to join the team? - No, she wouldn't</p>
          <span
            onClick={() =>
              speak({
                text: "Would they like to come to the movies with us? - They would be pleased ",
              })
            }
          >
            Would they like to come to the movies with us? - They would be
            pleased
          </span>
          <p>
            {" "}
            Would they like to come to the movies with us? - They would be
            pleased
          </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
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
          To use would in the past, we must use it with the present perfect as
          follows:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <b>
            Subject + would{" "}
            <span onClick={() => speak({ text: "have" })}>have</span>+ past
            participle verb + complement
          </b>
          <br />
        </div>
        <p>
          Although we use the present perfect with would , its meaning is in the
          simple past (would have). Let's see examples:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " I would have loved to live in London" })
            }
          >
            I would have loved to live in London
          </span>
          <p>I would have loved to live in London </p>
          <span
            onClick={() =>
              speak({ text: " You would have liked to be my girlfriend" })
            }
          >
            You would have liked to be my girlfriend
          </span>
          <p> </p>
          <span
            onClick={() =>
              speak({ text: "She would have enjoyed having a luxurious car " })
            }
          >
            She would have enjoyed having a luxurious car
          </span>
          <p> She would have enjoyed having a luxurious car</p>
          <span
            onClick={() =>
              speak({ text: "They would have loved to have more time " })
            }
          >
            They would have loved to have more time
          </span>
          <p>
            {" "}
            They would have loved to have more time (but they don't, they are
            just imagining the situation)
          </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};
