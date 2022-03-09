import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will learn about adverbs; Adverbs tell us something
          about the verb of a sentence: they indicate how someone does something
          or how something happens.
        </p>
        <p>There are 7 types of adverbs:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Adverbs of manner " })}>
            Adverbs of manner{" "}
          </span>
          <p>Adverbs of manner </p>
          <span onClick={() => speak({ text: "Adverbs of place " })}>
            Adverbs of place{" "}
          </span>
          <p> Adverbs of place</p>
          <span onClick={() => speak({ text: " Adverbs of time" })}>
            {" "}
            Adverbs of time
          </span>
          <p> Adverbs of time</p>
          <span onClick={() => speak({ text: "Adverbs of probability " })}>
            Adverbs of probability{" "}
          </span>
          <p> Adverbs of probability</p>
          <span onClick={() => speak({ text: " Adverbs of frequency" })}>
            {" "}
            Adverbs of frequency
          </span>
          <p> Adverbs of frequency</p>
          <span onClick={() => speak({ text: " conjunctive adverbs" })}>
            {" "}
            conjunctive adverbs
          </span>
          <p> conjunctive adverbs</p>
          <span onClick={() => speak({ text: "Adverbs of quantity " })}>
            {" "}
            Adverbs of quantity
          </span>
          <p> Adverbs of quantity</p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
        </div>
        <p>
          In this lesson, we will look at adverbs of manner, place, and time.
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
          Adverbs of manner tell us how something happens. Let's see this
          examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " Sarah runs quickly" })}>
            Sarah runs quickly{" "}
          </span>
          <p>
            Sarah runs fast (the adverb{" "}
            <span onClick={() => speak({ text: "quickly" })}>quickly</span> is
            telling us which way Sarah runs){" "}
          </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
        </div>
        <p>
          Generally, we form adverbs of manner by adding the letters “ ly ” to
          the end of some adjectives. Here are some examples:
        </p>
        <div className="row">
          <div
            className=" col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>Adjective:</p>
            <span onClick={() => speak({ text: " Blind" })}> Blind</span>
            <p> Blind</p>
            <span onClick={() => speak({ text: " bold" })}> bold</span>
            <p> bold</p>
            <span onClick={() => speak({ text: "Close " })}> Close</span>
            <p> Near</p>
            <span onClick={() => speak({ text: " right" })}>right </span>
            <p> Correct</p>
            <span onClick={() => speak({ text: " Quick" })}>Quick </span>
            <p> Fast</p>
            <span onClick={() => speak({ text: " Clear" })}> Clear</span>
            <p>Of course </p>
            <span onClick={() => speak({ text: " seriously" })}>
              {" "}
              seriously
            </span>
            <p> I laughed</p>
            <span onClick={() => speak({ text: "careful " })}>careful </span>
            <p> careful</p>
            <span onClick={() => speak({ text: " " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}> </span>
            <p> </p>
          </div>
          <div
            className=" col-md-2 greybox mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>Adverb of manner:</p>
            <span onClick={() => speak({ text: " blindly" })}> blindly</span>
            <p> blindly</p>
            <span onClick={() => speak({ text: " Boldly" })}> Boldly</span>
            <p> Boldly</p>
            <span onClick={() => speak({ text: "Closely " })}> Closely</span>
            <p> Closely</p>
            <span onClick={() => speak({ text: " correctly" })}>
              correctly{" "}
            </span>
            <p> correctly</p>
            <span onClick={() => speak({ text: " quickly" })}>quickly </span>
            <p> quickly</p>
            <span onClick={() => speak({ text: " clearly" })}> clearly</span>
            <p> clearly </p>
            <span onClick={() => speak({ text: " Seriously" })}>
              {" "}
              Seriously
            </span>
            <p> Seriously</p>
            <span onClick={() => speak({ text: "carefully" })}>carefully</span>
            <p> carefully</p>
            <span onClick={() => speak({ text: " " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}> </span>
            <p> </p>
            <span onClick={() => speak({ text: " " })}> </span>
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
          Adverbs of manner are usually placed after the verb. Let's look at the
          following examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " She walks blindly" })}>
            She walks blindly
          </span>
          <p>She walks blindly</p>
          <span onClick={() => speak({ text: "He talks boldly " })}>
            {" "}
            He talks boldly
          </span>
          <p>He talks boldly </p>
          <span onClick={() => speak({ text: "We sing closely " })}>
            {" "}
            We sing closely
          </span>
          <p> We sing closely</p>
          <span onClick={() => speak({ text: " They speak correctly" })}>
            {" "}
            They speak correctly
          </span>
          <p> They speak correctly</p>
          <span onClick={() => speak({ text: " We run quickly" })}>
            {" "}
            We run quickly
          </span>
          <p>We run fast (we could also say "we run fast") </p>
          <span onClick={() => speak({ text: " I see clearly" })}>
            I see clearly{" "}
          </span>
          <p> I see clearly</p>
          <span onClick={() => speak({ text: "You need to drive carefully " })}>
            {" "}
            You need to drive carefully
          </span>
          <p>You need to drive carefully </p>
          <span
            onClick={() =>
              speak({ text: " She is speaking seriously about her allergies" })
            }
          >
            She is speaking seriously about her allergies{" "}
          </span>
          <p>She is speaking seriously about her allergies </p>
          <span
            onClick={() =>
              speak({ text: "My kids were playing happily in the kitchen " })
            }
          >
            {" "}
            My kids were playing happily in the kitchen
          </span>
          <p> My kids were playing happily in the kitchen</p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
        </div>
        <b>
          If an adjective ends with the letter “y”, we can convert it to an
          adverb by changing the final “y” to “i”, and then adding the letters
          “ly”:
        </b>
        <br />

        <div className="greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " Easy - easily" })}>
            {" "}
            Easy - easily
          </span>
          <p> Easy - easily</p>
          <span onClick={() => speak({ text: " Angry - angrily" })}>
            {" "}
            Angry - angrily
          </span>
          <p> furious - furiously</p>
          <span onClick={() => speak({ text: "Happy - happily " })}>
            {" "}
            Happy - happily
          </span>
          <p> Happy - happily</p>
          <span onClick={() => speak({ text: " Lucky - luckily" })}>
            Lucky - luckily{" "}
          </span>
          <p> Lucky - luckily</p>
          <span onClick={() => speak({ text: " Heavy-heavily" })}>
            Heavy-heavily{" "}
          </span>
          <p> Heavy-heavily</p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
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
        <p>Let's see some of these adverbs in action:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "She's singing angrily " })}>
            {" "}
            She's singing angrily
          </span>
          <p>She's singing angrily </p>
          <span
            onClick={() => speak({ text: "We live happily in the country " })}
          >
            {" "}
            We live happily in the country
          </span>
          <p>We live happily in the country </p>
          <span onClick={() => speak({ text: "They're writing easily " })}>
            {" "}
            They're writing easily
          </span>
          <p>They're writing easily </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
        </div>
        <b>
          When an adjective in English ends with the letters “ble”, we turn it
          into an adverb by simply omitting the final “e” and adding the letter
          “y”:
        </b>
        <br />

        <div className="greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " Terrible - Terribly" })}>
            Terrible - Terribly{" "}
          </span>
          <p> Terrible - Terribly</p>
          <span onClick={() => speak({ text: "Likely - Likely " })}>
            Likely - Likely{" "}
          </span>
          <p> Likely - Likely</p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
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
          There are some irregular adverbs that do not have “ ly ” at the end.
          Here are some examples:
        </p>

        <div className="row">
          <div
            className="greybox col-md-2 mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>Adjective:</p>
            <span onClick={() => speak({ text: "Good " })}> Good</span>
            <p>Well </p>
            <span onClick={() => speak({ text: "Fast " })}>Fast </span>
            <p>Fast </p>
            <span onClick={() => speak({ text: "Hard " })}> Hard</span>
            <p> Lasted</p>
            <span onClick={() => speak({ text: " beats" })}> beats</span>
            <p>Afternoon </p>
          </div>
          <div
            className="greybox col-md-2 mx-auto"
            style={{ marginLeft: "30%" }}
          >
            <p>Adverb:</p>
            <span onClick={() => speak({ text: "Well " })}> Well</span>
            <p>Well </p>
            <span onClick={() => speak({ text: "Fast " })}>Fast </span>
            <p>Quickly </p>
            <span onClick={() => speak({ text: "Hard " })}> Hard</span>
            <p> Lasted</p>
            <span onClick={() => speak({ text: " beats" })}> beats</span>
            <p>Afternoon </p>
          </div>
        </div>
        <p>
          Not only adverbs have " ly ". There are also some adjectives that end
          with the letters “ ly ” such as the following:
        </p>
        <div className="greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Friendly " })}> Friendly</span>
          <p>Friendly </p>
          <span onClick={() => speak({ text: "Lively " })}>Lively </span>
          <p>Animated </p>
          <span onClick={() => speak({ text: "lonely " })}> lonely</span>
          <p> lonely</p>
          <span onClick={() => speak({ text: " silly" })}> silly</span>
          <p>Fool </p>
          <span onClick={() => speak({ text: " lovely" })}> lovely</span>
          <p>lovely </p>
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
          We use adverbs of place to indicate where something happens. These
          adverbs are placed after the verb or the complement of the sentence.
          The most common adverbs of place are:
        </p>

        <div className="greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Above " })}> Above</span>
          <p>Above </p>
          <span onClick={() => speak({ text: "abroad  " })}>abroad </span>
          <p>abroad </p>
          <span onClick={() => speak({ text: "anywhere " })}> anywhere</span>
          <p> Anywhere / nowhere (when the sentence is negative)</p>
          <span onClick={() => speak({ text: " away" })}> away</span>
          <p>Far </p>
          <span onClick={() => speak({ text: " Back" })}> Back</span>
          <p> Behind </p>
          <span onClick={() => speak({ text: "Backward / Backward " })}>
            {" "}
            Backward / Backwardsâ€‹â€‹
          </span>
          <p> Backward</p>
          <span onClick={() => speak({ text: " behind " })}>behind </span>
          <p>behind </p>
          <span onClick={() => speak({ text: " Below " })}> Below </span>
          <p> Below </p>
          <span onClick={() => speak({ text: " DOWN" })}>DOWN. </span>
          <p>Down </p>
          <span onClick={() => speak({ text: " Downstairs" })}>
            {" "}
            Downstairs
          </span>
          <p> Downstairs</p>
          <span onClick={() => speak({ text: "here " })}> here</span>
          <p>here </p>
          <span onClick={() => speak({ text: "indoor " })}> indoor</span>
          <p>indoor </p>
          <span onClick={() => speak({ text: "Inside " })}> Inside</span>
          <p> Inside</p>
          <span onClick={() => speak({ text: " near" })}> near</span>
          <p> near</p>
          <span onClick={() => speak({ text: " Nearby" })}>Nearby </span>
          <p> Nearby</p>
          <span onClick={() => speak({ text: "Outside " })}> Outside</span>
          <p>Out /out</p>
          <span onClick={() => speak({ text: "there  " })}>there </span>
          <p>there </p>
          <span onClick={() => speak({ text: "Under   " })}>Under </span>
          <p> Under </p>
          <span onClick={() => speak({ text: " upstairs " })}> upstairs </span>
          <p> (on the floor above)</p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};

