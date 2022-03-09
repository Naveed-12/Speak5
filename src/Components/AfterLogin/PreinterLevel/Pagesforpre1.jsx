import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          As we have already seen, the verb{" "}
          <span onClick={() => speak({ text: "to have" })}>to have</span> means
          "to have".
        </p>
        <p>
          Usually, we use the verb{" "}
          <span onClick={() => speak({ text: "to have" })}>to have</span> to
          talk about possessions, relationships and illnesses. Let's see how we
          use the verb{" "}
          <span onClick={() => speak({ text: "to have" })}>to have</span> with
          all the personal pronouns:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I have" })}>I have</span>
          <p> I have</p>
          <span onClick={() => speak({ text: "you have" })}>you have</span>
          <p> you have</p>
          <span onClick={() => speak({ text: "She has" })}>She has</span>
          <p>She has</p>
          <span onClick={() => speak({ text: "it has" })}>it has</span>
          <p> it has</p>
          <span onClick={() => speak({ text: "That has" })}>That has</span>
          <p>That has </p>
        </div>
        <p>
          As we can see,{" "}
          <span onClick={() => speak({ text: "Have" })}>Have</span> changes to
          <span onClick={() => speak({ text: "has" })}>has</span> when we use it
          with{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            He , She , it
          </span>{" "}
          .
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
          Let's see some examples of the verb{" "}
          <span onClick={() => speak({ text: "to have" })}>to have</span> in
          action:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I have a car" })}>
            I have a car
          </span>
          <p> I have a car</p>
          <span onClick={() => speak({ text: "you have a girlfriend" })}>
            you have a girlfrind
          </span>
          <p>Do you have a girlfriend</p>
          <span onClick={() => speak({ text: "I have to television" })}>
            I have to television
          </span>
          <p>he has a tv</p>
          <span onClick={() => speak({ text: "She has the flu" })}>
            She has the flu
          </span>
          <p>She has the flu</p>
          <span onClick={() => speak({ text: "we have wives" })}>
            we have wives
          </span>
          <p>we have wives</p>
        </div>
        <p>
          In British English, we can use{" "}
          <span onClick={() => speak({ text: " have" })}> have</span> /{" "}
          <span onClick={() => speak({ text: "has" })}>has</span>
          followed by the word{" "}
          <span onClick={() => speak({ text: "got" })}>got</span> , and it means
          exactly the same thing: I have . Here are some examples:
        </p>
        <div className="row">
          <div className="col-md-2 greybox mx-auto">
            <p>American English:</p>
            <span onClick={() => speak({ text: "I have" })}>I have</span>
            <p> I have</p>
            <span onClick={() => speak({ text: "you have " })}>you have</span>
            <p> you have </p>
            <span onClick={() => speak({ text: "He has" })}>He has</span>
            <p> He has</p>
            <span onClick={() => speak({ text: "She has" })}>she has</span>
            <p> she has</p>
            <span onClick={() => speak({ text: "they have" })}>they have</span>
            <p> they have</p>
            <span onClick={() => speak({ text: "you have" })}>you have</span>
            <p> you have</p>
            <span onClick={() => speak({ text: "we have" })}>we have</span>
            <p> we have</p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <p>British English:</p>
            <span onClick={() => speak({ text: "I have got" })}>
              I have got
            </span>
            <p> I have got</p>
            <span onClick={() => speak({ text: "you have got" })}>
              you have got
            </span>
            <p> you have got</p>
            <span onClick={() => speak({ text: "He has got" })}>
              He has got
            </span>
            <p> He has got</p>
            <span onClick={() => speak({ text: "She has got" })}>
              she has got
            </span>
            <p> she has got</p>
            <span onClick={() => speak({ text: "they have got" })}>
              they have got
            </span>
            <p> they have got</p>
            <span onClick={() => speak({ text: "you have got" })}>
              you have got
            </span>
            <p> you have got</p>
            <span onClick={() => speak({ text: "we have got" })}>
              we have got
            </span>
            <p> we have got</p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <p>British English with contraction:</p>
            <span onClick={() => speak({ text: " I 've got   " })}>
              I 've got
            </span>
            <p> I have got </p>
            <span onClick={() => speak({ text: "You 've got" })}>
              You 've got
            </span>
            <p> You have got</p>
            <span onClick={() => speak({ text: "He 's got" })}>He's got</span>
            <p>He got </p>
            <span onClick={() => speak({ text: "She 's got" })}>
              She 's got
            </span>
            <p> She has got</p>
            <span onClick={() => speak({ text: "We 've got" })}>
              We have got
            </span>
            <p> We 've got</p>
            <span onClick={() => speak({ text: "They 've got" })}>
              They have got
            </span>
            <p>They have got </p>
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
          The verb <span onClick={() => speak({ text: "got" })}>got</span> is
          the past tense of the verb{" "}
          <span onClick={() => speak({ text: "get" })}>get</span> . However,
          when used with have /{" "}
          <span onClick={() => speak({ text: "has" })}>has</span> ({" "}
          <span onClick={() => speak({ text: "have got" })}>have got</span> /{" "}
          <span onClick={() => speak({ text: "has got" })}>has got</span> ) its
          meaning remains in the present simple: <b> I have</b> . Now let's look at
          several examples:
        </p>
        <div className="row">
          <div className="col-md-2 greybox mx-auto">
            <p>American English:</p>
            <span onClick={() => speak({ text: "I have two sisters" })}>I have two sisters</span>
            <p> I have two sisters</p>
            <span onClick={() => speak({ text: "you have two sisters" })}>you have two sisters</span>
            <p> you have two sisters</p>
            <span onClick={() => speak({ text: "He has two sisters" })}>He has two sisters</span>
            <p> He has two sisters</p>
            <span onClick={() => speak({ text: "She has two sisters" })}>she has two sisters</span>
            <p> she has two sisters</p>
            <span onClick={() => speak({ text: "they have two sisters" })}>they have two sisters</span>
            <p> they have two sisters</p>
            <span onClick={() => speak({ text: "you have two sisters" })}>you have two sisters</span>
            <p> you have two sisters</p>
            <span onClick={() => speak({ text: "we have two sisters" })}>we have two sisters</span>
            <p> we have two sisters</p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <p>British English:</p>
            <span onClick={() => speak({ text: "I have got two sisters" })}>
              I have got two sisters
            </span>
            <p> I have got two sisters</p>
            <span onClick={() => speak({ text: "you have got two sisters" })}>
              you have got two sisters
            </span>
            <p> you have got</p>
            <span onClick={() => speak({ text: "He has got two sisters" })}>
              He has got two sisters
            </span>
            <p> He has got two sisters</p>
            <span onClick={() => speak({ text: "She has got two sisters" })}>
              she has got two sisters
            </span>
            <p> she has got two sisters</p>
            <span onClick={() => speak({ text: "they have got two sisters" })}>
              they have got two sisters
            </span>
            <p> they have got two sisters</p>
            <span onClick={() => speak({ text: "you have got two sisters" })}>
              you have got two sisters
            </span>
            <p> you have got</p>
            <span onClick={() => speak({ text: "we have got two sisters" })}>
              we have got two sisters
            </span>
            <p> we have got two sisters</p>
          </div>
          <div className="col-md-2 greybox mx-auto">
            <p>British English with contraction:</p>
            <span onClick={() => speak({ text: " I 've got  two sisters " })}>
              I 've got two sisters
            </span>
            <p> I have got two sisters</p>
            <span onClick={() => speak({ text: "You 've got two sisters" })}>
              You 've got two sisters
            </span>
            <p> You have got two sisters</p>
            <span onClick={() => speak({ text: "He 's got two sisters" })}>He's got two sisters</span>
            <p>He got two sisters</p>
            <span onClick={() => speak({ text: "She 's got two sisters" })}>
              She 's got two sisters
            </span>
            <p> She has got two sisters</p>
            <span onClick={() => speak({ text: "We 've got two sisters" })}>
              We have got two sisters
            </span>
            <p> We 've got two sisters</p>
            <span onClick={() => speak({ text: "They 've got two sisters" })}>
              They have got two sisters
            </span>
            <p>They have got two sisters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Page4 = () => {
    return (
      <div>
        <div className="container kk">
          <p>Let's see some examples of the verb to be in action:</p>
          <div className="row">
            <div className="col-md-4 greybox">
              <p>no shrinkage</p>
              <span>I am John Lennon </span>
              <p>I am John Lennon </p>
              <span>I 'm tired </span>
              <p>I am tired</p>
              <span>You are pretty </span>
              <p>You're pretty </p>
              <span>you are happy </span>
              <p>you are happy </p>
              <span>he is sweet </span>
              <p>he is sweet</p>
              <span>he is wrong </span>
              <p>he is wrong</p>
              <span>She is intelligent </span>
              <p>she's smart </p>
              <span>She is relaxed</span>
              <p>She is relaxed</p>
              <span>It 's lovely</span>
              <p>It/it is adorable</p>
              <span>it is calm</span>
              <p>It/it is calm</p>
              <span>They are funny </span>
              <p>They're funny</p>
              <span>They are bored</span>
              <p>They are bored</p>
              <span>We are thin</span>
              <p>We are skinny</p>
              <span>We are lonely</span>
              <p>We are alone</p>
            </div>
            <div className="col-md-4 greybox" style={{ marginLeft: "20%" }}>
              <p>With contraction:</p>
              <span>I am John Lennon </span>
              <p>I am John Lennon </p>
              <span>I 'm tired </span>
              <p>I am tired</p>
              <span>You are pretty </span>
              <p>You're pretty </p>
              <span>you are happy </span>
              <p>you are happy </p>
              <span>he is sweet </span>
              <p>he is sweet</p>
              <span>he is wrong </span>
              <p>he is wrong</p>
              <span>She is intelligent </span>
              <p>she's smart </p>
              <span>She is relaxed</span>
              <p>She is relaxed</p>
              <span>It 's lovely</span>
              <p>It/it is adorable</p>
              <span>it is calm</span>
              <p>It/it is calm</p>
              <span>They are funny </span>
              <p>They're funny</p>
              <span>They are bored</span>
              <p>They are bored</p>
              <span>We are thin</span>
              <p>We are skinny</p>
              <span>We are lonely</span>
              <p>We are alone</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export const Page5 = () => {
    return (
      <div>
        <div className="container kk">
          <p>
            As we have seen, <span> to be </span> is a very interesting verb,
            because it has different meanings and uses. In fact, on some
            occasions, the verb <span> to be </span> is translated as{" "}
            <b> " to have "</b>.
          </p>
          <p>
            And when is the verb <span> to be </span> translated as{" "}
            <b>" to have "?</b>
          </p>
          <p>
            The verb <span> to be </span> translates as <b> " to have "</b> when
            we talk about certain sensations or needs of the body, such as heat,
            cold or hunger.
          </p>
          <p>
            We know that many people would think that to say{" "}
            <b> " I have cold "</b> in English, we would say{" "}
            <section className="red">I have cold.</section> However, THIS IS
            WRONG.
          </p>
          <p>
            The correct way to say <b> " I have cold " </b>in English is{" "}
            <span> I'm cold</span> . To understand perfectly, let's see these
            examples:
          </p>
          <div className="row">
            <div className="col-md-4 greybox">
              <p>no shrinkage</p>
              <span>I 'm hungry </span>
              <p>I have hunger </p>
              <span>She is hungry </span>
              <p>She is hungry</p>
              <span>We are hungry </span>
              <p>We are hungry </p>
              <span>I am cold </span>
              <p> I'm cold </p>
              <span>he is cold </span>
              <p>he is cold </p>
              <span>They are cold </span>
              <p>They are cold </p>
              <span>I am hot </span>
              <p>I have heat</p>
              <span>he is hot</span>
              <p>he is hot</p>
              <span>They are hot</span>
              <p>They feel hot</p>
            </div>
            <div className="col-md-4 greybox" style={{ marginLeft: "20%" }}>
              <p>With contraction:</p>
              <span>I 'm hungry </span>
              <p>I have hunger </p>
              <span>She's hungry </span>
              <p>She is hungry</p>
              <span>We're hungry </span>
              <p>We are hungry </p>
              <span>I'm cold </span>
              <p> I'm cold </p>
              <span>he's cold </span>
              <p>he is cold </p>
              <span>They' a're cold </span>
              <p>They are cold </p>
              <span>I'm hot </span>
              <p>I have heat</p>
              <span>h's hot</span>
              <p>he is hot</p>
              <span>They're hot</span>
              <p>They feel hot</p>
            </div>
          </div>
          <p>
            As we could see, in English we must always put the subject or personal
            pronoun before the verb. For example, in Spanish, we can say the
            sentence <b> " I have cold " </b>; in this sentence, it is implied
            that the subject is “ I ”. For this reason, it is not necessary to say{" "}
            <b> “ I am cold ” </b>and it is enough to say <b> “ I am cold ”.</b>
          </p>
          <p>
            However,
            <b>
              {" "}
              IN ENGLISH WE MUST ALWAYS PUT A SUBJECT OR PERSONAL PRONOUN BEFORE
              THE VERB{" "}
            </b>
            ; For example, to say <b> " I have cold "</b> in English, we cannot
            say " <section className="red"> am cold </section> ": in this case, we
            must write the personal pronoun " I " and say "{" "}
            <span> I am cold </span> ". The same goes for all personal pronouns ({" "}
            <span> I , you , he , she </span> , etc).
          </p>
        </div>
      </div>
    );
  };
  
  export const Page6 = () => {
    return (
      <div>
        <div className="container kk">
          <p>
            When we have a personal pronoun in a sentence, we can translate it
            into Spanish, or we can also omit it (if it's obvious). Let's look at
            the following examples:
          </p>
          <div className="greybox2" style={{ marginLeft: "20%" }}>
            <span>I am John Lennon </span>
            <p>
              I'm John Lennon (we can omit translating the pronoun I (yo) into
              Spanish because it's so obvious who we're talking about)
            </p>
            <span>You are pretty</span>
            <p>
              You are beautiful (we can omit translating the pronoun you (tú) into
              Spanish because it is very obvious who we are talking about)
            </p>
            <span>he is sweet</span>
            <p>
              He is sweet (it is advisable to translate the pronoun he (he) into
              Spanish because it is not so obvious who we are talking about; if we
              said “he is sweet” we could be talking about “ he , she , or that ”,
              and for this reason, it is It is better that we translate the
              pronoun he (he) into Spanish. However, we can omit it when we
              already identify who we are talking about)
            </p>
            <span>She is intelligent</span>
            <p>
              She is intelligent (it is advisable to translate the pronoun she
              (her) into Spanish because it is not so obvious who we are talking
              about; if we said “she is intelligent” we could be talking about “
              he , she , or that ”, and for this reason, it is It is better that
              we translate the pronoun she into Spanish . However, we can omit it
              when we already identify who we are talking about).
            </p>
            <span>It 's lovely</span>
            <p>
              It's adorable (we can omit translating the pronoun it (eso/ello)
              into Spanish because although it's not so obvious who we're talking
              about, it stands for animals and things, and for this reason, it's
              better that we avoid translating it into Spanish.{" "}
            </p>
            <span>They are funny </span>
            <p>
              They are fun (it is advisable to translate the pronoun they into
              Spanish because it is not so obvious who we are talking about; if we
              said "they are fun" we could be talking about " you or them ", and
              for this reason, it is better that we translate into Spanish the
              pronoun they (they. However, we can omit it when we already identify
              who we are talking about)
            </p>
            <span>You are cynical</span>
            <p>
              You are cynical (it is advisable to translate the pronoun you
              (ustedes) into Spanish because it is not so obvious who we are
              talking about; if we said "they are cynical" we could be talking
              about " you or them ", and for this reason, it is better that we
              translate into Spanish the pronoun you (ustedes). However, we can
              omit it when we already identify who we are talking about)
            </p>
            <span>We are thin </span>
            <p>
              We are thin (we can omit translating the pronoun we (us) into
              Spanish because it is very obvious who we are talking about)
            </p>
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
          In this lesson we will see how to tell and ask the time correctly.
        </p>
        <p>If we want to ask “what time is it?” We can say it in two ways:</p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "What time is it?" })}>
            What time is it?
          </span>
          <p>What time is it?</p>
          <span onClick={() => speak({ text: "What's the time?" })}>
            What's the time?
          </span>
          <p>What is the time?</p>
        </div>
        <p>
          If we are observant, we can notice that in these questions the word
          <span onClick={() => speak({ text: "time" })}>time</span> means
          "hour". Generally, however, in English, the word “hora” is said to be{" "}
          <span onClick={() => speak({ text: "hour" })}>hour</span> .
        </p>
        <p>
          To answer these questions, we must always use the pronoun "{" "}
          <span onClick={() => speak({ text: "it" })}>it</span> +{" "}
          <span onClick={() => speak({ text: "is" })}>is</span> + the hour". The
          literal translation into Spanish of "{" "}
          <span onClick={() => speak({ text: "it" })}>it</span> +{" "}
          <span onClick={() => speak({ text: "is" })}>is</span> + the hour" is:
          "<b> they are the</b> ... ". Let's see these examples:
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span
            onClick={() =>
              speak({ text: "What time is it? - It is eight o'clock" })
            }
          >
            What time is it? - It is eight o'clock
          </span>
          <p>What time is it?</p>
          <span
            onClick={() =>
              speak({ text: "What's the time? - It is seven o'clock?" })
            }
          >
            What's the time? - It is seven o'clock
          </span>
          <p>What is the time? - It's seven o'clock</p>
        </div>
        <p>We can also use the contraction it's + the hour:</p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "It's eight o'clock" })}>
            It's eight o'clock
          </span>
          <p>It's eight o'clock</p>
          <span onClick={() => speak({ text: "It's seven o'clock?" })}>
            It's seven o'clock
          </span>
          <p>It's seven o'clock</p>
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
          When we want to express that some minutes have passed after a certain
          hour, we say the minutes that have elapsed +{" "}
          <span onClick={() => speak({ text: "past" })}>past</span> + the hour
          after which those minutes have elapsed.
        </p>
        <p>Let's look at these examples:</p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "It's twenty past five" })}>
            It's twenty past five
          </span>
          <p>It's twenty past five</p>
          <span onClick={() => speak({ text: "It's ten past three" })}>
            It's ten past three
          </span>
          <p>It's ten past three</p>
          <span onClick={() => speak({ text: "It's forty past eleven" })}>
            It's forty past eleven
          </span>
          <p>It's twenty to twelve</p>
        </div>
        <p>
          If we want to express that a certain hour is a few minutes away, we
          say the minutes until the hour that is about to start +{" "}
          <span onClick={() => speak({ text: "to" })}>to</span> + the hour that
          is about to start. Let's look at some examples:
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "It's ten to twelve" })}>
            It's ten to twelve
          </span>
          <p>It's ten to twelve</p>
          <span onClick={() => speak({ text: "It's thirteen  to eleven" })}>
            It's thirteen to eleven
          </span>
          <p>It's thirteen to eleven</p>
          <span onClick={() => speak({ text: "It's forty  to six" })}>
            It's forty to six
          </span>
          <p>It's forty to six</p>
        </div>
        <p>
          If we give the time after 12 noon, we say "the hour + PM "; PM stands
          for Post Meridiem , which translates to after noon . If we give the
          time from midnight to 11:59 in the morning, then we say "the hour + AM
          "; AM means Ante Meridiem whatever translates as before noon.
        </p>
      </div>
    </div>
  );
};

