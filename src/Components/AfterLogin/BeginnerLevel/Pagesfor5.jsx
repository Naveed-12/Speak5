import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson, we'll take a deeper look at sentence structure,
          focusing more on verbs.
        </p>
        <p>
          As we saw in Lesson 1, the most basic structure of a sentence is as
          follows:
        </p>
        <div className=" greybox" style={{ marginLeft: "30%" }}>
          <b>
            Subject + verb + complement (the complement is the extra information
            that we want to add)
          </b>
        </div>
        <p>
          The subject can be any person, personal pronoun, or thing (noun) to
          which the sentence refers. For example, in the sentence{" "}
          <span onClick={() => speak({ text: "they say things" })}>
            {" "}
            they say things{" "}
          </span>
          , the personal pronoun{" "}
          <span onClick={() => speak({ text: "they" })}> they </span>is the
          subject.
        </p>
        <p>
          The verb is the action that the subject performs. For example, in the
          sentence{" "}
          <span onClick={() => speak({ text: "they say things" })}>
            {" "}
            they say things{" "}
          </span>{" "}
          , the verb is the word{" "}
          <span onClick={() => speak({ text: "say" })}>say</span> because this
          is the action performed by the subject.
        </p>
        <p>
          The complement is any additional information that the sentence
          carries. For example, in the sentence{" "}
          <span onClick={() => speak({ text: "they say things" })}>
            {" "}
            they say things{" "}
          </span>{" "}
          , the complement is the word{" "}
          <span onClick={() => speak({ text: "things" })}>things</span> ,
          because it is additional information to the action performed by the
          subject (they say).
        </p>
        <p>
          As in all languages, verbs are a vital part of a sentence, since they
          indicate the action that the subject (the person) performs.
        </p>
        <p>
          In English, verbs are not conjugated like in Spanish, and for this
          reason they do not have many forms. For example, if we wanted to
          conjugate the verb "patear" in the present simple in Spanish, we would
          do it in the following way:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <b>i kick</b>
          <br />
          <b>he kicks</b>
          <br />
          <b>she kicks</b>
          <br />
          <b>it kicks</b>
          <br />
          <b>we kick</b>
          <br />
          <b>you kick</b>
          <br />
          <b>they kick</b>
          <br />
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
          However, it is easier to conjugate verbs in English; the same verb
          "patear" ( to kick ) would be used the same with almost all people:
        </p>
        <div className=" greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "i kick" })}>i kick </span>
          <p>i kick</p>
          <span onClick={() => speak({ text: "you kick" })}>you kick</span>
          <p>you kick</p>
          <span onClick={() => speak({ text: "I kick" })}>I kicks</span>
          <p>he kicks</p>
          <span onClick={() => speak({ text: "she kicks" })}>she kicks</span>
          <p>she kicks</p>
          <span onClick={() => speak({ text: "it Kicks" })}>It kicks </span>
          <p>It kicks </p>
          <span onClick={() => speak({ text: "we kicks" })}>we kick</span>
          <p>we kick</p>
          <span onClick={() => speak({ text: "you kicks" })}>you kick</span>
          <p>you kick</p>
          <span onClick={() => speak({ text: "they kick" })}>they kick</span>
          <p>they kick</p>
        </div>
        <p>
          As we already know, the verb{" "}
          <span onClick={() => speak({ text: "to kick" })}>to kick</span>{" "}
          changes only when we use it with the pronouns{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            {" "}
            he , she , it{" "}
          </span>
          , since in these cases, we must add the letter “ <b> s </b>” to the
          end of this verb. If we do not remember this rule well, we should
          review <b> lesson 2</b> .
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
          As in any language, verbs in English have 3 main tenses. These times
          are:
        </p>
        <div className=" greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Simple Present" })}>
            Simple Present{" "}
          </span>
          <p>Simple Present</p>
          <span onClick={() => speak({ text: "Simple Past" })}>
            Simple Past
          </span>
          <p>Simple Past</p>
          <span onClick={() => speak({ text: "I kick" })}>I kicks</span>
          <p>he kicks</p>
          <span onClick={() => speak({ text: "past participle" })}>
            past participle
          </span>
          <p>past participle</p>
        </div>
        <p>
          We use verbs in the present simple when we want to talk about things
          in the present. Let's take as an example the verb{" "}
          <span onClick={() => speak({ text: "to kick" })}>to kick</span> in the
          present simple. We already know how to conjugate it: .
        </p>
        <div className=" greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "i kick" })}>i kick </span>
          <p>i kick</p>
          <span onClick={() => speak({ text: "you kick" })}>you kick</span>
          <p>you kick</p>
          <span onClick={() => speak({ text: "I kick" })}>I kicks</span>
          <p>he kicks</p>
          <span onClick={() => speak({ text: "she kicks" })}>she kicks</span>
          <p>she kicks</p>
          <span onClick={() => speak({ text: "it Kicks" })}>It kicks </span>
          <p>It kicks </p>
          <span onClick={() => speak({ text: "we kicks" })}>we kick</span>
          <p>we kick</p>
          <span onClick={() => speak({ text: "you kicks" })}>you kick</span>
          <p>you kick</p>
          <span onClick={() => speak({ text: "they kick" })}>they kick</span>
          <p>they kick</p>
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
          We use verbs in the past simple to talk about past things. The past
          simple of the verb to kick is kicked . Let's see how we would
          conjugate this verb with all the personal pronouns:
        </p>
        <div className=" greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "i kicked" })}>I kicked </span>
          <p>i kicked</p>
          <span onClick={() => speak({ text: "you kicked" })}>you kicked</span>
          <p>you kicked</p>
          <span onClick={() => speak({ text: "I kicked" })}>I kicked</span>
          <p>he kicked</p>
          <span onClick={() => speak({ text: "she kicked" })}>she kicked</span>
          <p>she kicked</p>
          <span onClick={() => speak({ text: "it Kicked" })}>It kicked </span>
          <p>It kicked </p>
          <span onClick={() => speak({ text: "we kicked" })}>we kicked</span>
          <p>we kicked</p>
          <span onClick={() => speak({ text: "you kicked" })}>you kicked</span>
          <p>you kicked</p>
          <span onClick={() => speak({ text: "they kicked" })}>
            they kicked
          </span>
          <p>they kicked</p>
        </div>

        <p>
          As we have already seen, the verb in the present simple is conjugated
          in the same way with almost all persons, except with the pronouns{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            {" "}
            he , she , it{" "}
          </span>
          ; when the present simple verb is conjugated with the pronouns{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            {" "}
            he , she , it{" "}
          </span>{" "}
          â€‹â€‹â€‹â€‹â€‹, we usually have to add an “ s ” at the end (see
          lesson 2 ). .
        </p>
        <p>
          However, we conjugate the verb exactly the same with all persons when
          we use it in the simple past, even with{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            {" "}
            he , she , it{" "}
          </span>{" "}
          â€‹â€‹â€‹â€‹â€‹.
        </p>
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
          We use the past participle to talk about past and recent things. When
          a verb is in the past participle, usually the ending of that verb in
          Spanish is translated as “ -ado, -ido , -to, -so, -cho ”. For example,
          the past participle of the verb to{" "}
          <span onClick={() => speak({ true: "kick" })}>kick</span> is{" "}
          <span onClick={() => speak({ true: "kicked" })}>kicked</span> ; As we
          can see, the ending of the verb “kicked” is “ -ado ” . Let's look at
          some examples:
        </p>
        <div className=" greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "i was kicked" })}>
            I was kicked{" "}
          </span>
          <p>i was kicked</p>
          <span onClick={() => speak({ text: "you was kicked" })}>
            you was kicked
          </span>
          <p>you was kicked</p>
          <span onClick={() => speak({ text: "I was kicked" })}>
            I was kicked
          </span>
          <p>he was kicked</p>
          <span onClick={() => speak({ text: "she was kicked" })}>
            she was kicked
          </span>
          <p>she was kicked</p>
        </div>

        <p>
          Summing up, here we have the verb{" "}
          <span onClick={() => speak({ text: "to kick " })}>to kick </span> in
          its three forms:
        </p>
        <div className="row">
          <div className="col-md-2 greybox mx-auto">
            <p>Simple Present:</p>
            <span onClick={() => speak({ text: "kick " })}>Kick</span>
            <p>kick</p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <p>Simple Past:</p>
            <span onClick={() => speak({ text: "kicked " })}>Kicked</span>
            <p>kicked</p>
          </div>

          <div className="col-md-2 greybox mx-auto">
            <p>Past participle:</p>
            <span onClick={() => speak({ text: "kicked " })}>Kicked</span>
            <p>kicked</p>
          </div>
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
        <p>Again, here are the above verbs in their three forms:</p>
        <div className="row">
          <div className="col-md-2 greybox mx-auto">
            <p>Simple Present:</p>
            <span onClick={() => speak({ text: "play " })}>Play</span>
            <p>play</p>
            <span onClick={() => speak({ text: "dancing " })}>dancing</span>
            <p>dancing</p>

            <span onClick={() => speak({ text: "print " })}>print</span>
            <p>I print</p>

            <span onClick={() => speak({ text: "See" })}>See</span>
            <p>I see</p>

            <span onClick={() => speak({ text: "Do" })}>Do</span>
            <p>Do</p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <p>Simple Past:</p>
            <span onClick={() => speak({ text: "played " })}>Played</span>
            <p>played</p>
            <span onClick={() => speak({ text: "danced " })}>danced</span>
            <p>danced</p>

            <span onClick={() => speak({ text: "printed " })}>printed</span>
            <p>I printed</p>

            <span onClick={() => speak({ text: "Saw" })}>Saw</span>
            <p>I saw</p>

            <span onClick={() => speak({ text: "Did" })}>Did</span>
            <p>Did</p>
          </div>

          <div className="col-md-2 greybox mx-auto">
            <p>Past participle:</p>
            <span onClick={() => speak({ text: "played " })}>Played</span>
            <p>played</p>
            <span onClick={() => speak({ text: "danced " })}>danced</span>
            <p>danced</p>

            <span onClick={() => speak({ text: "printed " })}>printed</span>
            <p>I printed</p>

            <span onClick={() => speak({ text: "seen" })}>Seen</span>
            <p>Viewed</p>

            <span onClick={() => speak({ text: "Donate" })}>Donate</span>
            <p>Done</p>
          </div>
        </div>
        <p>
          In the next lesson, we will continue to learn more peculiarities about
          these and other verbs.
        </p>
        <p>
          As an additional fact, we will learn to use a couple of very useful
          phrases in English:
        </p>
        <div className="greybox" style={{marginLeft:"30%"}}>
          <span onClick={() => speak({ text: "what it takes " })}>
            what it takes{" "}
          </span>
          <p>What is needed / what is needed</p>
          <span onClick={() => speak({ text: "thats simple" })}>
            thats simple
          </span>
          <p>
            It's that simple (although{" "}
            <span onClick={() => speak({ text: "that" })}>that</span> that
            usually means "that / that", in this type of sentences it means
            "like this".)
          </p>
          <span onClick={() => speak({ text: "like that" })}>like that</span>
          <p>A) Yes</p>
          <span onClick={() => speak({ text: "like this" })}>like this</span>
          <p>
            Thus (the only difference between the phrases{" "}
            <span onClick={() => speak({ text: "like this" })}>like this</span>{" "}
            and{" "}
            <span onClick={() => speak({ text: "like that" })}>like that</span>{" "}
            is that we use <span onClick={()=>speak({text:"like this"})}>like this</span> when we talk about something that is close
            to us, and we use <span onClick={()=>speak({text:"like that"})}>like that</span> when we talk about something that is far
            away)
          </p>
        </div>
      </div>
    </div>
  );
};
