import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will have fun learning to use nouns and articles.
        </p>
        <p>
          A <span onClick={() => speak({ text: "noun" })}>noun</span> noun is a
          "noun".
        </p>
        <p>A noun is anything, animal, idea, place or person. For example:</p>
        <b>"Ball" is a noun because it is a thing.</b>
        <br />
        <b>"Cat" is a noun because it is an animal.</b>
        <br />
        <b>"Australia" is a noun because it is a place.</b>
        <br />
        <b>"Man" is a noun because it is a person.</b>
        <br />
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <b>Singular:</b>
            <p>Ball</p>
            <p>Cat</p>
            <p>Dog</p>
            <p>Window</p>
          </div>
          <div className="col-md-3 greybox">
            <b>Plural:</b>
            <p>Balls</p>
            <p>Cats</p>
            <p>Dogs</p>
            <p>Windows</p>
          </div>
        </div>
        <p>
          In English it is exactly the same, but in some cases slightly
          different rules apply that we will see next.
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
          Most regular verbs are converted to the past simple by adding the
          letters “ ed ” at the end. However, there are a few slight exceptions
          to this rule:
        </p>
        <b>
          When the regular verb ends with the letter "e", we simply add the
          letter "d" to the end to convert it to the simple past and the past
          participle. Some examples are the verbs{" "}
          <span onClick={() => speak({ text: "liv e – liv ed" })}>
            liv e – liv ed
          </span>{" "}
          (alive - lived) and{" "}
          <span onClick={() => speak({ text: "sav e – sav ed" })}>
            sav e – sav ed
          </span>{" "}
          (except - saved).
        </b>
        <br />
        <b>
          If the regular verb ends with a consonant + the letter “y”, we must
          omit the letter “y”, and add the letters “ied” at the end to convert
          it to the simple past and past participle. Some examples are the verbs
          stu dy – stud ied (study - studied) and{" "}
          <span onClick={() => speak({ text: "mar ry – marr ied" })}>
            mar ry – marr ied
          </span>{" "}
          (case - married).
        </b>
        <br />
        <b>
          If the regular verb ends with a vowel + a consonant, we must repeat
          the consonant and then add the letters “ed” at the end to convert it
          to the simple past and past participle. Some examples are the verbs st
          op – <span onClick={() => speak({ text: "stop ped" })}>stop ped</span>{" "}
          (I stop - I stopped) and trav el –{" "}
          <span onClick={() => speak({ text: "travel led" })}>travel led</span>{" "}
          (I travel - I traveled).
        </b>
        <br />
        <p>
          Although all regular verbs end with the letters “ ed ”, their
          pronunciation is different according to the letters they end with;
          Let's look at these examples:
        </p>
        <b>
          If regular verbs end with the letters “k, p, s, sh, ch” when they are
          in the present tense, the “-ed” ending of each verb when converted to
          the past tense is pronounced as “t”. Let's see some examples (press
          each verb that ends with “ed” to hear its pronunciation).
        </b>
        <br />
        <div className="greybox " style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Cook – Cooked" })}>
            Cook – Cooked{" "}
            <p> (the final “ed” is pronounced as if it were “t”)</p>
          </span>
          <p>I cook – I cooked / Cooked</p>
          <span onClick={() => speak({ text: "Stop – Stoppedd" })}>
            Stop – Stopped{" "}
            <p> (the final “ed” is pronounced as if it were “t”)</p>
          </span>
          <p>Stopped – Stopped / Stopped</p>
          <span onClick={() => speak({ text: "Toss – Tossed" })}>
            Toss – Tossed
            <p> (the final “ed” is pronounced like a “t”))</p>
          </span>
          <p>Launched – Launched / Launched</p>
          <span onClick={() => speak({ text: "Crush – Crushed" })}>
            Crush – Crushed
            <p> (the final “ed” is pronounced as if it were “t”)</p>
          </span>
          <p>I crush – I crushed / Crushed</p>

          <span onClick={() => speak({ text: "Touch – Touched" })}>
            Touch – Touched
            <p> (the final “ed” is pronounced as if it were “t”)</p>
          </span>
          <p>I touched – I touched / Touched</p>
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
        <div className="greybox" style={{ marginLeft: "30%" }}>
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
            is that we use{" "}
            <span onClick={() => speak({ text: "like this" })}>like this</span>{" "}
            when we talk about something that is close to us, and we use{" "}
            <span onClick={() => speak({ text: "like that" })}>like that</span>{" "}
            when we talk about something that is far away)
          </p>
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
          Irregular verbs do not end with the letters “ ed ” when we use them in
          the past simple or past participle. The ending of these verbs does not
          follow a specific rule, although there are several similar ones; for
          this reason, it is best to memorize them. Here are some examples of
          irregular verbs: :
        </p>
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
          Auxiliary verbs are used together with other verbs to help them
          slightly change the meaning of what they want to express.
        </p>

        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Be" })}>Be</span>
          <br />
          <span onClick={() => speak({ text: "Do" })}>Do</span>
          <br />
          <span onClick={() => speak({ text: "have" })}>Have</span>
        </div>
        <p>Let's look at the following examples:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I Dance in the classroom" })}>
            I dance in the classroom
          </span>
          <br />
          <h1>I dance in the classroom</h1>
          <span onClick={() => speak({ text: "you Dance in the garden" })}>
            you dance in the garden
          </span>
          <br />
          <h1>you dance in the garden</h1>
          <span onClick={() => speak({ text: "He Dance in the kitchen" })}>
            He dances in the kitchen
          </span>
          <br />
          <h1>He dances in the kitchen</h1>
          <span
            onClick={() => speak({ text: "She Dances in the living room" })}
          >
            She dances in the living room
          </span>
          <br />
          <h1>She dances in the living room</h1>
          <span onClick={() => speak({ text: "It Dances in the bachyard" })}>
            It dances in the backyard
          </span>
          <br />
          <h1>It dances in the backyard</h1>
          <span onClick={() => speak({ text: "we Dance in the Street" })}>
            We dance in the street
          </span>
          <br />
          <h1>We dance in the street</h1>
          <span onClick={() => speak({ text: "you Dance in the dining room" })}>
            You dance in the dining room
          </span>
          <br />
          <h1>You dance in the dining room</h1>
          <span onClick={() => speak({ text: "They Dance in the bedroom" })}>
            They dance in the Bedroom
          </span>
          <br />
          <h1>They dance in the dining bedroom</h1>
        </div>
        <p>
          To reiterate, we use auxiliary verbs with other verbs in order to
          slightly modify the meaning of a sentence. In theory, we can use
          auxiliary verbs alone (not together with other verbs), but if we did
          this, they would no longer be auxiliary verbs, but ordinary verbs.
        </p>
        <p>
          An ordinary verb is the main verb of a sentence. For example, in the
          sentence{" "}
          <span onClick={() => speak({ text: "I bake a cake" })}>
            I bake a cake
          </span>{" "}
          , the ordinary verb is bake .
        </p>
        <p>
          Let's see some examples of auxiliary verbs being used also as ordinary
          verbs:
        </p>
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
        <p>
          We use modal verbs to talk about some ability, possibility,
          suggestion, obligation or permission. The most common modal verbs are
          the following:
        </p>
        <br />
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Dog " })}>Dog </span>
          <p>
            {" "}
            I can (we use{" "}
            <span onClick={() => speak({ text: "can" })}>can</span> to talk
            about some ability, possibility or permission)
          </p>{" "}
          <span onClick={() => speak({ text: "could " })}>could </span>
          <br />
          <p>
            Pude ( could is the past tense of can and we use it to talk about
            some ability, permission or possibility in the past)
          </p>
          <span onClick={() => speak({ text: "be able to" })}>be able to</span>
          <br />
          <p>I am capable of (we use be able to to talk about some ability)</p>
          <span onClick={() => speak({ text: "would" })}>would</span>
          <br />
          <p>
            “ -ría ” (we use would to talk about some condition. Usually, we can
            put would before a verb. For example, if we add would to the verb
            call , we would have would call . Consequently, when we add would to
            a verb, this verb is translated into Spanish with the ending “ ría
            ”)
          </p>
          <span onClick={() => speak({ text: "should" })}>should</span>
          <br />
          <p>Should (we use should to make a suggestion)</p>
          <span onClick={() => speak({ text: "Ought to" })}>Ought to</span>
          <br />
          <p>
            Should (we use ought to exactly the same as should , to make some
            suggestion)
          </p>
          <span onClick={() => speak({ text: "Must" })}>Must</span>
          <br />
          <p>
            I must (we use must to talk about an obligation or to make a
            recommendation)
          </p>
          <span onClick={() => speak({ text: "Have to" })}>Have to</span>
          <br />
          <p>
            I have to (we use have to to talk about an obligation or need to do
            or have something)
          </p>
          <span onClick={() => speak({ text: "may" })}>may</span>
          <br />
          <p>
            I can / could (we use may to talk about some possibility or to ask
            for permission)
          </p>
          <span onClick={() => speak({ text: "mighty" })}>mighty</span>
          <br />
          <p>
            Could (we use might to talk about some possibility or to imagine
            something that is not real)
          </p>
          <span onClick={() => speak({ text: "Will" })}>Will</span>
          <br />
          <p>
            It does not have a literal translation into Spanish (we use will to
            talk about the future. We usually put will before a verb to convert
            it to the future. For example, if we add will to the verb sing
            (canto) , we would have will sing (canataré)
          </p>
        </div>
      </div>
    </div>
  );
};

