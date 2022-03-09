import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn how to offer something politely, that is,
          in a polite or formal way.
        </p>
        <p>
          In English, to offer something politely we use the following phrase:
        </p>
        Let's look at some examples:
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: " Do you want a cup of coffee ? - Yes, I do" })
            }
          >
            Do you want a cup of coffee ? - Yes, I do
          </span>
          <p> Do you want a cup of coffee ? - Yes, I do</p>
          <span
            onClick={() =>
              speak({ text: " Do you want some cookies ? - No, I don't" })
            }
          >
            Do you want some cookies ? - No, I don't
          </span>
          <p>Do you want some cookies? - No, I do not want to</p>

          <span
            onClick={() =>
              speak({ text: " Do you want a glass of milk ? - Yes, please" })
            }
          >
            Do you want a glass of milk ? - Yes, please
          </span>
          <p>Do you want a glass of milk ? - Yes, please </p>
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
          In fact, when we are in a restaurant, the waiter uses the word would ,
          because it is a very formal occasion. Let's look at this tiny example
          of a conversation between a waiter and a diner:
        </p>
        <div className="col-md-2 greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Would you like to order? " })}>
            Would you like to order?
          </span>
          <p>Would you like to order? </p>
          <span onClick={() => speak({ text: "Would you like to order? " })}>
            Would you like to order?
          </span>
          <p> Would you like to order?</p>
        </div>
        <p>
          As we could see, when we order something in a restaurant, I'll have
          means “(I) want” (and not “I will have”, which is its usual meaning).
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
          Since we are talking about food and drinks, we will learn to talk
          about the most common foods and cooking items:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Aubergine " })}>Aubergine </span>
          <p>Eggplant (in British English)</p>
          <span onClick={() => speak({ text: "egg plant " })}> egg plant</span>
          <p>Eggplant (in American English)</p>
          <span onClick={() => speak({ text: " banana" })}> banana</span>
          <p>Bananas / Bananas</p>
          <span onClick={() => speak({ text: " bread" })}>bread </span>
          <p>bread</p>
          <span onClick={() => speak({ text: "broccoli " })}> broccoli</span>
          <p>broccoli</p>
          <span onClick={() => speak({ text: " beef" })}> beef</span>
          <p>Meat</p>
          <span onClick={() => speak({ text: " beans" })}> beans</span>
          <p>beans</p>
          <span onClick={() => speak({ text: " Eggs" })}>Eggs </span>
          <p>Eggs</p>
          <span onClick={() => speak({ text: " toast" })}>toast </span>
          <p>toast</p>
          <span onClick={() => speak({ text: " Sausages" })}> Sausages</span>
          <p>Sausages</p>
          <span onClick={() => speak({ text: "soup " })}> soup</span>
          <p>soup</p>
          <span onClick={() => speak({ text: " orange-juice" })}>
            {" "}
            orange-juice
          </span>
          <p>orange-juice</p>
          <span onClick={() => speak({ text: " red-pepper" })}>
            {" "}
            red-pepper
          </span>
          <p>red-pepper</p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p></p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p></p>

          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
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
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "StovesStoves " })}>Stoves </span>
          <p>Stove (in American English)</p>
          <span onClick={() => speak({ text: " rubish bin" })}>
            {" "}
            rubish bin
          </span>
          <p>Rubbish bin (in British English)</p>

          <span onClick={() => speak({ text: " Garbage can" })}>
            Garbage can
          </span>
          <p>Garbage container (in American English)</p>

          <span onClick={() => speak({ text: "Grill " })}>Grill</span>
          <p>Grill</p>

          <span onClick={() => speak({ text: "oven " })}> oven</span>
          <p>Kiln </p>

          <span onClick={() => speak({ text: "Microwave " })}>Microwave </span>
          <p>Microwave</p>

          <span onClick={() => speak({ text: "Saucepan " })}>Saucepan </span>
          <p>Pan</p>

          <span onClick={() => speak({ text: "frying pan " })}>
            frying pan{" "}
          </span>
          <p>Pan</p>

          <span onClick={() => speak({ text: " Steam" })}>Steam </span>
          <p>Steam</p>

          <span onClick={() => speak({ text: " wok" })}>wok </span>
          <p>Wok (a type of deep pan)</p>

          <span onClick={() => speak({ text: " " })}> </span>
          <p></p>

          <span onClick={() => speak({ text: " " })}> </span>
          <p></p>

          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};
