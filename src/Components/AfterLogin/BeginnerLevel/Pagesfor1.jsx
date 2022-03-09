import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  const Questions = [
    {
      Q: "I",
      Ans: "Me",
    },
    {
      Q: "You",
      Ans: "You You",
    },
    {
      Q: "I Have",
      Ans: "He",
    },
    {
      Q: "She",
      Ans: "Her",
    },
    {
      Q: "Item",
      Ans: "That / it (to refer to things, ideas, animals, etc.)",
    },
  ];
  const Questions2 = [
    {
      Q: "We",
      Ans: "we/us",
    },
    {
      Q: "You",
      Ans: "You guys",
    },
    {
      Q: "They",
      Ans: "They/Them",
    },
  ];
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson we will enter the world of personal pronouns and the
          present simple.
        </p>
        <p>
          We use personal pronouns to talk about people, animals and things.
        </p>
        <p>The personal pronouns are the following</p>
        <div className="row">
          <div className="col-md-5 greybox">
            <h1>Singular</h1>
            {Questions.map((quest) => (
              <div>
                <span onClick={() => speak({ text: quest.Q })}>{quest.Q}</span>
                <p>{quest.Ans}</p>
              </div>
            ))}
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5 greybox">
            <h1>Plural</h1>
            {Questions2.map((quest) => (
              <div>
                <span onClick={() => speak({ text: quest.Q })}>{quest.Q}</span>
                <p>{quest.Ans}</p>
              </div>
            ))}
          </div>
        </div>
        <p>
          Here we have the personal pronouns in table form to remember them more
          easily for 1st person , 2nd Person and 3rd Person:
        </p>
        <div className="row ">
          <div className="col-md-2 greybox mx-auto">
            <h1>Singular</h1>
            <span onClick={() => speak({ text: "I" })}>I</span>
            <br />
            <span onClick={() => speak({ text: "You" })}>You</span>
            <br />
            <span onClick={() => speak({ text: "He She It" })}>He/She/It</span>
            <br />
          </div>
          <div className="col-md-2 greybox mx-auto">
            <h1>Plural</h1>
            <span onClick={() => speak({ text: "We" })}>We</span>
            <br />
            <span onClick={() => speak({ text: "You" })}>You</span>
            <br />
            <span onClick={() => speak({ text: "They" })}>They</span>
            <br />
          </div>
        </div>
        <p>
          As we could see, the personal pronouns are classified as{" "}
          <b>1st person</b> ,<b>2nd person</b> and <b>3rd person</b> . For this
          reason, we will also refer to personal pronouns as "person" in this
          course.
        </p>
        <p>
          The first person always includes the one who is speaking ({" "}
          <span onClick={() => speak({ text: "I" })}>I</span> = yo,{" "}
          <span onClick={() => speak({ text: "We" })}>we</span> = we).{" "}
        </p>
        <p>
          {" "}
          The second person refers to whom we are addressing directly ({" "}
          <span onClick={() => speak({ text: "You" })}>you</span> = you / you /
          you).
        </p>
        <p>
          The third person refers to whom we are addressing indirectly ({" "}
          <span onClick={() => speak({ text: "we" })}>he</span> = him,{" "}
          <span onClick={() => speak({ text: "She" })}>she</span> = her,{" "}
          <span onClick={() => speak({ text: "It" })}>it</span> = that / it,
          <span onClick={() => speak({ text: "they" })}>they</span> = them /
          them).
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
          Next, we will learn more about personal pronouns, as well as how we
          should use them:
        </p>
        <p>
          The personal pronoun I means "I". We have to write the personal
          pronoun I â€‹â€‹with a capital letter at all times,â€‹â€‹â€‹â€‹â€‹ no
          matter where in the sentence we use it (at the beginning, in the
          middle , at the end, etc).
        </p>
        <p>
          The personal pronoun{" "}
          <span onClick={() => speak({ text: "you" })}>you</span> means "you /
          you / you".
        </p>
        <p>
          The personal pronoun{" "}
          <span onClick={() => speak({ text: "he" })}>he</span> means "he"; the
          personal pronoun <span>she</span> means "she".
        </p>
        <p>
          We can use the personal pronoun{" "}
          <span onClick={() => speak({ text: "it" })}>it</span> to refer to any
          object, animal, idea or thing (whatever is not human). Let's look at
          these two examples:
        </p>
        <b>
          Imagine for a second that we are talking about my cat, and we want to
          say that it is beautiful; then we would say:
        </b>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "My cat is Beautifull" })}>
            My cat is Beautifull
          </span>
          <br />
          <h1>My cat is Beautifull</h1>
        </div>
        <b>
          If we wanted to say the above sentence ({" "}
          <span onClick={() => speak({ text: "My Cat is beautifull" })}>
            {" "}
            my cat is beautiful
          </span>{" "}
          ) in a different way, we could use it and say:
        </b>
        <div className="greybox mx-auto">
          <span onClick={() => speak({ text: "It is beautifull" })}>
            It is Beautifull
          </span>
          <br />

          <h1>
            It/it is beautiful (it is important to remember that the words it/it
            refer to the cat in this sentence).
          </h1>
        </div>
        <p>
          Now, suppose we are talking about the sun, and we mean that it shines;
          then we would say:
        </p>
        <div className="greybox mx-auto">
          <span onClick={() => speak({ text: "The Sun Shine" })}>
            The Sun Shines
          </span>
          <br />
          <h1>The Sun Shines</h1>
        </div>
        <b>
          But if we wanted to say the previous sentence ({" "}
          <span onClick={() => speak({ text: "the Sun shines" })}>
            the sun shines
          </span>{" "}
          ) with it , then we would say:
        </b>
        <div className="greybox mx-auto">
          <span onClick={() => speak({ text: "It shines" })}>It shines</span>
          <br />
          <h1>
            It/it shines (it is important that we remember that the words it/it
            refer to the sun in this sentence).
          </h1>
        </div>
        <p>
          {" "}
          Finally, the personal pronoun{" "}
          <span onClick={() => speak({ text: "we" })}>we</span> means{" "}
          <b>" we "</b> , and the personal pronoun{" "}
          <span onClick={() => speak({ text: "they" })}>they</span> means{" "}
          <b>" them "</b> . These pronouns are "plural" because we use them to
          refer to two or more people.
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
          Now that we have mastered the personal pronouns, it is time for us to
          learn the present simple.
        </p>
        <p>
          We use the present simple to talk about things and people in general.
          Let's take a look at these examples:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I play soccor" })}>
            I play Soccor
          </span>
          <br />
          <h1>I play Soccer</h1>
          <span onClick={() => speak({ text: "They Say" })}>They Say </span>
          <br />
          <h1>I play Soccer</h1>
        </div>
        <p>
          As we can see, the structure of a sentence in the present simple is
          very simple:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <h2>
            Subject + verb + complement (extra information that we want to add)
          </h2>
        </div>
        <p>
          The <b>subject</b> can be any person, personal pronoun, or thing
          (noun) to which the sentence refers. For example, in the sentence{" "}
          <span onClick={() => speak({ text: "they say things" })}>
            they say things
          </span>{" "}
          , the personal pronoun they is the subject.
        </p>
        <p>
          The <b>verb</b> is the action that the subject performs. For example,
          in the sentence{" "}
          <span onClick={() => speak({ text: "they say things" })}>
            they say things
          </span>{" "}
          , the verb is the word{" "}
          <span onClick={() => speak({ text: "Say" })}> say</span> , because
          this is the action performed by the subject.
        </p>
        <p>
          The <b>complement</b> is any additional information that the sentence
          carries. For example, in the sentence{" "}
          <span onClick={() => speak({ text: "They say Things" })}>
            they say things
          </span>{" "}
          , the complement is the word{" "}
          <span onClick={() => speak({ text: "Things" })}>things</span> ,
          because it is additional information to the action performed by the
          subject (they say).
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
          Let us remember that the structure to use the present simple in its
          affirmative form is:
        </p>

        <div className="greybox" style={{ marginLeft: "30%" }}>
          <h2>Subject + verb + object</h2>
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
          As we could see in the previous sentences, the verb{" "}
          <span onClick={() => speak({ text: "Dance" })}>dance</span>
          (I dance) is written in the same way with all persons, except when we
          use it with the third person singular ({" "}
          <span onClick={() => speak({ text: "he she it" })}>
            {" "}
            he , she , it
          </span>{" "}
          ). We usually add an “ s ” to the end of the verb when we use it with
          the third person singular, and that's why we say dances instead of{" "}
          <span onClick={() => speak({ text: "Dance" })}>dance</span> when we
          use this verb with{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            {" "}
            he , she , it .
          </span>
        </p>
        <p>
          The <b>verb</b> is the action that the subject performs. For example,
          in the sentence{" "}
          <span onClick={() => speak({ text: "they Say things" })}>
            they say things
          </span>{" "}
          , the verb is the word{" "}
          <span onClick={() => speak({ text: "Say" })}> say</span> , because
          this is the action performed by the subject.
        </p>
        <p>
          For this reason, we can say that English is easier than Spanish,
          because in Spanish, we usually have to conjugate the verb differently
          each time we use it with a different personal pronoun. For example, in
          Spanish we would say <b>“yo bail o , tú bail as , él bail a ”,</b> but
          in English we would only say I dance , you dance , he{" "}
          <span onClick={() => speak({ text: "Dances the verb" })}>
            {" "}
            dances (the verb
          </span>
          only changes slightly, adding <b> “ s ”</b> at the end, when we use it
          with he , she , it â€‹â€‹â€‹â€‹â€‹â€‹).
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
          Here we have some examples to understand the previous concept very
          well:
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I sing" })}>I sing</span>
          <br />
          <h1>I sing</h1>
          <span onClick={() => speak({ text: "You sing" })}>you sing</span>
          <br />
          <h1>you sing</h1>
          <span onClick={() => speak({ text: "I have sings" })}>
            {" "}
            I have sings
          </span>
          <br />
          <h1> He sings</h1>
          <span onClick={() => speak({ text: "She Sings" })}>She Sings </span>
          <br />
          <h1>She Sings</h1>
          <span onClick={() => speak({ text: "It sings" })}>It Sings</span>
          <br />
          <h1>It/it Sings </h1>
          <span onClick={() => speak({ text: "We sings" })}>We sings</span>
          <br />
          <h1>we sing</h1>
          <span onClick={() => speak({ text: "You sings" })}>You sing</span>
          <br />
          <h1>You sing</h1>
          <span onClick={() => speak({ text: "They sing" })}>They sing</span>
          <br />
          <h1>They sing</h1>
        </div>
        <p>
          As we could see in the previous sentences, sing (canto) is written the
          same with all persons, except when we use it with the third person
          singular ({" "}
          <span onClick={() => speak({ text: "He she it" })}>
            he , she , it
          </span>{" "}
          ); we must add an <b> “ s ” to the end of</b>{" "}
          <span onClick={() => speak({ text: "sing" })}> sing</span>when we use
          it with{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            {" "}
            he , she , it .
          </span>
        </p>
      </div>
    </div>
  );
};

