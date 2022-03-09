import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          Prepositions are words that indicate the origin, destination, moment,
          place, etc., of something or a person. In this lesson we will look at
          prepositions of place and motion.
        </p>
        <p>
          First, we will talk about prepositions of place , which indicate the
          position of something or someone. The most common prepositions of
          place are the following:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "By" })}>By</span>
          <p> Next to </p>
          <span onClick={() => speak({ text: "Next to" })}>Next to</span>
          <p>Next to </p>
          <span onClick={() => speak({ text: "next" })}>next</span>
          <p> next</p>
          <span onClick={() => speak({ text: "near" })}>near</span>
          <p> near</p>
          <span onClick={() => speak({ text: "Between" })}>Between</span>
          <p> Between </p>
          <span onClick={() => speak({ text: "behind" })}>behind</span>
          <p> behind</p>
          <span onClick={() => speak({ text: "in front of" })}>
            in front of
          </span>
          <p> in front of</p>
          <span onClick={() => speak({ text: "Under" })}>Under</span>
          <p> Under</p>
          <span onClick={() => speak({ text: "Below" })}>Below</span>
          <p> Below</p>
          <span onClick={() => speak({ text: "Over" })}>Over</span>
          <p> Over</p>
          <span onClick={() => speak({ text: "Opposite" })}>Opposite</span>
          <p> Opposite</p>
          <span onClick={() => speak({ text: "Above" })}>Above</span>
          <p> Above</p>
          <span onClick={() => speak({ text: "across" })}>across</span>
          <p> across</p>
          <span onClick={() => speak({ text: "Through" })}>Through</span>
          <p>Through </p>
          <span onClick={() => speak({ text: "desde" })}>desde</span>
          <p> from</p>
          <span onClick={() => speak({ text: "" })}></span>
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
          Usually, we put prepositions after a verb, especially after the verb
          to be (although it can be any other verb). Here are examples of these
          prepositions in action:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() => speak({ text: "The mall is in front of my house" })}
          >
            The mall is in front of my house
          </span>
          <p> The mall is in front of my house </p>
          <span
            onClick={() => speak({ text: "This present is from me to you" })}
          >
            This present is from me to you
          </span>
          <p>This present is from me to you </p>
          <span onClick={() => speak({ text: "Let's walk across that river" })}>
            Let's walk across that river
          </span>
          <p> Let's walk across that river</p>
          <span onClick={() => speak({ text: "Her apartment is above mine" })}>
            Her apartment is above mine
          </span>
          <p> Her apartment is above mine</p>
          <span onClick={() => speak({ text: "My book is over the table" })}>
            My book is over the table
          </span>
          <p> My book is over the table </p>
          <span onClick={() => speak({ text: "My wallet is under the bed" })}>
            My wallet is under the bedind
          </span>
          <p> My wallet is under the bed</p>
          <span
            onClick={() => speak({ text: "That tiger was right behind you" })}
          >
            That tiger was right behind you
          </span>
          <p> That tiger was right behind you</p>
          <span
            onClick={() => speak({ text: "That tiger was right behind you" })}
          >
            That tiger was right behind you
          </span>
          <p> That tiger was right behind you</p>
          <span
            onClick={() =>
              speak({ text: "Sam gets nervous when Jessica is near him" })
            }
          >
            Sam gets nervous when Jessica is near him
          </span>
          <p> Sam gets nervous when Jessica is near him</p>
          <span
            onClick={() =>
              speak({ text: "Guess who was beside me at the mall?" })
            }
          >
            Guess who was beside me at the mall?
          </span>
          <p> Guess who was beside me at the mall?</p>
          <span onClick={() => speak({ text: "He lives next to the theater" })}>
            He lives next to the theater
          </span>
          <p> He lives next to the theater</p>
          <span onClick={() => speak({ text: "Sarah sits by me in my class" })}>
            Sarah sits by me in my class
          </span>
          <p> Sarah sits by me in my class</p>

          <span onClick={() => speak({ text: "" })}></span>
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
          Prepositions of movement indicate some kind of change of position.
          Let's see:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "across" })}>across</span>
          <p> across</p>
          <span onClick={() => speak({ text: "Along" })}>Along</span>
          <p> Along</p>
          <span onClick={() => speak({ text: "Around" })}>Around</span>
          <p>Around </p>
          <span onClick={() => speak({ text: "away from" })}>away from</span>
          <p> away from</p>
          <span onClick={() => speak({ text: "Back to" })}>Back to</span>
          <p> Back to</p>
          <span onClick={() => speak({ text: "DOWN" })}>DOWN</span>
          <p> DOWN</p>
          <span onClick={() => speak({ text: "in / into" })}>in / into</span>
          <p>in / into </p>
          <span onClick={() => speak({ text: "Off" })}>Off</span>
          <p>
            {" "}
            Outside of (often, off is not translated literally, it only gives
            the idea that "we leave, finish or turn off something")
          </p>
          <span onClick={() => speak({ text: "On  / onto" })}>On / onto</span>
          <p> In an envelope</p>
          <span onClick={() => speak({ text: "Out of" })}>Out of</span>
          <p>Out of </p>
          <span onClick={() => speak({ text: "Over" })}>Over</span>
          <p>Over </p>
          <span onClick={() => speak({ text: "past" })}>past</span>
          <p> past</p>

          <span onClick={() => speak({ text: "Through" })}>Through</span>
          <p> Through</p>
          <span onClick={() => speak({ text: "To / towards " })}>
            To / towards{" "}
          </span>
          <p> To / towards </p>

          <span onClick={() => speak({ text: "Under" })}>Under</span>
          <p> Under</p>
          <span onClick={() => speak({ text: "Up" })}>Up</span>
          <p> Above</p>
          <span onClick={() => speak({ text: "" })}></span>
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
        <p>Let's look at some examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "We walked across the road" })}>
            We walked across the road
          </span>
          <p> We walked across the road</p>
          <span
            onClick={() =>
              speak({ text: "Sarah runs along the road every day" })
            }
          >
            Sarah runs along the road every day
          </span>
          <p> Sarah runs along the road every day</p>
          <span
            onClick={() =>
              speak({ text: "Sarah runs on the side of the road every day" })
            }
          >
            Sarah runs on the side of the road every day
          </span>
          <p>Sarah runs on the side of the road every day </p>
          <span
            onClick={() => speak({ text: "They played around the playground" })}
          >
            They played around the playground
          </span>
          <p> They played around the playground</p>
          <span
            onClick={() => speak({ text: "We walked away from the policemen" })}
          >
            We walked away from the policemen
          </span>
          <p> We walked away from the policemen</p>
          <span
            onClick={() =>
              speak({ text: "Let's go back to the grocery store" })
            }
          >
            Let's go back to the grocery store
          </span>
          <p> Let's go back to the grocery store</p>
          <span onClick={() => speak({ text: "We drove down the hill" })}>
            {" "}
            We drove down the hill
          </span>
          <p>We drove down the hill </p>
          <span
            onClick={() => speak({ text: "Let's walk into the room, honey!" })}
          >
            Let's walk into the room, honey!
          </span>
          <p>Let's walk into the room, honey!</p>
          <span
            onClick={() =>
              speak({ text: "You need to get off the stage, young lady" })
            }
          >
            You need to get off the stage, young lady
          </span>
          <p> You need to get off the stage, young lady</p>
          <span onClick={() => speak({ text: "Put some jam onto your bread" })}>
            Put some jam onto your bread
          </span>
          <p>Put some jam onto your bread</p>
          <span
            onClick={() => speak({ text: "Get out of my theater, young man" })}
          >
            Get out of my theater, young man
          </span>
          <p>Get out of my theater, young man </p>
          <span
            onClick={() =>
              speak({ text: "You need to drive past the station" })
            }
          >
            You need to drive past the station
          </span>
          <p> You need to drive past the station</p>

          <span
            onClick={() =>
              speak({ text: "Don't go through that tunnel, it's creepy" })
            }
          >
            Don't go through that tunnel, it's creepy
          </span>
          <p> Don't go through that tunnel, it's creepy</p>
          <span onClick={() => speak({ text: "To / towards " })}>
            To / towards{" "}
          </span>
          <p> To / towards </p>

          <span
            onClick={() => speak({ text: "My mom always looks to the door" })}
          >
            My mom always looks to the door
          </span>
          <p> My mom always looks to the door</p>
          <span onClick={() => speak({ text: "Your book is under the table" })}>
            Your book is under the table
          </span>
          <p> Your book is under the table</p>
          <span
            onClick={() => speak({ text: "Your ship can sail on the sea" })}
          >
            Your ship can sail on the sea
          </span>
          <p> Your ship can sail on the sea</p>
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
          In the video for this lesson, we talk about how to get to places. For
          this reason, right now we will see how to give directions to find
          somewhere. Let's look at this little conversation between Bob and Tom:
          :
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "  Do you know where John's house is?" })
            }
          >
            {" "}
            Do you know where John's house is?
          </span>
          <p>
            <b>Tom :</b> Do you know where John's house is?
          </p>
          <span
            onClick={() =>
              speak({
                text: " Yes, you need to go along this road and turn left on the corner",
              })
            }
          >
            Yes, you need to go along this road and turn left on the corner
          </span>
          <p>
            <b>Bob :</b>Yes, you need to go along this road and turn right on
            the corner{" "}
          </p>
          <span onClick={() => speak({ text: " okay" })}>okay</span>
          <p>
            <b>Tom :</b>Its fine{" "}
          </p>
          <span onClick={() => speak({ text: " Then go over the bridge" })}>
            Then go over the bridge
          </span>
          <p>
            <b>Bob :</b> Then go over the bridge
          </p>
          <span onClick={() => speak({ text: "  okay " })}> okay</span>
          <p>
            <b>Tom :</b>Its Fine{" "}
          </p>
          <span
            onClick={() =>
              speak({
                text: " After that, go past the mall, and John's house will be on your left , opposite Mary's shop",
              })
            }
          >
            After that, go past the mall, and John's house will be on your left
            , opposite Mary's shop
          </span>
          <p>
            <b>Bob :</b>{" "}After that, go past the mall, and John's house will be on your left , opposite Mary's shop
          </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p>
            <b></b>{" "}
          </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p>
            <b></b>{" "}
          </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p>
            <b></b>{" "}
          </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p>
            <b></b>{" "}
          </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p>
            <b></b>{" "}
          </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p>
            <b></b>{" "}
          </p>
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
         
          <div className="greybox" style={{ marginLeft: "30%" }}>
            
            <span onClick={() => speak({ text: " to kiosk" })}>to kiosk</span>
            <p>
            to kiosk
            </p>
            <span onClick={() => speak({ text: " to newsagent" })}>to newsagent</span>
            <p>
            a magazine stand
            </p>
            <span onClick={() => speak({ text: " A butcher shop" })}>A butcher shop</span>
            <p>
            A butcher shop
            </p>
            <span onClick={() => speak({ text: " to bakery" })}>to bakery</span>
            <p>
            to bakery
            </p>
            <span onClick={() => speak({ text: " A department store" })}>A department store</span>
            <p>
            A department store
            </p>
            <span onClick={() => speak({ text: " to post office" })}>to post office</span>
            <p>
            to post office
            </p>
          </div>
        </div>
      </div>
    );
  };
  