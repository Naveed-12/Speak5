import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn to use the phrases{" "}
          <span onClick={() => speak({ text: "there is" })}>there is </span> and
          <span onClick={() => speak({ text: "there are" })}>there are </span>.
        </p>
        <p>
          <span onClick={() => speak({ text: "there is" })}>There is </span>{" "}
          means “ there is ” and we use it with singular nouns.{" "}
          <span onClick={() => speak({ text: "there is" })}>There is </span> can
          also be used in its contracted form:{" "}
          <span onClick={() => speak({ text: "there's" })}>there's </span> .
        </p>
        <p>
          <span onClick={() => speak({ text: "there are" })}>there are </span> .
          also means “{" "}
          <span onClick={() => speak({ text: "there is" })}>there is </span> . ”
          and we use it with plural nouns.
        </p>
        <p>
          Usually, there is and there are are followed by a noun (thing, person,
          animal, idea, etc). Here are some examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "There is a beautiful woman in the street" })
            }
          >
            There is a beautiful woman in the street
          </span>
          <p>There is a beautiful woman in the street</p>
          <span onClick={() => speak({ text: "There's a book on the desk" })}>
            There's a book on the desk
          </span>
          <p> There's a book on the desk</p>
          <span
            onClick={() => speak({ text: "There's some water in the glass" })}
          >
            There's some water in the glass
          </span>
          <p>There's some water in the glass</p>
          <span onClick={() => speak({ text: "There's a bird in the sky" })}>
            There's a bird in the sky
          </span>
          <p> There's a bird in the sky</p>
          <span
            onClick={() => speak({ text: "There are many books on the floor" })}
          >
            There are many books on the floor
          </span>
          <p>There are many books on the floor</p>

          <span
            onClick={() =>
              speak({ text: "There are some apples on the table" })
            }
          >
            There are some apples on the table
          </span>
          <p>There are some apples on the table</p>

          <span
            onClick={() =>
              speak({ text: "There are four girls in the classroom" })
            }
          >
            There are four girls in the classroom
          </span>
          <p>There are four girls in the classroom</p>
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
          Also, we can use{" "}
          <span onClick={() => speak({ text: "there is" })}>There is </span> and
          <span onClick={() => speak({ text: "there are" })}>
            There are{" "}
          </span>{" "}
          in negations. When we do it this way, we must say{" "}
          <span onClick={() => speak({ text: "there is not" })}>
            There is not
          </span>{" "}
          (or its contraction:{" "}
          <span onClick={() => speak({ text: "there isn't" })}>
            There is'nt{" "}
          </span>{" "}
          ) and{" "}
          <span onClick={() => speak({ text: "there are not" })}>
            There are not{" "}
          </span>{" "}
          (or its contraction there aren't ) . Both phrases mean “ there isn't
          ”, but we already know that one is used with singular nouns and the
          other with plural nouns. Here are some examples:
        </p>
        <div className="row">
          <div className="col-md-2 greybox mx-auto">
            <span
              onClick={() => speak({ text: " There is not enough sugar here" })}
            >
              There is not enough sugar here
            </span>
            <p> not enough sugar here</p>
            <span
              onClick={() =>
                speak({ text: " There are not girls in this class" })
              }
            >
              There are not girls in this class
            </span>
            <p>There are not girls in this class </p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <span
              onClick={() => speak({ text: " There isn't enough sugar here" })}
            >
              There isn't enough sugar here
            </span>
            <p> not enough sugar here</p>
            <span
              onClick={() =>
                speak({ text: " There aren't girls in this class" })
              }
            >
              There aren't girls in this class
            </span>
            <p> There aren't girls in this class</p>
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
        <p>Let's look at some examples:</p>
        <div className="row">
          <div className="col-md-2 greybox mx-auto">
            <span onClick={() => speak({ text: " There isn't any:" })}>
              There isn't any:
            </span>
            <span
              onClick={() => speak({ text: " There isn't any sugar here" })}
            >
              There isn't any sugar here
            </span>
            <p>there is no sugar here</p>
            <span
              onClick={() =>
                speak({ text: " There isn't any treatment for this disease" })
              }
            >
              There isn't any treatment for this disease
            </span>
            <p>TThere is no treatment for this disease </p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <span onClick={() => speak({ text: " There's no:" })}>
              There's no:
            </span>
            <span onClick={() => speak({ text: " There's no sugar here" })}>
              There's no sugar here
            </span>

            <p>there is no sugar here</p>
            <span
              onClick={() =>
                speak({ text: " There's no treatment for this disease" })
              }
            >
              There's no treatment for this disease
            </span>
            <p>There is no treatment for this disease </p>
          </div>
        </div>
        <p>
          Also, instead of saying there aren't any , we can say there are no and
          the meaning is exactly the same: “ no hay ”. So we must remember:
        </p>
        <p>There aren't any = there are no = there is no</p>
        <p>Let's look at some examples:</p>
        <div className="row">
          <div className="col-md-2 greybox mx-auto">
            <span onClick={() => speak({ text: " There isn't any:" })}>
              There isn't any:
            </span>
            <span
              onClick={() => speak({ text: " There isn't any sugar here" })}
            >
              There isn't any sugar here
            </span>
            <p>there is no sugar here</p>
            <span
              onClick={() =>
                speak({ text: " There isn't any treatment for this disease" })
              }
            >
              There isn't any treatment for this disease
            </span>
            <p>TThere is no treatment for this disease </p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <span onClick={() => speak({ text: " There's no:" })}>
              There's no:
            </span>
            <span onClick={() => speak({ text: " There's no sugar here" })}>
              There's no sugar here
            </span>

            <p>there is no sugar here</p>
            <span
              onClick={() =>
                speak({ text: " There's no treatment for this disease" })
              }
            >
              There's no treatment for this disease
            </span>
            <p>There is no treatment for this disease </p>
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
          If we want to convert the expressions{" "}
          <span onClick={() => speak({ text: "there is" })}>There is </span> and
          <span onClick={() => speak({ text: "there are" })}>
            There are{" "}
          </span>{" "}
          to a question, all we have to do is put the verb{" "}
          <span onClick={() => speak({ text: "to be" })}>to be </span> ( is /
          are ) at the beginning. We do this because when we use the verb to be
          in questions, we put it at the beginning of the sentence. And since we
          already know that{" "}
          <span onClick={() => speak({ text: "there" })}>there</span> has the
          verb to be ( is / are ), then we use the same rule. Let's see:
        </p>
        <p>There is = is there? = is there?</p>
        <p>There are = are there? = is there?</p>
        <p>
          Here are some examples to understand how there is / there are are used
          in questions:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: " Is there a girl in the group?" })}
          >
            Is there a girl in the group?
          </span>
          <p>Is there a girl in the group? </p>
          <span
            onClick={() =>
              speak({ text: " Is there any juice in the fridge?" })
            }
          >
            Is there any juice in the fridge?
          </span>
          <p> Is there any juice in the fridge?</p>
          <span
            onClick={() =>
              speak({ text: " Is there any milk in the kitchen?" })
            }
          >
            Is there any milk in the kitchen?
          </span>
          <p>Is there any milk in the kitchen? </p>
          <span
            onClick={() =>
              speak({ text: " Is there any milk in the kitchen?" })
            }
          >
            Is there any milk in the kitchen?
          </span>
          <p> Is there any milk in the kitchen?</p>
          <span
            onClick={() =>
              speak({ text: "Are there any reporters in the room? " })
            }
          >
            Are there any reporters in the room?
          </span>
          <p> Are there any reporters in the room?</p>
          <span
            onClick={() =>
              speak({ text: "Are there any apples in the basket? " })
            }
          >
            Are there any apples in the basket?
          </span>
          <p> Are there any apples in the basket?</p>
          <span onClick={() => speak({ text: "Are there any taxis? " })}>
            Are there any taxis?
          </span>
          <p> Are there any taxis?</p>
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
          Let's look at these examples answering some of the questions above:
        </p>

        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({
                text: " Is there any juice in the fridge? - No, there is not",
              })
            }
          >
            Is there any juice in the fridge? - No, there is not
          </span>
          <p> Is there any juice in the fridge? - No, there is not</p>
          <span
            onClick={() =>
              speak({
                text: " Is there any milk in the kitchen - No, there isn't",
              })
            }
          >
            Is there any milk in the kitchen - No, there isn't
          </span>
          <p> Is there any milk in the kitchen - No, there isn't </p>
          <span
            onClick={() =>
              speak({
                text: "Are there any reporters in the room? - Yes, there are ",
              })
            }
          >
            Are there any reporters in the room? - Yes, there are
          </span>
          <p> Are there any reporters in the room? - Yes, there are</p>
          <span
            onClick={() =>
              speak({
                text: " Are there any apples in the basket? - No, there aren't (there are not)",
              })
            }
          >
            Are there any apples in the basket? - No, there aren't (there are
            not)
          </span>
          <p>
            {" "}
            Are there any apples in the basket? - No, there aren't (there are
            not)
          </p>
          <span
            onClick={() =>
              speak({ text: " Are there any taxis? - Yes, there are" })
            }
          >
            Are there any taxis? - Yes, there are
          </span>
          <p>Are there any taxis? - Yes, there are </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};