export const Page6 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>Now let's see examples with the verb smell :</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I smell" })}>I Smell</span>
          <br />
          <h1>I Smell</h1>
          <span onClick={() => speak({ text: "You smell" })}>you Smell</span>
          <br />
          <h1>you Smell</h1>
          <span onClick={() => speak({ text: "I have smell" })}>
            {" "}
            I have Smell
          </span>
          <br />
          <h1> He Smell</h1>
          <span onClick={() => speak({ text: "She smell" })}>She Smell </span>
          <br />
          <h1>She Smell</h1>
          <span onClick={() => speak({ text: "It smell" })}>It Smell</span>
          <br />
          <h1>It/it Smell </h1>
          <span onClick={() => speak({ text: "We smell" })}>We Smell</span>
          <br />
          <h1>we Smell</h1>
          <span onClick={() => speak({ text: "You Smell" })}>You Smell</span>
          <br />
          <h1>You Smell</h1>
          <span onClick={() => speak({ text: "They smell" })}>They Smell</span>
          <br />
          <h1>They Smell</h1>
        </div>
        <p>
          As we could see in the previous sentences, smell (canto) is written
          the same with all persons, except when we use it with the third person
          singular ({" "}
          <span onClick={() => speak({ text: "he she it" })}>
            he , she , it
          </span>{" "}
          ); we must add an <b> “ s ” to the end of</b>{" "}
          <span onClick={() => speak({ text: "Smell" })}> smell</span>when we
          use it with{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            {" "}
            he , she , it .
          </span>
        </p>
      </div>
    </div>
  );
};

