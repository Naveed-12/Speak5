import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          We can use may and could to make requests in formal situations. If we
          use may and could in this way, we must use them in the form of a
          question. Let’s see some examples with their possible answers:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span onClick={() => speak({ text: " Could:" })}>Could:</span>
            <span
              onClick={() =>
                speak({ text: " Could I see those cards? - Go ahead" })
              }
            >
              Could I see those cards? - Go ahead
            </span>

            <p> Could I see those cards? - Go ahead</p>
            <span
              onClick={() =>
                speak({ text: "Could I have the pepper? -Yes, of course" })
              }
            >
              Could I have the pepper? -Yes, of course
            </span>
            <p>Could you take the pepper? - Yes of course</p>
            <span
              onClick={() =>
                speak({ text: " Could I speak to your dad? - sure" })
              }
            >
              Could I speak to your dad? - sure
            </span>
            <p> Could I speak to your dad? - sure</p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
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
            <span onClick={() => speak({ text: "May: " })}>May:</span>
            <span
              onClick={() =>
                speak({ text: "May I see those postcards? - Go ahead " })
              }
            >
              May I see those postcards? - Go ahead
            </span>

            <p>Can I see those postcards? - Go ahead</p>
            <span
              onClick={() =>
                speak({ text: "May I have the pepper? -Yes, of course " })
              }
            >
              May I have the pepper? -Yes, of course
            </span>
            <p>Can I take the pepper? - Yes of course </p>
            <span
              onClick={() => speak({ text: "May I speak to your dad? - sure" })}
            >
              May I speak to your dad? - sure
            </span>
            <p> Can I talk to your dad? - Sure </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
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
        <p>
          Remember that when we use may in questions, we usually translate it
          into Spanish as "I can".
        </p>
        <b>
          Also, we can use the structure “ subject + wonder + if + subject +
          could + verb + object ” to make polite requests. The literal
          translation of wonder is "I ask". Let's look at these examples:
        </b>
        <br />
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "I wonder if you could give me a ride?" })
            }
          >
            I wonder if you could give me a ride?
          </span>
          <p>I wonder if you could give me a ride?</p>
          <span
            onClick={() =>
              speak({ text: "I wonder if I could take you a picture?" })
            }
          >
            I wonder if I could take you a picture?
          </span>
          <p>I wonder if I could take you a picture?</p>
        </div>
        <p>
          We can also use can with the previous sentences; however, it is
          preferable that we use can in more informal situations. Let’s see
          these examples with their possible answers:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "Can I see those postcards? -Yes, you can" })
            }
          >
            Can I see those postcards? -Yes, you can
          </span>
          <p>Can I see those postcards? -Yes, you can</p>
          <span
            onClick={() =>
              speak({ text: "Can I have the pepper? - No, you can't" })
            }
          >
            Can I have the pepper? - No, you can't
          </span>
          <p>Can I have the pepper? - No, you can't</p>
          <span
            onClick={() => speak({ text: "Can I speak to your dad? -Maybe " })}
          >
            Can I speak to your dad? -Maybe
          </span>
          <p> Can I speak to your dad? -Maybe</p>
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
          With could , we can use the phrase do you think you could? (think you
          could?) to make formal and elegant requests. Let’s see these examples
          with their possible answers:
        </p>
        <div className="row">
          <div
            className="col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <span onClick={() => speak({ text: " Dog" })}>Dog:</span>
            <span
              onClick={() =>
                speak({ text: "Can you close the window? - Yes, I can " })
              }
            >
              Can you close the window? - Yes, I can
            </span>

            <p>Can you close the window? - Yes, I can</p>
            <span
              onClick={() =>
                speak({ text: "Can you give me that book? - No problem " })
              }
            >
              Can you give me that book? - No problem
            </span>
            <p>Can you give me that book? - No problem </p>
            <span
              onClick={() =>
                speak({ text: " Can you give me a massage? - OK" })
              }
            >
              Can you give me a massage? - OK
            </span>
            <p> Can you give me a massage? - It's fine</p>
            <span
              onClick={() =>
                speak({ text: " Can you be more patient? - Of course" })
              }
            >
              Can you be more patient? - Of course
            </span>
            <p> Can you be more patient? - Of course</p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
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
            <span onClick={() => speak({ text: " Could" })}>Could:</span>
            <span
              onClick={() =>
                speak({ text: "Could you close the window? -Yes, I could" })
              }
            >
              Could you close the window? -Yes, I could
            </span>
            <p> Could you close the window? - Yes, yes I could</p>
            <span
              onClick={() =>
                speak({ text: "Could you give me that book? - No problem " })
              }
            >
              Could you give me that book? - No problem
            </span>
            <p>Could you give me that book? - No problem </p>
            <span
              onClick={() =>
                speak({ text: " Could you give me a massage? - OK" })
              }
            >
              Could you give me a massage? - OK
            </span>
            <p>Could you give me a massage? - its fine </p>
            <span
              onClick={() =>
                speak({ text: " Could you be more patient? - Of course" })
              }
            >
              Could you be more patient? - Of course
            </span>
            <p>Could you be more patient? - Of course </p>
            <span onClick={() => speak({ text: " " })}></span>
            <p> </p>
          </div>
        </div>
        <p>
          If we want to ask for help, we can only use can and could ( WE CANNOT
          USE MAY ). Let's look at these examples with their answers:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " Do you think you could give me a ride? - Yes, I do",
              })
            }
          >
            Do you think you could give me a ride? - Yes, I do
          </span>
          <p>Do you think you could give me a ride? - Yes, I do </p>
          <span
            onClick={() =>
              speak({ text: " Do you think you could help her? - No, I don't" })
            }
          >
            Do you think you could help her? - No, I don't
          </span>
          <p>Do you think you could help her? - No, I don't </p>
          <span
            onClick={() =>
              speak({ text: "Do you think you could buy me a soda? - OK " })
            }
          >
            Do you think you could buy me a soda? - OK
          </span>
          <p> Do you think you could buy me a soda? - OK</p>
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