export const Page8 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          Generally, a modal verb is followed by an infinitive verb without to .
          Here are some examples of modal verbs in action, to give us an idea of
          ​​how to use them:
        </p>
        <br />
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I can play soccer " })}>
            I can play soccer{" "}
          </span>
          <p>I can play soccer</p>{" "}
          <span
            onClick={() =>
              speak({ text: "When I was young, I could eat 2 entire pizzas" })
            }
          >
            When I was young, I could eat 2 entire pizzas
          </span>
          <br />
          <p>When I was young, I could eat 2 entire pizzas</p>
          <span onClick={() => speak({ text: "I would love to go with you" })}>
            I would love to go with you
          </span>
          <br />
          <p>I would love to go with you)</p>
          <span
            onClick={() =>
              speak({ text: "I 'm able to play guitar with my feet" })
            }
          >
            I 'm able to play guitar with my feet
          </span>
          <br />
          <p>I 'm able to play guitar with my feet</p>
          <span onClick={() => speak({ text: "You should be nice to her" })}>
            You should be nice to her
          </span>
          <br />
          <p>You should be nice to her </p>
          <span onClick={() => speak({ text: "You ought to be nice to her" })}>
            You ought to be nice to her
          </span>
          <br />
          <p>You ought to be nice to her</p>
          <span onClick={() => speak({ text: "You must go to class" })}>
            You must go to class
          </span>
          <br />
          <p>You must go to class</p>
          <span onClick={() => speak({ text: "You have to go to class" })}>
            You have to go to class
          </span>
          <br />
          <p>You have to go to class</p>
          <span onClick={() => speak({ text: "I may go to England" })}>
            I may go to England
          </span>
          <br />
          <p>I may go to England</p>
          <span onClick={() => speak({ text: "I might go to Italy" })}>
            I might go to Italy
          </span>
          <br />
          <p>I might go to Italy</p>
          <span onClick={() => speak({ text: "I will go next week" })}>
            WilI will go next weekl
          </span>
          <br />
          <p>I will go next week</p>
        </div>
        <p>
          We should not worry if we do not understand 100% how to use these
          modal verbs, because we will be reviewing and reinforcing them in
          detail in later lessons.
        </p>
      </div>
    </div>
  );
};