export const Page7 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>Now let's see examples with the verb Play :</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I Play" })}>I Play</span>
          <br />
          <h1>I Play</h1>
          <span onClick={() => speak({ text: "You play" })}>you Play</span>
          <br />
          <h1>you Play</h1>
          <span onClick={() => speak({ text: "I have play" })}>
            {" "}
            I have Play
          </span>
          <br />
          <h1> He Play</h1>
          <span onClick={() => speak({ text: "She play" })}>She Play </span>
          <br />
          <h1>She Play</h1>
          <span onClick={() => speak({ text: "It play" })}>It Play</span>
          <br />
          <h1>It/it Play </h1>
          <span onClick={() => speak({ text: "We play" })}>We Play</span>
          <br />
          <h1>we Play</h1>
          <span onClick={() => speak({ text: "You Play" })}>You Play</span>
          <br />
          <h1>You Play</h1>
          <span onClick={() => speak({ text: "They play" })}>They Play</span>
          <br />
          <h1>They Play</h1>
        </div>
        <p>
          As we could see in the previous sentences, Play (canto) is written the
          same with all persons, except when we use it with the third person
          singular ({" "}
          <span onClick={() => speak({ text: "he she it" })}>
            he , she , it
          </span>{" "}
          ); we must add an <b> “ s ” to the end of</b>{" "}
          <span onClick={() => speak({ text: "play" })}> Play </span>when we use
          it with{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            {" "}
            he , she , it .
          </span>
        </p>
      </div>
    </div>
  );
};

