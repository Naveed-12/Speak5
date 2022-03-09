import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>The structure of the present continuous is as follows:</p>

        <div className="greybox" style={{ marginLeft: "30%" }}>
          <b>
            Subject + <span onClick={() => speak({ text: "am" })}>am</span>/
            <span onClick={() => speak({ text: "are" })}>are</span>/
            <span onClick={() => speak({ text: "is" })}>is</span>+ verb in
            gerund
          </b>
        </div>
        <p>
          English verbs that end with the letters “ ing ” are called gerunds; In
          Spanish, the gerund refers to verbs that end in “ -ando , -endo ” ,
          such as “running endo , ri endo , playing and sleeping ”. Let's look
          at these examples:
        </p>
        <div className="row">
          <div className="col-md-3 greybox mx-auto">
            <p>No shrinkage:</p>
            <span onClick={() => speak({ text: "I am walking" })}>
              I am walking
            </span>
            <p>I am walking</p>
            <span onClick={() => speak({ text: "you are playing" })}>
              you are playing
            </span>
            <p>you are playing</p>
            <span onClick={() => speak({ text: "She is writing" })}>
              She is writing
            </span>
            <p>She is writing</p>
            <span onClick={() => speak({ text: "He is sleeping" })}>
              He is sleeping
            </span>
            <p>He is sleeping</p>
            <span onClick={() => speak({ text: "It is eating" })}>
              It is eating
            </span>
            <p>It is eating</p>
            <span onClick={() => speak({ text: "They are cooking" })}>
              They are cooking
            </span>
            <p>They are cooking</p>
            <span onClick={() => speak({ text: "We are snoring" })}>
              We are snoring
            </span>
            <p>We are snoring</p>
          </div>
          <div className="col-md-3 greybox mx-auto">
            <span onClick={() => speak({ text: "I 'm walking" })}>
              I 'm walking
            </span>
            <p>I 'm walking</p>
            <span onClick={() => speak({ text: "You 're playing" })}>
              You 're playing
            </span>
            <p>You 're playing</p>
            <span onClick={() => speak({ text: "She 's writing" })}>
              She 's writing
            </span>
            <p>She 's writing</p>
            <span onClick={() => speak({ text: "He 's sleeping" })}>
              He 's sleeping
            </span>
            <p>He 's sleeping</p>
            <span onClick={() => speak({ text: "It 's eating" })}>
              It 's eating
            </span>
            <p>It 's eating</p>
            <span onClick={() => speak({ text: "They 're cooking" })}>
              They 're cooking
            </span>
            <p>They 're cooking</p>
            <span onClick={() => speak({ text: "We 're snoring" })}>
              We 're snoring
            </span>
            <p>We 're snoring</p>
          </div>
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
          We use the present continuous when we talk about things that are
          happening at the moment we say it, or close to that moment; we want to
          express that we have started something and we have not finished it.
          Here are some examples:
        </p>

        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "I'm playing football" })}>
            I'm playing football
          </span>
          <p>I'm playing football</p>
          <span onClick={() => speak({ text: "He's watching TV" })}>
            He's watching TV
          </span>
          <p>He is watching TV</p>
          <span onClick={() => speak({ text: "She's combing her hair" })}>
            She's combing her hair
          </span>
          <p>She is combing her hair</p>
          <span onClick={() => speak({ text: "We're cooking supper" })}>
            We're cooking supper
          </span>
          <p>We are cooking supper</p>
          <span onClick={() => speak({ text: "They're smoking cigars" })}>
            They're smoking cigars
          </span>
          <p>They are smoking cigars</p>
          <span onClick={() => speak({ text: "We're eating vegetables" })}>
            We're eating vegetables
          </span>
          <p>We are eating vegetables</p>
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
        <p>Here are some more examples with the present continuous:</p>

        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "My mind is shrinking now" })}>
            My mind is shrinking now
          </span>
          <p>My mind is shrinking now</p>
          <span onClick={() => speak({ text: "I'm trying this new model" })}>
            I'm trying this new model
          </span>
          <p>I'm trying this new model</p>
          <span
            onClick={() => speak({ text: "You're emerging as a new artist" })}
          >
            You're emerging as a new artist
          </span>
          <p>You're emerging as a new artist</p>
          <span onClick={() => speak({ text: "I'm drawing dots" })}>
            I'm drawing dots
          </span>
          <p>I'm drawing dots</p>
          <span onClick={() => speak({ text: "We're eating wheat" })}>
            We're eating wheat
          </span>
          <p>We're eating wheat</p>
          <span onClick={() => speak({ text: "They're fighting fiercely" })}>
            They're fighting fiercely
          </span>
          <p>They're fighting fiercely</p>

          <span
            onClick={() => speak({ text: "She's envisioning a better future" })}
          >
            She's envisioning a better future
          </span>
          <p>She's envisioning a better future</p>
          <span
            onClick={() => speak({ text: "He's kissing his rational wife" })}
          >
            He's kissing his rational wife
          </span>
          <p>He's kissing his rational wife</p>
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
          Also, we use the present continuous when we talk about temporary
          situations (it does not matter if what we say is happening at that
          very moment or not). Let's look at these examples: :
        </p>

        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span
            onClick={() =>
              speak({ text: "I'm living with my parents until December" })
            }
          >
            I'm living with my parents until December
          </span>
          <p> I'm living with my parents until December</p>
          <span onClick={() => speak({ text: "She 's working hard today" })}>
            She 's working hard today
          </span>
          <p> She 's working hard today</p>
          <span
            onClick={() =>
              speak({ text: "My sister is working in Paris this year" })
            }
          >
            My sister is working in Paris this year
          </span>
          <p> My sister is working in Paris this year</p>
          <span
            onClick={() =>
              speak({
                text: "I'm reading a new book this week: English Grammar for Dummies",
              })
            }
          >
            I'm reading a new book this week: English Grammar for Dummies
          </span>
          <p> I'm reading a new book this week: English Grammar for Dummies</p>
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
  