export const Page7 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>Let’s see some examples with these adverbs:</p>

        <div className="greybox mx-auto" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Maria lives above " })}> Maria lives above</span>
          <p>Maria lives upstairs </p>
          <span onClick={() => speak({ text: "I had to travel abroad  " })}>I had to travel abroad </span>
          <p>I had to travel abroad </p>
          <span onClick={() => speak({ text: "I can't see you anywhere " })}> I can't see you anywhere</span>
          <p> I can't see you anywhere</p>
          <span onClick={() => speak({ text: " Don't go away" })}> Don't go away</span>
          <p>Don't go away </p>
          <span onClick={() => speak({ text: " I have to go back" })}> I have to go back</span>
          <p> I have to go back </p>
          <span onClick={() => speak({ text: "She walks backwards " })}>
            {" "}
            She walks backwards
          </span>
          <p> She walks backwards</p>
          <span onClick={() => speak({ text: " They're behind you " })}>They're behind you </span>
          <p>They're behind you </p>
          <span onClick={() => speak({ text: " My interest rate is below 3% " })}> My interest rate is below 3% </span>
          <p> My interest rate is below 3% </p>
          <span onClick={() => speak({ text: " Jenna looked down" })}>Jenna looked down. </span>
          <p>Jenna looked down </p>
          <span onClick={() => speak({ text: " Gina, eat downstairs" })}>
            {" "}
            Gina, eat downstairs
          </span>
          <p> Gina, eat downstairs</p>
          <span onClick={() => speak({ text: "i live here " })}> i live here</span>
          <p>i live here </p>
          <span onClick={() => speak({ text: "The toy has to be used indoors " })}> The toy has to be used indoors</span>
          <p>The toy has to be used indoors(the house) </p>
          <span onClick={() => speak({ text: "You have to come inside " })}> You have to come inside</span>
          <p> You have to come inside</p>
          <span onClick={() => speak({ text: " Your house is near my house" })}> Your house is near my house</span>
          <p> Your house is near my house</p>
          <span onClick={() => speak({ text: " There's a grocery store nearby" })}>NeaThere's a grocery store nearbyrby </span>
          <p> There's a grocery store nearby</p>
          <span onClick={() => speak({ text: "Don't go outside " })}> Don't go outside</span>
          <p>Don't go outside</p>
          <span onClick={() => speak({ text: "My book is right there  " })}>My book is right there </span>
          <p>My book is right there </p>
          <span onClick={() => speak({ text: "Your book is under the table   " })}>Your book is under the table </span>
          <p> Your book is under the table </p>
        <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}> </span>
          <p> </p>
        </div>
      </div>
    </div>
  );
};