export const Page8 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>Now let's see examples with the verb Eat :</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I eat" })}>I Eat</span>
          <br />
          <h1>I Eat</h1>
          <span onClick={() => speak({ text: "You eat" })}>you Eat</span>
          <br />
          <h1>you Eat</h1>
          <span onClick={() => speak({ text: "I have eat" })}> I have Eat</span>
          <br />
          <h1> He Eat</h1>
          <span onClick={() => speak({ text: "She Eat" })}>She Eat </span>
          <br />
          <h1>She Eat</h1>
          <span onClick={() => speak({ text: "It eat" })}>It Eat</span>
          <br />
          <h1>It/it Eat </h1>
          <span onClick={() => speak({ text: "We eat" })}>We Eat</span>
          <br />
          <h1>we Eat</h1>
          <span onClick={() => speak({ text: "You eat" })}>You Eat</span>
          <br />
          <h1>You Eat</h1>
          <span onClick={() => speak({ text: "They Eat" })}>They Eat</span>
          <br />
          <h1>They Eat</h1>
        </div>
        <p>
          As we could see in the previous sentences, Eat (canto) is written the
          same with all persons, except when we use it with the third person
          singular ({" "}
          <span onClick={() => speak({ text: "he she it" })}>
            he , she , it
          </span>{" "}
          ); we must add an <b> “ s ” to the end of</b>{" "}
          <span onClick={() => speak({ text: "Eat" })}> Eat </span>when we use
          it with{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            {" "}
            he , she , it .
          </span>
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
        <p>Now let's see examples with the verb Sleep :</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I sleep" })}>I Sleep</span>
          <br />
          <h1>I Sleep</h1>
          <span onClick={() => speak({ text: "You sleep" })}>you Sleep</span>
          <br />
          <h1>you Sleep</h1>
          <span onClick={() => speak({ text: "I have sleep" })}>
            {" "}
            I have Sleep
          </span>
          <br />
          <h1> He Sleep</h1>
          <span onClick={() => speak({ text: "She sleep" })}>She Sleep </span>
          <br />
          <h1>She Sleep</h1>
          <span onClick={() => speak({ text: "It sleep" })}>It Sleep</span>
          <br />
          <h1>It/it Sleep </h1>
          <span onClick={() => speak({ text: "We sleep" })}>We Sleep</span>
          <br />
          <h1>we Sleep</h1>
          <span onClick={() => speak({ text: "You sleep" })}>You Sleep</span>
          <br />
          <h1>You Sleep</h1>
          <span onClick={() => speak({ text: "They sleep" })}>They Sleep</span>
          <br />
          <h1>They Sleep</h1>
        </div>
        <p>
          As we could see in the previous sentences, Sleep (canto) is written
          the same with all persons, except when we use it with the third person
          singular ({" "}
          <span onClick={() => speak({ text: "He she it" })}>
            he , she , it
          </span>{" "}
          ); we must add an <b> “ s ” to the end of</b>{" "}
          <span onClick={() => speak({ text: "Sleep" })}> Sleep </span>when we
          use it with{" "}
          <span onClick={() => speak({ text: "he she it" })}>
            {" "}
            he , she , it .
          </span>
        </p>
      </div>
    </div>
  );
};

