import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>The object pronouns are the following:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I " })}> I </span>
          <p> me / me / me</p>
          <span onClick={() => speak({ text: "You " })}> You </span>
          <p> to you / you / you</p>
          <span onClick={() => speak({ text: "Him" })}> Him</span>
          <p> to him/her/it</p>
          <span onClick={() => speak({ text: "Her " })}> Her </span>
          <p> to her/him/her</p>
          <span onClick={() => speak({ text: "Item " })}> Item </span>
          <p> To that / to it / him / it / the</p>
          <span onClick={() => speak({ text: "Us " })}> Us </span>
          <p> We / us / us</p>
          <span onClick={() => speak({ text: "You " })}> You </span>
          <p> To you</p>
          <span onClick={() => speak({ text: "Them " })}> Them </span>
          <p> (To) them / (to) them / them / them / them</p>
        </div>
        <p>
          As their name implies, these pronouns are the “ object ” of the
          sentence, that is, they tell us who the verb indicates refers to. We
          ALWAYS place these pronouns after the verb. Here we have an example to
          understand perfectly:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Sarah loves you" })}>
            {" "}
            Sarah loves you
          </span>
          <p> Sarah loves you</p>
        </div>
        <p>
          <b>
            In the sentence above,{" "}
            <span onClick={() => speak({ text: "Sarah" })}>Sarah</span> is the
            subject of the sentence.
          </b>
        </p>
        <p>
          <b>
            The verb is{" "}
            <span onClick={() => speak({ text: "Loves" })}>Loves</span> , and it
            is what the subject,{" "}
            <span onClick={() => speak({ text: "Sarah" })}>Sarah</span> , does.
          </b>
        </p>
        <p>
          <b>
            <span onClick={() => speak({ text: "You" })}>You</span> is the
            object of the sentence, and it is the one{" "}
            <span onClick={() => speak({ text: "Sarah" })}>Sarah</span> loves.
          </b>
        </p>
        <p>
          So, the object pronoun tells us who what the subject does refers to,
          which in this case, is who what Sarah does refers to.
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
        <p>Let's look at several examples to fully understand:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I have slaps me " })}>
            {" "}
            I have slaps me{" "}
          </span>
          <p> He slaps me (me)</p>
          <span onClick={() => speak({ text: "she calls me" })}>
            {" "}
            she calls me
          </span>
          <p> she calls me (to me)</p>
          <span onClick={() => speak({ text: "Him" })}> Him</span>
          <p> to him/her/it</p>
          <span onClick={() => speak({ text: "Her " })}> Her </span>
          <p> to her/him/her</p>
          <span onClick={() => speak({ text: "i love him " })}>
            {" "}
            i love him{" "}
          </span>
          <p> i love him</p>
          <span onClick={() => speak({ text: "mike beats her " })}>
            {" "}
            mike beats her{" "}
          </span>
          <p> mike beats her</p>
          <span onClick={() => speak({ text: "Jenna bites it " })}>
            {" "}
            Jenna bites it{" "}
          </span>
          <p> Jenna bites it</p>
          <span onClick={() => speak({ text: "She likes them " })}>
            {" "}
            She likes them{" "}
          </span>
          <p> She likes them</p>
          <span onClick={() => speak({ text: "Paul watches you" })}>
            {" "}
            Paul watches you{" "}
          </span>
          <p> Paul watches you</p>
          <span onClick={() => speak({ text: "ben loves us" })}>
            {" "}
            ben loves us
          </span>
          <p> ben loves us</p>
        </div>
        <p>
          As their name implies, these pronouns are the “ object ” of the
          sentence, that is, they tell us who the verb indicates refers to. We
          ALWAYS place these pronouns after the verb. Here we have an example to
          understand perfectly:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Sarah loves you" })}>
            {" "}
            Sarah loves you
          </span>
          <p> Sarah loves you</p>
        </div>
        <p>
          So, the object pronoun tells us who what the subject does refers to,
          which in this case, is who what Sarah does refers to.
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
        <p>Here are some more examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " Why don't you join us ?" })}>
            Why don't you join us ?
          </span>
          <p> Why don't you join us ? </p>
          <span
            onClick={() => speak({ text: " Make her a member of the club" })}
          >
            Make her a member of the club
          </span>
          <p> Make her a member of the club </p>
          <span onClick={() => speak({ text: " Let me call him now" })}>
            Let me call him now
          </span>
          <p>Let me call him now </p>
          <span onClick={() => speak({ text: " We need to face them today" })}>
            We need to face them today
          </span>
          <p> We need to face them today </p>
          <span
            onClick={() =>
              speak({ text: "We don't need to see him every day " })
            }
          >
            We don't need to see him every day
          </span>
          <p> We don't need to see him every day</p>
          <span
            onClick={() => speak({ text: "I'll take you home in the summer " })}
          >
            I'll take you home in the summer
          </span>
          <p> I'll take you home in the summer</p>
          <span
            onClick={() =>
              speak({ text: "She loves to give you money in the spring " })
            }
          >
            She loves to give you money in the spring
          </span>
          <p> She loves to give you money in the spring </p>
          <span
            onClick={() => speak({ text: " He sings you a song in the fall" })}
          >
            He sings you a song in the fall
          </span>
          <p> He sings you a song in the fall </p>
          <span onClick={() => speak({ text: "She hugs us in the winter " })}>
            She hugs us in the winter
          </span>
          <p> She hugs us in the winter</p>
        </div>
        <p>
          As we realized, we put the translation of the object pronouns in
          parentheses. The reason for this is that we almost never translate
          object pronouns into Spanish, because their use is implicit in the
          sentence.
        </p>
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
          As we already know, in a sentence the subject, the verb and the object
          usually go together. Let's look at some examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " Karen kicked her" })}>
            Karen kicked her
          </span>
          <p> Karen kicked her</p>
          <span onClick={() => speak({ text: "Sarah plays soccer " })}>
            Sarah plays soccer
          </span>
          <p> Sarah plays soccer</p>
          <span onClick={() => speak({ text: " Do you speak French?" })}>
            Do you speak French?
          </span>
          <p> you speak French?</p>
        </div>
        <p>
          If the sentence indicates a place (house, park, school, etc.), this
          place goes after the verb . Let's look at these examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Sarah goes home " })}>
            Sarah goes home
          </span>
          <p>Sarah goes home </p>
          <span onClick={() => speak({ text: " They walk to work" })}>
            They walk to work
          </span>
          <p>They walk to work </p>
          <span
            onClick={() => speak({ text: "Famous people live in the city " })}
          >
            Famous people live in the city
          </span>
          <p>Famous people live in the city </p>
        </div>
        <p>
          If the prayer takes time (on Monday, 7 am, in the morning, etc.), the
          time comes after the place . Let's look at these examples.
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " I fly to Paris on Friday" })}>
            I fly to Paris on Friday
          </span>
          <p>I fly to Paris on Friday </p>
          <span
            onClick={() => speak({ text: " Come to my house at 9 o'clock" })}
          >
            Come to my house at 9 o'clock
          </span>
          <p>Come to my house at 9 o'clock</p>
          <span
            onClick={() =>
              speak({ text: "You need to go to work   every morning " })
            }
          >
            You need to go to work every morning
          </span>
          <p>You need to go to work every morning </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
          <span onClick={() => speak({ text: " " })}></span>
          <p> </p>
        </div>
        <p>
          Also, it is possible to put the time at the beginning of the sentence.
          Let's look at these examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: " On Friday , I fly to Paris" })}>
            On Friday , I fly to Paris
          </span>
          <p> On Friday , I fly to Paris</p>
          <span
            onClick={() =>
              speak({ text: " Every morning , you need to go to work" })
            }
          >
            Every morning , you need to go to work
          </span>
          <p> Every morning , you need to go to work</p>
        </div>
      </div>
    </div>
  );
};