export const Page9 = () => {
  const { speak } = useSpeechSynthesis();

  return (
    <div>
      <div className="container kk">
        <p>
          Utilizamos <span onClick={() => speak({ text: "half" })}>half</span>{" "}
          para hablar de “media hora” y{" "}
          <span onClick={() => speak({ text: "quarter" })}>quarter</span> para
          hablar de “un cuarto de hora”. Veamos estos ejemplos:
        </p>
        <div className="col-md-3 greybox mx-auto">
          <span onClick={() => speak({ text: "It's quarter past two" })}>
            It's quarter past two
          </span>
          <p>It's a quarter past two</p>
          <span onClick={() => speak({ text: "It's half past two" })}>
            It's half past two
          </span>
          <p>It's half past two</p>
          <span onClick={() => speak({ text: "It's quarter to four" })}>
            It's quarter to four
          </span>
          <p>It's quarter to four</p>
          <span onClick={() => speak({ text: "It's half past four" })}>
            It's half past four
          </span>
          <p>It's half past four</p>
          <span onClick={() => speak({ text: "It's quarter to eight" })}>
            It's quarter to eight
          </span>
          <p>It's quarter to eight</p>
          <span onClick={() => speak({ text: "It's half past eight" })}>
            It's half past eight
          </span>
          <p>It's half past eight</p>
        </div>
      </div>
    </div>
  );
};

//            <span onClick={()=>speak({text:""})}>
//                      </span>
//                      <p> </p>