export const Page10 = () => {
  const { speak } = useSpeechSynthesis();

  return (
    <div>
      <div className="container kk">
        <p>
          Now let's see examples with the verb{" "}
          <span onClick={() => speak({ text: "Teach" })}>Teach</span> (I teach)
          and <span>do</span> (I do ):
        </p>
        <div className="row">
          <div className="col-md-4 greybox" style={{ marginLeft: "30%" }}>
            <span onClick={() => speak({ text: "I teach" })}>I Teach</span>
            <br />
            <h1>I Teach</h1>
            <span onClick={() => speak({ text: "You teach" })}>you Teach</span>
            <br />
            <h1>Do you Teach</h1>
            <span onClick={() => speak({ text: "We Teach" })}> He Teach</span>
            <br />
            <h1> He Teach</h1>
            <span onClick={() => speak({ text: "She teach" })}>She Teach </span>
            <br />
            <h1>She Teach</h1>
            <span onClick={() => speak({ text: "It teaches" })}>
              It Teaches
            </span>
            <br />
            <h1>that/it Teach </h1>
            <span onClick={() => speak({ text: "We teach" })}>We Teach</span>
            <br />
            <h1>we Teach</h1>

            <span onClick={() => speak({ text: "They teach" })}>
              They Teach
            </span>
            <br />
            <h1>They Teach</h1>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 greybox">
            <span onClick={() => speak({ text: "I Do" })}>I Do</span>
            <br />
            <h1>I Do</h1>
            <span onClick={() => speak({ text: "You do" })}>you Do</span>
            <br />
            <h1>you Do</h1>
            <span onClick={() => speak({ text: "I have do" })}> I have Do</span>
            <br />
            <h1> He Do</h1>
            <span onClick={() => speak({ text: "She do" })}>She Do </span>
            <br />
            <h1>She Do</h1>
            <span onClick={() => speak({ text: "It do" })}>It Do</span>
            <br />
            <h1>It/it Do </h1>
            <span onClick={() => speak({ text: "We do" })}>We Do</span>
            <br />
            <h1>we Do</h1>
            <span onClick={() => speak({ text: "You do" })}>You Do</span>
            <br />
            <h1>You Do</h1>
            <span onClick={() => speak({ text: "They do" })}>They Do</span>
            <br />
            <h1>They Dos</h1>
          </div>
          <p>
            As we can see, when we use{" "}
            <span onClick={() => speak({ text: "teach" })}> teach</span> and{" "}
            <span onClick={() => speak({ text: "do" })}> do</span> with the
            third person singular ({" "}
            <span onClick={() => speak({ text: "he she it" })}>
              {" "}
              he , she , it{" "}
            </span>
            ) we add the letters <b> “ es ”</b> at the end. The reason for this
            is that English verbs that end with the letters “
            <b> ch, sh, o, s, ss, x, z ”</b>, we must always add <b> “ es ”</b>{" "}
            to the end when we use them with the third person singular ({" "}
            <span onClick={() => speak({ text: "he she it" })}>
              {" "}
              he , she , it{" "}
            </span>
            ), and not just the letter <b> “ s ”</b> like most other verbs.
          </p>
        </div>
      </div>
    </div>
  );
};


export const Page11 = () => {
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

export const Page12 = () => {
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