export const Page6 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In lesson 22 we saw how to use adjectives correctly. Now, we will
          learn more adjectives and vocabulary to describe food, weather,
          people, cities, and houses. Let's see:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "yummy " })}>yummy</span>
          <p>yummy </p>
          <span onClick={() => speak({ text: " spicy" })}>spicy</span>
          <p> spicy</p>
          <span onClick={() => speak({ text: " bland" })}>bland</span>
          <p> Soft smooth</p>
          <span onClick={() => speak({ text: "Healthy " })}>Healthy</span>
          <p> Healthy</p>
          <span onClick={() => speak({ text: "wet " })}>wet</span>
          <p> wet</p>
          <span onClick={() => speak({ text: "freezing " })}>freezing</span>
          <p> Ice cream</p>
          <span onClick={() => speak({ text: " changeable" })}>changeable</span>
          <p> changeable</p>
          <span onClick={() => speak({ text: " Windy" })}>Windy</span>
          <p>Windy </p>
          <span onClick={() => speak({ text: "welcome " })}>welcome</span>
          <p> welcome</p>
          <span onClick={() => speak({ text: "helpfull " })}>helpfull</span>
          <p> helpfull</p>
          <span onClick={() => speak({ text: " relaxed" })}>relaxed</span>
          <p> relaxed</p>
          <span onClick={() => speak({ text: " reserved" })}>reserved</span>
          <p> reserved</p>
          <span onClick={() => speak({ text: "Dangerous " })}>Dangerous</span>
          <p>Dangerous </p>

          <span onClick={() => speak({ text: "cosmopolitan " })}>cosmopolitan</span>
          <p>Cosmopolitan (a place full of people, places and food from different countries)

          </p>

          <span onClick={() => speak({ text: "tourism " })}>tourism</span>
          <p>tourism </p>

          
          <span onClick={() => speak({ text: "crowded " })}>crowded</span>
          <p>crowded </p>

          <span onClick={() => speak({ text: "polluted " })}>polluted</span>
          <p>polluted </p>

          <span onClick={() => speak({ text: "Industrial " })}>Industrial</span>
          <p>Industrial  </p>

          <span onClick={() => speak({ text: "unusual " })}>unusual</span>
          <p>unusual </p>

          <span onClick={() => speak({ text: "Typical " })}>Typical</span>
          <p>Typical </p>

        </div>
      </div>
    </div>
  );
};
