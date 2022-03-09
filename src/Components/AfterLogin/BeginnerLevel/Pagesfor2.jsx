import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";

export const Page1 = () => {
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <div className="container kk">
        <p>
          In this lesson, we will learn to use the present simple in negatives
          and questions.
        </p>
        <p>
          In order to convert a present simple sentence to a negation or a
          question, we must use the auxiliary verb{" "}
          <span onClick={() => speak({ text: "do" })}>do</span>.
        </p>
        <p>
          An auxiliary verb is used together with other verbs to slightly change
          the meaning of the sentence (see <b> Lesson 9</b> to learn more about
          auxiliary verbs).
        </p>
        <p>
          We generally use the auxiliary verb{" "}
          <span onClick={() => speak({ text: "do" })}> do</span> for two things:
        </p>
        <b>To ask questions</b>
        <b>to make negative sentences</b>
        <p>Here are some examples:</p>
        <div className=" greybox" style={{ marginLeft: "30%" }}>
          <span onClick={() => speak({ text: "Do You know my friend?" })}>
            Do you know my friend?
          </span>
          <h1>Do you know my friend?</h1>
          <span onClick={() => speak({ text: "I don't Know your friend" })}>
            I don't know your friend
          </span>
          <h1>I don't know your friend</h1>
        </div>
        <p>
          Now, we will learn the rules to be able to make negations and
          questions with the auxiliary verb do .
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
          As we could see in the previous examples, to ask questions in the
          present simple, we only have to add the auxiliary verb{" "}
          <span onClick={() => speak({ text: "do" })}>do</span> before the
          subject, at the beginning of the sentence. The auxiliary verb{" "}
          <span onClick={() => speak({ text: "do" })}>do</span> has no English
          translation when used to ask questions, rather,{" "}
          <span onClick={() => speak({ text: "do" })}>do</span> simply becomes
          an "auxiliary" to turn the sentence into a question.
        </p>
        <p>Here are some examples:</p>
        <div className="row">
          <div className="col-md-4 greybox">
            <p>Affirmation:</p>
            <span onClick={() => speak({ text: "They drink soda" })}>
              They drink soda
            </span>
            <h1>They drink soda</h1>
            <span onClick={() => speak({ text: "I plan to play" })}>
              I plan to play
            </span>
            <h1>I plan to play</h1>
            <span onClick={() => speak({ text: "You cut wood" })}>
              You cut wood
            </span>
            <h1>You cut wood</h1>
            <span onClick={() => speak({ text: "We go to the local college" })}>
              We go to the local college
            </span>
            <h1>We go to the local college</h1>
            <span onClick={() => speak({ text: "You reach your goals" })}>
              You reach your goals
            </span>
            <h1>You reach your goals</h1>
            <span onClick={() => speak({ text: "They Kill Bugs" })}>
              They kill bugs
            </span>
            <h1>They kill bugs</h1>
            <span onClick={() => speak({ text: "You Light cigarettes" })}>
              You light cigarettes
            </span>
            <h1>You light cigarettes</h1>
            <span onClick={() => speak({ text: "You rate the services" })}>
              You rate the service
            </span>
            <h1>You rate the service</h1>
            <span onClick={() => speak({ text: "You Follow the leader" })}>
              You follow the leader
            </span>
            <h1>You follow the leader</h1>
            <span onClick={() => speak({ text: "You pass the test" })}>
              You pass the test
            </span>
            <h1>You pass the test</h1>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 greybox">
            <p>Ask:</p>
            <span onClick={() => speak({ text: "do they grink soda?" })}>
              Do they drink soda?
            </span>
            <h1>Do they drink soda?</h1>
            <span onClick={() => speak({ text: "do i plan to play ?" })}>
              Do I plan to play?
            </span>
            <h1>Do I plan to play?</h1>
            <span onClick={() => speak({ text: "do you cut wood?" })}>
              Do you cut wood?
            </span>
            <h1>Dp you cut wood?</h1>
            <span
              onClick={() => speak({ text: "do we go to the local college" })}
            >
              Do we go to the local college?
            </span>
            <h1>Do we go to the local college?</h1>
            <span onClick={() => speak({ text: "do you reach your goals?" })}>
              Do you reach your goals?
            </span>
            <h1>Do you reach your goals?</h1>
            <span onClick={() => speak({ text: "do they kill bugs?" })}>
              Do they kill bugs?
            </span>
            <h1>Do they kill bugs?</h1>
            <span onClick={() => speak({ text: "do you light cigarettes?" })}>
              Do you light cigarettes?
            </span>
            <h1>Do you light cigarettes?</h1>
            <span onClick={() => speak({ text: "do you rate the services?" })}>
              Do you rate the service?
            </span>
            <h1>Do you rate the service?</h1>
            <span onClick={() => speak({ text: "do you follow the leader?" })}>
              Do you follow the leader?
            </span>
            <h1>Do you follow the leader?</h1>
            <span onClick={() => speak({ text: "do you pass the test?" })}>
              Do you pass the test?
            </span>
            <h1>Do you pass the test?</h1>
          </div>
        </div>
        <p>
          To ask questions with the third person singular ({" "}
          <span onClick={() => speak({ text: "he she it" })}>
            he , she , it
          </span>{" "}
          ), we must use the auxiliary verb{" "}
          <span onClick={() => speak({ text: "does" })}> does</span> .
        </p>
        <p>
          <span onClick={() => speak({ text: "does" })}> Does</span> is a
          variation of <span onClick={() => speak({ text: "do" })}> do</span> ,
          and we can use it to ask questions in the third person singular, but
          it is still the auxiliary verb{" "}
          <span onClick={() => speak({ text: "do" })}> do</span> , and is used
          in exactly the same way.
        </p>
        <p>
          When we use <span onClick={() => speak({ text: "does" })}> does</span>{" "}
          , the verb of the sentence no longer has an <b> “ s ”</b> at the end.
          Let's look at these examples:
        </p>
        <div className="row">
          <div className="col-md-4 greybox">
            <p>Affirmation:</p>
            <span onClick={() => speak({ text: "she plays the bass" })}>
              She plays the bass
            </span>
            <h1>She plays the bass</h1>
            <span onClick={() => speak({ text: "He breaks the law" })}>
              He breaks the law
            </span>
            <h1>He breaks the law</h1>
            <span onClick={() => speak({ text: "It smells food" })}>
              It smells food
            </span>
            <h1>It smells food</h1>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 greybox">
            <p>Ask:</p>
            <span onClick={() => speak({ text: "does she play the bass?" })}>
              Does she play the bass?
            </span>
            <h1>Does she play the bass?</h1>
            <span onClick={() => speak({ text: "does he break the law?" })}>
              Does he break the law?
            </span>
            <h1>Does he break the law?</h1>
            <span onClick={() => speak({ text: "does it smell food?" })}>
              Does it smell food?
            </span>
            <h1>Does it smell food?</h1>
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
          To convert an affirmative sentence to a negative in the present
          simple, we just need to add the word{" "}
          <span onClick={() => speak({ text: "do not" })}>do not</span> (or its
          contraction{" "}
          <span onClick={() => speak({ text: "do'nt" })}> don't</span>) before
          the verb. In this sense,{" "}
          <span onClick={() => speak({ text: "do not" })}> do not </span> ({" "}
          <span> don't </span> ) means <b> “ no ”.</b> Let's look at the
          following example:
        </p>
        <p>Here are some examples:</p>
        <div className="row">
          <div className="col-md-2 greybox">
            <p>Affirmation:</p>
            <span onClick={() => speak({ text: "You pass the test" })}>
              You pass the Test
            </span>
            <h1>you Pass the test</h1>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 greybox ">
            <p>Denial 1:</p>
            <span onClick={() => speak({ text: "You do not pass the test" })}>
              You do not pass the test
            </span>
            <h1>You don't pass the test</h1>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 greybox">
            <p>Denial 2:</p>
            <span onClick={() => speak({ text: "you don't pass the test" })}>
              You don't pass the test
            </span>
            <h1>You don't pass the test</h1>
          </div>
        </div>
        <p>
          When we make use of contractions, we usually omit or stop using one or
          several letters of a word, and join it to another by means of an
          apostrophe ( ´ ). In this case,{" "}
          <span onClick={() => speak({ text: "don't" })}> don't </span>is a
          contraction of{" "}
          <span onClick={() => speak({ text: "do not" })}> do not</span>
          because we put the words{" "}
          <span onClick={() => speak({ text: "do" })}> do </span> and{" "}
          <span onClick={() => speak({ text: "not" })}> not </span> together , we omit the letter “o” from the word{" "}
          <span onClick={() => speak({ text: "not" })}> not </span> , and we replace it with an apostrophe ({" "}
          <span onClick={() => speak({ text: "don't" })}> don't </span> ).
        </p>
        <p>Let's look at these examples:</p>
        <div className="row">
          <div className="col-md-4 greybox">
            <p>No shrinkages:</p>
            <span  onClick={() => speak({ text: "They don't" })}>They don't play soccer</span>
            <h1>They don't play soccer</h1>
            <span onClick={() => speak({ text: "They don't" })}>They do not go to class</span>
            <h1>They don't go to class</h1>
            <span onClick={() => speak({ text: "we do not contol the market" })}>We do not control the market</span>
            <h1>We do not control the market</h1>
            <span onClick={() => speak({ text: "They do not" })}>They do not raise money</span>
            <h1>They do not raise money</h1>
            <span onClick={() => speak({ text: "They do not" })}>They do not love the environment</span>
            <h1>They do not love the environment</h1>
            <span onClick={() => speak({ text: "They do not" })}>They do not sell drugs</span>
            <h1>They do not sell drugs</h1>
            <span onClick={() => speak({ text: "we do not" })}>We do not require time</span>
            <h1>We do not require time</h1>
            <span onClick={() => speak({ text: "we do not" })}>We do not report the news</span>
            <h1>We do not report the news</h1>
            <span onClick={() => speak({ text: "I don't" })}>I don't show the house</span>
            <h1>I don't show the house</h1>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 greybox">
            <p>With Contraction:</p>
            <span onClick={() => speak({ text: "They don't" })}>They don't play soccer</span>
            <h1>They don't play soccer</h1>
            <span onClick={() => speak({ text: "They don't" })}>They don't go to class</span>
            <h1>They don't go to class</h1>
            <span onClick={() => speak({ text: "We don't" })}>We don't control the market</span>
            <h1>We don't control the market</h1>
            <span onClick={() => speak({ text: "They don't" })}>They don't raise money</span>
            <h1>They don't raise money</h1>
            <span onClick={() => speak({ text: "They don't" })}>They don't love the environment</span>
            <h1>They don't love the environment</h1>
            <span onClick={() => speak({ text: "They don't" })}>They don't sell drugs</span>
            <h1>They don't sell drugs</h1>
            <span onClick={() => speak({ text: "We don't" })}>We don't require time</span>
            <h1>We don't require time</h1>
            <span onClick={() => speak({ text: "We don't" })}>We don't report the news</span>
            <h1>We don't report the news</h1>
            <span onClick={() => speak({ text: "I don't" })}>I don't show the house</span>
            <h1>I don't show the house</h1>
          </div>
        </div>
        <p>
          It is important that we know that contractions are generally used in
          informal language (spoken or written) such as in everyday
          conversations, novels and TV series.
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
          Similarly, when the subject of the sentence is the third person
          singular (<span onClick={() => speak({ text: "he she it" })}> he , she , it</span> ), we use{" "}
          <span onClick={() => speak({ text: "does + not" })}> does + not </span>to make negations, or we can use its
          contraction: <span onClick={() => speak({ text: "doesn't" })}> doesn't</span> . When we use does not or doesn't ,
          the verb of the sentence no longer has an <b> “ s ”</b> at the end.
        </p>
        <p>Let's look at these examples:</p>
        <div className="row">
          <div className="col-md-4 greybox">
            <p>No shrinkage:</p>
            <span>He does not lend money</span>
            <h1>He doesn't lend money</h1>
            <span>She does not paint houses</span>
            <h1>She doesn't paint houses</h1>
            <span>It does not bite people</span>
            <h1>that doesn't bite people</h1>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 greybox ">
            <p>With contraction:</p>
            <span>He doesn't lend money</span>
            <h1>He doesn't lend money</h1>
            <span>She doesn't paint houses</span>
            <h1>She doesn't paint houses</h1>
            <span>It doesn't bite people</span>
            <h1>It doesn't bite people</h1>
          </div>
        </div>
        <p>
          It is very important that we remember this: when we use{" "}
          <span> does</span> / <span> does not </span>/ <span> doesn't</span> ,
          the main verb of the sentence no longer ends with <b> “ s ”</b>. We
          know that we have already mentioned this rule a few times, but it is
          important that we repeat it because many people get confused. So let's
          explain this again: usually, when the subject of a sentence is the
          third person singular ( <span> he , she , it</span> ), the verb that
          follows it must end with “ s ”. However, when we use{" "}
          <span> does</span> / <span> does not </span>/ <span> doesn't</span>
          with the third person singular, the verb no longer has to end with
          <b> “yes ”.</b>
        </p>
        <p>Let's look at these examples:</p>
        <div className="row">
          <div className="col-md-2 greybox">
            <p>Affirmation:</p>
            <span>She speaks English</span>
            <h1>She speaks English</h1>
            <span>He plays basketball</span>
            <h1>_</h1>
            <h1>_</h1>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 greybox">
            <p>Ask:</p>
            <span>Does she speak english?</span>
            <h1>She speaks English?</h1>
            <span>Does he play basketball?</span>
            <h1>Does he play basketball?</h1>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 greybox">
            <p>Denial:</p>
            <span>No, she doesn't speak English</span>
            <h1>No, she doesn't speak English</h1>
            <span>No, he doesn't play basketball</span>
            <h1>No, he doesn't play basketball .</h1>
          </div>
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
          In English, when we are asked a question, we might answer with a
          simple “yes” or “no”.
        </p>
        <p>For example:</p>
        <div className=" greybox" style={{ marginLeft: "30%" }}>
          <span>Do you like Pizza? Yes</span>
          <h1>Do you like Pizza? Yes</h1>
          <span>Do you like Pizza? No</span>
          <h1>Do you like Pizza? No</h1>
        </div>

        <p>
          However, answering with a simple “ <span> yes </span> or{" "}
          <span> no </span> ” is too informal and not very usual.
          <b>
            {" "}
            Usually, in English, when we answer a question, we use{" "}
            <span> do</span> ,<span> don't</span> ,<span> does</span> or{" "}
            <span> doesn't </span> , to avoid repeating the whole sentence in
            the answer.
          </b>
        </p>
        <p>
          The structure of a polite response with <span> do</span> ,
          <span> don't</span> ,<span> does</span> or <span> doesn't </span> is
          as follows:{" "}
        </p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <b>
            <span>Yes</span>+ Subject +<span>Do</span>/ <span>does</span>
          </b>{" "}
          <br />
          <b>
            <span>Yes</span>+ Subject +<span>Do</span>/ <span>does</span>
          </b>
        </div>
        <p>Here are some examples to make this very clear:</p>
        <div className="greybox" style={{ marginLeft: "30%" }}>
          <span>Do You Like Pizza? - No , I Don't</span>
          <h1>Do You Like Pizza? - No , I Do not like it</h1>
        </div>
        <p>
          In the example above, we are asked <span> do you like pizza?</span>{" "}
          (do you like pizza?); We can answer this question as follows:{" "}
          <span> no, I don't like pizza </span>.
        </p>
        <p>
          However, to avoid repeating the entire sentence “{" "}
          <span> no, I don't like pizza </span>”, we simply say{" "}
          <span> no, I don't</span> . As we can see, when we translate{" "}
          <span> do </span>/ <span> do not</span> / <span> don't</span> /{" "}
          <span> does </span> / <span> does not </span>/ <span> doesn't</span>{" "}
          into Spanish in short answers, they are translated as if they were the
          verb of the question. For this reason, if we ask “ do you want water?
          (do you want water?), and we answer <span> yes, I do </span>
          (yes, I do) so
          <span> do </span>is translated into Spanish as if it were the verb of
          the question: <span> want</span> (I want). Let's remember that{" "}
          <span> do </span>/ <span> do not</span> / <span> don't</span> /{" "}
          <span> does </span> / <span> does not </span>/ <span> doesn't</span>{" "}
          are translated into Spanish in this way only when we use them in short
          answers
        </p>
        <p>
          If they ask us <span> does she like movies?</span> (does she like
          movies?), we can answer yes, she likes movies (yes, she does like
          movies) or we can answer in a shorter way: yes, she does (yes, she
          does like them ) .
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
        <p>Here we have many examples to be able to understand clearly:</p>
        <div className=" greybox2">
          <span>Do you like music? - No, I don´t</span>
          <p>Do you like music? - No, I do not like it</p>
          <span>Do you like ice cream? - Yes, I do</span>
          <p>Do you like ice cream? - Yes, I do like it</p>
          <span>Does he like books? - No, I don´t</span>
          <p>Does he like books? - No, I dosen't like them</p>
          <span>Does she travel a lot? - Yes, she does</span>
          <p>She travels a lot? - Yes, she does travel / Yes, she does</p>
          <span>Do we like TV shows? - Yes, we do</span>
          <p>Do we like TV shows? - Yes, we do like them</p>
          <span>Do you play sports? - No, we don't</span>
          <p>Do you play sports? - No, we don't play</p>
          <span>Do they have a band? - Yes, they do.</span>
          <p>Do they have a band? - Yes, they do have</p>
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
          If we want to ask questions in the negative form in the present
          simple, we use the following structure.
        </p>
        <div className=" greybox2">
          <b>
            <span>Don't</span>/ <span>Dosen't </span> + Subject+ verb in
            infinitve without <span>to</span>+complement
          </b>
        </div>
        <p>Let's see some examples with their answers:</p>
      </div>
      <div className="greybox2">
        <span>Don't I talk much at school? - Yes, I do</span>
        <p>I don't talk much at school? - Yes, I do talk a lot</p>
        <span>Don't you see your heart? - No, I don't</span>
        <p>Can't you see your heart? - No, I don't see it</p>
        <span>Doesn't he experience insomnia? - Yes, he does</span>
        <p>Does he not experience insomnia? - Yes, he does experience</p>
        <span>Doesn't she decide to go? -No, she doesn't</span>
        <p>She doesn't decide to go? - No, she does not decide</p>
        <span>Doesn't it write novels? - No, it doesn't</span>
        <p>Doesn't that write novels? - No, that does not write</p>
        <span>Don't we eat a lot? - Yes, we do</span>
        <p>We don't eat much? - Yes, we do eat a lot.</p>
        <span>Don't they drink cola? - No, they don't</span>
        <p>They don't drink cola? - No, they don't drink</p>
        <span>Don't you eat three times per day? - Yes, I do</span>
        <p>Don't you eat three times a day? - Yes, I do eat</p>
        <span>Don't we have a concert tonight? - No, we don't</span>
        <p>We don't have a concert tonight? - No, we don't have</p>
        <span>Don't you play today? - Yes, I do</span>
        <p>You don't play today? – Yes, I do play </p>
        <span>Don't they go to the movies on Wednesday? - No, they don't</span>
        <p>They don't go to the movies on Wednesday? - No, they're not going</p>
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
          We can also ask questions in the present simple using{" "}
          <span> question words </span>. The most used interrogative words are
          the following:
        </p>
        <div className="greybox2">
          <span>quien </span>
          <p>Who (for people)</p>
          <span>que </span>
          <p>What or which (for things and people)</p>
          <span>which </span>
          <p>What or which (for things and people)</p>
          <span>where </span>
          <p>Where</p>
          <span>When</span>
          <p>When</p>
          <span>Why</span>
          <p>Why</p>
          <span>How</span>
          <p>how / how much</p>
        </div>
        <p>
          The simplest structure to ask questions with interrogative words and
          the present simple is the following:
        </p>
        <div className=" greybox2">
          <b>
            interrogative questions + <span>do</span>/ <span>does</span>/
            <span>don't</span>/<span>doesn't</span>+ subject + verb in
            infinitive without <span> to </span> + complement
          </b>
        </div>
        <p>Let's look at some examples:</p>
        <div className="greybox2">
          <span>Who don't you love? </span>
          <p>Who don't you love?</p>
          <span>What do you think about the weather? </span>
          <p>What do you think of the weather?</p>
          <span>which </span>
          <p>What or which (for things and people)</p>
          <span>Where does she think to go? </span>
          <p>Where does she plan to go?</p>
          <span>Why doesn't he work here?</span>
          <p>Why doesn't he work here?</p>
          <span>When do you leave?</span>
          <p>When are you leaving?</p>
          <span>How do you do that?</span>
          <p>How do you do that?</p>
        </div>
      </div>
    </div>
  );
};
